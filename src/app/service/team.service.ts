import { Injectable } from '@angular/core';
import { TeamMember } from '../model/team-member'
import { Http, Response } from '@angular/http'

@Injectable()
export class TeamService {
  private teamMembers: TeamMember[] = [];

  constructor(private http: Http) { }

  public getTeamMembers() : TeamMember[] {
     this.http.get("http://localhost:8082/users/")
              .subscribe(
                (response: Response) => {
                  const data = response.json();
                  for (const member of data._embedded.users) {
                    const memberTmp = new TeamMember(member.firstName, member.lastName)
                    this.teamMembers.push(memberTmp);  
                  }
                }
              );
     return this.teamMembers;         
  }

  public addTeamMember(firstName: string, lastName: string):void {
    //this.teamMembers.push(new TeamMember(firstName, lastName));
    this.http.post("http://localhost:8082/users/", new TeamMember(firstName, lastName))
    .subscribe(
      (response:Response) => {
        //console.log(response.json)
        this.teamMembers.push(new TeamMember(response.json().firstName, response.json().lastName))
      },
      (error:any) => {console.log(error);}
    )
  }

  public getTotalTicketCount(): number {
    var totalTicketCount: number = 0;
    for (let member of this.teamMembers) {
      totalTicketCount += member.ticketCount;
    }
    return totalTicketCount;
  }
}