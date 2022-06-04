import {Component, OnInit} from '@angular/core';
import {Room} from "../../model/room";
import {RoomService} from "../../service/room.service";

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit {

  displayedColumns: string[] = ['number', 'square', 'roomType'];
  dataSource!: Room[];

  constructor(private roomService: RoomService) {
    roomService.findAll().subscribe(r => {
      if (r) {
        this.dataSource = r;
      }
    });
  }

  ngOnInit(): void {
  }

}
