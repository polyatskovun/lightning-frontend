import {Component, OnInit} from '@angular/core';
import {RoomType} from "../../model/room-type";
import {RoomTypeService} from "../../service/room-type.service";
import {Socle} from "../../model/socle";
import {SocleService} from "../../service/socle.service";

@Component({
  selector: 'app-socle',
  templateUrl: './socle.component.html',
  styleUrls: ['./socle.component.css']
})
export class SocleComponent implements OnInit {

  displayedColumns: string[] = ['name', 'price', 'place'];
  dataSource: Socle[] = [];

  constructor(private service: SocleService) {
    service.findAll().subscribe(r => {
      if (r) {
        this.dataSource = r;
      }
    });
  }

  ngOnInit(): void {
  }

}
