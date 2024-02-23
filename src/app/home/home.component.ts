import { Component } from '@angular/core';
import { Home1Component } from '../home1/home1.component';
import { Home2Component } from '../home2/home2.component';
import { Home3Component } from '../home3/home3.component';
import { StartComponent } from '../start/start.component';
import { SurveyComponent } from '../survey/survey.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Home1Component,Home2Component,Home3Component,StartComponent,SurveyComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
