import * as R from "ramda";
import { pipe } from "ramda";

const stringToArray = R.split("");

//check if everything is good for empty strings TODO

/* Question 1 */
export const countVowels = (str: string) => stringToArray(str)
.filter(vowels => 'aeiouAEIOU'.includes(vowels)).length;

//console.log(countVowels('abcdefghIjklmnopqrstuvwxyz III O'));

/* Question 2 */
export const runLengthEncoding = (str: string): string => recurse(stringToArray(str), 1, 0, "");
 
const recurse = (str: string[], count: number, currPosition: number, output: string): string =>{
    if(currPosition == str.length){
        return output;
    }
    else if(str[currPosition] != str[currPosition + 1]){
            if(count===1){
                return recurse(str, 1, currPosition + 1, output + str[currPosition]);
            }
            return recurse(str, 1, currPosition + 1, output + str[currPosition] + count);  
        }
    else{
            return recurse(str, count + 1, currPosition + 1, output);
        }
};

console.log(runLengthEncoding("aaaabbbccd")); 


// /* Question 3 */
export const isPaired = (str: string) => recursePair("", str);

const recursePair=(stack: string, str: string) : boolean => {
    if(str === ""){
        return (stack === "");
    }
    else if(str.charAt(0) === '(' ||str.charAt(0) === '[' || str.charAt(0) === '{' ){
        return recursePair(str.substring(1),str.charAt(0)+stack);
    }
    else if(str.charAt(0) === ')' || str.charAt(0) === ']' || str.charAt(0) === '}' ) {
        return !(stack === "") && (isMatching(stack.charAt(0),str.charAt(0))) && recursePair(str.substring(1), stack.substring(1));
    }
    return recursePair(str.substring(1), stack);
    
}

const isMatching = (opener: string, closer: string) : boolean => {
    if(opener=== "{" && closer=== "}"){
        return true;
    }
    if(opener=== "[" && closer=== "]"){
        return true;
    }
    return false
}
console.log(isPaired("{}"));