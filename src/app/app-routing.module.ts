import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateTripComponent } from './create-trip/create-trip.component';
import { ListTripsComponent } from './list-trips/list-trips.component';
import { UpdateTripComponent } from './update-trip/update-trip.component';

const routes: Routes = [
  {path: 'trips',component: ListTripsComponent},
  {path:'create-trip',component:CreateTripComponent},
  {path:'',redirectTo:'trips',pathMatch:'full'},
  {path:'update-trip/:id',component:UpdateTripComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
