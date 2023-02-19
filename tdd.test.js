import { capitalize,reverseString,calculator,caesarCipher } from "./tdd";

test('capitalize the first character', () => {
    expect(capitalize('cool')).toBe('Cool');
})

test('reverse a string', () => {
    expect(reverseString('awesome')).toBe('emosewa');
})

test('calculate numbers using addition, subtract, division, and multiplication', () => {
    const {add, subtract, divide, multiply} = calculator;
    expect(add(2,4)).toBe(6);
    expect(subtract(2,4)).toBe(-2);
    expect(divide(2,4)).toBe(0.5);
    expect(multiply(2,4)).toBe(8);
})

test('return shifted characters', () => {
    expect(caesarCipher('I am cool', 2)).toBe('k co eqqn');
})

test('return an average, min, max and length from an array', () => {
    let analyzeArr = [1,8,3,4,2,6];
    function analyseArray(arr) {
        let average = 0;
        let min = arr[0];
        let max = arr[0];
        let sum = 0;
        let length = arr.length;

        //average
        arr.forEach(num => sum += num);
        average = sum / length;

        //min
        arr.forEach(num => num < min ? min = num : min);

        //max
        arr.forEach(num => num > max ? max = num : max);

        return {average, min, max, length}
    }

    expect(analyseArray(analyzeArr)).toEqual({average: 4, min: 1, max: 8, length: 6})
})