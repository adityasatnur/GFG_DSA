function countDigits(number){
  let x=0
  let y = number/10;
  while(y>=1){
  y = y/10;
    ++x;
  }
  console.log(++x);
}
countDigits(0)