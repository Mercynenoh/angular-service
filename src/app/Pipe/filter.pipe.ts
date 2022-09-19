import { Pipe, PipeTransform } from '@angular/core';
import { Cars } from '../interfaces/interfaces';

@Pipe({
  name: 'searchfilter'
})
export class FilterPipe implements PipeTransform {

  transform(value:Cars[], name:string): Cars[] {
    if(value.length===0 || name===''){
      name = name.toLowerCase();
      return value
    }
    const cars:Cars[]=[]
    for (let car of value){
   if (car.name.toLowerCase().indexOf(name)!=-1){
    cars.push(car)
   }
  }
  return cars
}

}
