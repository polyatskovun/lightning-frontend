import {Component, OnInit} from '@angular/core';
import {RoomTypeService} from "../../service/room-type.service";
import {RoomType} from "../../model/room-type";
import {DeleteDialogComponent} from '../shared/delete-dialog/delete-dialog.component';
import {MatDialog} from '@angular/material/dialog';
import {RoomTypesFormComponent} from './room-types-form/room-types-form.component';

@Component({
  selector: 'app-room-types',
  templateUrl: './room-types.component.html',
  styleUrls: ['./room-types.component.css']
})
export class RoomTypesComponent implements OnInit {

  displayedColumns: string[] = ['name', 'lightningRate', 'actions'];
  dataSource: RoomType[] = [];

  constructor(private dialog: MatDialog, private service: RoomTypeService) {
    this.load();
  }

  ngOnInit(): void {
  }

  openDialog(element?: RoomType): void {
    let dialogRef = this.dialog.open(RoomTypesFormComponent, {
      width: '400px',
      data: element,
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.service.save(result).subscribe(() => this.load());
      }
    });
  }

  deleteDialog(element: RoomType): void {
    let dialogRef = this.dialog.open(DeleteDialogComponent, {
      width: '300px',
      data: {
        name: 'Видалення типу кімнати',
        text: 'Видалити тип кімнати',
        value: element.name,
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
