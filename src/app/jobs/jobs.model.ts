import {SharedJob} from '../shared/jobs.model';

export class Job {
  public name: string;
  public description: string;
  public imagePath: string;
  public jobs: SharedJob[];


  constructor (name: string, description: string, imagePath: string, job: SharedJob[]) {
    this.name = name;
    this.description = description;
    this.imagePath = imagePath;
    this.jobs = job;
  }

}
