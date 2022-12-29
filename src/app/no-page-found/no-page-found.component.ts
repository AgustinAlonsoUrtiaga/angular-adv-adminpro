import { Component } from '@angular/core';

@Component({
  selector: 'app-no-page-found',
  templateUrl: './no-page-found.component.html',
  styleUrls: [ './nopagefound.component.css'
  ]
})
export class NoPageFoundComponent {
  year = new Date().getFullYear();
}
