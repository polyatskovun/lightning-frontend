import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import {DashboardComponent} from './module/dashboard/dashboard.component';
import {RouterModule} from "@angular/router";
import {RoomsComponent} from './module/rooms/rooms.component';
import {LampsComponent} from './module/lamps/lamps.component';
import {RoomsDetailsComponent} from './module/rooms-details/rooms-details.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatTable, MatTableModule} from "@angular/material/table";
import { SocleComponent } from './module/socle/socle.component';
import { RoomTypesComponent } from './module/room-types/room-types.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    BrowserAnimationsModule,
    MatTableModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    RoomsComponent,
    RoomsDetailsComponent,
    LampsComponent,
    SocleComponent,
    RoomTypesComponent,
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
