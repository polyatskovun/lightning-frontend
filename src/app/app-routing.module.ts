import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {RoomsDetailsComponent} from "./module/rooms-details/rooms-details.component";
import {RoomsComponent} from "./module/rooms/rooms.component";
import {LampsComponent} from "./module/lamps/lamps.component";
import {SocleComponent} from "./module/socle/socle.component";
import {RoomTypesComponent} from "./module/room-types/room-types.component";

const routes: Routes = [
  {path: '', redirectTo: '/rooms', pathMatch: 'full'},
  {path: 'rooms-details/:id', component: RoomsDetailsComponent},
  {path: 'rooms', component: RoomsComponent},
  {path: 'room-types', component: RoomTypesComponent},
  {path: 'socles', component: SocleComponent},
  {path: 'lamps', component: LampsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
