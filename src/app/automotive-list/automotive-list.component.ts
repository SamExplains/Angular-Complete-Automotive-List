import { Component, OnInit } from '@angular/core';
import {SharedJob} from '../shared/jobs.model';

@Component({
  selector: 'app-automotive-list',
  templateUrl: './automotive-list.component.html',
  styleUrls: ['./automotive-list.component.css']
})
export class AutomotiveListComponent implements OnInit {
  jobs: SharedJob[] = [ new SharedJob('Testarossa', 150000), new SharedJob( '458', 350000 ) ];

  constructor() { }

  ngOnInit() {
  }

}
