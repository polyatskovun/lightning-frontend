import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Socle} from '../../../model/socle';

@Component({
  selector: 'app-socle-form',
  templateUrl: './socle-form.component.html',
  styleUrls: ['./socle-form.component.css']
})
export class SocleFormComponent implements OnInit {

  isEdit = false;

  form: FormGroup = this.fb.group({
    id: [null],
    name: [null],
    price: [null],
    place: [null],
  });

  constructor(public dialogRef: MatDialogRef<SocleFormComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Socle,
              private fb: FormBuilder) {
    if (data) {
      this.form.patchValue({...data});
      this.isEdit = true;
    }
  }

  ngOnInit(): void {
  }

  onSubmit() {
    let socle: Socle = {
      id: this.form.get('id')?.value,
      name: this.form.get('name')?.value,
      price: this.form.get('price')?.value,
      place: this.form.get('place')?.value,
    };
    this.dialogRef.close(socle);
  }

  onNoClick() {
    this.dialogRef.close();
  }
}
