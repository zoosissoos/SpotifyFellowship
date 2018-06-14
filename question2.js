// Question 2 -- decodeString(s): Given an encoded string, return its corresponding decoded string. 
// The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is repeated exactly k times. Note: k is guaranteed to 
// be a positive integer. 

// For s = "4[ab]", the output should be decodeString(s) = "abababab" 
// For s = "2[b3[a]]", the output should be decodeString(s) = "baaabaaa"


const decodeString = s => {
  
  //regexp to check for letters and numbers
  const letNum = /[^0-9a-zA-Z]/gi
  //filters out non alphanumeric
  const filtered = s.replace(letNum, '')
  //splits string into an array by integer or letter
  const filtArr = filtered.match(/[a-z]+|[^a-z]+/gi)

  //intializing segment variable
  let segment = ''

  //goes backwards through the array and check if integer or not
  for (let i = filtArr.length - 1; i >= 0; i--) {
    // if not an integer it adds the characters to the segment
    if (isNaN(filtArr[i])) { 
      segment = segment.split('')
      segment.unshift(filtArr[i])
    }else{
      // if its an integer it repeats the current segment by the integers value
      segment = segment.join('').repeat(filtArr[i])
    }
  }
  //returns segment
  return segment
}
