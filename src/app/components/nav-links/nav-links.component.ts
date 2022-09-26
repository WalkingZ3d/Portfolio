import { Component, OnInit, Input } from '@angular/core';
import {Project} from '../../Project';

@Component({
  selector: 'app-nav-links',
  templateUrl: './nav-links.component.html',
  styleUrls: ['./nav-links.component.css']
})
export class NavLinksComponent implements OnInit {
  @Input() project!: Project;

  constructor() { }

  ngOnInit(): void {
  }

}