import {Component, Input, OnInit} from '@angular/core';
import {Job} from '../jobs.model';

@Component({
  selector: 'app-job-detail',
  templateUrl: './job-detail.component.html',
  styleUrls: ['./job-detail.component.css']
})
export class JobDetailComponent implements OnInit {
  @Input() job: Job;
  constructor() { }

  ngOnInit() {
  }

}
