import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Cервіс розрахунку світлової ефективності';

  constructor(private router: Router) {
  }

  getClass(url: string): string {
    if (this.router.url.includes(url)) {
      return 'selected';
    } else {
      return '';
    }
  }
}
