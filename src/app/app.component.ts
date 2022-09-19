import { Component, Injectable, OnInit } from '@angular/core';
import { CarService } from './car.service';
import {Cars} from './interfaces/interfaces'

@Injectable({
  providedIn:'root'
})
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // providers:[CarService]
})
export class AppComponent implements OnInit {
  title = 'products';
  car:Cars[]=[

  ]
constructor( private carService:CarService){}

ngOnInit(): void {
    this.car=this.carService.getCars();
}
onAdd(car:Cars){
this.car.push(car)
}
}
