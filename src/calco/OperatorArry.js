export default [
    /* OPERATORS ARE ARRANGED IN DESCENDING ORDER OF PRECEDENCE! IF YOU ADD AN OPERATOR CONSIDER THAT*/
    ["^", "Bop", (a, b) => Math.pow(a, b), 4],
    ["!", "BUop", (a) => {
        if (a <= 0) return NaN;
        else if (a === 0) return 1;

        let j = 1;
        for (let i = 1; i <= a; i++) {
            console.log(i)
            j *= i;
        }
        return j;
    },3],
    ["sin", "Uop", a => Math.sin(a * (Math.PI / 180)), 3],
    ["cos", "Uop", a => Math.cos(a * (Math.PI / 180)), 3],
    ["tan", "Uop", a => Math.tan(a * (Math.PI / 180)), 3],
    ["sinh", "Uop", a => Math.sinh(a), 3],
    ["cosh", "Uop", a => Math.cosh(a), 3],
    ["tanh", "Uop", a => Math.tanh(a), 3],
    ["asin", "Uop", a => 180 * Math.asin(a) / Math.PI, 3],
    ["acos", "Uop", a => 180 * Math.acos(a) / Math.PI, 3],
    ["atan", "Uop", a => 180 * Math.atan(a) / Math.PI, 3],
    ["asinh", "Uop", a => Math.asinh(a), 3],
    ["acosh", "Uop", a => Math.acosh(a), 3],
    ["atanh", "Uop", a => Math.atanh(a), 3],
    ["ln", "Uop", a => Math.log(a),3],
    ["log", "Uop", a => Math.log10(a)],
    ["*", "Bop", (a, b) => a * b, 2],
    ["/", "Bop", (a, b) => a / b, 2],
    ["-", "Bop", (a, b) => {
        if (!a) a = 0;
        return a - b
    }, 1],
    ["+", "Bop", (a, b) => {
        if (!a) a = 0;
        return a + b
    }, 0]         
];
