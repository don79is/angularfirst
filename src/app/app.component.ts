import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  template: '<h1>{{title}}</h1> ' +
  '<app-autor></app-autor>' +
  '<app-courses> </app-courses>'
  // styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Labas Angular';
}
