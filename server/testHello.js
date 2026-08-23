const test = () => {
    return "This is a test function";
}

const testFunc = (firstNumber, secondNumber) => firstNumber + secondNumber;

const testFunc3 = (firstNumber, secondNumber, thirdNumber) =>
    firstNumber + secondNumber + thirdNumber;

const divide = (dividend, divisor) => dividend / divisor;

module.exports = { test, testFunc, testFunc3, divide };
