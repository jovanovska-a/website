import { Component } from '@angular/core';
import { Food } from '../shared/models/food';
import { ActivatedRoute, Router } from '@angular/router';
import { FoodService } from '../services/food/food.service';
import { CommonModule } from '@angular/common';
import { CartService } from '../services/cart/cart.service';
import { NotFoundComponent } from '../not-found/not-found.component';
import { StarRatingComponent } from '../component/partials/star-rating/star-rating.component';

@Component({
  selector: 'app-food-page',
  standalone: true,
  imports: [CommonModule,NotFoundComponent,StarRatingComponent],
  templateUrl: './food-page.component.html',
  styleUrl: './food-page.component.css'
})
export class FoodPageComponent {
  food!:Food;
  constructor(private activatedRoute:ActivatedRoute,private foodService:FoodService,private cartService:CartService,private router:Router)
  {
    activatedRoute.params.subscribe((params)=>{
      if(params['id'])
        this.food=foodService.getFoodById(params['id']);
    })
  } 
  addToCart(){
    this.cartService.addToCart(this.food);
    this.router.navigateByUrl('/cart-page');
  }

}
