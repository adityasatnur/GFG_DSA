function trailingIndexInFactorial(n){
result = 0;
for(i=5; i<=n; i=i*5){
	result = result + Math.floor(n/i);
}
return result;
}
trailingIndexInFactorial(2)