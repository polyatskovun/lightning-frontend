import {Component, OnInit} from '@angular/core';
import {Room} from "../../model/room";
import {RoomService} from "../../service/room.service";
import {DeleteDialogComponent} from '../shared/delete-dialog/delete-dialog.component';
import {MatDialog} from '@angular/material/dialog';
import {RoomsFormComponent} from './rooms-form/rooms-form.component';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit {

  displayedColumns: string[] = ['number', 'square', 'hoursOfUses', 'roomType', 'lightningRate', 'actions'];
  dataSource: Room[] = [];

  constructor(private dialog: MatDialog, private service: RoomService) {
    this.load();
  }

  ngOnInit(): void {
  }

  openDialog(element?: Room): void {
    let dialogRef = this.dialog.open(RoomsFormComponent, {
      width: '800px',
      data: element
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.service.save(result).subscribe(() => this.load());
      }
    });
  }

  deleteDialog(element: Room): void {
    let dialogRef = this.dialog.open(DeleteDialogComponent, {
      width: '300px',
      data: {
        name: 'Видалення кімнати',
        text: 'Видалити кімнату',
        value: element.number,
        id: element.id
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.service.deleteById(result).subscribe(() => this.load());
      }
    });
  }

  private load() {
    this.service.findAll().subscribe(r => {
      if (r) {
        this.dataSource = r;
      }
    });
  }
}
