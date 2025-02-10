// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class InfluxdbService {

//   constructor() { }
// }

import { Injectable } from '@angular/core';
import { InfluxDB, QueryApi } from '@influxdata/influxdb-client';

@Injectable({
  providedIn: 'root'
})
export class InfluxDBService {


      // DO NOT PUSH CODE
      // Has sensitive information


  private url = 'https://us-east-1-1.aws.cloud2.influxdata.com'; 
  private token = '51TNNnaIJ4aFZ30T5LTiLDWeW1K1qq5-mGZkgM9eeKCdgEtz82RppDHxQwGwFrTaXGbSpOiU3uHHYvRaLw2lSg==';  
  private org = 'CSSPP 2025';                  
  private bucket = 'TimeSeriesDataVisualization'; 
  private queryApi: QueryApi;

  constructor() {
    const client = new InfluxDB({ url: this.url, token: this.token });
    this.queryApi = client.getQueryApi(this.org);
  }

  async fetchData(fluxQuery: string): Promise<{ time: string; value: number }[]> {
    const data: { time: string; value: number }[] = [];

    return new Promise((resolve, reject) => {
      this.queryApi.queryRows(fluxQuery, {
        next(row, tableMeta) {
          const obj = tableMeta.toObject(row);
          // data.push({ time: obj._time, value: obj._value });
          data.push({ time: obj['_time'], value: obj['_value'] });

        },
        error(error) {
          console.error('Error fetching InfluxDB data:', error);
          reject(error);
        },
        complete() {
          resolve(data);
        }
      });
    });
  }
}
