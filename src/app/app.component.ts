import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PortfolioComponent } from "./portfolio/portfolio.component";
import { PortfolioV2Component } from "./portfolio-v2/portfolio-v2.component";
import { DataTableComponent } from "./data-table/data-table.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PortfolioComponent, PortfolioV2Component, DataTableComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'giao_dien3';
}
