import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'star-rating',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './star-rating.component.html',
  styleUrl: './star-rating.component.css'
})
export class StarRatingComponent {
  @Input() stars!: number;
  @Input() size:number=1;
  get styles()
  {
    return {
      'width.rem': this.size,
      'height.rem': this.size,
      'marginRight.rem': this.size/6,
    }
  }
  getStarImage(current: number): string
  {
    const previousHalf=current-0.5;
    const imageName=this.stars>=current
    ? 'star3'
    : this.stars>=previousHalf
    ? 'star2'
    : 'star1'
    return `assets/stars/${imageName}.png`;
  }
}
