const calcoButtons = {
    calcoFuncs: [
        [1, "sin", "Uop", "asin", "sinh", "asinh"],
        [2, "cos", "Uop", "acos", "cosh", "acosh"],
        [3, "tan", "Uop", "atan", "tanh", "atanh"],
        [4,"^","Bop"],
        [5,"!","BUop"],
        [6, "ln", "Uop"],
        [7, "log", "Uop"]
    ],
    calcoNums: [
                [Math.random(), '9'], [Math.random(), '8'], [Math.random(), '7'], [Math.random(), '6'], [Math.random(), '5'], [Math.random(), '4'], [Math.random(), '3'], [Math.random(), '2'], [Math.random(), '1'], [Math.random(), '0'], [Math.random(), "("], [Math.random(), ")"], [Math.random(), "."]
        ],
    calcoOps: [
        [Math.random(), "+","Bop"],
        [Math.random(), "-","Bop"],
        [Math.random(), "/","Bop"],
        [Math.random(), "*","Bop"]
    ],
    calcoEq: [[Math.random(), "="]],
    calcoControls: [
        [Math.random(), "2nd"],
        [Math.random(), "hyp"],
    ]
}

export default calcoButtons;