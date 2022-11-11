import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListTripsComponent } from './list-trips/list-trips.component';
import { NgModule } from '@angular/core';
import { CreateTripComponent } from './create-trip/create-trip.component';
import { UpdateTripComponent } from './update-trip/update-trip.component';

@NgModule({
  declarations: [
    AppComponent,
    ListTripsComponent,
    CreateTripComponent,
    UpdateTripComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
