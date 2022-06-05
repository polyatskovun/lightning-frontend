import {RoomType} from "./room-type";
import {Record} from "./record";

export interface Room {
  id: number
  square: number
  number: string
  hoursOfUses: number
  roomType: RoomType
  records: Record[]
  yearCount: number
}
