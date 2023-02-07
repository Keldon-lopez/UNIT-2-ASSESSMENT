///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/

//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
  {
    name: "pizza",
    price: 9.99,
  },
  {
    name: "pasta",
    price: 8.99,
  },
  {
    name: "salad",
    price: 7.99,
  },
];

//CODE HERE
const getSum = (total, num) => {
  if (typeof total === "number") {
    return total + num.price;
  } else {
    return total.price + num.price;
  }
};

const summedPrice = cart.reduce(getSum);
console.log(summedPrice);

//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

//CODE HERE
const calcFinalPrice = (cartTotal,couponValue, tax) =>{
    let preDiscount = cartTotal + (cartTotal * tax);
    return preDiscount - couponValue;
}

//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
    TEXT ANSWER HERE
    I chosen name and email as this will be the best way to confirm who the customer is.
    I also added the address as that will be needed in billing for customers and also shipping. Sometimes this will have to be separate values so we would need to add a new billing address property
    I have the subscribed property as many online services have some sort of subscriptions

*/

/*
    Now, create a customer object following your own
    guidelines.
*/

//CODE HERE
const customers= [
    {
        name: "Austin Nielsen",
        email: "austin@Nielsen.com",
        address: "123 Cool Rd Fake, UT 84042",
        subscribed: true,
    }
]