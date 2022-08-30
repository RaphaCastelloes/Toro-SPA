import { Component, } from '@angular/core';
import { NgbCarousel } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  // Images for the carousel
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
}