//PART1
const data = ["7 6 4 2 1", "1 2 7 8 9", "9 7 6 2 1", "1 3 2 4 5", "8 6 4 4 1", "1 3 6 7 9"]
const formattedData = data.map(elem => elem.split(' ').map(el => Number(el)));
console.log(formattedData);

const checkIfIncreasing = (array) => {
    let counter = 0;
    for (let index = 0; index < array.length; index++) {
        if(array[index] < array[index + 1] && checkDifference(array[index], array[index + 1])){
            counter++;
        }
        
    }

    if(counter === array.length - 1) return true;
}

const checkIfDecreasing = (array) => {
    let counter = 0;
    for (let index = 0; index < array.length; index++) {
        if(array[index] > array[index + 1] && checkDifference(array[index], array[index + 1])){
            counter++;
        }
    }

    if(counter === array.length - 1) return true;
}

const checkDifference = (num1, num3) => {
    return Math.abs(num1 - num3) === 1 || Math.abs(num1 - num3) === 2 || Math.abs(num1 - num3) === 3;
}


const safeData = formattedData.filter(arr => checkIfDecreasing(arr) || checkIfIncreasing(arr));
console.log(safeData);
console.log(safeData.length);
