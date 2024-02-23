import { Component } from '@angular/core';
import { FoodService  } from '../services/food/food.service';
import { CommonModule } from '@angular/common';
import { Food } from '../shared/models/food'; 
import { ActivatedRoute } from '@angular/router';
import { SearchComponent } from '../search/search.component';
import { RouterLink } from '@angular/router';
import { NotFoundComponent } from '../not-found/not-found.component';
import { StarRatingComponent } from '../component/partials/star-rating/star-rating.component';
@Component({
  selector: 'app-home1',
  standalone: true,
  imports: [SearchComponent,CommonModule,RouterLink,NotFoundComponent,StarRatingComponent],
  templateUrl: './home1.component.html',
  styleUrl: './home1.component.css'
})
export class Home1Component {
  foods:Food[]=[];  
  constructor(private foodService:FoodService, private route:ActivatedRoute ){}
  ngOnInit():void{
    this.route.params.subscribe(params=>
      {
      if(params['searchTerm'])
      {
        console.log("function");
        this.foods=this.foodService.getAll().filter (food => food.name.toLowerCase().includes(params['searchTerm'].toLowerCase()));
      }
      else
      {
        this.foods=this.foodService.getAll();
      }
    })
  }
}
