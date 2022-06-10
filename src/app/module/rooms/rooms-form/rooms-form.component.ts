import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Observable} from 'rxjs';
import {compareById} from '../../shared/utils';
import {Room} from '../../../model/room';
import {RoomType} from '../../../model/room-type';
import {RoomTypeService} from '../../../service/room-type.service';
import {Record} from '../../../model/record';
import {Lamp} from '../../../model/lamp';
import {LampService} from '../../../service/lamp.service';
import {environment} from "../../../../environments/environment";

@Component({
  selector: 'app-room-lightning-form',
  templateUrl: './rooms-form.component.html',
  styleUrls: ['./rooms-form.component.css']
})
export class RoomsFormComponent implements OnInit {

  isEdit = false;
  roomTypes: Observable<RoomType[]>;
  lamps!: Lamp[];
  defaultLamp!: Lamp;

  isRecord = false;
  record?: Record;

  form: FormGroup = this.fb.group({
    id: [null],
    number: [null, Validators.required],
    square: [null, Validators.required],
    hoursOfUses: [null, Validators.required],
    roomType: [null, Validators.required],
    yearCount: [1, Validators.required],
    records: [null]
  });

  compareById = compareById;

  constructor(public dialogRef: MatDialogRef<RoomsFormComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Room,
              private fb: FormBuilder,
              roomTypeService: RoomTypeService, lampService: LampService) {
    if (data) {
      this.form.patchValue({...data});
      this.isEdit = true;
      if (data.records) {
        let find = data.records.find(r => r.recordType?.id === 1);
        if (find) {
          this.record = find;
          this.isRecord = true;
        }
      }
    }
    this.roomTypes = roomTypeService.findAll();
    lampService.findAll().subscribe(res => {
      this.lamps = res;
      this.defaultLamp = res[0]
    });
    this.form.get('yearCount')?.disable();
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.form.markAllAsTouched();
    if (this.form.valid) {
      let records = (this.form.get('records')?.value ? this.form.get('records')?.value : []) as Record[];
      if (this.record && !records.find(r => r.recordType?.id == 1)) {
        records.push(this.record);
      }
      let room: Room = {
        id: this.form.get('id')?.value,
        square: this.form.get('square')?.value,
        number: this.form.get('number')?.value,
        hoursOfUses: this.form.get('hoursOfUses')?.value,
        roomType: this.form.get('roomType')?.value,
        records: records,
        yearCount: environment.years
      };
      this.dialogRef.close(room);
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  isRecordChanged(): void {
    if(this.isRecord){
      this.record = {
        recordType: {id: 1},
        countLamp: 1,
        lamp: this.defaultLamp
      };
    } else {
      this.record = undefined;
    }
  }
}
