import { Injectable, EventEmitter } from '@angular/core';
import { Component } from '@angular/core';
import {Cars} from './interfaces/interfaces'

@Injectable({
  providedIn: 'root'
})
export class CarService {
  constructor(){}
  private car:Cars[]=[

    {
      name:'Mercedes-Benz Vision AVTR',
      url:'https://th.bing.com/th/id/OIP.55f_PsuS10Bs5B2O0WiWFQHaEK?w=288&h=180&c=7&r=0&o=5&dpr=1.77&pid=1.7',
      speed:350,
      Sold:true
    },
    {
    name:'G-wagon',
    url:'https://th.bing.com/th/id/OIP.w2boGHE3g4Bj602k-4DY4QHaF7?w=253&h=203&c=7&r=0&o=5&dpr=1.77&pid=1.7',
    speed:150,
    Sold:true
  },
  {
    name:'Mercedes-Benz E-Class',
    url:'https://th.bing.com/th?q=Mercedes+E-Class+White&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.77&pid=InlineBlock&mkt=en-WW&cc=KE&setlang=en&adlt=moderate&t=1&mw=247',
    speed:250,
    Sold:true
  },
{
    name:'AMG Convertible',
    url:'https://th.bing.com/th/id/OIP.ck9-eKvn9TZ_LEbBS46RWwHaE8?w=270&h=180&c=7&r=0&o=5&dpr=1.77&pid=1.7',
    speed:170,
    Sold:false
}
]
updateid=new EventEmitter<number>()
getCars(){
  return this.car
}
addCar(car:Cars){
return this.car.push(car)
}
getOne(index:number){
return this.car[index]
}
update(index:number, updatedCar:Cars){
return this.car[index]=updatedCar
}
delete(index:number){
  return this.car.splice(index,1)
}
  }



