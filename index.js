var person = {
    name: "John Doe",
    age: 25,
    isStudent: false
};
var book = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    publishedYear: 1925
};
// 2. Massivlar
// Mashq 2: Massivlar bilan Ishlash
var numbers = [1, 2, 3, 4, 5];
function sumNumbers(arr) {
    return arr.reduce(function (sum, num) { return sum + num; }, 0);
}
var fruits = ["apple", "banana", "cherry"];
function uppercaseWords(arr) {
    return arr.map(function (word) { return word.toUpperCase(); });
}
// 3. Tuple
// Mashq 3: Tuple bilan Ishlash
var studentRecord = ["Alice", 22, true];
var coordinate = [10, 20];
// 4. any
// Mashq 4: any Tipidan Foydalanish
var value;
value = "string";
value = 123;
value = true;
var mixedArray = ["string", 123, true];
function logMixedArray(arr) {
    arr.forEach(function (item) { return console.log(item); });
}
// 5. unknown
// Mashq 5: unknown Tipidan Foydalanish
var unknownValue;
unknownValue = "string";
unknownValue = 123;
unknownValue = true;
function convertToString(value) {
    if (typeof value === 'string') {
        return value;
    }
    return String(value);
}
// 6. never
// Mashq 6: never Tipidan Foydalanish
function throwError(message) {
    throw new Error(message);
}
function infiniteLoop() {
    while (true) { }
}
// 7. Funksiyalar
// Mashq 7: Funksiyalarni Yozish
function addNumbers(a, b) {
    return a + b;
}
function formatDate(date) {
    var year = date.getFullYear();
    var month = String(date.getMonth() + 1).padStart(2, '0');
    var day = String(date.getDate()).padStart(2, '0');
    return "".concat(year, "-").concat(month, "-").concat(day);
}
// 8. Enum
// Mashq 8: Enumdan Foydalanish
var DaysOfWeek;
(function (DaysOfWeek) {
    DaysOfWeek["Monday"] = "Monday";
    DaysOfWeek["Tuesday"] = "Tuesday";
    DaysOfWeek["Wednesday"] = "Wednesday";
    DaysOfWeek["Thursday"] = "Thursday";
    DaysOfWeek["Friday"] = "Friday";
    DaysOfWeek["Saturday"] = "Saturday";
    DaysOfWeek["Sunday"] = "Sunday";
})(DaysOfWeek || (DaysOfWeek = {}));
function printDay(day) {
    console.log(day);
}
var employeeWorker = {
    name: "Jane Doe",
    age: 30,
    isStudent: false, // isStudent qo'shildi
    employeeId: 12345,
    department: "HR"
};
var car = {
    make: "Tesla",
    model: "Model S",
    year: 2024,
    numberOfDoors: 4,
    isElectric: true
};
var personWithAddress = {
    name: "Mark",
    age: 28,
    isStudent: true,
    address: {
        street: "Main St",
        city: "Springfield",
        postalCode: "12345"
    }
};
function getStudentSummary(student) {
    var averageGrade = student.grades.reduce(function (sum, grade) { return sum + grade; }, 0) / student.grades.length;
    return "Name: ".concat(student.name, ", Age: ").concat(student.age, ", Average Grade: ").concat(averageGrade.toFixed(2));
}
// Mashq 13: Enum, Type Alias va Intersectionni Aralashtirib Ishlash
var OrderStatus;
(function (OrderStatus) {
    OrderStatus["Pending"] = "Pending";
    OrderStatus["Shipped"] = "Shipped";
    OrderStatus["Delivered"] = "Delivered";
    OrderStatus["Cancelled"] = "Cancelled";
})(OrderStatus || (OrderStatus = {}));
var customerOrder = {
    orderId: 456,
    status: OrderStatus.Shipped,
    totalAmount: 150.00,
    customerId: 789,
    name: "Sarah"
};
