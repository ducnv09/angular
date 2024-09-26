
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AngularThree3dComponent } from "./angular-three3d/angular-three3d.component";
@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, AngularThree3dComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
    title = 'angular18';
}