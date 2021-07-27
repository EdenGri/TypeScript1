import { State, bind } from "./state";

export type Stack = number[];

//Returns a State that adds x to the stack
export const push = (x: number): State<Stack, undefined> =>
    (stack: Stack) => [[x].concat(stack), undefined];

//pops a number from the stack and returns it
export const pop: State<Stack, number> =
    (stack: Stack) => [stack.slice(1), stack[0]];

//Pops a number x from the stack and then pushes x * x
//afterwards pops a number y and pushes x + y
export const stackManip: State<Stack, undefined> =
    (stack: Stack) =>
        bind(pop,
            (x: number) => bind(push(x * x),
                () => bind(pop,
                    (y: number) => push(x + y))))(stack);
    



