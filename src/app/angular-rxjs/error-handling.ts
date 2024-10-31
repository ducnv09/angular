import { catchError, defaultIfEmpty, defer, delay, every, fromEvent, iif, map, of, retry, take, takeUntil, throwError, throwIfEmpty, timer } from "rxjs";

const observer = {
    next: (val: any) => console.log(val),
    error: (err: any) => console.error(err),
    complete: () => console.log('complete'),
};

const handleError = () => {
    console.log(`
        --------------------
        I am handling the error. Alerting the users
        --------------------
    `);
}

throwError('i am an error').subscribe(observer); // i am an error

const obs = throwError('i am an error').pipe(
    catchError((err, caught) => {
        handleError();
        return of('default value');
    })
).subscribe(observer);
/* 
 --------------------
I am handling the error. Alerting the users
--------------------
default value
*/

throwError('ugly error').pipe(
    catchError(err => {
        handleError();
        const beautifyError = new Error('This is a friend error');
        return throwError(beautifyError);
    })
).subscribe(observer);
/* 
 --------------------
I am handling the error. Alerting the users
--------------------
Error: This is a friend error
*/

const cached = [4, 5];
of(1, 2, 3, 4, 5)
.pipe(
    map(n => {
        if (cached.includes(n)) {
            throw new Error("Duplicated: " + n);
        }
        return n;
    }),
    // catchError((err, caught) => of(err))
    catchError((err, caught) => caught),
    take(5)
);

/*
1 2 3 1 2
*/

//retry
of(1, 2, 3, 4, 5)
.pipe(
    map(n => {
        if (cached.includes(n)) {
            throw new Error("Duplicated: " + n);
        }
        return n;
    }),
    retry(2)
)
// 1 2 3 1 2 3

//conditional
of().pipe(
    delay(3000),
    defaultIfEmpty('default value')
).subscribe(observer);


//throwIfEmpty
const click$ = fromEvent(document, 'click');

click$
.pipe(
    takeUntil(timer(1000)),
    throwIfEmpty(
        () => new Error('the document was not clicked within 1 second')
    )
)
.subscribe(observer);
// dùng không click vào sau 1s thì sẽ báo lỗi

//every
of(1, 2, 3, 4, 5).pipe(every(x => x > 0)).subscribe(observer);
/*
true
complete
*/

console.log('array', [1, 2, 3, 4, 5].every(x => x > 0)); // array true

//toán tử 3 ngôi
// const obs = condition ? trueObs : falseObs;

//tương đương
// iif(() => true, trueObs, falseObs).subscribe();

const userId = 123;
function updateObservable() {
    return of('update');
}

function updateObservable1(id: number) {
    if (id == null)
        throw new Error('id cannot be null');
    return of('update');
}

function createObservable() {
    return of('create');
}

iif(() => userId != null, updateObservable(), createObservable()).subscribe(observer); // update

defer(() => {
    return userId != null ? updateObservable1(userId): createObservable()
}).subscribe(observer);
//create 
// complete