import { Component, OnInit } from '@angular/core';
import {Project} from '../../Project';
import {PROJECTS} from '../../projectsList';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = PROJECTS;

  constructor() { }

  ngOnInit(): void {
  }

}
