let someString: string;
let someNumber: number;
let someBoolean: boolean;
let something: any; // có thể gán sang cho bất kỳ kiểu dữ liệu nào khác
let someStringArray: string[]; // tương tự cho number[], boolean[], any[]
let someObject: object;
let someNull: null;
let someUndefined: undefined;
let someUnknown: unknown;
let someNever: never; // ví dụ như một hàm throw exception
let someTuple: [string, number];
let someVoidFunction: () => void; // một hàm không trả về giá trị gì sau khi thực thi
// let someFunction: () => string; // một hàm trả về giá trị có type "string" sau khi thực thi
let someFunction: () => string = () => {
    return 'abc';
}; 

interface User {
    firstName: string;
    lastName: string;
    age?: number
}

type UserType = {
    firstName: string;
    lastName: string;
}

const user: User = {
    firstName: 'Duc',
    lastName: 'Nguyen',
    age: 123
}

// generic
// Type Parameter
// TModel[]
const numbers = [1, 2, 3, 4, 5];
const strings = ['abc', 'xyz'];
numbers.forEach(num => num.toPrecision);
strings.forEach(str => str.length);

export abstract class BaseService<T> {
    protected model!: T;    

    find() {
        return [this.model];
    }

    findOne() {
        return this.model;
    }
}

interface Dog {
    bark(): void;
}

interface Cat {
    meow(): void;
}

export class DogService extends BaseService<Dog> {}
export class CatService extends BaseService<Cat> {}

const dogService = new DogService();
const catService = new CatService();

dogService.findOne().bark();
catService.findOne().meow();