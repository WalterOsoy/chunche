import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = 'http://localhost:8080/api/tutorials';

@Injectable({
  providedIn: 'root'
})
export class ScoreService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get(baseUrl);
  }

  update(name: string, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${name}`, data);
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }
}
