import {EventEmitter, Injectable} from '@angular/core';
import {SharedJob} from '../shared/jobs.model';

@Injectable({
  providedIn: 'root'
})
export class AutomotiveListService {
  jobsChanged = new EventEmitter<SharedJob[]>();

  private jobs: SharedJob[] = [ new SharedJob('Testarossa', 150000), new SharedJob( '458', 350000 ) ];

  constructor() { }

  getAutomotiveList() {
    return this.jobs.slice();
  }

  addJob(job: SharedJob) {
    this.jobs.push(job);
    /* Emits updated array when a new element added. */
    this.jobsChanged.emit(this.jobs.slice());
  }

}
