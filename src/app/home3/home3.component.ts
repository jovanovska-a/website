import { Component } from '@angular/core';
import { Home3Service } from '../services/home3/home3.service';
import { Food } from '../shared/models/food';
import { CommonModule } from '@angular/common';
import { ActivatedRoute} from '@angular/router';
import { Search3Component } from '../search3/search3.component';
import { RouterLink } from '@angular/router';
import { NotFoundComponent } from '../not-found/not-found.component';
@Component({
  selector: 'app-home3',
  standalone: true,
  imports: [CommonModule,Search3Component,RouterLink,NotFoundComponent],
  templateUrl: './home3.component.html',
  styleUrl: './home3.component.css'
})
export class Home3Component {
  home3:Food[]=[]
  constructor(private home3Service:Home3Service,private route:ActivatedRoute){}
  ngOnInit():void{
    this.route.params.subscribe(params=> {
      if(params['search3Term'])
      {
        this.home3=this.home3Service.getAll().filter(home3=>home3.name.toLowerCase().includes(params['search3Term'].toLowerCase()));
      }
      else{
        this.home3=this.home3Service.getAll();
      }
    })
  }
}
