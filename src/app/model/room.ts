import {RoomType} from "./room-type";
import {Record} from "./record";

export interface Room {
  id: number
  square: number
  number: string
  roomType: RoomType
  records: Record[]
}
