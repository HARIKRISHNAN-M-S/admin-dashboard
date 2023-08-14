import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'admin-dashbord';

  sidebarOpened:boolean=true

  toggle(){
    this.sidebarOpened=!this.sidebarOpened
  }
}
