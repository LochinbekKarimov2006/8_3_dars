// 1. Obyektlar
interface Person {
  name: string;
  age: number;
  isStudent: boolean;
}

const personData: Person = {
  name: "John Doe",
  age: 25,
  isStudent: false,
};

interface Book {
  title: string;
  author: string;
  publishedYear: number;
}

const bookDetails: Book = {
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  publishedYear: 1925,
};

// 2. Massivlar
const numberArray: number[] = [1, 2, 3, 4, 5];

const calculateSumNumbers = (nums: number[]): number => {
  return nums.reduce((acc, num) => acc + num, 0);
};

const totalSum = calculateSumNumbers(numberArray);

const words: string[] = ["apple", "banana", "cherry"];

const capitalizeWords = (words: string[]): string[] => {
  return words.map(word => word.toUpperCase());
};

const capitalizedWords = capitalizeWords(words);

// 3. Tuple
type StudentRecord = [string, number, boolean];

const student: StudentRecord = ["Alice", 22, true];

type Coordinate = [number, number];

const pointCoordinate: Coordinate = [10, 20];

// 4. any
let anyVariable: any;

anyVariable = "Hello";
anyVariable = 42;
anyVariable = true;

const logAnyArray = (arr: any[]): void => {
  arr.forEach(item => console.log(item));
};

logAnyArray([1, "string", true]);

// 5. unknown
let unknownVariable: unknown;

unknownVariable = "Hello";
unknownVariable = 42;
unknownVariable = true;

const convertUnknownToString = (value: unknown): string => {
  if (typeof value === "string") {
    return value;
  }
  return String(value);
};

const stringValue = convertUnknownToString(unknownVariable);

// 6. never
const throwCustomError = (): never => {
  throw new Error("Something went wrong");
};

const createInfiniteLoop = (): never => {
  while (true) {}
};

// 7. Funksiyalar
const sumTwoNumbers = (a: number, b: number): number => {
  return a + b;
};

const formatDateToString = (date: Date): string => {
  const year = date.getFullYear();
  const month = (`0${date.getMonth() + 1}`).slice(-2);
  const day = (`0${date.getDate()}`).slice(-2);
  return `${year}-${month}-${day}`;
};

const dateFormatted = formatDateToString(new Date());

// 8. Enum
enum Data5 {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

const logDayOfWeek = (day: Data5): void => {
  console.log(Data5[day]);
};

logDayOfWeek(Data5.Wednesday);

// 9. Intersection
interface Person {
    name: string;
    age: number;
    isStudent: boolean; 
  }
  
  interface Employee {
    employeeId: number;
    department: string;
  }
  
  type Data10 = Person & Employee;
  
  const workerData: Data10 = {
    name: "Jane Doe",
    age: 30,
    isStudent: false, 
    employeeId: 12345,
    department: "HR",
  };
  

// 10. interface
interface Vehicle {
  make: string;
  model: string;
  year: number;
}

interface Car extends Vehicle {
  numberOfDoors: number;
  isElectric: boolean;
}

const carDetails: Car = {
  make: "Tesla",
  model: "Model S",
  year: 2024,
  numberOfDoors: 4,
  isElectric: true,
};

// 11. Type Alias
type Address = {
  street: string;
  city: string;
  postalCode: string;
};

type PersonWithAddress = Person & {
  address: Address;
};

const personAddressDetails: PersonWithAddress = {
  name: "Mark",
  age: 28,
  isStudent: true,
  address: {
    street: "Main St",
    city: "Springfield",
    postalCode: "12345",
  },
};

// 12. Aralash Mashqlar
interface Student {
  name: string;
  age: number;
  grades: number[];
  address: [string, number];
}

const generateStudentSummary = (student: Student): string => {
  const { name, age, grades } = student;
  const averageGrade = grades.reduce((a, b) => a + b, 0) / grades.length;
  return `${name}, ${age} years old, Average grade: ${averageGrade}`;
};

// 13. Enum, Type Alias va Intersectionni Aralashtirib Ishlash
// Data20.ts

// Define the enum
enum Data20 {
    Pending,
    Shipped,
    Delivered,
    Cancelled,
  }
  
  // Interfaces
  interface Order {
    orderId: number;
    status: Data20;
    totalAmount: number;
  }
  
  interface Customer {
    customerId: number;
    name: string;
  }
  
  // Type Alias
  type CustomerOrder = Order & Customer;
  
  // Example Object
  const orderWithCustomer: CustomerOrder = {
    orderId: 456,
    status: Data20.Shipped,
    totalAmount: 150.00,
    customerId: 789,
    name: "Sarah",
  };
  
  // Output the example object to verify
  console.log(orderWithCustomer);
  
  