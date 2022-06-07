import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {RoomType} from '../../../model/room-type';

@Component({
  selector: 'app-room-types-form',
  templateUrl: './room-types-form.component.html',
  styleUrls: ['./room-types-form.component.css']
})
export class RoomTypesFormComponent implements OnInit {

  isEdit = false;

  form: FormGroup = this.fb.group({
    id: [null],
    name: [null],
    lightningRate: [null]
  });

  constructor(public dialogRef: MatDialogRef<RoomTypesFormComponent>,
              @Inject(MAT_DIALOG_DATA) public data: RoomType,
              private fb: FormBuilder) {
    if (data) {
      this.form.patchValue({...data});
      this.isEdit = true;
    }
  }

  ngOnInit(): void {
  }

  onSubmit() {
    let roomType: RoomType = {
      id: this.form.get('id')?.value,
      name: this.form.get('name')?.value,
      lightningRate: this.form.get('lightningRate')?.value
    };
    this.dialogRef.close(roomType);
  }

  onNoClick() {
    this.dialogRef.close();
  }
}
