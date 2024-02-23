import { Component } from '@angular/core';
import { Food } from '../shared/models/food';
import { ActivatedRoute, Router } from '@angular/router';
import { Home3Service } from '../services/home3/home3.service';
import { CommonModule } from '@angular/common';
import { CartService } from '../services/cart/cart.service';
import { NotFoundComponent } from '../not-found/not-found.component';
import { StarRatingComponent } from '../component/partials/star-rating/star-rating.component';

@Component({
  selector: 'app-home3-page',
  standalone: true,
  imports: [CommonModule,NotFoundComponent,StarRatingComponent],
  templateUrl: './home3-page.component.html',
  styleUrl: './home3-page.component.css'
})
export class Home3PageComponent {
  home3!:Food;
  constructor(private activatedRoute:ActivatedRoute,private home3Service:Home3Service,private cartService:CartService,private router:Router){
    activatedRoute.params.subscribe((params)=>{
      if(params['id'])
      { 
        this.home3=home3Service.getHome3ById(params['id']  );
      }
    })
  }
  addToCart() {
    this.cartService.addToCart(this.home3);
    this.router.navigateByUrl('/cart-page');
  }
}
