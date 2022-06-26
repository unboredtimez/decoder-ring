// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {

  // Declaring table const which is an array holding objects of the letters as keys and the corresponding number as a value
const table = [
  { letter: "a", value: "11" },
  { letter: "b", value: "21" },
  { letter: "c", value: "31" },
  { letter: "d", value: "41" },
  { letter: "e", value: "51" },
  { letter: "f", value: "12" },
  { letter: "g", value: "22" },
  { letter: "h", value: "32" },
  { letter: "i", value: "42" },
  { letter: "j", value: "42" },
  { letter: "k", value: "52" },
  { letter: "l", value: "13" }, 
  { letter: "m", value: "23" },
  { letter: "n", value: "33" },
  { letter: "o", value: "43" },
  { letter: "p", value: "53" },
  { letter: "q", value: "14" },
  { letter: "r", value: "24" },
  { letter: "s", value: "34" },
  { letter: "t", value: "44" },
  { letter: "u", value: "54" },
  { letter: "v", value: "15" },
  { letter: "w", value: "25" },
  { letter: "x", value: "35" },
  { letter: "y", value: "45" }, 
  { letter: "z", value: "55" }
]

  function polybius(input, encode = true) {
    
    // Run code below to encode
    if (encode) {

      // Convert the input to all lowercase and split each character into it's own index in an array
      const lowercaseInput = input.toLowerCase().split('')

      // Looping through every letter in table to find the matching value
      const result = lowercaseInput.reduce((total, letter) => {

        // Check if current index value is a space
        if(letter === " ") {
          total += letter
          return total

          // If current index value is a letter search for corresponding value in the table
        } else {
          const found = table.find((search) => search.letter === letter)
          total += found.value
          return total
        }
      }, "")
      return result
      
      // Run code below to decode
    } else {

      // Return false if input is is odd numbers
      if (input.match(/(\w)/g).length % 2 === 1) return false

      // Create array out of the string with regex to split chars into pairs of 2 and to split spaces
      const pairedNumbers = input.match(/(\w\w)|(\s)/g)

      // Looping through every value in table to find the matching letter
      const result = pairedNumbers.reduce((total, value) => {

        // Check if current index value is a space
        if(value === " ") {
          total += value
          return total

          // If value is 42 then set to (i/j)
        } else if (value === "42") {
          total += "(i/j)"
          return total

          // Else, search for corresponding letter in the table
        } else {
          const found = table.find((search) => search.value === value)
          total += found.letter
          return total
        }
      }, "")
      return result
    }
    
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
