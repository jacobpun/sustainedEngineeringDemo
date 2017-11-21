import { Component, OnInit } from '@angular/core';
import { TeamMember } from '../model/team-member'
import { TeamService } from '../service/team.service'

@Component({
  selector: 'app-team-component',
  templateUrl: './team-component.component.html',
  styleUrls: ['./team-component.component.css']
})
export class TeamComponentComponent implements OnInit {
  teamName: string = "Maintenance Engineering Team";
  teamMembers: TeamMember[] = [];

  constructor(private teamService: TeamService) { }

  ngOnInit() {
    this.teamMembers = this.teamService.getTeamMembers();   
  }

  getTotalTicketCount() : number {
    return this.teamService.getTotalTicketCount();
  }
}