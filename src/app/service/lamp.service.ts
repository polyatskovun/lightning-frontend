import {Injectable} from "@angular/core";
import {BaseService} from "./base.service";
import {HttpClient} from "@angular/common/http";
import {Lamp} from "../model/lamp";

@Injectable({
  providedIn: 'root',
})
export class LampService extends BaseService<Lamp> {

  constructor(private http: HttpClient) {
    super("/lamps", http);
  }
}

