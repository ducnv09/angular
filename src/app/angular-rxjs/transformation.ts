import { BehaviorSubject, buffer, bufferTime, combineLatest, delay, from, fromEvent, interval, map, mapTo, merge, Observable, of, partition, pluck, reduce, scan, toArray } from "rxjs"

// Rxjs < 5.5

// dot-chained operators

// observable.map().takeUntil();

// Observable.prototype.map = () => {};

// Observable.prototype.takeUntil = () => {};

// > 5.5

// Pipeable 

// observable.pipe(
//     map(),
//     takeUntil() 
// )

//transformation operator

// viết file khac
// export const someObs = observable.pipe(map(), takeUntil(), catchError());

// combineLatest([otherObs, someObs])

//==============================================

// const users = [
//     {
//         id: 'ddfe3653-1569-4f2f-b57f-bf9bae542662',
//         username: 'tiepphan',
//         firstname: 'tiep',
//         lastname: 'phan',
//     },
//     {
//         id: '34784716-019b-4868-86cd-02287e49c2d3',
//         username: 'nartc',
//         firstname: 'chau',
//         lastname: 'tran',
//     },
// ];

const users = [
    {
        id: 'ddfe3653-1569-4f2f-b57f-bf9bae542662',
        username: 'tiepphan',
        firstname: 'tiep',
        lastname: 'phan',
        postCount: 5
    },
    {
        id: '34784716-019b-4868-86cd-02287e49c2d3',
        username: 'nartc',
        firstname: 'chau',
        lastname: 'tran',
        postCount: 22
    },
];

const usersVm = users.map((user) => {
    return {
        ...user,
        fullname: `${user.firstname} ${user.lastname}`,
    };
});

// output:
// usersVm = [
//     {
//       id: 'ddfe3653-1569-4f2f-b57f-bf9bae542662',
//       username: 'tiepphan',
//       firstname: 'tiep',
//       lastname: 'phan',
//       fullname: 'tiep phan',
//     },
//     {
//       id: '34784716-019b-4868-86cd-02287e49c2d3',
//       username: 'nartc',
//       firstname: 'chau',
//       lastname: 'tran',
//       fullname: 'chau tran',
//     },
//   ];


// =================================================
interface User {
    id: string;
    username: string;
    firstname: string;
    lastname: string;
}

const source = new Observable<User>((observer) => {
    const users = [
        {
            id: 'ddfe3653-1569-4f2f-b57f-bf9bae542662',
            username: 'tiepphan',
            firstname: 'tiep',
            lastname: 'phan',
        },
        {
            id: '34784716-019b-4868-86cd-02287e49c2d3',
            username: 'nartc',
            firstname: 'chau',
            lastname: 'tran',
        },
    ];

    setTimeout(() => {
        observer.next(users[0]); 
    }, 1000);

    setTimeout(() => {
        observer.next(users[1]);
        observer.complete();
    }, 3000);
});

const observer = {
    next: (value: any) => console.log(value),
    error: (err: any) => console.error(err),
    complete: () => console.log('completed')
};

source.subscribe(observer);

//output: sau 1 giây thì sẽ emit ra user đầu tiên, và sau đó 2 giây thì sẽ emit ra user thứ hai kèm theo complete signal.

// ==============================================
from(users)
.pipe(
    map(data => {
        console.log('inside map', data);
        return data;
    })
).subscribe(observer);

merge(
    of(users[0]).pipe(delay(2000)), //2s -> tiepphan
    of(users[1]).pipe(delay(4000)) //2s tiếp theo 4s -> nartc
).pipe(
    map(user => ({...user, fullname: `${user.firstname} ${user.lastname}`}))
).subscribe(observer);

//pluck
const param$ = of({id: 123});

const id$ = param$.pipe(pluck('id')).subscribe(observer); //output: 123

const param1$ = of([123]);

const id1$ = param$.pipe(pluck('0')).subscribe(observer); //output: 123

const param2$ = of({id: 123, foo: {bar: 'chau'}});

const id2$ = param$.pipe(pluck('foo', 'bar')).subscribe(observer); //output: chau

//mapTo
merge(
    fromEvent(document, 'mouseenter').pipe(mapTo(true)),
    fromEvent(document, 'mouseleave').pipe(mapTo(false))
).subscribe(observer);

//reduce

const totalCount$ = merge(
    of(users[0]).pipe(delay(2000)), //2s -> tiepphan
    of(users[1]).pipe(delay(4000)) //2s tiếp theo 4s -> nartc
// ).pipe(reduce((acc, cur) => acc + cur.postCount, 0)).subscribe(observer);
);

totalCount$.pipe(reduce((acc, cur) => acc +cur.postCount, 0));


//toArray
const user$ = merge(    
    of(users[0]).pipe(delay(2000)), //2s -> tiepphan
    of(users[1]).pipe(delay(4000)) //2s tiếp theo 4s -> nartc
// ).pipe(reduce((acc, cur) => [...acc, cur], [])).subscribe(observer);
).pipe(toArray()).subscribe(observer); // sau 4s thì in ra 2 object


//buffer
const source$ = interval(1000);
const click$ = fromEvent(document, 'click');
source$.pipe(buffer(click$)).subscribe(observer); //không hiện cho đến khi bấm chuột vào

//bufferTime
source$.pipe(bufferTime(2000)); //hiện các giá trị cứ sau 2s

//scan
totalCount$.pipe(scan((acc, cur) => acc +cur.postCount, 0)); // tính toán và hiện ra kết quả luôn

const initialState = {};
const stateSubject = new BehaviorSubject(initialState);

const state$ = stateSubject
    .asObservable()
    .pipe(scan((state, partialState) => ({...state, ...partialState}), {}));

state$.subscribe(observer);
stateSubject.next({name: 'Chau'});
stateSubject.next({age: 26}); 