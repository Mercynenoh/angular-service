import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CarService } from '../car.service';
import {Cars} from '../interfaces/interfaces'
import { logger } from '../logger.service';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']

})
export class AddCarComponent implements OnInit {

  car:Cars={
    name:'',
    url:'',
    Sold:true,
    speed:0
  }
  id!:number
update=false
  onAdd(){
    const p = new logger
    p.log()
    if (!this.update){
        this.carservice.addCar(this.car)
    }
else{
    this.carservice.update(this.id, this.car)
    this.update=false
  }

  }


  constructor( private carservice:CarService) {
    this.carservice.updateid.subscribe((value:number)=>{
    this.id=value
    this.car=this.carservice.getOne(value)
    this.update=true
    })
   }

  ngOnInit(): void {
  }

}
