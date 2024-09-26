//Property value shorthand
// function getCourse(name, price, free) {
//     return {
//         name,
//         price,
//         free
//     }
// }

// console.log(getCourse("ES6", 20, false));

//method property
function getCourse(name, price, free) {
    return {
        name,
        price,
        free,

        showInfo() {
            console.log(`${name + "-" + price + "-" + free}`);
        },

        showInfo2(delimiter = " - ") {
            console.log(`${name + delimiter + price + delimiter + free}`);
        }
    }
}

var myCourse = getCourse("ES6", 20, false);
myCourse.showInfo2();
console.log(myCourse);


// computed Property name
let propPrefix = "support_123_";
let bootsrapSupport = {
    [propPrefix + "chome"]: true,
    [propPrefix + "ie"]: true,
    [propPrefix + "firefox"]: false
};

console.log(bootsrapSupport);   