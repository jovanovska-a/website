import { Component } from '@angular/core';
import { Food } from '../shared/models/food';
import { ActivatedRoute, Router } from '@angular/router';
import { Home2Service } from '../services/home/home2.service';
import { CommonModule } from '@angular/common';
import { CartService } from '../services/cart/cart.service';
import { NotFoundComponent } from '../not-found/not-found.component';
import { StarRatingComponent } from '../component/partials/star-rating/star-rating.component';

@Component({
  selector: 'app-home2-page',
  standalone: true,
  imports: [CommonModule,NotFoundComponent,StarRatingComponent],
  templateUrl: './home2-page.component.html',
  styleUrl: './home2-page.component.css'
})
export class Home2PageComponent {
  home2!:Food;
  constructor(private activatedRoute:ActivatedRoute,private home2Service:Home2Service,private cartService:CartService,private router:Router){
    activatedRoute.params.subscribe((params)=>{
      if(params['id'])
      {
        this.home2=home2Service.getHome2ById(params['id']);
      }
    })
  }
  addToCart(){
    this.cartService.addToCart(this.home2);
    this.router.navigateByUrl('/cart-page');
  }
}
