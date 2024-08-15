export default function my(arr) {

    let tempArr = [...arr];
    for (let i = 0; i < tempArr.length; i++) {
        //console.log((tempArr[i] === ".") && isNaN(tempArr[i - 1]),tempArr[i])
        if ((tempArr[i] === ".") && isNaN(tempArr[i - 1])) {
            if (i === 0) {
                tempArr.unshift("0");
            } else {
                tempArr.splice(i, 0, "0");
            }
        } else if ((tempArr[i] === ".") && isNaN(tempArr[i + 1])) {
            if (i === tempArr.length - 1) {
                tempArr.push("0");
            } else {
                tempArr.splice(i + 1, 0, "0");
            }
        }
    }

    let i = 0;
    while (i < tempArr.length) {
        if (tempArr[i] === ".") {
            tempArr.splice(i - 1, 3, tempArr[i - 1] + tempArr[i] + tempArr[i + 1]);
            i = 0;
        } else {
            i++;
        }
        // console.log(tempArr)
    }

    return tempArr;
}
//console.log(my(["1",".","2","+","-",".","5","*","3","."]));
//console.log(my(["1", ".", "2"]));
//console.log(my(["1", ".", "2","+","-","."]));