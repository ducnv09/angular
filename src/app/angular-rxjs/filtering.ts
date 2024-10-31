import { Directive, OnDestroy } from "@angular/core";
import { asyncScheduler, auditTime, debounce, debounceTime, distinct, distinctUntilChanged, distinctUntilKeyChanged, filter, find, first, from, fromEvent, interval, last, of, pluck, sampleTime, single, skip, skipUntil, Subject, take, takeLast, takeUntil, takeWhile, throttleTime, timer } from "rxjs";

const items = [1, 2, 3, 4, 5, 6, 7];

items.filter(item => item % 2 === 0); // 2 4 6

//filter

const observer = {
    next: (value: any) => console.log(value),
    error: (err: any) => console.error(err),
    complete: () => console.log('completed')
};

from(items).pipe(
    filter(x => x % 2 === 0) // 2 4 6
).subscribe(observer);

// first
from(items).pipe(
    first(x => x > 4) // 5, nếu không có giá trị thì hiện Error
).subscribe(observer);

// last
from(items).pipe(
    last(x => x > 4) // 6, nếu không có giá trị thì hiện Error
).subscribe(observer);

//find
from(items).pipe(
    find(x => x > 7) // undefined
).subscribe(observer);

//single
from(items).pipe(
    single(x => x > 4) // Error do có 2 giá trị 5 6
).subscribe(observer);

// take
interval(1000).pipe(
    take(2) // 0 1
).subscribe(observer);

//takeLast
interval(1000).pipe(
    take(2), // 0 1
    takeLast(1) // 1
).subscribe(observer);

//takeUntil  
interval(1000).pipe(
    takeUntil(timer(5000))
).subscribe(observer);


// @Directive()
// class abstract class Destroyable implements OnDestroy {
//     destroy$ = new Subject();

//     ngOnDestroy(): void {
//         this.destroy$.next();
//         this.destroy$.complete();
//     }
// }

// class Component extends Destroyable {
//     state$.pipe(
//         map(),
//         takeUntil(destroy$) // dừng khi nào có destroy
//     ).subscribe();
// }

//takeWhile
interval(1000).pipe(
    takeWhile(x => x < 10) //0 1 2 ... 9
).subscribe(observer);

//skip
interval(1000).pipe(
    skip(5) // 5 6 7 ...
).subscribe(observer);

//skipUntil 
interval(1000)
  .pipe(skipUntil(fromEvent(document, 'click')))
  .subscribe(console.log); // output: click at 5 seconds -> 5, 6, 7, 8, 9....

//distinct
from([1, 2, 3, 3, 1])
.pipe(distinct()).subscribe(observer); // 1 2 3 

//distinctUntilChanged

from([1, 1, 2, 2, 1, 1, 3])
.pipe(distinctUntilChanged()).subscribe(observer); // 1 2 1 3

of(
    { age: 4, name: 'Foo' },
    { age: 6, name: 'Foo' },
    { age: 7, name: 'Bar' },
    { age: 5, name: 'Foo' }
  )
    .pipe(distinctUntilChanged((a, b) => a.name === b.name))
    .subscribe(console.log, null, () => console.log('complete')); // output: { age: 4, name: 'Foo' }, { age: 7, name: 'Bar' }, { age: 5, name: 'Foo' } -> complete


of(
    { age: 4, name: 'Foo' },
    { age: 6, name: 'Foo' },
    { age: 7, name: 'Bar' },
    { age: 5, name: 'Foo' }
).pipe(distinctUntilKeyChanged('name'))
.subscribe(observer);

//auditTime
fromEvent(document, 'click')
.pipe(
    auditTime(1500) // interval, timer 1500
).subscribe(observer);


interval(1000).pipe(
    auditTime(1500) // 1 3 5 7
).subscribe(observer);

// 1s: 0 -> timer(1500) runs
// 2s: 1 -> timer con 500ms 
// 2.5s: 1 -> timer disabled
// 3s: 2 -> timer(1500) runs

// sampleTime
interval(1000).pipe(
    sampleTime(1500)
);

//timer (1500) runs
// 1s:0 --> timer còn (500)
// 1.5s: emit 0 --> timer disable -> timer(1500)
// 2s: 1 -> timer còn 1s
// 3s: 2 -> emit ra 1 --> timer disable -> timer(1500)
// 4s: 3 -> timer còn (500);
// 4.5s: emit 3 --> timer disable -> timer(1500)

// throttleTime
fromEvent(document, 'mousemove').pipe(
    // throttleTime(1500, asyncScheduler, {trailing: false, leading: true}) // lấy giá trị đầu tiên khác với auditTime
    throttleTime(1500, asyncScheduler, {trailing: true, leading: false}) // không lấy giá trị đầu giống với auditTime
);

//debounceTime
// const queryInput = document.querySelector('#queryInput');
// fromEvent(queryInput, 'keydown').pipe(
//     debounceTime(1500),
//     pluck('target', 'value')
// )