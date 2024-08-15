export default function Joiner(arr) {

    let tempArr = arr.map(r => {
        let p = isNaN(Number(r)) ? r : Number(r);
        return p;
    });
    let i = 0;
    while (i < tempArr.length - 1) {
        if (!isNaN(tempArr[i]) && !isNaN(tempArr[i + 1])) {
            tempArr.splice(i, 2, Number(tempArr[i].toString() + tempArr[i + 1].toString()));
            i = 0;
        } else {
            ++i;
        }

    }

    return tempArr;
}
