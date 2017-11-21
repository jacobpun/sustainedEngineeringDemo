import { Component, OnInit, Input } from '@angular/core';
import { TeamMember } from '../model/team-member'

@Component({
  selector: 'app-team-member',
  templateUrl: './team-member.component.html',
  styleUrls: ['./team-member.component.css']
})
export class TeamMemberComponent implements OnInit {

  @Input() private member: TeamMember;

  constructor() { }

  ngOnInit() {
  }
}
