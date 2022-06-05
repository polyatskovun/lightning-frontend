import {Injectable} from "@angular/core";
import {BaseService} from "./base.service";
import {HttpClient} from "@angular/common/http";
import {Socle} from "../model/socle";

@Injectable({
  providedIn: 'root',
})
export class SocleService extends BaseService<Socle> {

  constructor(private http: HttpClient) {
    super("/socles", http);
  }
}

