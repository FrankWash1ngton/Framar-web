import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'framar-web';

  constructor(private router: Router){
  }

  navigateTo(page: string) {
    this.router.navigate([page]); 
  }
}
