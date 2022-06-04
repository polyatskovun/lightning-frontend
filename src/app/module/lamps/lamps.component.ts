import { Component, OnInit } from '@angular/core';
import {LampService} from "../../service/lamp.service";
import {Lamp} from "../../model/lamp";

@Component({
  selector: 'app-lamps',
  templateUrl: './lamps.component.html',
  styleUrls: ['./lamps.component.css']
})
export class LampsComponent implements OnInit {

  displayedColumns: string[] = ['model', 'price', 'termOfWork', 'luminousFlux', 'power', 'lampType'];
  dataSource!: Lamp[];

  constructor(private lampService: LampService) {
    lampService.findAll().subscribe(l => {
      if (l) {
        this.dataSource = l;
      }
    });
  }

  ngOnInit(): void {
  }

}
