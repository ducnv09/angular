// let student = {
//     name: "duc",
//     courses: ["Android", "PHP"],
//     showInfo: function() {
//         this.courses.forEach(function(course) {
//             console.log(`${this.name} study ${course}`);
//         })
//     }
// };


// cách 2: tạo var this
// let student = {
//     name: "duc",
//     courses: ["Android", "PHP"],
//     showInfo: function() {
//         var _this = this;
//         this.courses.forEach(function(course) {
//             console.log(`${_this.name} study ${course}`);
//         })
//     }
// };

// cách 3: bind
// let student = {
//     name: "duc",
//     courses: ["Android", "PHP"],
//     showInfo: function() {
//         this.courses.forEach(function(course) {
//             console.log(`${this.name} study ${course}`);
//         }.bind(this));  
//     }
// };

// cách 4: arrow function
let student = {
    name: "duc",
    courses: ["Android", "PHP"],
    showInfo: function() {
        this.courses.forEach(course => console.log(`${this.name} study ${course}`));
    }
};
student.showInfo();