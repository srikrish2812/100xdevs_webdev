// Assignment-1

function sum(num1, num2){
    return `Sum of ${num1} and ${num2} = ${num1+num2}`;
}

console.log(sum(7,8));


function canVote(age){
    return age>18;
}

console.log(canVote(20));
console.log(canVote(15));

function evenOdd(num){
    if(num%2===0){
        console.log("The number is even");
    }
    else{
        console.log("The number is odd");
        
    }
}
evenOdd(21)
evenOdd(22)


function loopSum(num){
    let sum = 0;
    for(let i=1; i<=num;i++){
        sum = sum + i;
    }
    return `Sum = ${sum}`;
}

console.log(loopSum(10));
