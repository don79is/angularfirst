import { Component } from '@angular/core';
@Component({
  selector: 'app-autor',
  template: `<h1>{{title}}</h1>
  <ul>
      <li *ngFor="let autor of autors">{{autor}}</li>
  </ul>`

})
export class AppAutorsComponent {
  title = 'Autors';
  autors = ['adas', 'mada', 'lada'];
}
