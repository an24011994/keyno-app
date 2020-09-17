import { CardService } from './../../core/service/card.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-card',
  templateUrl: './view-card.component.html',
  styleUrls: ['./view-card.component.css'],
})
export class ViewCardComponent implements OnInit {
  list=[1]

  constructor(private cardService: CardService ) {}

  ngOnInit(): void {
    this.cardService.getArticles().subscribe((data:any)=>{
      console.log(data);
      
    })
  }
}
