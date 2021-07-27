import { Result, makeFailure, makeOk, bind, either, isFailure } from "../lib/result";

/* Library code */
const findOrThrow = <T>(pred: (x: T) => boolean, a: T[]): T => {
    for (let i = 0; i < a.length; i++) {
        if (pred(a[i])) return a[i];
    }
    throw "No element found.";
}

// Returns an Ok for the first element that the predicate returns true for
//otherwise, if no such element exists, returns a Failure
export const findResult = <T>(pred: (x: T) => boolean, array: T[]): Result<T> =>
array.reduce((result: Result<T>, currResult: T): Result<T> =>
(pred(currResult) && isFailure(result)) ? makeOk(currResult) : result, makeFailure("No element found."));

/* Client code */
const returnSquaredIfFoundEven_v1 = (a: number[]): number => {
    try {
        const x = findOrThrow(x => x % 2 === 0, a);
        return x * x;
    } catch (e) {
        return -1;
    }
}

//Returns an Ok for the first even value squared
//Otherwise, if no even numbers exists, returns a Failure
export const returnSquaredIfFoundEven_v2 = (a:number[]) => {
    const result  = findResult((x: number): boolean => x % 2 === 0, a);
    return bind(result,(x:number) => makeOk(x*x));
}


//Returns the first even value squared, or a −1 if no even numbers exists
export const returnSquaredIfFoundEven_v3 = (a:number[]) => {
    const result  = findResult((x: number): boolean => x % 2 === 0, a);
    return either(result,(x:number) => x*x, (message:string) => -1);
}