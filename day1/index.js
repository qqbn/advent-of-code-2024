const arr1 = [3,4,2,1,3,3];
const arr2 = [4,3,5,3,9,3];
console.log('arr1: ', arr1)
console.log('arr2: ', arr2)
let distances = [];
let totalDistance = 0;

const sortArr = (arr) => {
    return arr.sort((a, b) => a - b)
}

const getDistanceValue = (a, b) => {
    return Math.abs(a-b);
}

const sortedArr1 = sortArr(arr1);
const sortedArr2 = sortArr(arr2);

for (let index = 0; index < sortedArr1.length; index++) {
    distances.push(getDistanceValue(sortedArr1[index], sortedArr2[index]))
}

distances.forEach(distance => {
    totalDistance += distance;
});

console.log('total distance: ', totalDistance);
