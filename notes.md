# Typescript
TS is JS with types. It is ultimately compiled to JS only.  

## L01
Write some simple code in `main.ts`
```ts
let username = "Jinn"
console.log(username);
```
- Ran `tsc main.ts` in terminal.
- Genrated as `main.js` file, but now `main.ts` is showing an error. 
- `main.js` var declaration is used so that it is compatible with older browsers
- The error is only because we have both `.js` and `.ts` files open at the same time. Close one and the error goes.
- Link `.js` file to `html`
- For any change to `ts` file, we'll have to manually convert it to `ts` file each time. To avoid this we can add a `-w` flag as in `tsc main.ts -w` to watch over any changes and compile accordingly.
- But that's not something that can be done for many ts files. Also we'd want to have a structure of which files are in `src` and `build`.
- `tsc --init` : creates a ts config file.
- Inside the config file, we set paths of `outDir` (ts compiles to js files stored here) and and `rootDir` (ts files stored here)
- Now can type `tsc -w`, it'll simply watch the specified dir and auto compile to js
- Writing the below code in `ts` throws a warning, but it still compiles to `ts` and outputs in browser.
    ```ts
    let a = 12;
    let b = '6';
    let c = 2
    console.log(a/b);
    console.log(c * b);

    // correct ts way
    let a: number = 12;
    let b: number = 6;
    let c: number = 2
    console.log(a/b);
    console.log(c * b);
    ```
- We can prevent the code that gives warning in `ts` to be compiled to `ts` by chaning `"noEmitOnError": true`. Now it won't compile until the ts compiler is free of errors.

## L02
- Strongly Typed Langauges demand the specification of data types
- Looosely Typed Languages do not required type specification
- Static Typing/ Dynamic Typing is not the same as strongly typed/loosely typed
- In Static typed, data types are checked at compile time
- In Dynamic tpyed, data types are checked at runtime
- A language that is strongly typed can be either statically OR dynamically typed!
- TS is statically typed language meaning types are checked at runtime. JS is dynamically types (type checking at runtime)

## L03 
### Arrays  

```ts
let stringArr = ['one','hey','jinn'];
let guitars = ['Strat','Les Paul', 5150];
let mixedData =  ['EVH', 1984, true]
```      
- If we hover, we get intellisense saying that the `stringArr` is of `string` type. Modyfing the array with any other element than string gives error.  
    ```ts
    stringArr[0] = 42 error
    stringArr.push(42) error
    ```
- While `guitars` is infered as `String | number`. So it accepts both of them.
- `mixedData` is infered as `string | number | boolean`.  
    ```ts
    guitars = stringArr
    stringArr = guitars // Error
    ```
- Assigning `guitars` to `stringArr` is Ok, as `guitars` accepts `string` type. But the converse will give error as `stringArr` does not accept `number` type.  
- An empty array `[]` is infered as `any` type.
- We can have an empty array but also to have only a certain data type elements using the following syntax
    ```ts
    let bands : string[] = [];
    ```
- Let's go back to our `mixedData` array. We can insert any of `number`, `string`, `boolean` to it, at any position. Suppose we want to keep it fixed and also fix the positions where we can update a particular data type => here comes tuples  
    ```ts
    let myTuple : [string, number,boolean] = ['Jinn', 42, true]
    let mixed = ['John', 1 , false]

    myTuple[0] = 9 // error 0th position is only for string value
    myTuple[3] = false // error : can't add anyother element to the tuple
    myTuple[0] = 'Mayer';
    ```
- Both `myTuple (tuple)` and `mixed (array)` look identical. But in tuple we can limiting the size as well as at which positions which type of value we can modify.  

### Objects
```ts
const exampleObj = {
  prop1 : "Jinn",
  prop2 : true,
}
exampleObj.prop2 = 42
```
- In the above code, `prop1` is locked as `string` and `prop2` as `boolean`. If we try to assing any other data type to say `prop1` we'll get warning.
- We can also annotate types in an object.
    ```ts
    type Guitarist = {
        name: string;
        active: boolean;
        albums: (string | number)[];
    };

    let evh: Guitarist = {
        name: "Eddie",
        active: false,
        albums: [1984, 5150, "OU812"],
    };
    ```
- We need to maintain the structure. Need to have all 3 property with the specified data type. Also we can't add any new value.
- To make a property optional, we put `?` before `:`. Say, we're having the `active` property as optional. 
    ```ts
    type Guitarist = {
        name: string;
        active?: boolean;
        albums: (string | number)[];
    };

    let evh: Guitarist = {
        name: "Eddie",
        albums: [1984, 5150, "OU812"],
    };
    ```
- Internally, it's make it a union type between `(boolean | undefined)`

### Using objects as function params
```ts
const greetGuitarist = (guitarist : Guitarist) => {
return `Hello ${guitarist.name}!`
}

console.log(greetGuitarist(evh)); // Eddie
```
- In this syntax, the function accepts an object. We didn't have to specify all the object, simply refered to `Guitarist`.
- Suppose the `name` property was name `optional` instead. TS would not give any warning. But say we chained another method to it `name.toUpperCase()`; now TS will throw an warning, as `name` might be `undefined`. To solve :  `name?.toUpperCase()`

### Interface
- Almost same as `type`
    ```ts
    interface Pianist {
        name: string;
        active?: boolean;
        albums: (string | number)[];
    };
    ``` 
- Usually use `interface` when defining class

## Enums
- Enums allow a developer to define a set of named constants. Using enums can make it easier to document intent, or create a set of distinct cases. TypeScript provides both numeric and string-based enums.

    ```ts
    enum Grade {
    U,
    D,
    C,
    B,
    A,
    }

    console.log(Grade.U); // 0
    ```
- The value displayed are 0 to 5. 
- This can we change by `U = 1`, now the value will be from 1 to 6