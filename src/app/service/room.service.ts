import {Injectable} from "@angular/core";
import {BaseService} from "./base.service";
import {Room} from "../model/room";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root',
})
export class RoomService extends BaseService<Room> {

  constructor(private http: HttpClient) {
    super("/rooms", http);
  }
}
