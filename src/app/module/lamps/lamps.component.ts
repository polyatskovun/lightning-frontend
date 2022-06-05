import { Component, OnInit } from '@angular/core';
import {LampService} from "../../service/lamp.service";
import {Lamp} from "../../model/lamp";
import {DeleteDialogComponent} from '../shared/delete-dialog/delete-dialog.component';
import {MatDialog} from '@angular/material/dialog';
import {LampsFormComponent} from './lamps-form/lamps-form.component';

@Component({
  selector: 'app-lamps',
  templateUrl: './lamps.component.html',
  styleUrls: ['./lamps.component.css']
})
export class LampsComponent implements OnInit {

  displayedColumns: string[] = ['model', 'price', 'termOfWork', 'luminousFlux', 'power', 'lampType', 'actions'];
  dataSource!: Lamp[];

  constructor(private dialog: MatDialog, private service: LampService) {
    this.load();
  }

  ngOnInit(): void {
  }

  openDialog(element?: Lamp): void {
    let dialogRef = this.dialog.open(LampsFormComponent, {
      width: '800px',
      data: element,
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.service.save(result).subscribe(() => this.load());
      }
    });
  }

  deleteDialog(element: Lamp): void {
    let dialogRef = this.dialog.open(DeleteDialogComponent, {
      width: '300px',
      data: {
        name: 'Видалення лампи',
        text: 'Видалити лампу',
        value: element.model,
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
    this.service.findAll().subscribe(l => {
      if (l) {
        this.dataSource = l;
      }
    });
  }
}
