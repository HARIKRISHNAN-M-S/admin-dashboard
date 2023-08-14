import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
 
// create empty properties to hold data from html
     @Input()
  bg:string=''
 @Input() icon:string=''
  @Input()description:string=''
 @Input() count:string=''

}
