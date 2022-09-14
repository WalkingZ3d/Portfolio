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
    console.log('the id: ', window.location.href.split('/')[4]);
    const idNum = window.location.href.split('/')[4];
    console.log('the project: ', this.projects[parseInt(idNum)])
    this.projectChosen = this.projects[parseInt(idNum)]
    console.log('chosen: ', this.projectChosen)
    if (!this.projectChosen) {
      console.log('nope')
      
    }
  }

}
