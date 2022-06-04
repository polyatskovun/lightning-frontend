import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {DashboardComponent} from './module/dashboard/dashboard.component';
import {RoomsDetailsComponent} from "./module/rooms-details/rooms-details.component";
import {RoomsComponent} from "./module/rooms/rooms.component";
import {LampsComponent} from "./module/lamps/lamps.component";

const routes: Routes = [
  {path: '', redirectTo: '/rooms', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'rooms-details/:id', component: RoomsDetailsComponent},
  {path: 'rooms', component: RoomsComponent},
  {path: 'lamps', component: LampsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
