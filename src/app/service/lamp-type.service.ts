import {Injectable} from '@angular/core';
import {BaseService} from './base.service';
import {HttpClient} from '@angular/common/http';
import {LampType} from '../model/lamp-type';

@Injectable({
  providedIn: 'root'
})
export class LampTypeService extends BaseService<LampType> {

  constructor(private http: HttpClient) {
    super("/lampTypes", http);
  }
}
