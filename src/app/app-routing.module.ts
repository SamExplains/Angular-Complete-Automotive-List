import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {JobsComponent} from './jobs/jobs.component';
import {AutomotiveListComponent} from './automotive-list/automotive-list.component';

const appRoute: Routes = [
  // pathMatch Overwrite default prefix of every rout including a ''
  { path: '', redirectTo: '/jobs', pathMatch: 'full' },
  { path: 'jobs', component: JobsComponent },
  { path: 'automotive-list', component: AutomotiveListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoute)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
