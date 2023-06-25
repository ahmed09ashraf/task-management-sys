import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  showButton: boolean;


  constructor(private router: Router) {
    this.showButton = false;
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.showButton = this.router.url === '/' || this.router.url === '/tasks';
      }
    });
}
logout() {
  // Perform any logout logic here (e.g., clearing session, token, etc.)
  
  // Redirect to the login page
  this.router.navigateByUrl('/login');
}
}
