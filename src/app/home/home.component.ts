import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  image = [1, 2, 3].map(() => `https://picsum.photos/1500/250?random&t=${Math.random()}`);
  images = [1, 2, 3].map(() => `https://picsum.photos/370/250?random&t=${Math.random()}`);

  // slides = [
  //   {img: `https://picsum.photos/250/250?random&t=${Math.random()}`},
  //   {img: `https://picsum.photos/250/250?random&t=${Math.random()}`},
  //   {img: `https://picsum.photos/250/250?random&t=${Math.random()}`},
  //   {img: `https://picsum.photos/250/250?random&t=${Math.random()}`}
  // ];

  // slideConfig = {'slidesToShow': 2, 'slidesToScroll': 1};

}
