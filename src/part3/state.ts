export type State<S, A> = (initialState: S) => [S, A];

//a state "processor" function in which recieves a state and a function 
//and chains states through a series of function calls
export const bind: <S, A, B>(state: State<S, A>, f: (x: A) => State<S, B>) => State<S, B> =
<S, A, B>(state: State<S, A>, f: (x: A) => State<S, B>) =>
{    
    return (s: S): [S, B] => f(state(s)[1])(state(s)[0]);
}

