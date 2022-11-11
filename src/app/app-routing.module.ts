import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateStationComponent } from './create-station/create-station.component';
import { ListStationsComponent } from './list-stations/list-stations.component';

const routes: Routes = [
  {path: 'stations',component: ListStationsComponent},
  {path:'create-station',component:CreateStationComponent},
  {path:'',redirectTo:'stations',pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
