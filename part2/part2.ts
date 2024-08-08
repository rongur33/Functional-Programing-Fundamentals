import * as R from "ramda";
import { filter } from "ramda";
import { pipe } from "ramda";

const stringToArray = R.split("");
/* Question 1 */

export const filterByVowels:(arr: string[]) => string[]=arr => filter(x => x ==='a'||x==='i'||x==='e'||x==='o'||x==='u'||x==='A'||x==='I'||x==='E'||x==='O'||x==='U', arr);

export const size: (arr: string[]) => number = arr => arr.reduce((acc) => acc + 1, 0);

export const countVowels: (str:string) => number = pipe(stringToArray,filterByVowels,size);


/* Question 2 */

export const filterByClosure = (arr: string[]): string[] => 
    filter(x => x === "(" || x ==="{"||x==="["||x===")"||x==="}"||x==="]", arr);
export const IsMatching= (acc:string, curr:string) : boolean => 
    (curr==="}"&&acc==="{")||(curr==="]"&&acc==="[")||(curr===")"&&acc==="(") ? true:false;
export const check: (s:string[]) => boolean = (s:string[]): boolean=> 
    s.reduce((acc,curr)=> acc.length!==0 && IsMatching(acc[acc.length-1], curr)? acc.slice(0,-1): curr+acc,"")==="" ;
export const isPaired: (str:string) => boolean =pipe(stringToArray,filterByClosure,check); 

/* Question 3 */
export type WordTree = {
    root: string;
    children: WordTree[];
}

export const treeToSentence = (tree:WordTree) : string =>
    tree.children.length==0?tree.root:
    tree.children.reduce((acc,curr)=>acc+" "+treeToSentence(curr),tree.root);

 
