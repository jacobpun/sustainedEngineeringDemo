import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ShortenPipe } from './pipes/shorten.pipe'

import { AppComponent } from './app.component';
import { TeamComponentComponent } from './team-component/team-component.component';
import { TeamMemberComponent } from './team-member/team-member.component';
import { AddTeamMemberComponent } from './add-team-member/add-team-member.component';

@NgModule({
  declarations: [
    AppComponent,
    TeamComponentComponent,
    TeamMemberComponent,
    AddTeamMemberComponent,
    ShortenPipe
  ],
  imports: [
    BrowserModule, FormsModule, HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
