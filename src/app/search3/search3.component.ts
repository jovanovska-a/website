import { Component } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-search3',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './search3.component.html',
  styleUrl: './search3.component.css'
})
export class Search3Component {
  search3Term:String="";
  constructor(private route:ActivatedRoute, private router:Router)
  {}
  ngOnInit():void{
    this.route.params.subscribe(params=>{
      if(params['search3Term'])
        this.search3Term=params['search3Term'];
    })
  }
  search3():void {
    console.log(this.search3Term+"3");
    if(this.search3Term)
    {
      this.router.navigateByUrl('search3/'+this.search3Term);
    }
  }
}