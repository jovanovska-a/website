import { Injectable } from '@angular/core';
import { Food } from '../../shared/models/food';
@Injectable({
  providedIn: 'root'
})
export class Home3Service {

  constructor() {}
  getHome3ById(id: number):Food{
    return this.getAll().find(food=>food.id==id)!
  }
  getAll():Food[]{
    return [
     { 
       id: 17,
       name: 'Double',
       cookTime: '10-20',
       price: 20,
       favorite: false,
       origins: ['Ceramic'],
       stars: 4.5,
       imageUrl: '/assets/vases/slika1.jpg',
       tags: ['FastFood', 'Pizza', 'Lunch'],
     },
     {
       id: 18,
       name: 'Woman',
       price: 13,
       cookTime: '20-30',
       favorite: true,
       origins: ['Clay'],
       stars: 4.7,
       imageUrl: '/assets/vases/slika2.jpg',
       tags: ['SlowFood', 'Lunch'],
     },
     {
       id: 19,
       name: 'Rafaello',
       price: 9,
       cookTime: '10-15',
       favorite: false,
       origins: ['Ceramic'],
       stars: 3.5,
       imageUrl: '/assets/vases/slika3.jpg',
       tags: ['FastFood', 'Hamburger'],
     },
     {
       id: 20,
       name: 'Black',
       price: 7,
       cookTime: '15-20',
       favorite: true,
       origins: ['Porcelain'],
       stars: 3.3,
       imageUrl: '/assets/vases/slika4.jpg',
       tags: [''],
     },
     {
       id: 21,
       name: 'Mozaique',
       price: 10,
       cookTime: '40-50',
       favorite: false,
       origins: ['Ceramic'],
       stars: 3.0,
       imageUrl: '/assets/vases/slika5.jpg',
       tags: ['']
     },
     {
       id: 22,
       name: 'Marble',
       price: 7,
       cookTime: '40-50',
       favorite: false,
       origins: ['Porcelain'],
       stars: 4.0,
       imageUrl: '/assets/vases/slika6.jpg',
       tags: [''],
     },
     {
       id: 23,
       name: 'Stripy',
       price: 6,
       cookTime: '40-50',
       favorite: false,
       origins: ['Porcelain'],
       stars: 4.0,
       imageUrl: '/assets/vases/slika7.jpg',
       tags: [''],
     },
     {
       id: 24,
       name: 'Sand',
       price: 9,
       cookTime: '40-50',
       favorite: false,
       origins: ['Clay'],
       stars: 0,
       imageUrl: '/assets/vases/slika8.jpg',
       tags: [''],
     },
   ] 
 }
  
}
