module.exports = function check(str, bracketsConfig) {

    let matchingOpeningBracket, ch;
    let stack = [];
    let openingBrackets = [];
    let closingBrackets = [];
    // config3 = [['(', ')'], ['[', ']'], ['{', '}']];
    // let openingBrackets = ['[', '{', '(', '|'];
    // let closingBrackets = [']', '}', ')', '|'];

    for (let i = 0; i < bracketsConfig.length; i++) {
        openingBrackets.push(bracketsConfig[i][0]);
        closingBrackets.push(bracketsConfig[i][1]);

    }



    for (let i = 0; i < str.length; i++) {
        ch = str[i];
        let equal = false;
        if (openingBrackets.indexOf(ch) > -1 && closingBrackets.indexOf(ch) > -1) {
            equal = true;
        }
        if (closingBrackets.indexOf(ch) > -1) {
            if (equal && stack.indexOf(ch) === -1) {
                stack.push(ch);
            } else {
                matchingOpeningBracket = openingBrackets[closingBrackets.indexOf(ch)];
                if (stack.length == 0 || (stack.pop() != matchingOpeningBracket)) {
                    return false;
                }
            }
        } else {
            stack.push(ch);
        }
    }

    return (stack.length == 0);
};

