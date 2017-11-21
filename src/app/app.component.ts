import { Component } from '@angular/core';
import { TeamService } from './service/team.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TeamService]
})

export class AppComponent {
  title = 'app';
}
