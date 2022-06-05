import { Component, OnInit } from '@angular/core';
import {Room} from "../../model/room";
import {RoomService} from "../../service/room.service";
import {RoomTypeService} from "../../service/room-type.service";
import {RoomType} from "../../model/room-type";

@Component({
  selector: 'app-room-types',
  templateUrl: './room-types.component.html',
  styleUrls: ['./room-types.component.css']
})
export class RoomTypesComponent implements OnInit {

  displayedColumns: string[] = ['name', 'lightningRate'];
  dataSource: RoomType[] = [];

  constructor(private service: RoomTypeService) {
    service.findAll().subscribe(r => {
      if (r) {
        this.dataSource = r;
      }
    });
  }
  ngOnInit(): void {
  }

}
