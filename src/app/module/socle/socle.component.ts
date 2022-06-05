import {Component, OnInit} from '@angular/core';
import {Socle} from "../../model/socle";
import {SocleService} from "../../service/socle.service";
import {MatDialog} from '@angular/material/dialog';
import {SocleFormComponent} from './socle-form/socle-form.component';
import {DeleteDialogComponent} from '../shared/delete-dialog/delete-dialog.component';

@Component({
  selector: 'app-socle',
  templateUrl: './socle.component.html',
  styleUrls: ['./socle.component.css']
})
export class SocleComponent implements OnInit {

  displayedColumns: string[] = ['name', 'price', 'place', 'actions'];
  dataSource: Socle[] = [];

  constructor(private dialog: MatDialog, private service: SocleService) {
    this.load();
  }

  private load() {
    this.service.findAll().subscribe(r => {
      if (r) {
        this.dataSource = r;
      }
    });
  }

  ngOnInit(): void {
  }

  openDialog(element?: Socle): void {
    let dialogRef = this.dialog.open(SocleFormComponent, {
      width: '400px',
      data: element,
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.service.save(result).subscribe(() => this.load());
      }
    });
  }

  deleteDialog(element: Socle): void {
    let dialogRef = this.dialog.open(DeleteDialogComponent, {
      width: '300px',
      data: {
        name: 'Видалення цоколю',
        text: 'Видалити цоколь',
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
}
