import {Component, Input, OnInit} from '@angular/core';
import {Job} from '../jobs.model';
import {JobService} from '../job.service';

@Component({
  selector: 'app-job-detail',
  templateUrl: './job-detail.component.html',
  styleUrls: ['./job-detail.component.css']
})
export class JobDetailComponent implements OnInit {
  @Input() job: Job;

  constructor(private jobService: JobService ) { }

  ngOnInit() {
  }

  addToCheckoutList() {
    this.jobService.addSharedJobToCheckoutList(this.job.jobs);
  }

}
