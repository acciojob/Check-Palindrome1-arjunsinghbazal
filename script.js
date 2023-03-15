// complete the given function

function palindrome(str){
let n=str.length;
let i=0;
let j=n-1;
while(i<=n/2){
	if(str[i]!=str[j]){
		return false;
	}
	i++;
	j--;
	
}
	return true;
}
module.exports = palindrome
