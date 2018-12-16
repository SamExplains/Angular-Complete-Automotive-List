import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {SharedJob} from '../../shared/jobs.model';

@Component({
  selector: 'app-automotive-edit',
  templateUrl: './automotive-edit.component.html',
  styleUrls: ['./automotive-edit.component.css']
})
export class AutomotiveEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;
  @Output() autolistAdded = new EventEmitter<SharedJob>();

  constructor() { }

  ngOnInit() {
  }

  onAddItem() {
    const jobName = this.nameInputRef.nativeElement.value;
    const amountName = this.amountInputRef.nativeElement.value;
    const newJob = new SharedJob(jobName, amountName);
    this.autolistAdded.emit(newJob);
  }
}
