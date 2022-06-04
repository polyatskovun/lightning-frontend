import {LampType} from "./lamp-type";
import {Socle} from "./socle";

export interface Lamp {
  id:	number
  price: number
  termOfWork:	number
  luminousFlux:	number
  power: number
  model:	string
  lampType: LampType
  socle: Socle
}
