import {EventEmitter, Injectable} from '@angular/core';
import {Job} from './jobs.model';
import {SharedJob} from '../shared/jobs.model';
import {AutomotiveListService} from '../automotive-list/automotive-list.service';

@Injectable({
  providedIn: 'root'
})
export class JobService {
  jobSelected = new EventEmitter<Job>();
  private jobs: Job[] = [
    new Job('Ferrari',
        'Sports Car', 'https://image1.redbull.com/rbx02014/0010/1/1260/709/528/gallery/images/gallery_rb13_0002_low_34_012_v08_ric.jpg',
              [ new SharedJob('Racing Seat', 4500), new SharedJob('Steering Wheel', 125) ])
  ];

  constructor(private alService: AutomotiveListService) { }

  getJobs() {
    /* Returns a copy */
    return this.jobs.slice();
  }

  addSharedJobToCheckoutList(job: SharedJob[]) {
    this.alService.addSharedJobs(job);
  }

}
