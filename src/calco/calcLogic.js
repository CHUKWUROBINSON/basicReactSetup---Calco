import finishBrack from "./utils";
import cleanSyntax from "./cleanSyntax";
import join from "./join";
import  pp  from "./pointHandler";

export default function calcLogic (arr) {
    let tempArr =join(pp(arr));
    if(tempArr.length === 0) return NaN;
    let p = finishBrack(cleanSyntax(tempArr));
    if(p === "SyntaxError") return p;
    let rawVal = (p[0]).toPrecision(15);
    let splitArr = rawVal.toString().split("");
    for(let i = splitArr.length - 1; i >= 0; i-- ){
        if(splitArr[i] !== 0){
            return Number(splitArr.join(""))
        }
    }
    return NaN;
};

