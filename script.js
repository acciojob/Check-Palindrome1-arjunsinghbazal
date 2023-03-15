// complete the given function

function palindrome(str){
let str2;
let n=str.length;
for(let k=0;k<n;k++){
	if((str[i]!=" ")&&(str[i]>='a'&&str[i]<='z')){
		str2.push(str[i]);
	}
}
let str1=str2.toLowerCase();
let i=0;
let j=n-1;
while(i<n/2){
	
	if(str1[i]!=str1[j]){
		return false;
	}
	i++;
	j--;
}
	return true;
}
module.exports = palindrome
