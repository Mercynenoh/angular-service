import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { FilterPipe } from '../Pipe/filter.pipe';
import {Cars} from '../interfaces/interfaces'
import { CarService } from '../car.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-newproducts',
  templateUrl: './newproducts.component.html',
  styleUrls: ['./newproducts.component.css']
})
export class NewproductsComponent implements OnInit {
  public FilterPipe: any = '';
   @Input() car!:Cars[]
    filter=''
    day = new Date().getDay()
constructor( private carService:CarService, private router:Router) { }

    ngOnInit(): void {

    }
    onDelete(index:number){
    this.carService.delete(index)
    }
    onUpdate(index:number){
    this.carService.updateid.emit(index)
    }
    showone(i:number){
      this.router.navigate(['car', i])
    }
}
