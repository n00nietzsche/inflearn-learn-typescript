// @ts-check

/**
 * @param {number} a 첫번째 숫자
 * @param {number} b 두번째 숫자
 * @returns {number}
 */
function sum(a, b) {
    return a + b;
}

function substring() {

}

// 만일, 타입이 정확하지 않아서 문자열로 들어가는 경우엔 10 + 20 이 1020으로 나오게 될 수 있다.
console.log(sum("10", 20));
