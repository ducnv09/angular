import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component } from '@angular/core';
import { catchError, concat, concatMap, exhaustMap, filter, finalize, from, interval, map, mergeMap, Observable, of, switchMap, take, tap, timer } from 'rxjs';

@Component({
  selector: 'app-angular-rxjs',
  standalone: true,
  imports: [
    CommonModule
  ],
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
    this.createObservable();
  }

  triggerMe() {
    console.log('Triggered');
  }

  // createObservable() {
  //   const observable = new Observable((subscriber) => {
  //     // subscriber.next(1);
  //     // subscriber.next(2);

  //     // //Emit an error
  //     // subscriber.error('Something get wrong');

  //     // subscriber.next(3);
  //     // subscriber.complete();

  //     let count = 0;
  //     const interval = setInterval(() => {
  //       subscriber.next(count++);
  //     }, 1000);

  //     setTimeout(() => {
  //       subscriber.error('Something went wrong');
  //     }, 5000);

  //     //Cleanup function
  //     return () => {
  //       clearInterval(interval);
  //     }
  //   });

  //   //Explicit observer object 
  //   // const observer = {
  //   //   next: (value: any) => {
  //   //     console.log(value);
  //   //   },
  //   //   error: (error: any) => {
  //   //     console.error(error);
  //   //   },
  //   //   complete: () => {
  //   //     console.log('Complete');
  //   //   },
  //   // };

  //   //Subscribe
  //   // observable.subscribe(observer);

  //   const subscription = observable
  //     .pipe(
  //       // //khi Observable hoàn thành thì chạy
  //       // finalize(() => { 
  //       //   this.triggerMe();
  //       // }).

  //       // filter((value: any) => value % 2 === 0),
  //       // take(3),

  //       // map((value: any) => {
  //       //   return value * 2;
  //       // }),

  //       catchError((error) => of(error)),

  //     )
  //     .subscribe({
  //       next: (value: any) => {
  //         console.log(value);
  //       },
  //       error: (error: any) => {
  //         console.error(error);
  //         // this.triggerMe();
  //       },
  //       complete: () => {
  //         console.log('Complete');
  //         // this.triggerMe();
  //       },
  //     });

  //   // observable.subscribe(
  //   //   (value) => console.log(value),
  //   //   (error) => console.error(error),
  //   //   () => console.log('Complete')
  //   // );

  //   // setTimeout(() => {// sau 5s thì hủy đăng kí
  //   //   subscription.unsubscribe();
  //   // }, 5000);
  // }

  fetchUserData(userId: string) {
      return timer(1000 * Math.random()).pipe(
        // return timer(1000).pipe(
        map(() => {
          return { userId };
        })
      );
  }

  // createObservable() {
  //   of('1', '2', '3', '4', '5')
  //     // .pipe(mergeMap((userId: string) => this.fetchUserData(userId)))
  //     // .pipe(concatMap((userId: string) => this.fetchUserData(userId)))
  //     // .pipe(switchMap((userId: string) => this.fetchUserData(userId)))
  //     .pipe(exhaustMap((userId: string) => this.fetchUserData(userId)))
  //     .subscribe((data) => {
  //       console.log(data);
  //     });
  // }

  // createObservable() {
  //   interval(1000)
  //     .pipe(take(5))
  //     .pipe(
  //       exhaustMap((value) => {
  //         return interval(500).pipe(
  //           take(1),
  //           map(() => value)
  //         );
  //       })
  //     )
  //     .subscribe(console.log);
  // }

  createObservable() {
    of('1', '2', '3', '4', '5')
      .pipe(tap((value) => console.log('Before map: ', value)))
      .pipe(map((value: any) => value * 2))
      .subscribe((data) => {
        console.log(data);
      });
  }
}
