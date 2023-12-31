*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str,) {
  // removes all non-alphanumeric characters (including spaces and punctuation) from the string.
  let str1=str.replace(/[^\w]/g,"").toLowerCase();//^ is negation or not operator
  console.log(str1)

  let result=reverse_str(str1);
  console.log(result)
  return (result==str1)
  }



  

function reverse_str(str){
  let str1=str.replace(/[^\w]/g,"").toLowerCase();
  let new_str="";
  for (let i=str1.length-1;i>=0;i--){
    new_str=new_str+str[i];
  }
  return new_str

}
console.log(isPalindrome("Dad",))
module.exports = isPalindrome;
