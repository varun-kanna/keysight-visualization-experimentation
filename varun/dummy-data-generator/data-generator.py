import datetime
import random
import os
from dotenv import load_dotenv
from influxdb_client import InfluxDBClient, Point, WritePrecision
from influxdb_client.client.write_api import SYNCHRONOUS

# Load environment variables
load_dotenv()

# Get InfluxDB settings from environment variables
INFLUXDB_URL = os.getenv("INFLUXDB_URL", "http://localhost:8086")
INFLUXDB_TOKEN = os.getenv("INFLUXDB_TOKEN")
INFLUXDB_ORG = os.getenv("INFLUXDB_ORG")
INFLUXDB_BUCKET = os.getenv("INFLUXDB_BUCKET")


def validate_env_vars():
    """Validate that all required environment variables are set"""
    required_vars = ["INFLUXDB_TOKEN", "INFLUXDB_ORG", "INFLUXDB_BUCKET"]
    missing_vars = [var for var in required_vars if not os.getenv(var)]

    if missing_vars:
        raise EnvironmentError(
            f"Missing required environment variables: {', '.join(missing_vars)}\n"
            "Please check your .env file."
        )


def generate_dates(start_date, num_days):
    """Generate a list of dates starting from start_date"""
    return [start_date + datetime.timedelta(days=x) for x in range(num_days)]


def write_to_influxdb(data_points):
    """Write data points to InfluxDB"""
    client = InfluxDBClient(url=INFLUXDB_URL, token=INFLUXDB_TOKEN, org=INFLUXDB_ORG)

    write_api = client.write_api(write_options=SYNCHRONOUS)

    try:
        # Convert data points to InfluxDB Point format
        points = []
        for point in data_points:
            p = Point(point["measurement"])

            # Add tags
            for tag_key, tag_value in point["tags"].items():
                p = p.tag(tag_key, tag_value)

            # Add fields
            for field_key, field_value in point["fields"].items():
                p = p.field(field_key, field_value)

            # Add timestamp
            p = p.time(datetime.datetime.fromisoformat(point["time"]))
            points.append(p)

        # Write in batches of 1000 points
        batch_size = 1000
        for i in range(0, len(points), batch_size):
            batch = points[i : i + batch_size]
            write_api.write(bucket=INFLUXDB_BUCKET, org=INFLUXDB_ORG, record=batch)
            print(f"Wrote batch of {len(batch)} points")

        print(f"Successfully wrote {len(points)} points to InfluxDB")

    except Exception as e:
        print(f"Error writing to InfluxDB: {e}")
    finally:
        client.close()


def generate_timeseries_data(start_date, num_days=90):
    """Generate time series data points"""
    data = []
    dates = generate_dates(start_date, num_days)

    # Test Runs by Tester
    for tester in ["Tester 1", "Tester 2", "Tester 3", "Tester 4", "Tester 5"]:
        base_value = random.randint(15, 55)
        for date in dates:
            data.append(
                {
                    "measurement": "test_runs_by_tester",
                    "tags": {"tester": tester},
                    "time": date.isoformat(),
                    "fields": {"value": base_value + random.uniform(-5, 5)},
                }
            )

    # Station Status
    statuses = ["Online", "Offline", "Idle", "Error", "No Station"]
    for date in dates:
        total = 100
        for status in statuses:
            value = random.randint(10, 30)
            total -= value
            if status == statuses[-1]:
                value = max(total, 0)
            data.append(
                {
                    "measurement": "stations_by_status",
                    "tags": {"status": status},
                    "time": date.isoformat(),
                    "fields": {"value": value},
                }
            )

    # OEE Metrics
    metrics = ["Availability", "Quality", "Performance", "OEE"]
    for metric in metrics:
        base_value = random.randint(60, 90)
        for date in dates:
            data.append(
                {
                    "measurement": "oee_metrics",
                    "tags": {"metric": metric},
                    "time": date.isoformat(),
                    "fields": {
                        "value": min(100, max(0, base_value + random.uniform(-10, 10)))
                    },
                }
            )

    # Station Performance
    for station in ["Station 1", "Station 2", "Station 3", "Station 4"]:
        metrics = {
            "Available Time": random.randint(200, 400),
            "Planned Down Time": random.randint(500, 800),
            "Down Time": random.randint(40, 80),
            "Utilization Time": random.randint(180, 400),
        }

        for date in dates:
            for metric, base_value in metrics.items():
                data.append(
                    {
                        "measurement": "station_performance",
                        "tags": {"station": station, "metric": metric},
                        "time": date.isoformat(),
                        "fields": {"value": base_value + random.uniform(-20, 20)},
                    }
                )

    return data


def main():
    try:
        # First install required packages:
        # pip install influxdb-client python-dotenv

        # Validate environment variables before proceeding
        validate_env_vars()

        # Generate 90 days of data starting from today
        start_date = datetime.datetime.now().replace(
            hour=0, minute=0, second=0, microsecond=0
        )
        print("Generating time series data...")
        timeseries_data = generate_timeseries_data(start_date)

        print(f"Generated {len(timeseries_data)} data points")
        print("Writing to InfluxDB...")
        write_to_influxdb(timeseries_data)

    except EnvironmentError as e:
        print(f"Environment Error: {e}")
    except Exception as e:
        print(f"Error: {e}")


if __name__ == "__main__":
    main()
