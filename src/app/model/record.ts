import {Room} from "./room";
import {Lamp} from "./lamp";
import {RecordType} from "./record-type";

export interface Record {
  id?: number
  countLamp?: number
  countSocle?: number
  yearCount?: number
  sum?: number
  room?: Room
  lamp?: Lamp
  recordType?: RecordType
  sumElectricity?: number
}
