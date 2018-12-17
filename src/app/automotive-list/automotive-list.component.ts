import {Component, Injectable, OnInit} from '@angular/core';
import {SharedJob} from '../shared/jobs.model';
import {AutomotiveListService} from './automotive-list.service';

@Component({
  selector: 'app-automotive-list',
  templateUrl: './automotive-list.component.html',
  styleUrls: ['./automotive-list.component.css'],
})
export class AutomotiveListComponent implements OnInit {
  jobs: SharedJob[];

  constructor(private alService: AutomotiveListService) { }

  ngOnInit() {
    this.jobs = this.alService.getAutomotiveList();
    this.alService.jobsChanged.subscribe( (job: SharedJob[]) => { this.jobs = job; } );
  }

}
