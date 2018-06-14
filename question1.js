// Question 1 -- sortByStrings(s,t): Sort the letters in the string s by the order they occur in the string t. You can assume t will not have repetitive 
// characters. For s = "weather" and t = "therapyw", the output should be sortByString(s, t) = "theeraw". For s = "good" and t = "odg", the output 
// should be sortByString(s, t) = "oodg".

const sortByString = (s,t)  => {
  //splits string into an array for comparison
  let strArr = s.split('');
  //sorts each element of the split string 's' to the indexes within the second string 't'
  strArr.sort((a,b) => t.indexOf(a) - t.indexOf(b));
  //returns rejoins array
  return strArr.join('')
}
