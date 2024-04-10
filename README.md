# Introduction to JavaScript

On this class we learned the basics of JavaScript, types, variables, operators...

Each js file contains the examples seen in class.

## Runtime environment

The browser provides by default a runtime environment for JavaScript. This means that we can run our js code there.

### Node.js

Node.js is a runtime environment that allows us to run JavaScript code outside the browser. It is based on the V8 engine, the same engine that Chrome uses to run JavaScript code.

## Console

The console is a tool that allows us to see the output of our code. We can use it to debug.

### console.log()

This method allows us to print a message to the console.

```javascript
console.log("Hello World"); // the output will be 'Hello World'
```

## Variables

A variable is a container for a value 📦. We can store any type of value in a variable.

### var

The `var` keyword is used to declare a variable. It is the old way of declaring variables.

```javascript
var userName = "John";
```

### let

The `let` keyword is used to declare a variable. This kind of variables can be reassigned. This means that we can change the value of the variable whenever we want.

```javascript
let userName = "John";
userName = "Jane"; // now the value of userName is 'Jane' and not 'John' anymore
```

### const

The `const` keyword is also used to declare a variable. This kind of variables cannot be reassigned. This means that once we assign a value to a `const` variable, we cannot change it directly.

```javascript
const userName = "John";
userName = "Jane"; // this will throw an error
```

## Data types

### Primitive data types

Primitive data types are the most basic data types available in JavaScript.

- String
- Number
- Boolean
- Undefined
- Null

### String

A string is a sequence of characters. We can use single quotes, double quotes or backticks to define a string.

### Number

A number can be an integer or a floating-point number.

### Boolean

A boolean can be either `true` or `false`.

### Undefined

A variable that has not been assigned a value has the value `undefined`.

### Null

Null is a special value that represents the absence of a value.
