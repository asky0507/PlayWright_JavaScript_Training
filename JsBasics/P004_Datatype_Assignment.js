/*1. Identify the datatype
Create variables for the following values and identify their datatype:
- 25
- "JavaScript"
- true
- undefined
- null
- 123.45
- 12345678901234567890n
- Symbol("id")
Task: Print both the value and its datatype. */

let aj1 = 25;
console.log("Assigned value of aj1 "+aj1);
console.log("Datatype is: "+typeof aj1);//number

let aj2 = "JavaScript";
console.log("Assigned value of aj2: "+aj2);
console.log("Datatype is: "+typeof aj2);//string

let aj3 = false;
console.log("Assigned value of aj3: ",aj3);
console.log("Datatype is: "+typeof aj3);//boolean

let aj4;
console.log("Assigned value of aj4: ",aj4);
console.log("Datatype is: "+typeofaj4);//undefined

let aj5={};
console.log("Assigned value of aj5={}; ",aj5);
console.log("Datatype is: "+typeof aj5);//object

let aj6=123.45;
console.log("Assigned value of let aj6=123.45;; ",aj6);
console.log("Datatype is: "+typeof aj6);//number

let aj7=12345678901234567890n
console.log("Assigned value of let aj7: ",aj7);
console.log("Datatype is: "+typeof aj7);//bigint

let aj8=Symbol("id");
console.log("Assigned value of let aj8: ",aj8);
console.log("Datatype is: "+typeof aj8);//symbolf

/*===================================================================
2. Create Variables of Different Datatypes
Create one variable for each of the following datatypes:
- String
- Number
- Boolean
- Undefined
- Null
- BigInt
- Symbol
- Object
Print all variables */
//- String
let a1="ajaytesting variable"
console.log("Print the string value defined in variable a1: ",a1);
console.log("Variable type should be String // : "+typeof a1);

// Number
let a2=5516979430
console.log("Print the value in defined variable called let a2= ",a2);
console.log("Variable type should be Number // : "+typeof a2);

// Boolean
let a3=true
console.log("Print the value in defined variable called let a3= ",a3);
console.log("Variable type should be Boolean// : "+typeof a3);

//Undefined
let a4;
console.log("Print the value in defined variable called let a4= ",a4);
console.log("Variable type should be Undefined// : "+typeof a4);

//Null
let a5=null;
console.log("Print the value in defined variable called let a5= ",a5);
console.log("Variable type should show object/ : "+typeof a5);
// BigInt
let a6=12378999999999999999n;
console.log("Print the value in defined variable called let a6= ",a6);
console.log("Variable type should show BigINT/ : "+typeof a6);

//- Symbol
let a7=symbol("ajay");
console.log("Print the value in defined variable called let a7= ",a7);
console.log("Variable type should show Symbol()/ : "+typeof a7);

//- Object
let a8=null;
console.log("Print the value in defined variable called let a8= ",a8);
console.log("Variable type should show Object : "+typeof a8);

/*3. Predict the Output
Without running the code, predict the output:/*
let b1=100;
console.log(typeof 100); ->number
console.log(typeof "100");->string
console.log(typeof true);->boolean
console.log(typeof undefined);-->undefined
console.log(typeof null);-->object
console.log(typeof 100n);-->bigInt

/*Then execute the program and compare your answers. */

console.log(typeof 100);//number
console.log(typeof "100");//string
console.log(typeof true);//boolean
console.log(typeof undefined);//undefined
console.log(typeof null);//object
console.log(typeof 100n);//bigint

/* #3Then execute the program and compare your answers. 
[Running] node "c:\Users\asky0\PlayWrt_JavaScriptTraining\JsBasics\tempCodeRunnerFile.js"
number
string
boolean
undefined
object
bigint
*/
/*
4. Student Information
Create variables to store:
- Student name
- Student age
- Student percentage
- Whether the student has completed the course
- Student's grade
Use appropriate JavaScript datatypes.
*/
var studnetname="Ajay"; //string
let studentname="Ajay" //String
let studentage=21 //number
//let studentpercentage= ???need help of priyanka ?
let isCourseCompleted=true, //boolean
let studentGrade="A" //stringneed help of priyanka ?

/*5.Create two variables:
let userName;
let userEmail = null;
Print both values and their datatypes.
Then answer:
1. What is the difference between undefined and null?
undefined -->means when variable is defined without assigned operator
null --> means when variable is assigned with empty value 
2. What does typeof userName return?
--> typeof retrun primitive datatype 
3. What does typeof userEmail return?
--> typeof userEmail should return 
4. Why is typeof null considered unusual in JavaScript?
--> it is designed defect when JavaScript was designed */
var userName = 'ajay';
let userName1 = "ajay"; 
var userEmail = null;
const userEmail1 = null;
console.log(typeof +userName);
console.log(typeof +userName1);
console.log(typeof +userEmail);
console.log(typeof +userEmail1);