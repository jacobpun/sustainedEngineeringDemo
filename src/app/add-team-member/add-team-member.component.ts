import { Component, OnInit } from '@angular/core';
import { TeamService } from '../service/team.service'

@Component({
  selector: 'app-add-team-member',
  templateUrl: './add-team-member.component.html',
  styleUrls: ['./add-team-member.component.css']
})
export class AddTeamMemberComponent implements OnInit {

  private firstName: string;
  private lastName: string;

  constructor(private teamService: TeamService) { }

  ngOnInit() {
  }

  onButtonClick() {
    this.teamService.addTeamMember(this.firstName, this.lastName)
  }
}
