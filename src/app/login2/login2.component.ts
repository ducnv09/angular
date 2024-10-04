import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-login2',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './login2.component.html',
  styleUrl: './login2.component.scss'
})
export class Login2Component {
  // Tạo biến để theo dõi trạng thái toggle
  isActive: boolean = false;

  // Phương thức để toggle class
  toggleActive(): void {
    this.isActive = !this.isActive;
  }
}
