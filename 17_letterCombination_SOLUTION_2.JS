const letterCombinations = function (digits) {
    if (digits.length === 0) return [];
    let table = ["", "", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"];
    let stack = [];
    let res = [""];
    digits = digits.split("");
    for (i = 0; i < digits.length; i++) digits[i] = parseInt(digits[i], 10);
    for (num of digits) stack.push(table[num].split(""));
    while (stack.length > 0) {
        let len = res.length;
        for (i = 0; i < len; i++) {
            for (ltr of stack[0]) {
                res.push(res[i] + ltr);
            }
        }
        stack.shift();
    }
    res = res.filter((el) => {
        return el.length === digits.length
    })
    return res;
};
