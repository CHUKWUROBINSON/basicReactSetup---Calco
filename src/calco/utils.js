const operatorArr = require('./OperatorArry').default;
const getClosingPos = (openTag,closeTag,arr,startPos) => {   
    let count = 0;
    let i = startPos;
    do{              
            if(arr[i] === openTag){
               ++count;             
            }
            else if(arr[i] === closeTag){      
                --count;             
            }
        ++i;    
        }while (count && i < arr.length)
        if(count === 0){
            return i - 1;
        }
        return - 1;
    
} 

const excBinaryFunc = (pos,arr,func) => {
    
    const locArr = arr.slice();
    let arg1 = 0;
    if((pos - 1) < 0) { arg1 = undefined;}
    else { arg1 = locArr[pos - 1];}     
    const arg2 = locArr[pos + 1];
    (pos - 1) < 0 ? locArr.splice(0, 2 ,func(arg1, arg2)) : locArr.splice(pos - 1, 3, func(arg1, arg2))

    return locArr;
}
const excUrinaryFunc = (pos, arr, func) => {
    const locArr = arr.slice();
    const arg = locArr[pos + 1];
    locArr.splice(pos, 2, func(arg));
    return locArr;
}
const excBackUrinaryFunc = (pos, arr, func) => {
    const locArr = arr.slice();
    const arg = locArr[pos - 1];
    locArr.splice(pos - 1, 2, func(arg));
    return locArr;
}
const getIndexOfOp2D = (arr, op) => {
    for (let i = arr.length - 1; i >= 0; --i) {
        if(arr[i][0] === op){
            return i;
        }
    }
    return -1;
}
const finishNormalOp = (arr,opArr,op) => {
    let locArr = arr.slice();
    const index = getIndexOfOp2D(opArr, op);
    const func = opArr[index][2];
    while (locArr.indexOf(op) !== -1) {
        let j = 0;      
        do{             
            if (locArr[j] === op && opArr[index][1] === "Uop") {                
                locArr = excUrinaryFunc(j, locArr, func);
                break;
            } else if (locArr[j] === op && opArr[index][1] ==="Bop") {               
                locArr = excBinaryFunc(j, locArr, func);
                break;
            } else if (locArr[j] === op && opArr[index][1] === "BUop") {
                locArr = excBackUrinaryFunc(j, locArr, func);
                break;
            }
            ++j;
            
        }while(1);   
    }
    return locArr;
}
const finishAllOp = (arr, opArr) => {
    let locArr = arr.slice();
    for (let op of opArr) {
        locArr = finishNormalOp(locArr, opArr, op[0]);
    }
    return locArr;
}
/* YAY!!! ME!! FINAL FUNCTION IN THIS SECTION */
export default function finishBracketsAndAll (arr) {
    let locArr = arr.slice();
    if (locArr.indexOf("(") !== -1) {
        for (let i = 0; i < locArr.length; i++) {
            if (locArr[i] === "(") {
                let spliceIndex = getClosingPos("(", ")", locArr, i);
                let locLocArr = locArr.splice(i, spliceIndex - i + 1);
                locLocArr.pop();
                locLocArr.shift();
                locLocArr = finishBracketsAndAll(locLocArr);

                for (let j = 0; j < locLocArr.length; j++) {

                    locArr.splice(j + i, 0, locLocArr[j]);

                }

            }
        }
    }
    if (locArr.indexOf("(") === -1) {
         
        let p = finishAllOp(locArr, operatorArr);
        return p.length > 1 ? 'SyntaxError' : p ;
    }

}

