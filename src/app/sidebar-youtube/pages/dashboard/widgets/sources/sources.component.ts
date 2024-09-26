import { Component, ElementRef, viewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-sources',
  standalone: true,
  imports: [
    MatButtonModule
  ],
  templateUrl: './sources.component.html',
  styleUrl: './sources.component.scss'
})
export class SourcesComponent {

  chart = viewChild.required<ElementRef>('chartDoughnut');

  ngOnInit(): void {
    new Chart(this.chart().nativeElement, {
      type: 'doughnut',
      data: {
        labels: ['Search', 'Suggested videos', 'Direct', 'External', 'Browse features'],
        datasets: [
          {
            label: 'Views',
            data: [43.6, 25.8, 9.2, 6.2, 5.7],
            backgroundColor: ['#36A2EB', '#FF6384', '#FF9F40', '#FFCD56', '#4BC0C0'],
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'right',
          },
          title: {
            display: false,
            text: 'Chart.js Doughnut Chart'
          }
        }
      },
    });
  }
}
