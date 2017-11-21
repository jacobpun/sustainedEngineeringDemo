export class TeamMember {
    constructor(public firstName: string = "First Name Unknown", public lastName: string = "Last Name Unknown", public ticketCount:number = 0) { }

    public claimTicket() {
        this.ticketCount++;
    }

    public closeTicket() {
        this.ticketCount--;
    }
}