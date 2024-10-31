import { combineLatest, concat, startWith, delay, forkJoin, from, fromEvent, interval, map, mapTo, merge, of, race, take, timer, withLatestFrom, zip, Observable, catchError, endWith, pairwise } from "rxjs";

const observer = {
    next: (value: any) => console.log(value),
    error: (err: any) => console.error(err),
    complete: () => console.log('completed'),
}

//static function
//forkJoin

forkJoin(
    of('hello').pipe(delay(1000)),
    of('world').pipe(delay(2000)),
    // of('!!!').pipe(delay(3000)), // ['hello', 'world', '!!!']
    interval(1000).pipe(take(2))
).subscribe(observer)

forkJoin({ //object
    1: of('hello').pipe(delay(1000)),
    2: of('world').pipe(delay(2000)),
    3: interval(1000).pipe(take(2))
}).subscribe(observer)

forkJoin([ //array
    of('hello').pipe(delay(1000)),
    of('world').pipe(delay(2000)),
    interval(1000).pipe(take(2))
]).subscribe(observer)

forkJoin([ //array
    of('hello').pipe(delay(1000)),
    of('world').pipe(delay(2000)),
    interval(1000).pipe(take(2)) // 0 1
], (hello, world, inter) => ({ hello, world, inter })).subscribe(observer) // {hello: "hello", world: "world", inter: 1}

forkJoin([ //array
    of('hello').pipe(delay(1000)),
    of('world').pipe(delay(2000)),
    interval(1000).pipe(take(2)) // 0 1
]).pipe(map(([hello, world, inter]) => ({ hello, world, inter })))
    .subscribe(observer)
// đầu tiên: {hello: Array[3], world: 0, inter: undefined}
//sau đó: {hello: "hello", world: "world", inter: 1}

//combineLatest
combineLatest([
    interval(2000).pipe(map((x) => `First: ${x}`)), // {1}
    interval(1000).pipe(map((x) => `Second: ${x}`)), // {2}
    interval(3000).pipe(map((x) => `Third: ${x}`)), // {3}
]).subscribe(observer);

// output:
// sau 3s, vì interval(3000) có khoảng thời gian dài nhất:
// [First 0, Second 2, Third 0] -- vì sao? vì tại 3s, thì {2} đã emit đc 3 lần rồi (3s, mỗi giây nhảy từ 0 -> 1 -> 2)

// sau 1s kế tiếp: (giây thứ 4)
// [First 1, Second 2, Third 0] -- vì sao? vì lúc này là giây thứ 4, {1} đã emit đc 2 lần (4s, mỗi 2 giây nhảy từ  0 -> 1)
// [First 1, Second 3, Third 0] -- vì sao? vì lúc này là giây thứ 4, {2} đã emit đc lần thứ 4 (0 -> 1 -> 2 -> 3)

// sau 1s kế tiếp: (giây thứ 5)
// [First 1, Second 4, Third 0] -- {2} emit lần thứ 5

// sau 1s kế tiếp: (giây thứ 6)
// [First 2, Second 4, Third 0] -- {1} emit lần thứ 3
// [First 2, Second 5, Third 0] -- {2} emit lần thứ 6
// [First 2, Second 5, Third 1] -- {3} emit lần thứ 2

//zip
//giữa 2 of có độ trễ
combineLatest(of(1, 2, 3), of(4, 5, 6), of(7, 8, 9)).subscribe(observer);
// [1, 4, 7], // cả 3 emit
// [2, 4, 7], // obs1 emit 2, combineLatest emit giá trị 2 của obs1 và 2 giá trị cũ của obs2 và obs3
// ...        // sau 1 loạt emit
// [3, 6, 9]

zip(of(1, 2, 3), of(4, 5, 6), of(7, 8, 9)).subscribe(observer);
// [1, 4, 7]
// [2, 5, 8]
// [3, 6, 9]

const age$ = of<number[]>(29, 28, 30);
const name$ = of<string[]>('Chau', 'Trung', 'Tiep');
const isAdmin$ = of<boolean[]>(true, false, true);

zip(age$, name$, isAdmin$).pipe(
    map(([age, name, isAdmin]) => ({ age, name, isAdmin }))
)
// output:
// { age: 29, name: 'Chau', isAdmin: true }
// { age: 28, name: 'Trung', isAdmin: false }
// { age: 30, name: 'Tiep', isAdmin: true }

// dùng với projectFunction
zip(age$, name$, isAdmin$, (age, name, isAdmin) => ({
    age, name, isAdmin
})).subscribe(observer);
// output:
// { age: 29, name: 'Chau', isAdmin: true }
// { age: 28, name: 'Trung', isAdmin: false }
// { age: 30, name: 'Tiep', isAdmin: true }

zip(fromEvent(document, 'mousedown'), fromEvent(document, 'mouseup')).subscribe(observer);
//output: khi bôi đen 1 đoạn 
// 0: MouseEvent
// 1: MouseEvent

//concat
concat(
    interval(1000).pipe(take(3)),
    interval(500).pipe(take(5))
).subscribe(observer); // 0 1 2 0 1 2 3 4 complete

//merge
merge(
    interval(1000).pipe(take(3), map(x => `first ${x}`)),
    interval(500).pipe(take(5), map(x => `second ${x}`))
).subscribe(observer);
//output
// second 0
// first 0
// second 1
// second 2
// first 1
// second 3
// second 4
// first 2
// completed

//race
race(
    interval(1000).pipe(mapTo('fast')),
    interval(2000).pipe(mapTo('medium')),
    interval(3000).pipe(mapTo('slow'))
).subscribe(observer);
// output: fast - 1s -> fast - 1s -> fast - 1s -> fast...

// race(
//     timer(10000), // timer 10 second
//     this.userClick$, // user click event
//     this.componentDestroy$ // navigate -> ngOnDestroy
// )
// .pipe(takeUntil(this.componentDestroy$)) // chúng ta cũng sẽ ko muốn lắng nghe vào race nữa nếu như componentDestroy$
// .subscribe(() => this.closeBanner());

//pipeable operator
//withLatestFrom
fromEvent(document, 'click')
  .pipe(withLatestFrom(interval(1000)))
  .subscribe(observer);
// output:
// - click trước 1s --- chờ đến 1s --> [MouseEvent, 0]
// - click sau 1s -> [MouseEvent, 0];
// - click lúc 5.5s -> [MouseEvent, 4]; // sau 5s thì giá trị gần nhất của interval(1000) là 4 (0 - 1 - 2 - 3 - 4)

// this.apiService.getSomething().pipe(withLatestFrom(this.currentLoggedInUser$));
// các bạn gọi một API và các bạn muốn dùng kết quả của API này + với thông tin của người dùng đang đăng nhập để thực hiện nghiệp vụ ké tiếp

const withLatestFrom$ = interval(2000).pipe(map(x => `Need latest from this value: ${x}`));
fromEvent(document, 'click').pipe(withLatestFrom(withLatestFrom$));
//sau 2s sẽ phát 0, 1, 2, 3,... khi bấm vào mới hiện đến số đang chạy

//startWith
of('world').pipe(startWith('Hello')).subscribe(observer);
// output:
// 'Hello'
// 'word'
// 'complete'

//ví dụ thực tế 1
// interface ApiResponse<T> {
//     data: T;
//     isLoading: boolean;
//     error: string;
// }

// function getApiResponse<T>(apiCall: Observable<T>): Observable<ApiResponse<T>> {
//     return apiCall.pipe(
//         map(data => ({isLoading: false, data, error: ''})),
//         startWith({isLoading: true, data: null, error: ''}),
//         catchError(err => of({isLoading: false, data: null, error: err.message}))
//     )
// }

//ví dụ thực tế 2
// export class OperatorUtils {
//     public static getApiResponse<T = any>(apiCall: Observable<T>, initialValue: T = null): Observable<ApiResponse<T>> {
//         return apiCall.pipe(
//             map(data => ({ isLoading: false, data, error: ''})),
//             startWith({ data: initialValue, isLoading: true, error: ''}),
//             this.logErrorAndReturn((err: ApiError) => 
//                 of<ApiResponse<T>>({
//                     isLoading: false,
//                     data: initialValue,
//                     error: err.error || 'Unexpected error',
//                 }),
//             ),
//         );
//     }
// }

// endWith
of('hi', 'how are you?', 'sorry, I have to go now')
  .pipe(endWith('goodbye!'))
  .subscribe(observer);
// output:
// 'hi'
// 'how are you?'
// 'sorry, I have to go now'
// 'goodbye!'

//pairwise
from([1, 2, 3, 4, 5])
  .pipe(
    pairwise(),
    map(([prev, cur]) => prev + cur)
  )
  .subscribe(observer);
// output:
// 3 (1 + 2)
// 5 (2 + 3)
// 7 (3 + 4)
// 9 (4 + 5)