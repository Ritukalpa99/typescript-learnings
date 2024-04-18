# Typescript
TS is JS with types. It is ultimately compiled to JS only.  

## L01
Write some simple code in `main.ts`
```js
let username = "Jinn"
console.log(username);
```
- Ran `tsc main.ts` in terminal.
- Genrated as `main.js` file, but now `main.ts` is showing an error. 
- `main.js` var declaration is used so that it is compatible with older browsers
- The error is only because we have both `.js` and `.ts` files open at the same time. Close one and the error goes.
- Link `.js` file to `html`
- For any change to `ts` file, we'll have to manually convert it to `js` file each time. To avoid this we can add a `-w` flag as in `tsc main.ts -w` to watch over any changes and compile accordingly.
- But that's not something that can be done for many ts files. Also we'd want to have a structure of which files are in `src` and `build`.
- `tsc --init` : creates a ts config file.
- Inside the config file, we set paths of `outDir` (ts compiles to js files stored here) and and `rootDir` (ts files stored here)
- Now can type `tsc -w`, it'll simply watch the specified dir and auto compile to js
- Writing the below code in `ts` throws a warning, but it still compiles to `js` and outputs in browser.
    ```js
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
- We can prevent the code that gives warning in `ts` to be compiled to `js` by chaning `"noEmitOnError": true`. Now it won't compile until the ts compiler is free of errors.

## L02
- Strongly Typed Langauges demand the specification of data types
- Looosely Typed Languages do not required type specification
- Static Typing/ Dynamic Typing is not the same as strongly typed/loosely typed
- In Static typed, data types are checked at compile time
- In Dynamic tpyed, data types are checked at runtime
- A language that is strongly typed can be either statically OR dynamically typed!
- TS is statically typed language meaning types are checked at runtime. JS is dynamically types (type checking at runtime)