import { ChangeDetectorRef, Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-angular-rxjs',
  standalone: true,
  imports: [],
  templateUrl: './angular-rxjs.component.html',
  styleUrl: './angular-rxjs.component.scss'
})
export class AngularRxjsComponent {

  constructor(
    // private apiService: ApiService,
    private cdr: ChangeDetectorRef
  ) {}

  // array to story the output messages
  outputs: { time: string; message: string} [] = [];

  // trigger when the component is initialized
  ngOnInit(): void {

  }

  createObservable() {
    const observable = new Observable((subscriber) => {
      subscriber.next(1);
      subscriber.next(2);
      subscriber.next(3);
      subscriber.complete();
    });

    //Explicit observer object 
    const observer = {
      next: ()
    }
  }
}
