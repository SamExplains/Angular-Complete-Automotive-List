import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HeaderComponent} from './header/header.component';
import { JobsComponent } from './jobs/jobs.component';
import { JobsListComponent } from './jobs/jobs-list/jobs-list.component';
import { JobDetailComponent } from './jobs/job-detail/job-detail.component';
import { JobItemComponent } from './jobs/jobs-list/job-item/job-item.component';
import { AutomotiveListComponent } from './automotive-list/automotive-list.component';
import { AutomotiveEditComponent } from './automotive-list/automotive-edit/automotive-edit.component';
import { DropdownDirective } from './shared/dropdown.directive';
import {JobService} from './jobs/job.service';
import {AutomotiveListService} from './automotive-list/automotive-list.service';
import {AppRoutingModule} from './app-routing.module';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    JobsComponent,
    JobsListComponent,
    JobDetailComponent,
    JobItemComponent,
    AutomotiveListComponent,
    AutomotiveEditComponent,
    DropdownDirective
  ],
  imports: [
    BrowserModule, FormsModule, HttpModule, AppRoutingModule
  ],
  providers: [AutomotiveListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
