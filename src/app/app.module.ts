import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListStationsComponent } from './list-stations/list-stations.component';
import{HttpClientModule}from '@angular/common/http';
import { CreateStationComponent } from './create-station/create-station.component';
@NgModule({
  declarations: [
    AppComponent,
    ListStationsComponent,
    CreateStationComponent,
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
