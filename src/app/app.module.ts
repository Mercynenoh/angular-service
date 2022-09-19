import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewproductsComponent } from './newproducts/newproducts.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from './Pipe/filter.pipe';
import { AddCarComponent } from './add-car/add-car.component';
import { StoreModule } from '@ngrx/store';
import { SinglecarComponent } from './singlecar/singlecar.component';


@NgModule({
  declarations: [
    AppComponent,
    NewproductsComponent,
    HeaderComponent,
    FilterPipe,
    AddCarComponent,
    SinglecarComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    StoreModule.forRoot({}, {}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
