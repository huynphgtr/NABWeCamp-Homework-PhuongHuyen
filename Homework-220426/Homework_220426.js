let name = "Alice"; // Using 'let' to declare a variable that can be reassigned (có thể thay đổi được)
const age = 25; // Using 'const' to declare a variable that cannot be reassigned (không thể thay đổi được)
var city = "New York"; // Using 'var' to declare a variable with function scope (chức năng)
// Quy tắt đặt tên biến:
// 1. Biến phải bắt đầu bằng một chữ cái, dấu gạch dưới (_) hoặc dấu đô la ($).
// 2. Biến không được bắt đầu bằng một số.
// 3. Biến không được chứa khoảng trắng.
// 4. Biến không được sử dụng các từ khóa đã định nghĩa sẵn trong JavaScript (ví dụ: var, let, const, function, etc.).

console.log("Hello, World! This is session 1.");
console.log("Name:", name);
console.log("Age:", age);
console.log("City:", city);


//Kiểu dữ liệu trong JavaScript:
// 1. Primitive types (Kiểu nguyên thủy):
//    - String: Chuỗi ký tự, ví dụ: "Hello", 'World'
//    - Number: Số, ví dụ: 42, 3.14 
//    - Boolean: Giá trị đúng hoặc sai, ví dụ: true, false
//    - Null: Giá trị null, đại diện cho "không có giá trị"
//    - Undefined: Giá trị chưa được định nghĩa
//    - Symbol: Kiểu dữ liệu mới trong ES6, đại diện cho một giá trị duy nhất và không thể thay đổi

// Phân biệt Undefined và Null
let undefinedVariable; // Biến này chưa được gán giá trị, nên nó có giá trị là undefined
let nullVariable = null; // Biến này được gán giá trị null, đại diện cho "không có giá trị"
console.log("Undefined variable:", undefinedVariable); // Output: undefined
console.log("Null variable:", nullVariable); // Output: null 
typeof undefinedVariable; // Output: "undefined"

let price = 19.99; // Kiểu dữ liệu Number
let productName = "Coffee"; // Kiểu dữ liệu String
let inStock = true; // Kiểu dữ liệu Boolean

console.log(typeof price); // Output: "number"
console.log(typeof productName); // Output: "string"
console.log(typeof inStock); // Output: "boolean"

let a = 10;
let b = 3;
console.log(a % b); // Output: 1    
console.log(a ** b); // Output: 1000 (10 raised to the power of 3)      
console.log(a / b);
console.log(a + b);
console.log(a - b);

let first = "Hello";
let second = "World";
console.log(first + " " + second); // Output: "Hello World" (String concatenation)
console.log(`${first} ${second}`); // Output: "Hello World" (String concatenation with template literals)


//Toán tử so sánh: == và ===
//Toán tử logic 
//Toán tử rút gọn: +=, -=, *=, /=, %=
let x = 10;
x += 5;
console.log(x); // Output: 6.25// Tương đương với x = x + 3
x -= 3;
console.log(x); // Output: 6.25
x *= 2;
console.log(x); // Output: 6.25
x /= 4;
console.log(x); // Output: 6.25

//Command line definitions:là các lệnh được sử dụng trong terminal hoặc command prompt để thực hiện các tác vụ khác nhau trên máy tính. Dưới đây là một số lệnh cơ bản:
// 1. cd (Change Directory): Thay đổi thư mục hiện tại.
//    Ví dụ: cd Documents/Projects - Di chuyển vào thư mục "Projects" trong thư mục "Documents".
// 2. ls (List): Liệt kê các tệp và thư mục trong thư mục hiện tại (trên Unix/Linux/Mac).
//    Ví dụ: ls -l - Hiển thị danh sách chi tiết của các tệp và thư mục.
//   Trên Windows, lệnh tương đương là dir.
// 3. mkdir (Make Directory): Tạo một thư mục mới.
//    Ví dụ: mkdir NewFolder - Tạo một thư mục có tên "NewFolder".
// 4. rm (Remove): Xóa tệp hoặc thư mục (trên Unix/Linux/Mac).
//    Ví dụ: rm file.txt - Xóa tệp có tên "file.txt". Để xóa một thư mục và tất cả nội dung bên trong, sử dụng rm -r folderName.
//   Trên Windows, lệnh tương đương là del (cho tệp) hoặc rmdir (cho thư mục).

//Git là một hệ thống quản lý phiên bản phân tán (distributed version control system) được sử dụng để theo dõi các thay đổi trong mã nguồn của dự án phần mềm. Git cho phép nhiều nhà phát triển làm việc cùng nhau trên cùng một dự án