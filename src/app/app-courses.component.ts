import {Component} from '@angular/core';
@Component({
    selector: 'app-courses',
    template: `<h2>{{title}}</h2>
    <ul>
        <li>Labas</li>
        <li>Angular</li>
        <li *ngFor="let course of courses">{{course}}</li>
    </ul>`
// styleUrls: ['./app.component.css']
})
export class AppCoursesComponent {
    title = 'New title';
    courses = ['k1', 'k2', 'k3'];
}
