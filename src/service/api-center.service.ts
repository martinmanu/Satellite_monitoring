import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiCenterService {

  private httpOptions = {
    headers: new HttpHeaders({
      'x-rapidapi-host': 'everyearthquake.p.rapidapi.com',
      'x-rapidapi-key': '63a4b7cbf0msh16d57e13277f032p11e6e5jsnc43a0dee511e',
    }),
  };

  constructor(private http: HttpClient) {}

  public getRecentEarthQuakeData(): Observable<any> {
    return this.http.get<any>('https://everyearthquake.p.rapidapi.com/recentEarthquakes?interval=P1Y2M3W4DT1H2M3S&start=1&count=100&type=earthquake&latitude=33.962523&longitude=-118.3706975&radius=1000&units=miles&magnitude=3&intensity=1', this.httpOptions);
  }

  public getEveryEarthQuake(): Observable<any> {
    return this.http.get<any>('https://everyearthquake.p.rapidapi.com/earthquakes?start=1&count=100&type=earthquake&latitude=33.962523&longitude=-118.3706975&radius=10', this.httpOptions);
  }

  public getEarthQuakeDataByDate(): Observable<any> {
    return this.http.get<any>('https://everyearthquake.p.rapidapi.com/earthquakesByDate?startDate=2021-01-27&endDate=2022-01-27&start=1&count=100&type=earthquake&latitude=33.962523&longitude=-118.3706975&radius', this.httpOptions);
  }

  public getEarthquakeType(): Observable<any>{
    return this.http.get<any>('https://everyearthquake.p.rapidapi.com/types', this.httpOptions);
  }

  /* type all_hour  4.5_hour 2.5_hour 1.0_hour significant_hour */
  public getEarthquakePastHour(type:string): Observable<any>{
    return this.http.get<any>(`https://everyearthquake.p.rapidapi.com/${type}.json`, this.httpOptions);
  }


}
