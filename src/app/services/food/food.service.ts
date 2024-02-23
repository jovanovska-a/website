import { Injectable } from '@angular/core';
import { Food } from '../../shared/models/food';
@Injectable({
  providedIn: 'root'
}) 
export class FoodService {
  constructor(){}
  getFoodById(id: number):Food{
    return this.getAll().find(food => food.id==id)!;
  }
  getAllFoodsByTag(tag:string):Food[]
  {
    return tag=="All" ? this.getAll() :
      this.getAll().filter(food=>food.tags?.includes(tag)); 
  }
  getAll():Food[] {
    return [
      { 
        id: 1,
        name: 'Black & White',
        cookTime: '10-20',
        price: 20,
        favorite: false,
        origins: ['Clay'],
        stars: 4.5,
        imageUrl: '/assets/slike/slika1.jpg',
        tags: ['FastFood', 'Pizza', 'Lunch'],
      },
      {
        id: 2,
        name: 'Rabbit',
        price: 60,
        cookTime: '20-30',
        favorite: true,
        origins: ['Marble'],
        stars: 4.7,
        imageUrl: '/assets/slike/slika2.jpg',
        tags: ['SlowFood', 'Lunch'],
      },
      {
        id: 3,
        name: 'Geometric',
        price: 35,
        cookTime: '10-15',
        favorite: false,
        origins: ['Wood'],
        stars: 3.5,
        imageUrl: '/assets/slike/slika3.jpg',
        tags: ['FastFood', 'Hamburger'],
      },
      {
        id: 4,
        name: 'Touch of blue',
        price: 40,
        cookTime: '15-20',
        favorite: true,
        origins: ['Porcelain'],
        stars: 3.3,
        imageUrl: '/assets/slike/slika7.jpg',
        tags: ['FastFood', 'Fry'],
      },
      {
        id: 5,
        name: 'Rustic',
        price: 55,
        cookTime: '40-50',
        favorite: false,
        origins: ['Wood'],
        stars: 3.0,
        imageUrl: '/assets/slike/slika4.jpg',
        tags: ['SlowFood', 'Soup'],
      },
      {
        id: 6,
        name: 'Beige',
        price: 40,
        cookTime: '40-50',
        favorite: false,
        origins: ['Ceramic'],
        stars: 4.0,
        imageUrl: '/assets/slike/slika5.jpg',
        tags: ['FastFood', 'Pizza', 'Lunch'],
      },
      {
        id: 7,
        name: 'Almond',
        price: 20,
        cookTime: '40-50',
        favorite: false,
        origins: ['Bamboo'],
        stars: 4.0,
        imageUrl: '/assets/slike/slika6.jpg',
        tags: ['FastFood', 'Pizza', 'Lunch'],
      },
      {
        id: 8,
        name: 'Touch of green',
        price: 20,
        cookTime: '40-50',
        favorite: false,
        origins: ['Clay'],
        stars: 4.0,
        imageUrl: '/assets/slike/slika8.jpg',
        tags: ['FastFood', 'Pizza', 'Lunch'],
      },
    ] 
  }

}
