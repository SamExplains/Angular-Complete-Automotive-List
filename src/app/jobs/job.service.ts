import {EventEmitter, Injectable} from '@angular/core';
import {Job} from './jobs.model';

@Injectable({
  providedIn: 'root'
})
export class JobService {
  jobSelected = new EventEmitter<Job>();
  private jobs: Job[] = [
    new Job('Ferrari', 'Sports Car', 'https://image1.redbull.com/rbx02014/0010/1/1260/709/528/gallery/images/gallery_rb13_0002_low_34_012_v08_ric.jpg'),
  ];

  constructor() { }

  getJobs() {
    /* Returns a copy */
    return this.jobs.slice();
  }

}
