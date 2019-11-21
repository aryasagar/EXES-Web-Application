import { Component, OnDestroy} from '@angular/core';
import { AuthService } from './core/auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {

  constructor ( public authService: AuthService ){}

  ngOnDestroy(){
    this.authService.doLogout();
  }

}
