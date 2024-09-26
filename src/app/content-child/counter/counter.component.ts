import { Component } from '@angular/core';

let _count = 1; 

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  count = _count++; //khi component được tọa mới bởi Angular thì biến tự tăng
  
}
