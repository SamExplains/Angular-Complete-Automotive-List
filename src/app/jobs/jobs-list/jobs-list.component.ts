import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Job} from '../jobs.model';

@Component({
  selector: 'app-jobs-list',
  templateUrl: './jobs-list.component.html',
  styleUrls: ['./jobs-list.component.css']
})
export class JobsListComponent implements OnInit {
  @Output() jobWasSelected = new EventEmitter<Job>();
  jobs: Job[] = [
    new Job('Ferrari', 'Sports Car', 'https://image1.redbull.com/rbx02014/0010/1/1260/709/528/gallery/images/gallery_rb13_0002_low_34_012_v08_ric.jpg'),
  ];
  constructor() {}

  ngOnInit() {
  }

  onJobSelected(job: Job) {
    this.jobWasSelected.emit(job);
  }
}
