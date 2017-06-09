import {Component, NgModule} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // Here could be added some html code without use an external file
  /*template: `
   <app-server></app-server>
   <app-server></app-server>`,*/
  //styleUrls: ['./app.component.css'],
  // Here some styles are added directly
  styles:[`
        h3{ 
            color: dodgerblue;
        }
    `]
})

export class AppComponent {
  name="";
}