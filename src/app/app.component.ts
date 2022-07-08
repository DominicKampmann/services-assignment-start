import { Component } from '@angular/core';
import { CounterService } from './services/counter.service';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[UserService] //where you provide it determines how many instances of that service are created, doing it globally here ensures that the user arrays are the same for both the active-users and inactive-users module instead of creating two separate ones
})
export class AppComponent {

  constructor(public counterService: CounterService) //If private the service wont be accessible in the html template, but only in this specific file
  {}

}
