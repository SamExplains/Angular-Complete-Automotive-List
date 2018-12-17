import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {Job} from '../../jobs.model';
import {JobService} from '../../job.service';

@Component({
  selector: 'app-job-item',
  templateUrl: './job-item.component.html',
  styleUrls: ['./job-item.component.css']
})
export class JobItemComponent implements OnInit {
  // Allows binding component from outside
  @Input() job: Job;

  constructor(private jobService: JobService) { }

  ngOnInit() {
  }

  onSelected() {
    this.jobService.jobSelected.emit(this.job);
  }
}
