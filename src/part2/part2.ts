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
    if(currPosition == str.length){//todo check if need to check range of array
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

// {
//     const stringArr = stringToArray(str);
//     const output = "";
//     const count = 0;
//     const currPosition = 0;
//     if(stringArr.length == 0){
//         return output;
//     }
//     else{
//     return recurse(stringArr, count, currPosition, output);
//     }
// };

//const count = items.reduce((result, { content: { value } }) => result + value, 0)

/* Question 3 */
/*export const isPaired = function (str: string) {
    const map = {
        '(': ')',
        '[': ']',
        '{': '}'
    }
    return recursePair("", str));
}
const recursePair(stack: string, str: string) : boolean => {
    if(str === ""){
        return (stack === "");
    }
    else if(str.charAt(0) === '(' ||str.charAt(0) === '[' || str.charAt(0) === '{' ){
        return recursePair(str.substring(1), stack + str.charAt(0));
    }
    else if(str.charAt(0) === ')' ||str.charAt(0) === ']' || str.charAt(0) === '}' ) {
        return !(stack === "") && (map(stack.charAt(0)) === str.charAt(0)) && recursePair(str.substring(1), stack.substring(1));
    }
    else return recursePair(str.substring(1), stack);
}
*/