import { Component } from '@angular/core';
import { Home2Service } from '../services/home/home2.service';
import { CommonModule} from '@angular/common'; 
import { Food } from '../shared/models/food';
import { ActivatedRoute } from '@angular/router';
import { Search2Component } from '../search2/search2.component';
import { RouterLink } from '@angular/router';
import { NotFoundComponent } from '../not-found/not-found.component';
@Component({
  selector: 'app-home2',
  standalone: true,
  imports: [CommonModule,Search2Component,RouterLink,NotFoundComponent],
  templateUrl: './home2.component.html',
  styleUrl: './home2.component.css'
})
export class Home2Component{
  home2:Food[]=[];
  constructor(private home2Service:Home2Service,private route:ActivatedRoute)
  {}
  ngOnInit():void
  {
    this.route.params.subscribe(params=> {
      if(params['search2Term'])
      {
        this.home2=this.home2Service.getAll().filter(home2=>home2.name.toLowerCase().includes(params['search2Term'].toLowerCase()));
      }
      else{
        this.home2=this.home2Service.getAll();
      }
    })
    
  }

}
