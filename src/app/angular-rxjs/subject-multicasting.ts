import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AsyncSubject, BehaviorSubject, finalize, interval, map, Observable, of, ReplaySubject, shareReplay, Subject, switchMap, switchMapTo, take, takeUntil, timer } from "rxjs";

const observable = interval(500).pipe(take(5));

const observerA = {
    next: (val: any) => console.log(`Observer A: ${val}`),
    error: (err: any) => console.log(`Observer A Error: ${err}`),
    complete: () => console.log(`Observer A complete`),
};

observable.subscribe(observerA);

const observerB = {
    next: (val: any) => console.log(`Observer B: ${val}`),
    error: (err: any) => console.log(`Observer B Error: ${err}`),
    complete: () => console.log(`Observer B complete`),
};

setTimeout(() => {
    observable.subscribe(observerB);
}, 2000);

/**
Output:

Observer A: 0
Observer A: 1
Observer A: 2
Observer A: 3
Observer A: 4
Observer A complete
Observer B: 0
Observer B: 1
Observer B: 2
Observer B: 3
Observer B: 4
Observer B complete
*/

// Bây giờ thay vì subscribe riêng lẻ như ở các ví dụ trên, chúng ta hãy thêm một hybrid observer như sau:
// const hybridObserver = {
//     observers: [],
//     registerObserver(observer) {
//         this.observers.push(observer);
//     },
//     next(value: any) {
//         this.observers.forEach(observer => observer.next(value));
//     },
//     error(err: any) {
//         this.observers.forEach(observer => observer.error(err));
//     },
//     complete() {
//         this.observers.forEach(observer => observer.complete());
//     }
// }

// hybridObserver.registerObserver(observerA);

// observable.subscribe(hybridObserver);

// setTimeout(() => {
//     hybridObserver.registerObserver(observerB);
// }, 2000);

/**
Output:
 
Observer A: 0
Observer A: 1
Observer A: 2
Observer A: 3
Observer A: 4
Observer B: 4
Observer A complete
Observer B complete
*/

// const hybridObserver = {
//     observers: [],
//     subscribe(observer) {
//         this.observers.push(observer);
//     },
//     next(value: any) {
//         this.observers.forEach((observer) => observer.next(value));
//     },
//     error(err: any) {
//         this.observers.forEach((observer) => observer.error(err));
//     },
//     complete() {
//         this.observers.forEach((observer) => observer.complete());
//     },
// };

// hybridObserver.subscribe(observerA);

// observable.subscribe(hybridObserver);

// setTimeout(() => {
//     hybridObserver.subscribe(observerB);
// }, 2000);

// const subject = new Subject();

// subject.subscribe(observerA);

// observable.subscribe(subject);

// setTimeout(() => {
//   subject.subscribe(observerB);
// }, 2000);


//subject
// private readonly $subject:

// this.subject.asObservable()

const createObserver = (observer: any) => ({
    next: (val: any) => console.log(observer, val),
    error: (err: any) => console.log(observer, err),
    complete: () => console.log(observer, ) 
});

// const subject = new Subject();
// subject.subscribe(createObserver('A'));
// subject.next('hello');
// subject.next('world'); // A hello A world
// subject.complete(); // A hello A world A complete

// subject.subscribe(createObserver('B'));
// subject.next('this will');
/**
 * output
 * A hello
 * A world
 * A this will
 * B this will
 */

const loadingSubject = new Subject();
function getUsers() {
    loadingSubject.next(true);
    return timer(3000).pipe(
        switchMapTo(of("user")),
        finalize(() => {
            loadingSubject.next(false);
        })
    );
}

loadingSubject.subscribe(createObserver('Component'));
getUsers().subscribe();
/**
 * Component true
 * Component false
 */

const behaviorSubject = new BehaviorSubject('hello');
behaviorSubject.subscribe(createObserver('A'));
behaviorSubject.next('world');
behaviorSubject.subscribe(createObserver('B'));
/**
 * A hello
 * A world
 * B world
 */

let a;
behaviorSubject.subscribe(val => {
    a = val;
});

console.log(a); // world
console.log({a}); // {a: "world"}

//ví dụ
// permissionSubject: BehaviorSubject;

// function hasPermission$() {
//     return permissionSubject.pipe(map);
// }

// function hasPermission() {
//     let hasPermission = false;
//     hasPermission$.subscribe(permission => {
//         hasPermission = permission;
//     })

//     return hasPermission
// }

const subject = new BehaviorSubject(0); // 0 is the initial value

subject.subscribe({
  next: (v) => console.log('observerA: ' + v),
});

subject.next(1);
subject.next(2);

subject.subscribe({
  next: (v) => console.log('observerB: ' + v),
});

subject.next(3);

/**
Output

observerA: 0
observerA: 1
observerA: 2
observerB: 2
observerA: 3
observerB: 3
*/

//replaySubject(2)
// const replaySubject = new ReplaySubject(2);

// let ar;
// replaySubject.subscribe(val => {
//     console.log({val});
//     ar = val;
// })

// console.log({ar});
// replaySubject.next('hello');
/**
 * {a: undefined}
 * {val: "hello"}
 */

// const replaySubject = new ReplaySubject(2);
const replaySubject = new ReplaySubject(1);

replaySubject.subscribe(createObserver('A'));
replaySubject.next('hello');
replaySubject.next('world');
replaySubject.subscribe(createObserver('B'));
/** nếu để só 2
 * A hello
 * A world
 * B hello
 * B world
 */

/** nếu để só 1
 * A hello
 * A world
 * B world
 */

//windowTime
const subject1 = new ReplaySubject(100, 500 /**windowTime */);

subject.subscribe({
    next: (v) => setInterval(() => subject.next(i++), 200)

});

let i = 1;
setTimeout(() => {
    subject1.subscribe({
        next: (v: any) => console.log('observerB: ' + v)
    });
}, 1000);

setTimeout(() => {
    subject.complete();
    clearInterval(i);   
}, 2000);

/**
Output:

observerA: 1
observerA: 2
observerA: 3
observerA: 4
observerA: 5
observerB: 3
observerB: 4
observerB: 5
observerA: 6
observerB: 6
...
*/

//AsyncSubject
// const subject = new AsyncSubject();

// subject.subscribe({
//   next: (v) => console.log('observerA: ' + v),
// });

// subject.next(1);
// subject.next(2);
// subject.next(3);
// subject.next(4);

// subject.subscribe({
//   next: (v) => console.log('observerB: ' + v),
// });

// subject.next(5);
// subject.complete();

/**
Output:

observerA: 5
observerB: 5
*/

//shareReplay

// export interface Joke {
//     id: number;
//     joke: string;
//     categories: Array<string>;
//   }
  
//   export interface JokeResponse {
//     type: string;
//     value: Array<Joke>;
//   }
  
//   const API_ENDPOINT = 'https://api.icndb.com/jokes/random/5?limitTo=[nerdy]';
//   const REFRESH_INTERVAL = 10000;
//   const CACHE_SIZE = 1;
  
//   @Injectable()
//   export class JokeService {
//     private cache$: Observable<Array<Joke>>;
//     private reload$ = new Subject<void>();

//     constructor(private http: HttpClient) {}

//   // This method is responsible for fetching the data.
//   // The first one who calls this function will initiate
//   // the process of fetching data.
//   get jokes() {
//     if (!this.cache$) {
//       // Set up timer that ticks every X milliseconds
//       const timer$ = timer(0, REFRESH_INTERVAL);

//       // For each timer tick make an http request to fetch new data
//       // We use shareReplay(X) to multicast the cache so that all
//       // subscribers share one underlying source and don't re-create
//       // the source over and over again. We use takeUntil to complete
//       // this stream when the user forces an update.
//       this.cache$ = timer$.pipe(
//         switchMap(() => this.requestJokes()),
//         takeUntil(this.reload$),
//         shareReplay(CACHE_SIZE)
//       );
//     }

//     return this.cache$;
//   }

//   // Public facing API to force the cache to reload the data
//   forceReload() {
//     this.reload$.next();
//     this.cache$ = null;
//   }

//   // Helper method to actually fetch the jokes
//   private requestJokes() {
//     return this.http
//       .get<JokeResponse>(API_ENDPOINT)
//       .pipe(map((response) => response.value));
//   }
// }