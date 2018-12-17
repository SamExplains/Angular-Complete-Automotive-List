import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Job} from '../jobs.model';
import {JobService} from '../job.service';

@Component({
  selector: 'app-jobs-list',
  templateUrl: './jobs-list.component.html',
  styleUrls: ['./jobs-list.component.css']
})
export class JobsListComponent implements OnInit {
  @Output() jobWasSelected = new EventEmitter<Job>();
  jobs: Job[];

  constructor(private jobService: JobService) {}

  ngOnInit() {
    this.jobs = this.jobService.getJobs();
  }

  onJobSelected(job: Job) {
    this.jobWasSelected.emit(job);
  }
}
