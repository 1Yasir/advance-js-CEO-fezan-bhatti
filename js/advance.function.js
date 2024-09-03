//High Order Function .... 

// In JavaScript, functions are not just tools for performing actions; they can be treated like any other value. This means you can assign functions to variables, pass them as arguments to other functions, and even return them from functions. This powerful concept lays the foundation for higher-order functions.  heigh-order-function like map , filter , addEventListener  etc.


// example of heigh order function 

function validateInput(value, validators) {
  const errorMessage = validators(value);
  if (errorMessage) {
    return errorMessage;
  }
  return null;
}


function isRequired(value) {
  const result = !value ? "This field is required." : null;
  return result
}


const userName = "yasir mehmood";
const validationError = validateInput(userName, isRequired);

if (validationError) {
  console.error(validationError);

} else {
  // console.log("valid");

}


//  Function currying

// Currying is a technique used in functional programming that allows you to transform a function with multiple arguments into a sequence of functions, each taking only one argument at a time. This concept is named after the mathematician Haskell Curry, who introduced it in the 1930s. In JavaScript, currying is a powerful tool that can improve code reusability, composability, and maintainability.

// Why should I use currying?

// There are several reasons why currying is ideal:
// Currying is a checking method to make sure that you get everything you need before you proceed
// It helps you to avoid passing the same variable again and again
// It divides your function into multiple smaller functions that can handle one responsibility. This makes your function pure and less prone to errors and side effects
// It is used in functional programming to create a higher-order function
// This could be personal preference, but I love that it makes my code readable

// your normal function
const add1 = (a, b) => {
  return a + b;
}

// console.log(add1(1,2)); // 3

// using currying
const add2 = (a) => {
  return (b) => {
    return a + b;
  }
}

// console.log(add2(1)(5)); // 6
const reuseParameter = add2(1);
//  console.log(reuseParameter(1)); // 2
//  console.log(reuseParameter(2)); // 3


const array = ["yasir", "mehmood", "dogar", "ali"];
let index = 0;


function handleClick(action) {
  return function () {
    index = (index + action + array.length) % array.length;  // Correctly wraps for both increment and decrement
    // console.log(`${array[index]}`);
  };
}

// Usage
const next = handleClick(1); // Increment index
const previous = handleClick(-1); // Decrement index



next();
previous()
// Attach event handlers to buttons
//   document.getElementById('previous').addEventListener('click', previous);
//   document.getElementById('next').addEventListener('click',next );

function calculateTotal(taxRate) {
  return function (discountPercentage) {
    return function (subtotal) {
      const taxAmount = subtotal * taxRate / 100;
      const discountAmount = subtotal * discountPercentage / 100;
      return subtotal + taxAmount - discountAmount;
    }
  }
}

// Usage
const calculateTotalWithTaxAndDiscount = calculateTotal(8)(10);
const orderSubtotal = 100;
const totalCost = calculateTotalWithTaxAndDiscount(orderSubtotal);
// console.log(`totalCost is --- ${totalCost} -----> `);


//   using bind curring

function multiple(a, b, c) {
  return a * b * c;
}

const multipleBy2 = multiple.bind(this, 2, 4);
// console.log(multipleBy2(2));
// console.log(multipleBy2(3));




//   infinite curring 


function infiniteCurring(x) {
  return function (y) {

    if (y) return infiniteCurring(x * y);

    return x;

  }
}

// console.log(infiniteCurring(2)(3)());

const users = [
  {
    id: 1,
    name: 'Steve',
    email: 'steve@example.com',
  },
  {
    id: 2,
    name: 'John',
    email: 'john@example.com',
  },
  {
    id: 3,
    name: 'Pamela',
    email: 'pam@example.com',
  },
  {
    id: 4,
    name: 'Liz',
    email: 'liz@example.com',
  },
];



const noJohn = users.filter(item => item.name !== "John");
//  console.log(noJohn);

//  Lekin is tareeqe mein issue yeh hai ke yeh reusable nahi hai kyun ke name ko hardcode kiya hua hai. Har dafa naye naam ke liye code ko change karna padega.

// Behtar Approach:
// Ek reusable function banate hain aur name ko as argument pass karte hain:


// const filterByName = (list , name)=>{
//   return list.filter(item => item.name !== name);
// }
// console.log(filterByName(users, 'John'));
// console.log(filterByName(users, 'Steve'));

// Is tarah hum alag alag names ke liye asani se filtering kar sakte hain.

// Problem:
// Agar aap chahte hain ke filtering logic alag se ek variable mein ho aur reusable ho, toh aapko problem face hogi

// const filtering = item => item.name !== name;

// const filterByName = (list, name) => {
//   return list.filter(filtering);
// }

//   console.log(filterByName(users, 'Steve'));


// Is approach mein error aayega kyun ke filtering function ko name ki value nahi pata hogi.

// Currying se Solution: 

// Yahan pe currying ka use karte hain. Currying se hum ek function ko aise todte hain ke ek function dusra function return karta hai jo specific argument leta hai:

const filtering = (name) => (item) => item.name !== name;

const filterByName = (list, name) => {
  return list.filter(filtering(name));
}

// console.log(filterByName(users, 'John'));


// Purana Function Syntax:

// Agar purane style mein likhna ho toh yeh kuch aisa dikhega:


// javascript   paritail application  exapmle
// function filterByName(list, name) {

//   return list.filter(function(nameToFilter) {
//     // nameToFilter yahan declare ho raha hai
//     return function(item) {
//       // item yahan declare ho raha hai
//       return item.name !== nameToFilter;
//     }
//   }(name));
// }



// function sum2(a) {
//   return function (b) {
//     return a + b;
//   }
// }

 


