const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { InfluxDBClient } = require("@influxdata/influxdb3-client");
const path = require("path");
const dotenv = require("dotenv");

const app = express();

dotenv.config({ path: path.join(__dirname, ".env") });

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const token = process.env.INFLUXDB_TOKEN;
const client = new InfluxDBClient({
  host: "https://us-east-1-1.aws.cloud2.influxdata.com",
  token: token,
  database: "TimeSeriesDataVisualization",
});

app.get("/api/station-data", async (req, res) => {
  try {
    const query = `SELECT * FROM "station_performance" LIMIT 100`;

    const data = [];
    for await (const row of client.query(query)) {
      data.push(row);
    }

    res.json({ data });
  } catch (error) {
    console.error("InfluxDB Query Error:", error);
    res.status(500).json({ error: error.message });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
