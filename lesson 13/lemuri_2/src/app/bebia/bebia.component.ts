import { Component,Input, ViewEncapsulation,OnInit,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-bebia',
  templateUrl: './bebia.component.html',
  styleUrls: ['./bebia.component.css'],
  // encapsulation:ViewEncapsulation.None
  // encapsulation:ViewEncapsulation.ShadowDom
  // encapsulation:ViewEncapsulation.Emulated
})
export class BebiaComponent {
@Input() names = ['']
@Output() public infoFromNav: EventEmitter<any> = new EventEmitter()
sending(){
  this.infoFromNav.emit('zdarova')
}
}
