import { NgtCanvas } from 'angular-three';
import { Experience } from './experience/experience.component';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AngularThree3dComponent } from "./angular-three3d/angular-three3d.component";
import { AngularRxjsComponent } from "./angular-rxjs/angular-rxjs.component";
@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, AngularThree3dComponent, NgtCanvas, AngularRxjsComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
    // sceneGraph = Experience;
    title = 'angular18';
}