import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Lamp} from '../../../model/lamp';
import {SocleService} from '../../../service/socle.service';
import {LampTypeService} from '../../../service/lamp-type.service';
import {Socle} from '../../../model/socle';
import {Observable} from 'rxjs';
import {LampType} from '../../../model/lamp-type';
import {compareById} from '../../shared/utils';

@Component({
  selector: 'app-room-types-form',
  templateUrl: './lamps-form.component.html',
  styleUrls: ['./lamps-form.component.css']
})
export class LampsFormComponent implements OnInit {

  isEdit = false;
  socles: Observable<Socle[]>;
  lampTypes: Observable<LampType[]>;

  form: FormGroup = this.fb.group({
    id: [null],
    model: [null],
    price: [null],
    termOfWork: [null],
    luminousFlux: [null],
    power: [null],
    lampType: [null],
    socle: [null],
  });

  compareById = compareById;

  constructor(public dialogRef: MatDialogRef<LampsFormComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Lamp,
              private fb: FormBuilder,
              socleService: SocleService,
              lampTypeService: LampTypeService) {
    if (data) {
      this.form.patchValue({...data});
      this.isEdit = true;
    }
    this.socles = socleService.findAll();
    this.lampTypes = lampTypeService.findAll();
  }

  ngOnInit(): void {
  }

  onSubmit() {
    let lamp: Lamp = {
      id: this.form.get('id')?.value,
      model: this.form.get('model')?.value,
      luminousFlux: this.form.get('luminousFlux')?.value,
      termOfWork: this.form.get('termOfWork')?.value,
      socle: this.form.get('socle')?.value,
      lampType: this.form.get('lampType')?.value,
      price: this.form.get('price')?.value,
      power: this.form.get('power')?.value
    };
    this.dialogRef.close(lamp);
  }

  onNoClick() {
    this.dialogRef.close();
  }
}
