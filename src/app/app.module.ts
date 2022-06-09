import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import {RouterModule} from "@angular/router";
import {RoomsComponent} from './module/rooms/rooms.component';
import {RoomsDetailsComponent} from './module/rooms-details/rooms-details.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatTableModule} from "@angular/material/table";
import {RoomLightningComponent} from './module/room-lightning/room-lightning.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {DeleteDialogComponent} from './module/shared/delete-dialog/delete-dialog.component';
import {MatSelectModule} from '@angular/material/select';
import {MatGridListModule} from '@angular/material/grid-list';
import {RoomsFormComponent} from './module/rooms/rooms-form/rooms-form.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSortModule} from '@angular/material/sort';
import {MatPaginatorModule} from '@angular/material/paginator';
import { DashboardComponent } from './module/dashboard/dashboard.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatDialogModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    ReactiveFormsModule,
    MatDividerModule,
    MatSelectModule,
    MatGridListModule,
    MatCheckboxModule,
    MatSortModule,
    MatPaginatorModule
  ],
  declarations: [
    AppComponent,
    RoomsComponent,
    RoomsFormComponent,
    RoomsDetailsComponent,
    RoomLightningComponent,
    DeleteDialogComponent,
    DashboardComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
