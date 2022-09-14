import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title: string = 'Portfolio'

  constructor() { }

  ngOnInit(): void {
  }

  sayHello(){
    console.log('hello');
  }
}
