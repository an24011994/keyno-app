import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CardService implements OnInit {
share=[]
  constructor(private http: HttpClient) { }
ngOnInit(){
  
}
getArticles(){
  return this.http
      .get('https://conduit.productionready.io/api/articles')
      
}
}
