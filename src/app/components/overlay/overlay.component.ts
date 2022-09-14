import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-overlay',
  templateUrl: './overlay.component.html',
  styleUrls: ['./overlay.component.css']
})
export class OverlayComponent implements OnInit {
  router: any;

  constructor() { }

  ngOnInit(): void {
  }

  getDiv() {
    this.router.navigate(['/'], { fragment: 'section3' });
  }
}
