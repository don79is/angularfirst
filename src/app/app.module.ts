import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AppCoursesComponent} from './app-courses.component';
import {AppAutorsComponent} from './app-autor.component';

@NgModule({
    declarations: [
        AppComponent,
        AppCoursesComponent,
        AppAutorsComponent
    ],
    imports: [
        BrowserModule
    ],
    providers: [],
    bootstrap: [AppComponent]

})
export class AppModule {
}
