import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient, HttpParams, HttpResponse, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
_url = 'https://oibn5nbs43.execute-api.ap-south-1.amazonaws.com/dev/';
constructor(private http: HttpClient) { }

searchItem(value): Observable<any> {
  return this.http.get<any>(this._url + '?q=' + value);
}
}
