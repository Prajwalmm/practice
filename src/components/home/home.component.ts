import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  slides = [
    { image: 'carousalmage1.jpg', title: 'Samsung hd tv', description: 'full hd tv', alt: 'Slide 1 is not loading' },
    { image: 'image2.jpg', title: 'Slide 2', description: 'Description for slide 2', alt: 'Slide 2' },
    { image: 'image3.jpg', title: 'Slide 3', description: 'Description for slide 3', alt: 'Slide 3' },
  ];

  currentSlide = 0;

  prevSlide() {
    this.currentSlide = (this.currentSlide === 0) ? this.slides.length - 1 : this.currentSlide - 1;
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide === this.slides.length - 1) ? 0 : this.currentSlide + 1;
  }
}


