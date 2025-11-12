const arr = [5, 9, 7, 10];
const divisor = 5;

const solution = (arr, divisor) => {
    const filteredArray = arr.filter(v => v % divisor === 0);
    return filteredArray.length > 0 ? filteredArray.sort((a,b) => a -b) : [-1];
};