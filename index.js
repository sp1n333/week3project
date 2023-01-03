//Q1
const ages = [3,9,23,64,2,28,93];

//Q1a
let firstAge = ages[0];
let lastAge = ages[ages.length-1];
console.log(lastAge - firstAge);

//Q1b
ages.push(87); 
let newLastAge = ages[ages.length-1];
console.log(newLastAge - firstAge);

//Q1c
let arrayLength = 0
for(i=0; i < ages.length; i++){
    arrayLength += ages[i];
}
let avg = arrayLength / ages.length;
console.log(avg);

//Q2
const names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];

//Q2a
namesLength = [];
for(i=0; i < 6; i++) {
    nameLength = names[i].length;
    namesLength.push(nameLength);
}; 
function arraySum(namesLength) {
    let sum = 0
    for(let i=0; i < 6; i++) {
        sum += namesLength[i];
    }
    return sum;
};
avg = arraySum(namesLength)/6 
console.log(avg);
//Q2b
namesList = [];
for(i=0; i < 6; i++){
    namesListed = names[i]
    namesList.push(namesListed)
};
let newList = namesList.join(' ');
console.log(newList);

//Q3
let last = names[names.length-1];
console.log(last);

//Q4
let first = names[0];
console.log(first);

//Q5
console.log(namesLength);

//Q6
let total = 0;
for(i=0; i < namesLength.length;i++){
    total += namesLength[i];

}
console.log(total);

//Q7
function newFunction(word, n){
    return word.repeat(n);
} 
console.log(newFunction('Hello', 3));

//Q8
function fullName(firstName, lastName){
    return firstName + ' ' + lastName;
}
console.log(fullName('Martin','Bello'));

//Q9

function isBigArray(array){
    let arrayTotal = 0
    for(let i=0; i < array.length; i++){
        arrayTotal += array[i];
    }
    if(arrayTotal > 100){
        return true;
    }
    else 
        return false;
}    
testArray=[11,6,85];
console.log(isBigArray(testArray));

//Q10
function avgNum(array){
    let arraySize = array.length;
    let arrayTotal = 0;
    for(let i=0; i < arraySize; i++){
        arrayTotal += array[i];
    }
    return arrayTotal/arraySize;
}
console.log(avgNum(testArray));

//Q11
function twoAverages(array1, array2){
    let arrayTotal1 = 0;
    let arrayTotal2 = 0;
    for(let i=0; i < array1.length; i++){
        arrayTotal1 += array1[i];
    }
    for(let i=0; i < array2.length; i++){
        arrayTotal2 += array2[i];
    }    
    let arrayAvg1 = arrayTotal1/array1.length;
    let arrayAvg2 = arrayTotal2/array2.length;
    if(arrayAvg1 > arrayAvg2){
        return true;
    }
    else
        return false;
}    
testArray2 = [2,5]
console.log(twoAverages(testArray, testArray2));

//Q12
function willBuyDrink(isHotOutside, moneyInPocket){
    if(isHotOutside = true && moneyInPocket > 10.50){
        return true;
    }
}
let isHotOutside = true;
let moneyInPocket = 12;
console.log(willBuyDrink(isHotOutside, moneyInPocket));

//Q13
function willGoToSleep(time, isTired){
    if(time = 'nighttime' && isTired == true){
        return true;
    }
}

let time = 'nighttime';
let isTired = true;
console.log(willGoToSleep(time, isTired));

/* This function will help the user determine if it is an optimal time to go to sleep. */