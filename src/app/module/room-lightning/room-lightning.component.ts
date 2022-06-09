import {Component, OnInit, ViewChild} from '@angular/core';
import {RoomType} from "../../model/room-type";
import {MatDialog} from '@angular/material/dialog';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {Room} from '../../model/room';
import {RoomService} from '../../service/room.service';

@Component({
  selector: 'app-room-lightning',
  templateUrl: './room-lightning.component.html',
  styleUrls: ['./room-lightning.component.css']
})
export class RoomLightningComponent implements OnInit {

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  displayedColumns: string[] = ['number', 'lightningRate'];
  dataSource = new MatTableDataSource<Room>([]);

  constructor(private dialog: MatDialog, private service: RoomService) {
    this.load();
  }

  ngOnInit(): void {
  }

  private load() {
    this.service.findAll().subscribe(r => {
      if (r) {
        this.dataSource = new MatTableDataSource<RoomType>(r);
        this.dataSource.paginator = this.paginator;
      }
    });
  }
}
