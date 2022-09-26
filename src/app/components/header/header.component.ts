import { Component, OnInit } from '@angular/core';
import {Project} from '../../Project';
import {PROJECTS} from '../../projectsList';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title: string = 'Portfolio'
  projects: Project[] = PROJECTS;

  constructor() { }

  ngOnInit(): void {
  }

  sayHello(){
    console.log('hello');
  }
}
