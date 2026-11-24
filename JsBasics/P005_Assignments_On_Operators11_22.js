/*=================================
Homework Assigned from Nov 22, 2026
Assignments On Operators
=============================
Guess the output?
---------------------
1.console.log(1 + "2" + 3); //123 //String
2.console.log(1 + 2 + "3"); //33 //String
3.console.log("5" * true); //5true //string
4.console.log(10 > 5 > 1); //true //boolean
5.let a = 2;  //3 , 4
    let b = a++ + ++a; //a = 2 +4
    console.log(a, b); // 4,6

6.let a = 3; //4 5 6
console.log(a++ + a++ + ++a); //3+4+6 //13

7.console.log(5 * 2 == "10");// True because loose equality coerced string 10 t0 10

8.
let x = 1; //2  3
let y = ++x + x++ + x;  //2 (preincrement) 2 postincrement, 3 = 7
console.log(x, y); // 3 7

9.console.log(10 > 5 && 20 < 30); // true both side conditin true for && operator

10.console.log(null || undefined || "Playwright");  //NaNPlaywrite
*/

// Question 1 to 4
console.log(1 + "2" + 3); //123 //String
console.log(1 + 2 + "3"); //33 //String
console.log("5" * true); //5true Need clarification from Priyanka
console.log(10 > 5 > 1); //true //Need clarification from Priyanka
console.log(true > 1); //False   chekcking
//Question #5
let a = 2;  //3 , 4
let b = a++ + ++a; //a = 2 +4
console.log(a, b); // 4 6

// Question6
let a = 3; //a=4 (postinc), a=5 (postinc), a=6 (preinc)
console.log(a++ + a++ + ++a); //3+4+6 //13

// Question7.
console.log(5 * 2 == "10");// True because loose equality coerced string 10 t0 10

// Question8
let x = 1; //2  3
let y = ++x + x++ + x;  //2 (preincrement) 2 postincrement, 3 = 7
console.log(x, y); // 3 7

//Question9  TRUE both side conditin true for && operator
console.log(10 > 5 && 20 < 30); // true both side conditin true for && operator

//Question 10 Need clatification from Priyanka on null || undefined 
console.log(null || undefined || "Playwright");  //NaNPlaywrite