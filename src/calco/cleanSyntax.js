const funcSeparator = (arr) => {
    let localArr = arr.slice();
    for (let i = 0; i < localArr.length - 1; i++) {

        if ((!(/[)(]/.test(localArr[i])) && isNaN(localArr[i])) && (!(/[)(]/.test(localArr[i])) && isNaN(localArr[i + 1]))) {
            localArr.splice(i + 1, 0, "(");
        }
    }
    return localArr;
}
//console.log(funcSeparator([1.2, "-", 2, "sin", "+", "+", "-", "*"]))
const funcOpenCloseBrackets = (arr,brcOpen = "(") => {
    let localArr = arr.slice();
    let count = 0;
    for(let elm of localArr){
        if(elm === brcOpen) ++count;
        else if(elm === ")") --count;
    }
    if(brcOpen === "(") {
        for(let i = 0; i < count; i++){
            localArr.push(")");
        }
    }
    else if(brcOpen === ")"){
        for (let i = 0; i < count; i++) {
            localArr.unshift("(");
        }
    }

    return localArr;
}
// console.log(funcOpenCloseBrackets(["("]));
// console.log(funcOpenCloseBrackets(funcSeparator([1, 2, "+", "+", "-", "*"])));

const funcFilMult = (arr) => {
    let localArr = arr.slice();
    for(let i = 0; i < arr.length ; i ++){
    if ((/[)|\d]/.test(localArr[i]) && localArr[i + 1] === "(") || (localArr[i] === ")" && /\d/.test(localArr[i + 1]))) {
            localArr.splice(i + 1,0,"*");
        }
    }
    return localArr;
};
function cleanSyntax(arr){
    return funcFilMult(funcOpenCloseBrackets(funcSeparator(arr)));
}
export default cleanSyntax;
// console.log(funcFilMult([")",c2]))
// console.log(funcFilMult(funcOpenCloseBrackets(funcSeparator(["sin","log","cos","tan","(",5,"+",25]))))