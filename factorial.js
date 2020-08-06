function factorial(number){
let num = 1;
console.log(number);

number = parseInt(number)
for(i=2; i<=number; i++){
  num = num * i 
}
console.log(num);
}

factorial(12);



function factorialRecursion(number){
  if(number===0) return 1;
  return number * factorialRecursion(number-1);
}
factorialRecursion(12)