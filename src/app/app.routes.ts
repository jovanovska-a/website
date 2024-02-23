import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Home1Component } from './home1/home1.component';
import { Home2Component } from './home2/home2.component';
import { Home3Component} from './home3/home3.component';
import { FoodPageComponent } from './food-page/food-page.component';
import { Home2PageComponent } from './home2-page/home2-page.component';
import { Home3PageComponent } from './home3-page/home3-page.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { SurveyComponent } from './survey/survey.component';
export const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'search1/:searchTerm',component:Home1Component}, 
  {path:'search2/:search2Term',component:Home2Component},
  {path:'search3/:search3Term',component:Home3Component},  
  {path:'food/:id',component:FoodPageComponent},
  {path:'h2/:id',component:Home2PageComponent},
  {path:'h3/:id',component:Home3PageComponent},
  {path:'lamp',component:Home1Component},
  {path:'candle',component:Home2Component},
  {path:'vase',component:Home3Component},
  {path:'cart-page',component:CartPageComponent},
  {path:'survey',component:SurveyComponent}
];
