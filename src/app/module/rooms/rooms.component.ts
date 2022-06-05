import {Component, OnInit} from '@angular/core';
import {Room} from "../../model/room";
import {RoomService} from "../../service/room.service";

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit {

  displayedColumns: string[] = ['number', 'square', 'hoursOfUses', 'roomType', 'lightningRate', 'actions'];
  dataSource: Room[] = [];

  constructor(private service: RoomService) {
    service.findAll().subscribe(r => {
      if (r) {
        this.dataSource = r;
      }
    });
  }

  ngOnInit(): void {
  }

}
