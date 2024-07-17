# Arrays Notes

- A collection of items (usually all relating to the same thing: Like 'Dogs')
- The items are stored in neighboring (contiguous) memory locations. Because they're stored together, checking through the entire collection of items is straightforward. (Not true in javascript. I think this statment is applicapble to lower level languages like c)
- Arrays are 0 indexed.

## Creating Arrays

Their are several ways in which arrays can be created:

- Array Literals
- The spread operator
- The Array() constructor
- The Array.of() and Array.from() factory methods.

### Array Literals

- The simplest way to create an array. This is simply a comma-separated list of array elements within square brackets

```js
let emptyArray = [];
let arrayWithVals = [1, 2, 3, 4];
```

- If an array literal contains multiple commas in a row, with no value between, the array is sparse. This basically creates non existent array slots.
- If you query these spots they appear to be undefined.

```js
let arr = [1, , 3];
let indexOne = arr[1]; /// indexOne == undefined
```

### The spread operator

- From es6 and later, you can use the spread operator to include elements from one array within an array literal.

```js
const arrOne = [1, 3, 4, 5];
const newArr = [1, ...arrOne, 7];
// newArr === [1, 1, 3, 4, 5, 7]
```

- Spread operator is a convenient way to create a shallow copy of an array. Simply spread the array you want to copy within an empty array literal.
- Spread operators work on any iterable object (can be anything that can be for looped over).
- You can split a string into an array of single characters using the spread operator.
- NOTE: COOL TRICK:
- Set objects are iterable and the spread operator can be used on them. This creates a very easy way to remove duplicate elements from an array (or string).

```js
let letters = [..."hello world"];
[...new Set(letters)]; // ['h', 'e', 'l', 'o', '', 'w', 'r', 'd']
```

### The Array constuctor

You can invoke an array constuctor in 3 different ways.

1. Call it with no arguments. (Creates an empty array);
2. Call it with a single numeric argument (creates an array of specified length)
3. Explicity specifify what goes in the array with 2 or more arguments (or one non-numeric argument);

```js
const array = new Array(); // []
const arrayLength10 = new Array(10);
const arrayFilled = new Array(1, 2, 3, 4); // [1,2,3,4]
```

### The Array.of method

- Basically just a patch so you can create an array with one numeric argument like: Array.of(1) => [1];

### The Array.from method

The method expexts an iterable or array-like object as its first argument and returns a new array that contains the elements of that object.

- This basically works like using a spread operator to create copies of arrays.
- This method also takes an optional second argument. If you pass this second argument a function, then it will pass the function the argument as it builds it.
- This is essentially the same as map, but more effecient to perform the mapping while the array is being built than it is to buildthe array and then map it to another new array.

### Some word salad to remember

- It is helpful to clearly distiguish an array index from an object property name. All indexes are property names, but only property names that are intergers between 0 and 2^32 - 2 are indexes.
- All arrays are objects, you can create properties of any name on them. If you use properties that are array indexes, howeverm arrays have the special behavior of updating their length property as needed.
- The fact that array indexes are simply a special type of object property name means that Javascript arrays have no notion of an 'out of bounds' error. When you try to query a nonexistent property of any object, you don't get an error; you simply get undefined.
