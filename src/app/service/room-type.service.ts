import {Injectable} from "@angular/core";
import {BaseService} from "./base.service";
import {HttpClient} from "@angular/common/http";
import {RoomType} from "../model/room-type";

@Injectable({
  providedIn: 'root',
})
export class RoomTypeService extends BaseService<RoomType> {

  constructor(private http: HttpClient) {
    super("/roomTypes", http);
  }
}

