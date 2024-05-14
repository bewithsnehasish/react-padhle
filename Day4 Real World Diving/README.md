# Questions asked in the session ?

* [ ] Can we use React fragment again inside a react fragment ??
  -Yes we can use React fragment inside a react fragment,This is useful when you need to group multiple elements together without adding extra DOM nodes.
* [ ] What is optional channing ?
  
  -Yes Optional chaining is a feature in JavaScript (and languages like TypeScript) that allows you to access properties of an object without the fear of encountering a `TypeError` if the property you are trying to access does not exist or is `null` or `undefined`. It uses the `?.` syntax.

Here's how it works:

```javascript
// Without optional chaining
const name = user.address.street; // Throws an error if 'address' or 'street' is null or undefined

// With optional chaining
const name = user?.address?.street; // No error, 'name' will be undefined if 'address' or 'street' is null or undefined
```

In the example above, if `user` does not have an `address` property or if `address` does not have a `street` property, the expression `user?.address?.street` will simply evaluate to `undefined` instead of throwing an error.

* [ ] What is the SpreadOperator in the JavaScript?
  -The spread operator, represented by three consecutive dots (`...`), is a feature introduced in JavaScript ES6 (ECMAScript 2015). It allows an iterable, such as an array or an object, to be expanded into its individual elements or key-value pairs. The spread operator has two primary use cases: for arrays and for objects.

### For Arrays:

```javascript
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

// Concatenating arrays
const combinedArray = [...arr1, ...arr2]; // [1, 2, 3, 4, 5, 6]

// Copying an array
const copiedArray = [...arr1]; // [1, 2, 3]
```

### For Objects:

```javascript
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };

// Merging objects
const mergedObject = { ...obj1, ...obj2 }; // { a: 1, b: 2, c: 3, d: 4 }

// Copying an object
const copiedObject = { ...obj1 }; // { a: 1, b: 2 }
```

In both cases, the spread operator is used to 'spread' the elements of an iterable (array or object) into another array or object. This feature provides a concise and elegant way to work with arrays and objects in JavaScript, enabling tasks such as array concatenation, object merging, and object copying.
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

## Config-Driven UI

A config-driven UI is a design approach where the layout, appearance, and behavior of the user interface are defined by configuration files instead of hardcoded in the application's code. These configuration files specify elements like layout, styling, and behavior in a human-readable format such as JSON or YAML. Config-driven UIs offer flexibility, allowing rapid prototyping, customization, and reduced development time.

```
// Config Driven UI

const Config = [
    {
        type: "carousel",
        cards: [
            {
                offerName : "50% Off"
            },
            {
                offerName : "No Delivery Charges"
            }
        ]
    },
    {
        type: "restaurant",
        cards: [
            {
                offerName : "50% Off"
            },
            {
                offerName : "No Delivery Charges"
            }
        ]
    }
]


```

