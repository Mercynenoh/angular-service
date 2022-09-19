import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarService } from '../car.service';
import { Cars } from '../interfaces/interfaces';

@Component({
  selector: 'app-singlecar',
  templateUrl: './singlecar.component.html',
  styleUrls: ['./singlecar.component.css']
})
export class SinglecarComponent implements OnInit {
  car:Cars={
    name:'',
    url:'',
    Sold:true,
    speed:0
  }
  id!:number
  constructor(private route:ActivatedRoute, private carService:CarService) { }

  ngOnInit(): void {
    // this.id=this.route.snapshot.params['id']
    console.log(this.route.snapshot.params);

    // this.car=this.carService.getOne(this.id)
  }

}
