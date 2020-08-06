function palindrome(num){
  let reverse = 0;
  let y = num;

    console.log("ogNum:" + y)
  while(y>=1){
    let x = y%10;
    reverse = reverse * 10 + x;
    y = Math.floor(y/10)

  }
    console.log(reverse)
num == reverse ? console.log("plaindrome") :console.log("not plaindrome")

}

palindrome(12321)
palindrome(123)