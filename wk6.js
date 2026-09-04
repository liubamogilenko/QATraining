class MyClass{
    constructor(sum,count,min,max){
        this.sum = sum;
        this.count = count;
        this.min = min;
        this.max = max;
    }

    classMethod() {
        console.log("Class Method")
    }
}

function myFunction(arr){
    const onlyNumbers = arr.filter(isValidNumber)

    const sum = calculateSum(arr);
    const count = calculateCount(arr)
    const min = calculateMin(onlyNumbers)
    const max = calculateMax(onlyNumbers)

    return new MyClass(sum, count, min, max)

}

function calculateCount(arr) {
    return arr.length;
}

function calculateMin(onlyNumbers) {
    return Math.min(...onlyNumbers);
}

function calculateMax(onlyNumbers) {
    return Math.max(...onlyNumbers);
}

function calculateSum(arr) {
    let sum = 0;

    for (let i of arr) {
        if (isValidNumber(i)) {
            sum += i;
        }

    }
    return sum;
}

function isValidNumber(value) {
    return typeof value === 'number' && Number.isFinite(value);
}

function Main(){
    console.log(myFunction([1,2,8,"shit",true,NaN,7]))    
}

Main()


