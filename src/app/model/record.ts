import {Room} from "./room";
import {Lamp} from "./lamp";

export interface Record {
  id: number
  countLamp: number
  countSocle: number
  year: number
  sum: number
  room: Room
  lamp: Lamp
  recordType: Record
}
