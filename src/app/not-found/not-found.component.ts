import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.css'
})
export class NotFoundComponent  {
  @Input() visible:boolean=false; 
  @Input() notFoundMessage:string="Nothing found!";
  @Input() resetLinkText:string="Reset";
  @Input() resetLinkRoute:string="/";
}
