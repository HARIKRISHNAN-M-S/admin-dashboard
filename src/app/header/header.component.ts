import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {


// output decreator ------@output

@Output() onMenuBtnClick=new EventEmitter

  menubtnClicked(){
    this.onMenuBtnClick.emit()

  }
}
