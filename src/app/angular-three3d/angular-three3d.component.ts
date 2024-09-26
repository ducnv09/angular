import { Component } from '@angular/core';
import { ProductInfoComponent } from "./components/product-info/product-info.component";
import { ColorOptionsComponent } from "./components/color-options/color-options.component";
import { Experience } from '../experience/experience.component';
import { NgtCanvas } from 'angular-three';

@Component({
  selector: 'app-angular-three3d',
  standalone: true,
  imports: [
    ProductInfoComponent, 
    ColorOptionsComponent,
    NgtCanvas
  ],
  templateUrl: './angular-three3d.component.html',
  styleUrl: './angular-three3d.component.scss'
})
export class AngularThree3dComponent {
  sceneGraph = Experience;
} 
