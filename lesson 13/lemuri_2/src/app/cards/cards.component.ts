import { Component } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {
  // 'array_1','array_2','array_3','array_4'
  card_images = ['./New Project (7).jpg','./New Project (8).jpg','./New Project (9).jpg','./New Project (10).jpg']
card_names:string[] = []
 cars = [
  {
    "name": "array_1",
    "image": '../../assets/New Project (7).jpg',
    "username": 'idk',
  },
  {
    "name": "array_2",
    "image": "../../assets/New Project (8).jpg",
    "username": 'idk_2',
  },
  {
    "name": "array_3",
    "image": "../../assets/New Project (9).jpg",
    "username": 'idk_3',
  },
  {
    "name": "array_4",
    "image": "../../assets/New Project (10).jpg",
    "username": 'idk_4',
  },
]


  
}
