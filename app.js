'use strict';
/**
 * 与えられた数に対応するフィボナッチ数を返す
 * @param {Number} n 
 */
function fib(n) {
    if (n === 0) {
        return 0;
    } else if (n === 1) {
        return 1;
    }
    return fib(n -1) + fib(n - 2);
}

const length = 40;
for (let i = 0; i <= length; i++) {
    console.log(fib(i));
}