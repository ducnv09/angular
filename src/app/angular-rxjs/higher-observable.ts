import { concatMap, exhaustMap, fromEvent, interval, map, merge, mergeAll, mergeMap, of, partition, take, tap } from "rxjs";

//Observable<number>
interval(1000)
.pipe(map(val => val * 2))
.subscribe(console.log);
//0 2 4 6 8 ...

//Observable<string>
interval(1000)
.pipe(map(val => `I am at: ${val}`))
.subscribe(console.log);
//I am at: 0
//I am at: 1
//I am at: 2 ....

//Observable<Observable>
const hoo = interval(1000) // Outer Observable (Parent Observable)
// .pipe(map(val => `I am at: ${val}`)); // Inner Observable (Child Observable)
.pipe(map(val => of(`I am at: ${val}`)), mergeAll()); // Inner Observable (Child Observable)

hoo.subscribe(console.log); 
//Observable {_isScalar: false, _subscribe: f)
//Observable {_isScalar: false, _subscribe: f).....

hoo.subscribe((obs: any) => {
    obs.subscribe(console.log)
});
//I am at: 0
//I am at: 1
//I am at: 2 ....

const hoo1 = fromEvent(document, 'click') // Outer Observable (Parent Observable)
.pipe(map(val => interval(1000).pipe(take(5))), mergeAll()); // Inner Observable (Child Observable)
hoo.subscribe(console.log); 
// khi 5s trôi qua xong click thì hiện 0 1 2 3 4

//mergeMap
const hoo2 = fromEvent(document, 'click')
.pipe(mergeMap(val => interval(1000).pipe(take(2))));

hoo2.subscribe(console.log);
/*output: khi click 2 lần thì 
0 0 1 1
*/

//concatMap
const hoo3 = fromEvent(document, 'click')
.pipe(concatMap(val => interval(1000).pipe(take(2))));

hoo3.subscribe(console.log);
/*output: khi click 2 lần thì 
0 1 0 1
*/

//exhaustMap
const hoo4 = fromEvent(document, 'click')
.pipe(exhaustMap(val => interval(1000).pipe(take(2))));

hoo3.subscribe(console.log);
/*output: khi click 2 lần thì 
0 1
*/

//pa
const interval$ = interval(1000);

const [even$, odd$] = partition(interval$, val => val % 2 === 0);

merge(
    even$.pipe(map(val => `I am even: ${val}`)),
    odd$.pipe(map(val => `I am odd: ${val}`))
).subscribe(console.log);
/* output:
I am even: 0
I am odd: 1
I am even: 2
I am odd: 3
I am even: 4 ....
*/

//tap()
even$.pipe(
    tap(val => console.log('before map', val)),
    map(val => `I am even times 2: ${val * 2}`),
    tap(val => console.log('after map', val)),
).subscribe(console.log);