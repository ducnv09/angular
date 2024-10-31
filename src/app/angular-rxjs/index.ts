import { defer, from, fromEvent, fromEventPattern, interval, Observable, of, throttleTime, timer } from "rxjs";

// const rate = 1000;
// let lastMove = Date.now() - rate;
// document.addEventListener('mousemove', ev => {
//     if (Date.now() - lastMove >= rate) {
//         console.log(ev);
//         lastMove = Date.now();
//     }
// });
// => bắt tín hiệu khi di chuột


// fromEvent<MouseEvent>(document, 'mousemove').pipe(
//     throttleTime(1000),
//     map((ev: MouseEvent) => ev.clientX + ' ' + ev.clientY)
// ).subscribe(console.log);


const observable = new Observable(function subscribe(observer) {
    const id = setTimeout(() => {
        observer.next('Hello Rxjs');
        observer.complete();
    }, 1000);

    return function unsubscribe() {
        observer.complete();
        clearTimeout(id);
    };
});

// observable.subscribe(
//     val => console.log(val),
//     err => console.error(err),
//     () => console.log('complete')
// )

// observable.subscribe(
//     val => console.log(val),
//     null,
//     () => console.log('complete')
// )

// observable.subscribe(
//     val => console.log(val),
//     err => console.error(err),
//     null
// )

// observable.subscribe(
//     val => console.log(val) //2 cái dưới null thì không cần viết
// )

// truyền vào 1 đối tượng 
const subscription = observable.subscribe({
    next: val => console.log(val),
    error: err => console.error(err),
    complete: () => console.log('complete')
});

subscription.add(observable.subscribe(console.log));

setTimeout(() => {
    subscription.unsubscribe();
}, 5000); //sau 5s thì hủy


const observer = {
    next: (val: any) => console.log(val),
    error: (err: any) => console.log(err),
    complete: () => console.log('complete')
};

// Primitive value
// output: 'hello'
// complete: 'complete'
of('hello').subscribe(observer);


// Object/Array
// output: [1, 2, 3]
// complete: 'complete'
of([1, 2, 3]).subscribe(observer);


// Dãy giá trị (sequence of values)
// output: 1, 2, 3, 'hello', 'world', {foo: 'bar'}, [4, 5, 6]
// complete: 'complete'
of(1, 2, 3, 'hello', 'world', { foo: 'bar' }, [4, 5, 6]).subscribe(observer);

// Array
// output: 1, 2, 3
// complete: 'complete'
from([1, 2, 3]).subscribe(observer);

// String
// output: 'h', 'e', 'l', 'l', 'o', ' ', 'w', 'o', 'r', 'l', 'd'
// complete: 'complete'
from('hello world').subscribe(observer);


// Map/Set
const map = new Map();
map.set(1, 'hello');
map.set(2, 'bye');

// output: [1, 'hello'], [2, 'bye']
// complete: 'complete'
from(map).subscribe(observer);

const set = new Set();
set.add(1);
set.add(2);

// output: 1, 2
// complete: 'complete'
from(set).subscribe(observer);

// Promise
// output: 'hello world'
// complete: 'complete'
from(Promise.resolve('hello world')).subscribe(observer);


// output (example): MouseEvent {...}
// complete: không có gì log.
fromEvent(document, 'click').subscribe(observer);

// output (example): KeyboardEvent {...}
// complete: không có gì log.
fromEvent(document, 'keydown').subscribe(observer);


fromEventPattern(
    (handler) => {
        document.addEventListener('click', handler);
    }, //handler
    (handler) => {
        document.removeEventListener('click', handler);
    } // removeHandler  
).subscribe(observer);

// private _listen(url: string, methodName: string) {
//     const hub = this._getHub(url);
//     return fromEventPattern(
//         handler => {
//             hub.connection.on(methodName, handler);

//             if (hub.refCount === 0) {
//                 hub.connection.start();
//             }
    
//             hub.refCount++;
//         },
//         handler => {
//             hub.refCount--;
//             hub.connection.off(methodName, handler);

//             if (hub.refCount === 0) {
//                 hub.connection.stop();
//                 delete this._hubs[url];
//             }
//         },
//     )   
// }


// output: 0, 1, 2, 3, 4, ...
interval(1000) // emit giá trị sau mỗi giây
  .subscribe(observer);


// output: sau 1 giây -> 0
// complete: 'complete'
timer(1000).subscribe(observer);

// output: sau 1 giây -> 0, 1, 2, 3, 4, 5 ...
timer(1000, 1000).subscribe(observer);

// of()
const now$ = of(Math.random());
// output: 0.4146530439875191
now$.subscribe(observer);
// output: 0.4146530439875191
now$.subscribe(observer);
// output: 0.4146530439875191
now$.subscribe(observer);

const now1$ = defer(() => of(Math.random()));
// output: 0.27312186273281935
now1$.subscribe(observer);
// output: 0.7180321390218474
now1$.subscribe(observer);
// output: 0.9626312890837065
now1$.subscribe(observer);