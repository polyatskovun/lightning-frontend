import {Component, OnInit} from '@angular/core';
import {Room} from "../../model/room";
import {RoomService} from "../../service/room.service";
import {Record} from "../../model/record";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-rooms-details',
  templateUrl: './rooms-details.component.html',
  styleUrls: ['./rooms-details.component.css']
})
export class RoomsDetailsComponent implements OnInit {

  displayedColumns: string[] = ['countLamp', 'countSocle', 'yearCount', 'sum', 'lamp'];
  dataSource: Record[] = [];
  room!: Room;

  constructor(private route: ActivatedRoute, private service: RoomService) {
    service.findById(this.route.snapshot.params['id']).subscribe(r => {
      if (r) {
        this.room = r;
        this.dataSource = this.room.records;
      }
    });
  }

  ngOnInit(): void {
  }

}
