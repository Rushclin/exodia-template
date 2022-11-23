import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./../../app.component.scss']
})
export class NavbarComponent {

  toggle_nav = false;
  toggle_dropdown = false

  toggle_nav_fn = () => {
    this.toggle_nav = !this.toggle_nav
  }
  toggle_dopdown_fn = () => {
    this.toggle_dropdown = !this.toggle_dropdown
  }

}
