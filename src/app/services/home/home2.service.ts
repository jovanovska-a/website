import { Injectable } from '@angular/core';
import { Food } from '../../shared/models/food';

@Injectable({
  providedIn: 'root'
})
export class Home2Service {

  constructor() {}
  getHome2ById(id:number):Food{
    return this.getAll().find(food=>food.id==id)!;
  }
  getAll():Food[]{
     return [
      { 
        id: 9,
        name: 'Shades of pink',
        cookTime: '10-20',
        price: 6,
        favorite: false,
        origins: ['Cherry Vanilla'],
        stars: 4.5,
        imageUrl: '/assets/candles/slika1.jpg',
        tags: ['FastFood', 'Pizza', 'Lunch'],
      },
      {
        id: 10,
        name: 'Beige',
        price: 6,
        cookTime: '20-30',
        favorite: true,
        origins: ['Almond Cookie,','Cedarwood Vanilla'],
        stars: 4.7,
        imageUrl: '/assets/candles/slika2.jpg',
        tags: ['SlowFood', 'Lunch'],
      },
      {
        id: 11,
        name: 'Ravel',
        price: 4.5,
        cookTime: '10-15',
        favorite: false,
        origins: ['Fresh Strawberry'],
        stars: 3.5,
        imageUrl: '/assets/candles/slika3.jpg',
        tags: ['FastFood', 'Hamburger'],
      },
      {
        id: 12,
        name: 'Unique',
        price: 8,
        cookTime: '15-20',
        favorite: true,
        origins: ['belgium', 'france'],
        stars: 3.3,
        imageUrl: '/assets/candles/slika4.jpg',
        tags: ['FastFood', 'Fry'],
      },
      {
        id: 13,
        name: 'Hourglass',
        price: 6,
        cookTime: '40-50',
        favorite: false,
        origins: ['Coconut,', 'Daisy'],
        stars: 3.0,
        imageUrl: '/assets/candles/slika5.jpg',
        tags: ['SlowFood', 'Soup'],
      },
      {
        id: 14,
        name: 'Aphrodite',
        price: 13,
        cookTime: '40-50',
        favorite: false,
        origins: ['Amber Romance'],
        stars: 4.0,
        imageUrl: '/assets/candles/slika6.jpg',
        tags: ['FastFood', 'Pizza', 'Lunch'],
      },
      {
        id: 15,
        name: 'Navy',
        price: 7,
        cookTime: '40-50',
        favorite: false,
        origins: ['Blackberry Sage'],
        stars: 4.0,
        imageUrl: '/assets/candles/slika7.jpg',
        tags: ['FastFood', 'Pizza', 'Lunch'],
      },
      {
        id: 16,
        name: 'David',
        price: 14,
        cookTime: '40-50',
        favorite: false,
        origins: ['Bergamot'],
        stars: 4.0,
        imageUrl: '/assets/candles/slika8.jpg',
        tags: ['FastFood', 'Pizza', 'Lunch'],
      },
    ] 
  }
}
