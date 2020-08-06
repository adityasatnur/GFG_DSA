function trailingZeros(n){
 let count = 0
  let temp = n
while(temp%10 === 0){
count++;
 temp = temp/10
}
return count
}
trailingZeros(102);