class MyClass{
    constructor(sum,count,min,max){
        this.sum = sum;
        this.count = count;
        this.min = min;
        this.max = max;
    }
}

function myFunction(sentence){

    const output = sentence.split(" ")

    return output
}

function Calculate(output){
    const asNumbers = output.map(Number)
    const onlyNumbers = asNumbers.filter(isValidNumber)

    let sum = 0
        for(const n of onlyNumbers){
            sum += n;
            }
        

    const count = output.length
    const min = Math.min(...onlyNumbers)
    const max = Math.max(...onlyNumbers)
    

return new MyClass(sum, count, min, max)

}

function isValidNumber(value) {
    const asNumber = Number(value)
    return Number.isFinite(asNumber);
}

function Main(){
    const list = myFunction("This string has 8 words and 2 numbers")
    console.log(Calculate(list))
}

Main()