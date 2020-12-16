// JS is dynamically typed. 
// Type coercion happens when using the double equal sign 
// In the following code, JS will convert '1' to a numeric and the result is true
1 == '1'  // true because the '1' is dynamically converted to 1 and then 1 == 1 is true

// There is also === but JS does not coerce the values. The comparison is explicit.
// Therefore 1 === '1' is false
1 === '1' // false because '1' is not converted to the type of first operand = 1

// The same with if conditions
if (1) { 
	console.log(5);  // 5 will print because the condition 1 is coerced to true
}

// Same here:
if (0) {
	console.log(5); // 5 will not print. The 0 condition is coerced to false
}

// There is a nice website to view all the comparisons, also available on GitHub, called JS Comparison Table
// https://dorey.github.io/JavaScript-Equality-Table/

// Best is stick to ===

// Weird things in JS
//
Object.is(-0,+0) // => false !!

NaN === NaN // => false !!

Object.is(NaN, NaN) // => true !!!


