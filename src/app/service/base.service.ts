import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Inject, Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root',
})
export class BaseService<T> {

  baseUrl = 'http://localhost:9100/api';

  constructor(@Inject(String) protected url: string,
              private httpClient: HttpClient) {
    this.baseUrl = this.baseUrl + url;
  }

  save(model: T): Observable<T> {
    return this.httpClient.post<T>(this.baseUrl, model);
  }

  findAll(): Observable<T[]> {
    return this.httpClient.get<T[]>(this.baseUrl);
  }

  findById(id: number): Observable<T> {
    return this.httpClient.get<T>(this.baseUrl + '/' + id);
  }

  deleteById(id: number): Observable<T> {
    return this.httpClient.delete<T>(this.baseUrl + '/' + id);
  }
}
