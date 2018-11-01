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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    JobsComponent,
    JobsListComponent,
    JobDetailComponent,
    JobItemComponent,
    AutomotiveListComponent,
    AutomotiveEditComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
