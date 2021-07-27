import * as R from "ramda";

const stringToArray = R.split("");

/* Question 1 */
//Returns the number of vowels in the inputted string 
export const countVowels = (str: string) => 
stringToArray(str).filter(vowels => 'aeiouAEIOU'.includes(vowels)).length;

/* Question 2 */
//Returns a “compressed” version of the inputted string,
// where identical consecutive characters appear as the character followed by its count
export const runLengthEncoding = (str: string): string =>
recurse(stringToArray(str), 1, 0, "");
 
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

 


// /* Question 3 */
//Returns true if the parentheses ({, }, (, ), [, ]) in the string are paired
//and false otherwise
export const isPaired = (str: string) => recursePair("", str);

const recursePair=(stack: string, str: string) : boolean =>
{
    if(str === ""){
        return (stack === "");
    }
    else if(str.charAt(0) === '(' ||str.charAt(0) === '[' || str.charAt(0) === '{' ){
        return recursePair(str.charAt(0)+stack,str.substring(1));
    }
    else if(str.charAt(0) === ')' || str.charAt(0) === ']' || str.charAt(0) === '}' ) {
        return !(stack === "") && 
        (isMatching(stack.charAt(0),str.charAt(0))) && 
        recursePair( stack.substring(1),str.substring(1));
    }
    return recursePair(stack,str.substring(1));
}

//checks if the pair of parantheses match
const isMatching = (opener: string, closer: string) : boolean =>
{
    if(opener=== "{" && closer=== "}"){
        return true;
    }
    if(opener=== "[" && closer=== "]"){
        return true;
    }
    if(opener=== "(" && closer=== ")"){
        return true;
    }
    return false
}
