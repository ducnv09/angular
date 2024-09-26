import { Component, inject, signal } from '@angular/core';
import { ConfigService } from '../../services/config.service';

@Component({
  selector: 'app-color-options',
  standalone: true,
  imports: [],
  templateUrl: './color-options.component.html',
  styleUrl: './color-options.component.scss'
})
export class ColorOptionsComponent {
  configService = inject(ConfigService);

  colors = signal<string[]>([
    '#b3478c',
    '#1e62c0',
    '#ffa764',
    '#3de68b',
    '#a11f2a',
    '#ffbf00',
  ]);
}
