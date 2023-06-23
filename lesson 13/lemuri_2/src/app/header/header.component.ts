import { Component,Input,OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
   name = ['GOT','rickie and mortie','flash'] 
   Out = ['']
   mimghebi($event:any){
  this.Out = $event
   }
}
