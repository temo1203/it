import { Component } from "@angular/core";
@Component ({
   selector: 'prev-tops',
   template: `
   <h2>Lemuri</h2>
   {{title_2}}
   <ul>
  <li *ngFor = 'let vibe of ar'>{{vibe}}</li>
   </ul>
   `

})
export class prevTopics{
title = 'lemuri_2'
title_2 = 'title_2_3'
ar = ['array_1','array_2']
}