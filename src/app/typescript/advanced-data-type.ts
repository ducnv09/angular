// hàm chỉ xử lý number
// function listen(port: unknown) {
//     if (typeof port === 'string') {
//         port = parseInt(port, 10);
//     }
//     // do something with port
// }

// function listen(port: string | number) {
//     if (typeof port === 'string') {
//         port = parseInt(port, 10);
//     }
//     // do something with port
// }

type StringNumber = string | number;
function listen(port: StringNumber) {
    if (typeof port === 'string') {
        port = parseInt(port, 10);
    }
    // do something with port
}


let port: any
port.forEach((p: any) => console.log(p));
//chạy bình thường không báo lỗi

let port1: unknown
(port1 as []).forEach((p: any) => console.log(p));

listen('123');
listen(123);

function merge<T1, T2>(o1: T1, o2: T2): T1 & T2 {
    return {...o1, ...o2};
}

const result = merge({ foo: 'chi'}, { bar: 'ro'});
result.bar;
 

type ObjectDictionary<T> = { [key: string]: T }; // {foo: T, bar: T}
type ArrayDictionary<T> = { [key: string]: T[] }; // {foo: T[], bar: T[]}
export type Dictionary<T> = T extends []
    ? ArrayDictionary<T[number]>
    : ObjectDictionary<T>;


//file khác
type StringDictionary = Dictionary<string>; //{ [key: string]:string }  {foo: '123', bar: '1234'}
type NumberArrayDictionary = Dictionary<number[]>; // { [key:string]: number[] }
// type UserEntity = Dictionary<StringNumber>;

// // chỉ có thể là string hết hoặc số hết
// const entity: UserEntity = {
//     foo: 123,
//     bar: 1234
// }


type UserEntity = ObjectDictionary<StringNumber>;
const entity: UserEntity = {
    foo: '123',
    bar: 1234
}


// Exclude/Extract
type Exclude<T, U> = T extends U ? never : T;
type Extract<T, U> = T extends U ? T : never;

// Exclude: Loại bỏ những types ở T nếu như những types này gán được cho U
type SomeDiff = Exclude<'a' | 'b' | 'c', 'c' | 'd'>; // 'a' | 'b'. 'c' đã bị removed.

// Extract: Loại bỏ những types ở T nếu như những types này KHÔNG gán được cho U
type SomeFilter = Extract<'a' | 'b' | 'c', 'c' | 'd'>; // 'c'. 'a' và 'b' đã bị removed.

// hoặc có thể dùng Exclude để tạo type alias NonNullable
type NonNullable<T> = Exclude<T, null | undefined>; // loại bỏ null và undefined từ T

type StringOrNumberOrUndefined = StringNumber | undefined;
type Test = NonNullable<StringOrNumberOrUndefined>; // trả về string or number và bỏ đi undefined

type Readonly<T> = { readonly [P in keyof T]: T[P] }; // làm tất cả các props trong type thành readonly. Eg: Rất có lợi khi dùng cho Redux State.
type Partial<T> = { [P in keyof T]?: T[P] }; // làm tất cả các props trong type thành optional. Eg: Rất có lợi cho việc type 1 tham số khi cần truyền vào 1 type nào đó mà ko bắt buộc.
type Nullable<T> = { [P in keyof T]: T[P] | null }; // cái này tương tự như Partial, Partial sẽ trả về T[P] | undefined. Còn Nullable sẽ trả về T[P] | null

// readonly
const readonlyUser: Readonly<Person> = {
    firstName: 'chau',
    lastName: 'tran',
    password: '123'
}

readonlyUser.firstName = '123';//báo lỗi vì ko đc sửa 

// Partial
const partialUser: Partial<Person> = {

} // không khởi tạo j cx được

// Nullable
const nullUser: Nullable<Person> = {
    firstName: null,
    lastName: null,
    password: null
}



type Pick<T, K extends keyof T> = { [P in K]: T[P] };
type Record<K extends keyof any, T> = { [P in K]: T };

// Pick: Pick từ trong T những type có key là K
type Person = {
  firstName: string;
  lastName: string;
  password: string;
};

type PersonWithNames = Pick<Person, 'firstName' | 'lastName'>; // {firstName: string, lastName: string}

// Record: Gán type T cho lần lượt từng key P trong K
type ThreeStringProps = Record<'prop1' | 'prop2' | 'prop3', string>;
// { prop1: string, prop2: string, prop3: string }

type ReturnType<T> = T extends (...args: any[]) => infer R ? R : any;

// ReturnType: trả về type của giá trị mà function T trả về.
type Result = ReturnType<() => string>; // string
type Test2 = ReturnType<() => StringNumber>; // string | number

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

// Omit: loại bỏ type có key là K trong T
type PersonWithoutPassword = Omit<Person, 'password'>; // {firstName: string, lastName: string}
