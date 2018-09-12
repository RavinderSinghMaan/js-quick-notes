/* == and === */
console.log("/* == and ===*/")
// == can coerce the values means below is true
console.log(3 == new Number(3));
console.log(0 == false);
console.log(1 == true );
// To avoid the problems above use === which means values won't be coerced and below return false
console.log(3 === new Number(3));
console.log(0 === false);
console.log(1 === true );

/* Hoisting and Execution context */
console.log("/* Hoisting and Execution context*/");
// JS engine executes code in 2 phases.
// - First parser scans entire file and set aside memory space for all the variables
// and put functions in memory
// - Second all the expressions are executed line by line

// below prints undefined as "aHoistedVar" has been given memory space but line which sets value
// has not been executed yet
console.log(aHoistedVar);
var aHoistedVar = "aHoistedVar value";
// below prints "aHoistedVar value" as line which sets the value has been executed
console.log(aHoistedVar);

// Below Function is called before declaring it , this is fine because when JS engine sees a function
// definition during first pass function is loaded in memory. So in the second pass when JS engine
// runs code function executes.
aHoistedFunction();
function aHoistedFunction() {console.log("aHoistedFunction log line");}

// If below is enabled it will throw error "Uncaught ReferenceError: dash is not defined"
// as variable dash has not been declared
//console.log(dash);

/* Global context */
console.log("/* Global context */");
// There is always a global object and anything that is declared at global
// level is actually being added to global object
var globalVar = "globalVar value";

// keyword this refers to global object here and variable above assesed through this
// proves that it is in global object
console.log(this.globalVar);

function someFunctionInGlobalConetext() {
    console.log(this.globalVar);
    // Below variable is on
    var someVar = "someVar value";
    console.log(this.someVar);
}

someFunctionInGlobalConetext();
console.log(this.someVar);

/* Scope chain */
console.log("/* Scope chain */");
// When a function is called then a new execution context is created that is all
// the variables and functions in the function are first loaded in memory and then run

function globalContextFunction() {
    // as scopeVar is not defined in the function any reference to scopeVar is going to
    // access it from global context
    scopeVar = "scopeVar in globalContextFunction val";
}

var scopeVar = "scopeVar outer val";
console.log(scopeVar);
globalContextFunction();
console.log(scopeVar);

function globalContextScope() {
    var scopeVar1 = "scopeVar 1 val in globalContextScope";
    var scopeVar2 = "scopeVar 2 val in globalContextScope";
    console.log(scopeVar1);
    innerContextScope();
    console.log(scopeVar2);
    globalContextScope2();
    function innerContextScope() {
        // scopeVar1 value is picked from parent of this function
        console.log(scopeVar1);
    }
}

function globalContextScope2() {
    // Below will be picked from global context as function parent context of this function is
    // Global context not the context of function "globalContextScope"
    console.log(scopeVar2);
}

var scopeVar1 = "scopeVar 1 val global";
var scopeVar2 = "scopeVar 2 val global";
globalContextScope();
// as function above has its own var declared so global scopeVar1 is not changed
console.log(scopeVar1);

/*let or var */
console.log("/*let or var */");

if(1 >= 1) {
    let anInternalLetVariable = "anInternalLetVariable value";
    var anInternalVarVariable = "anInternalVarVariable value";
}
console.log(anInternalVarVariable);
//below will throw error "Uncaught ReferenceError: anInternalLetVariable is not defined"
// as let is only available within scope of curly braces
//console.log(anInternalLetVariable);

// Scope of let is curly braces so below will print 0,1 twice
for(let letI = 0;letI < 2; letI++) {
    for (let letI = 0; letI < 2; letI++) {
        console.log("let " + letI);
    }
}

// var is global so below will print 0,1 only once
for(var varI = 0;varI < 2; varI++) {
    for (var varI = 0; varI < 2; varI++) {
        console.log("var "+ varI);
    }
}

/* Shortcut to assign if not assigned a value */
console.log("/* Shortcut to assign if not assigned a value */");
var a ;

// Below will set a to "default value" even if a above is assigned empty string ""
// below will assign default value this happens due to type coercion rules
a = a || "default value";

console.log(a);

/* Different ways to create an object */
console.log("/* Different ways to create an object */");
var objectWithNew = new Object();

objectWithNew.firstName = "FirstName";

console.log(objectWithNew);

var objectWithCurlyBraces = { firstName : "FirstName"};

objectWithCurlyBraces.lastName = "LastName";

//Below is another way of setting/getting an object value
objectWithCurlyBraces["middleName"] = "MiddleName";

var otherName = "otherName";
objectWithCurlyBraces[otherName] = "SomeOtherName";

console.log(objectWithCurlyBraces);

/* Functions are objects. That is function */
console.log("/* Functions are objects. That is function */");
// - can have a name
// - can have other properties
// - has invocable code

function aFunction() {
    console.log("Hello");
};

console.log(aFunction);

//below shows how to add a property in function object

var aFunctionWithProp = function () {
    console.log("Hello")
};

aFunctionWithProp.somePropOfFunction = "Some Prop of aFunctionWithProp";

console.log(aFunctionWithProp.somePropOfFunction);

/* keyword this */
console.log("/* keyword this */");

var thisObject = {
    thisFunction : function () {
        console.log(this);
        function functionWithinThisFunction() {
            // "this" keywords below refers to Global context "this"( Windows object)
            // it how it has been designed by JS developers not much logic
            console.log(this);
        }
        functionWithinThisFunction();
    }
}
thisObject.thisFunction();
console.log(this);

/* Arrays */
console.log("/* Arrays */");
// Arrays are just objects and anything can be in Array

var arrayOfEveryThing = new Array();

arrayOfEveryThing[0] = false;
arrayOfEveryThing[1] = 1;
arrayOfEveryThing[2] = "string";
arrayOfEveryThing[3] =
    function () {
        console.log("function in array");
        return "value returned from function in array";
    };
arrayOfEveryThing[4] = { object : "val" };

console.log(arrayOfEveryThing);
console.log(arrayOfEveryThing[3]());

// or Array can be declared as below
var arrayShortSyntax = [];
arrayShortSyntax[0] = "arrayShortSyntax";
console.log(arrayShortSyntax);

var arrayInline = ["arrayInline"];
console.log(arrayInline);

/*function arguments, parameters, var args AND keyword arguments*/
console.log("/*function arguments and parameters AND keyword arguments*/");
//default parameter value is new feature
function aParameterArgumentsFunction(firstName, lastName, language, ...other /*this is like java var args*/) {
    //below trick can be used to set default value
    //language =  language || "fr";
    console.log(firstName);
    console.log(lastName);
    console.log(language);
    //arguments is keyword which gives Array of all the arguments. It does not return proper Array object
    //but it is like Array
    console.log(arguments)
    console.log("*******************")
}

aParameterArgumentsFunction();
aParameterArgumentsFunction("firstName");
aParameterArgumentsFunction("firstName", "lastName");
aParameterArgumentsFunction("firstName", "lastName", "es");
aParameterArgumentsFunction("firstName", "lastName", "es", "x", "y", "z");

/* Auto syntax completions i.e. semicolons*/
console.log("/* Auto syntax completions i.e. semicolons*/");

function autoSyntaxCompletion() {
    return
    {
        firstName : "FirstName"
    }
}

//In the above function when parser sees return statment and carriage return parser will insert
//semicolon after return which means below just prints undefined. So always use semicolons and
//do not rely on defaults
console.log(autoSyntaxCompletion());

// In case you have to return an object start curly braces after return as below
// If a block starts in the same line than semicolon wont be inserted automatically
function returnObjectCorrect() {
    return {
        firstName : "FirstName"
    }
}

console.log(returnObjectCorrect());

/* Immediately invoked function */
console.log("/* Immediately invoked function */");
var iffeValue = function(name) {
    return "Hello "+name;
}("SomeTestNameFromArgument");
console.log(iffeValue);

//Below is the way to invoke a function without assigning the its value to var
// that is put it within parentheses
//But what is the benefit? Benefit is that when this function is executed a new context is created
// and all the variables declared in the function are created in new execution context
// not in global context
// But what is the benefit of not creating the vars in the Global context?
// Benefit is that if variables are updated within the function global varaibles won't be effected
(function(name) {
    console.log("Hello "+name);
}("IIFE"))

//Below code shows that even though variable iffeGlobal is updated in IIFE the actual
// global variable is not effected
var globalIffe = "Global IIFE should not change";
console.log(globalIffe);
(function(){
    var globalIffe = "Updated Global IIFE within IIFE";
    console.log(globalIffe);
}());
console.log(globalIffe);
function updateGlobalIffe() {
    globalIffe = "Updated Glocal IIFE from another function";
}
updateGlobalIffe();
console.log(globalIffe);

//What if I want to update something in global object? Pass it as parameter
(function(global){
    global.globalFromIIFE = "global prop added from IIFE";
}(window));
console.log(window.globalFromIIFE);

/* Closures */
console.log("/* Closures */");
// Closure means when execution stack of some parent function has been removed variables from that
// stack are still kept. This is a feature of JS
var returnedFunction = (function parentFunctionForClosure() {
    var varInParentFunctionForClosure = "Value of varInParentFunctionForClosure";
    return function() {
        console.log(varInParentFunctionForClosure);
    };
}());
var varInParentFunctionForClosure = varInParentFunctionForClosure || "Default";
console.log(varInParentFunctionForClosure);
returnedFunction();

//Below example shows that  closure refers to same memory space so when the value of i is updated
//by loop it is same memory space which is referred by all the functions
var returnedFunctionArray = (function parentFunctionForClosure() {
    var arr = [];
    for(var i =0; i < 2; i++) {
        arr.push(function() {
            console.log(i);
        });
    }
    return arr;
}());
returnedFunctionArray[0]();
returnedFunctionArray[1]();

//To actually retain the value of i for each iteration either let can be used or another IIFE can be used
var returnedFunctionArrayWithLet = (function parentFunctionForClosure() {
    var arr = [];
    for(let i =0; i < 2; i++) {
        arr.push(function() {
            console.log(i);
        });
    }
    return arr;
}());
returnedFunctionArrayWithLet[0]();
returnedFunctionArrayWithLet[1]();

var returnedFunctionArrayWithIIFE = (function parentFunctionForClosure() {
    var arr = [];
    for(var i =0; i < 2; i++) {
        arr.push((
            function(j) {
                return function() {
                    console.log(j);
                }
        }(i)));
    }
    return arr;
}());
returnedFunctionArrayWithIIFE[0]();
returnedFunctionArrayWithIIFE[1]();

/* Callbacks*/
console.log("/* Callbacks*/");
//Callback is when a function is given a function to be invoked when the function has finished
function callBackExecutor(callback) {
    callback();
}

callBackExecutor(function(){
   console.log("Executed!");
});

/* bind() call() apply()*/
console.log("/* bind() call() apply()*/");
// bind() creates a copy of the function and
// - gives the ability to set this variable of the function
// - gives the ability to set a parameter value to something which can be used for currying
var bindPerson1 = {
    firstName : "First Name",
    lastName : "Last Name",
    fullName : function(lang, greeting) {
        return lang+ " " + this.firstName + " "+ this.lastName+" "+greeting;
    }
}
console.log(bindPerson1.fullName("en", "Hello"));
var bindPerson2 = {
    firstName : "2 First Name",
    lastName : "2 Last Name"
}
//below this variable is bound to bindPerson2 and lang is set to "es"
var fullNameWithBind = bindPerson1.fullName.bind(bindPerson2, "bind() es");
// as this and lang parameters are already bound so below we just pass greeting param
console.log(fullNameWithBind("Hola!"));

// call() just calls the method without creating a copy
// and it also gives the ability to set this keyword
console.log(bindPerson1.fullName.call(bindPerson2, "en", "Hello call()!"));

// apply() is same as call() but passes arguments as Array
// Which means long lists can be passed
console.log(bindPerson1.fullName.apply(bindPerson2, ["en", "Hello apply()!"]))

/*Functional Programming*/
console.log("/*Functional Programming*/")
//With functions being objects in JS there is lot we can do. See example below for map
var mapForEach = function(arr, mapper) {
    var newArr = [];
    for(var i = 0; i < arr.length; i++) {
        newArr.push(mapper.call(this, arr[i]));
    }
    return newArr;
}

console.log(mapForEach([1,2], function(item) { return item > 1;}));
console.log(mapForEach([1,2], function(item) { return item > 2;}));
//Above we are creating a function each time it can be simplified even further
var simplifiedLimitCheckingFunction = function(limit) {
    return function(limit, item) {
        return item > limit
        //below bind the limit
    }.bind(this, limit);
}
// with above simplified function we can do as below
console.log(mapForEach([1,2], simplifiedLimitCheckingFunction(1)));
console.log(mapForEach([1,2], simplifiedLimitCheckingFunction(2)));

/*Object Oriented and Prototypal Inheritance */
console.log("/*Object Oriented and Prototypal Inheritance */");
//In JS everything is either object or primitive that is functions are objects
//Arrays are objects
// - And each object has a prototype in other words __proto__ is the property which link
// to prototype object
//Below an object should have __proto__ property
console.log({});
var fn = function(){};
console.log(fn);
console.log([]);
// Basic methods like toString in an object come from prototype
console.log({}.__proto__);
// Basic methods like call(), bind(), apply() in a function object come from prototype
console.log(fn.__proto__.call);
// Basic method like push or property length in array come from prototype
console.log([].__proto__.length);
console.log([].__proto__.push);
console.log([].__proto__.__proto__);

//when a property or method is not in object itself then engine will look for the method
// in prototype chain
var protoTypeChainObject1 = {
    firstName :"First Name 1",
    lastName :"Last Name 1",
    fullName : function() {
        return this.firstName+" "+this.lastName;
    }
}

var protoTypeChainObject2 = {
    firstName : "First Name 2"
}

//DO NOT DO BELOW FOR INHERITANCE BELOW IS FOR DEMO ONLY!!
protoTypeChainObject2.__proto__  =  protoTypeChainObject1;
//Below method fullName is picked up from object up in the prototype hierarchy
console.log(protoTypeChainObject2.fullName());
console.log(_.extend);

/*Function constructors and new*/
console.log("/*Function constructors and new*/")
// "new" is an operator in JS that is when JS engine sees keyword "new" it
// -- creates and empty object
// -- sets this variable to the newly created empty object
// -- calls the function after new
// -- returns newly created object from function
function PersonObject(firstName) {
    //Below will be empty as JS engine has created a new empty object and this points to new object
    console.log(this);
    this.firstName = firstName;
    this.lastName = "Last Name";
    //Even though there is no return newly created object is returned from the function following new
}
var newPersonObject = new PersonObject("First Name");
console.log(newPersonObject);

//Below shows that if function return something explicitly, it overrides the default behaviour
// of function following new
function PersonObjectOverrideDefault() {
    this.firstName = "First Name";
    return {
        firstName : "Some Other First Name"
    };
}
console.log(new PersonObjectOverrideDefault());

//Function constructor also allows the ability to add a method to the constructed objects
//Each function has a property called prototype and anything which is added to prototype is set
// on __proto__ of the objects created through function constructor
// this can be done even after object has been created. Any function attached to prototype is
// available to all the objects created before and after
PersonObject.prototype.getFullName =  function() {
    return this.firstName + " " + this.lastName;
}
console.log(PersonObject);
console.log(newPersonObject);
//getFullName was added to prototype of function constructor but this method is now available on
// objects created through constructor due to reason explained above
// But what is the benefit of adding method using prototype? why not add it in the function constructor?
// Benefit is that function are loaded in memory and if the function was defined in constructor function
// then every object will have copy of function which means it will take more memory
// on the other hand by adding function with prototype it is only defined once and hence uses less memory
console.log(newPersonObject.getFullName());
//Another point to note is that if we omit new operator funtion is going to behave as normal function
// which means there is possibility of error. To avoid this it is always a good idea to follow the
// convention of using first letter of Function name as Capital letter. Same has been done above
// With all the above it means you can extend native function constructors
String.prototype.isLengthGreaterThan = function (number) {
    return this.length > number;
}
console.log("John".isLengthGreaterThan(2));
//another point to note is that below "John" is autoboxed to object String by JS engine
//Same way function constructors like new Date() new Number() can be extended
console.log("John".isLengthGreaterThan(6));

//To loop through all the properties and methods of an object you can do below
for(var prop in newPersonObject) {
    console.log(prop);
}
//As we know Arrays are objects as well it is interesting to see how Array objects store its items
var arrayObjectStore = ["John", "Joe", "Jack"];
for(var prop in arrayObjectStore) {
    //below print like 0 : John that is index is just name of the property
    console.log(prop+" : "+arrayObjectStore[prop]);
}

/* Object.create another way to create objects from prototype */
console.log("/* Object.create another way to create objects from prototype */");
//In new browsers you can create object from existing object using Object.create method
var objectCreateBaseObject = {
    firstName : "First Name"
};

var objectCreateBaseObjectFromPrototype = Object.create(objectCreateBaseObject);
//Below shows that base object has been set as prototype of new object
console.log(objectCreateBaseObjectFromPrototype.__proto__);
objectCreateBaseObject.lastName = "Last Name";
console.log(objectCreateBaseObjectFromPrototype.__proto__);

/*class and extends*/
console.log("/*class and extends*/");
//class is another way to create object and is in ES6
//under the hood it works same as above that is creates function constructor and uses prototypal inheritance
// class below actually object it is not same as Java class it is prototype object
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFullName() {
        return this.firstName+" "+ this.lastName;
    }
}

var newPersonFromClass = new Person("First Name", "Last Name");
console.log(newPersonFromClass.getFullName());
console.log(newPersonFromClass);
//proto contains function of the class
console.log(newPersonFromClass.__proto__);
//it is also possible to extend a class
class Employee extends Person {
    constructor(firstName, lastName, id) {
        super(firstName, lastName);
        this.id = id;
    }

    getFullInfo() {
        return super.getFullName()+ +this.id;
    }
}
var employeeFromClassExtended = new Employee("First Name", "Last Name", "1");
console.log(employeeFromClassExtended.getFullInfo());
console.log(employeeFromClassExtended.__proto__);

/*typeof instanceof*/
console.log("/*typeof instanceof*/");
console.log(typeof 3);
console.log(typeof "3");
console.log(typeof null);
console.log(typeof undefined);
console.log(typeof ["1"]);
console.log(typeof {});
console.log(typeof function () {});
console.log(employeeFromClassExtended instanceof Person);
console.log(employeeFromClassExtended instanceof Employee);

/*strict mode*/
console.log("/*strict mode*/");
//if used it throws error for some of the scenarios
//it should be first line of the file
//it can be within a function so that strict only applies to a function
function strictExample() {
    'use strict';
    //if below is enabled than it will throw error as variable has to be defined
    // i.e. var someValueStrict = "strict";
    //someValueStrict = "strict";
}

strictExample();
