import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-icon-item',
  templateUrl: './icon-item.component.html',
  styleUrls: ['./icon-item.component.css'],
})
export class IconItemComponent {
  @Input() iconSrc="";  
  @Input() iconName="";

  modal:boolean=false;
  toggleModal(){
    this.modal=!this.modal;
  }



}
