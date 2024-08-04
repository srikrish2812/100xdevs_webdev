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


let user = {
    name: "John Doe",
    age: 2,
    gender: "attack helicopter"
}

function greet1(user){
    console.log("Hi " + user.name + ", your age is " + user.age);
}
greet1(user);

function greet2(user){
    let pronoun;
    if(user.gender==='male'){
         pronoun = "Mr "
    }
    else if (user.gender==='female'){
        pronoun = "Mrs "
    }
    else{
        pronoun = user.gender +" "
    }
    console.log("Hi "+pronoun+user.name+", your age is "+user.age);
}
greet2(user);


function voteEligibility(user){
    if(user.age>18){
        console.log(user.name+" is eligible to vote.");
    }
    else{
        console.log(user.name+" is not eligible to vote.");
    }
}
voteEligibility(user);


let arrobj = [
    {
        name:"John",
        age:20,
        gender:"male"
    },
    {
        name:"Doe",
        age:19,
        gender:'male'
    },
    {
        name:"Claire",
        age:27,
        gender:'female'
    }
]
function arrObjects(arr){
    let newArr = []
    for(let i=0;i<arr.length;i++){
        if(arr[i].age>18 && arr[i].gender==='male'){
            newArr.push(arr[i])
        }
    }
    console.log("Using for loop: ");
    console.log(newArr);
    
}

arrObjects(arrobj);

// Using filter method to solve above question
// filter method returns a new_array with the elements
// that pass the callback function test

let filteredArr = arrobj.filter(function(person){
    return person.age>18 && person.gender==='male';
})
console.log("Using filter method: ");
console.log(filteredArr);
