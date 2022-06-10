import {Component, OnInit, ViewChild} from '@angular/core';
import {Room} from "../../model/room";
import {RoomService} from "../../service/room.service";
import {Record} from "../../model/record";
import {ActivatedRoute} from "@angular/router";
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {compareById} from '../shared/utils';
import {Observable} from 'rxjs';
import {environment} from "../../../environments/environment";
import JSPDF from "jspdf";
import autoTable from 'jspdf-autotable'

@Component({
  selector: 'app-rooms-details',
  templateUrl: './rooms-details.component.html',
  styleUrls: ['./rooms-details.component.css']
})
export class RoomsDetailsComponent implements OnInit {

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  displayedColumns: string[] = ['lamp', 'countLamp', 'socle', 'countSocle', 'sumElectricity', 'sum'];
  dataSource = new MatTableDataSource<Record>([]);
  room!: Room;
  rooms: Observable<Room[]>;
  id?: number;
  compareById = compareById;
  years: number = 1;

  constructor(private route: ActivatedRoute, private service: RoomService) {
    this.rooms = this.service.findAll();
    this.load();
  }

  ngOnInit(): void {
  }

  getStatus(description: string): string {
    switch (description.toLowerCase()) {
      case 'existing': {
        return 'Поточний';
      }
      case 'new': {
        return 'Новий';
      }
      case 'additional': {
        return 'Додатковий';
      }
      case 'optimal': {
        return 'Оптимальний(новий)';
      }
      case 'optimal_add': {
        return 'Оптимальний(додати до існуючого)';
      }
      default: {
        return 'Новий';
      }
    }
  }

  openDialog() {
    this.room.yearCount = environment.years;
    this.service.save(this.room).subscribe(() => this.load());
  }

  public load(): void {
    if (this.id) {
      this.service.findById(this.id).subscribe(r => {
        if (r) {
          this.room = r;
          /* if (r.records && r.records[0] && r.records[0].yearCount) {
             this.years = r.records[0].yearCount;
           }*/
          if (this.room.records) {
            this.dataSource = new MatTableDataSource<Record>(this.room.records.sort((a, b) => {
              if (!a.sum && !b.sum) {
                return 0;
              } else if (!b.sum) {
                return 1;
              } else if (!a.sum) {
                return -1;
              }
              if (a.sum > b.sum) {
                return 1;
              } else if (a.sum < b.sum) {
                return -1;
              } else {
                return 0;
              }
            }));
            this.dataSource.paginator = this.paginator;
          }
        }
      });
    }
  }

  getClass(element: Record): string {
    if (element.recordType?.id == 4 || element.recordType?.id == 5) {
      return 'optimal';
    } else if (element.recordType?.id == 1) {
      return 'existing';
    } else {
      return '';
    }
  }

  print() {
    if(this.room){
      let prepare: any[] = [];
      this.dataSource.data.forEach(e => {
        let tempObj = [];
        if (e.lamp) {
          tempObj.push(e.lamp.model);
        }
        tempObj.push(e.countLamp);
        if (e.lamp && e.lamp.socle) {
          tempObj.push(e.lamp.socle.name);
        }
        tempObj.push(e.countSocle);
        tempObj.push(e.sumElectricity);
        tempObj.push(e.sum);
        prepare.push(tempObj);
      });
      const doc = new JSPDF();
      autoTable(doc, {
        head: [['Lamp', 'Count lamp', 'Socle', 'Count socle', 'Sum electricity', 'Sum']],
        body: prepare
      });
      doc.save('model' + '.pdf');
    }
  }
}
