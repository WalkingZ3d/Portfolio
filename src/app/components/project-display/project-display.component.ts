import { Component, OnInit } from '@angular/core';
import { Project } from '../../Project';
import {PROJECTS} from '../../projectsList';

@Component({
  selector: 'app-project-display',
  templateUrl: './project-display.component.html',
  styleUrls: ['./project-display.component.css']
})
export class ProjectDisplayComponent implements OnInit {
  projects: Project[] = PROJECTS;
  projectChosen!: Project;

  constructor() { }

  ngOnInit(): void {
    const idNum = window.location.href.split('/')[4];
    this.projectChosen = this.projects[parseInt(idNum)]
    if (!this.projectChosen) {
      window.location.assign('/404');
    }
  }

}
