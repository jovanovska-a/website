import { Component } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-search2',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './search2.component.html',
  styleUrl: './search2.component.css'
})
export class Search2Component {
  search2Term:String="";
  constructor(private route:ActivatedRoute, private router:Router)
  {}
  ngOnInit():void{
    this.route.params.subscribe(params =>{
      if(params['search2Term'])
        this.search2Term=params['search2Term'];
    })
  }
  search2():void{
    console.log(this.search2Term+"2");
    if(this.search2Term)
    {
      this.router.navigateByUrl('search2/'+this.search2Term);
    }
  }
}
