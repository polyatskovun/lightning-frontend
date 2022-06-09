import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {RoomsDetailsComponent} from "./module/rooms-details/rooms-details.component";
import {RoomsComponent} from "./module/rooms/rooms.component";
import {RoomLightningComponent} from "./module/room-lightning/room-lightning.component";
import {DashboardComponent} from './module/dashboard/dashboard.component';

const routes: Routes = [
  {path: '', component: DashboardComponent, pathMatch: 'full'},
  {path: 'rooms-details', component: RoomsDetailsComponent},
  {path: 'rooms', component: RoomsComponent},
  {path: 'room-lightning', component: RoomLightningComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
