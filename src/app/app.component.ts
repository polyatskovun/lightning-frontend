import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from './service/user.service';
import {User} from './model/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Cервіс розрахунку світлової ефективності';
  isLogin = false;
  isRegister = false;
  isError = false;
  user: User = {
    username: '',
    password: ''
  };

  constructor(private router: Router,
              private userService: UserService) {
    this.isLogin = sessionStorage.getItem('login') === 'true';
  }

  getClass(url: string): string {
    if (url == '/rooms-details' && this.router.url.includes(url)) {
      return 'selected';
    } else if (url == '/rooms' && this.router.url.includes(url) && !this.router.url.includes('/rooms-details')) {
      return 'selected';
    } else if (url == '/room-lightning' && this.router.url.includes(url)) {
      return 'selected';
    } else {
      return '';
    }
  }

  login(): void {
    this.userService.login(this.user).subscribe(r => {
      if (r && r.isAccess) {
        sessionStorage.setItem('login', 'true');
        this.isLogin = true;
      }
      this.isError = true;
    });
  }

  register(): void {
    this.userService.save(this.user).subscribe(r => {
      this.isRegister = false;
    });
  }

  onRegister(): void {
    this.isRegister = true;
  }

  onLogin(): void {
    this.isRegister = false;
  }

  logout(): void {
    sessionStorage.removeItem('login');
    this.isLogin = false;
  }
}
