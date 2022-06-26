// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {

  // declaring a standard alphabet array
  const standardAlphabet = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z' ]

  function substitution(input, alphabet, encode = true) {

    // return false if given alphabet was not provided
    if (!alphabet) return false

    // Declare new variables for given alphabet and input to be all lowercase and each letter into its own index in an array
    const givenAlphabet = alphabet.toLowerCase().split('')
    const givenInput = input.toLowerCase().split('')
    
    // Return false if given alphabet length is not exactly 26 characters
    if (givenAlphabet.length !== 26) return false

    // Helper function to identify duplicate values
    const findDuplicates = given => given.filter((letter, index) => given.indexOf(letter) != index)

    // If there are duplicate values in the given alphabet then return false
    if (findDuplicates(givenAlphabet).length > 0) return false

    // run code below if we are encoding
    if (encode) {

      // iterate through my given input to encode it
      const result = givenInput.reduce((total, letter) => {

        const indexOfLetter = standardAlphabet.indexOf(letter)
        
        // If the index of the letter is not null then continue
        if  (indexOfLetter !== null) {

          // If the current index is a Space then simply return the space
          if (letter === " "){
            total += letter
            return total
          }

          // Else take the currently identified index from the standard alphabet and grab the value from the given alphabet and return to total
          else {
            total += givenAlphabet[indexOfLetter]
            return total
          }
        }
      }, "")
      return result
      
      // Run code below if we are decoding
    } else {

      // iterate through my given input to decode it
      const result = givenInput.reduce((total, letter) => {

        const indexOfLetter = givenAlphabet.indexOf(letter)
        
        // If the index of the letter is not null then continue
        if  (indexOfLetter !== null) {

          // If the current index is a Space then simply return the space
          if (letter === " "){
            total += letter
            return total
          }

          // Else take the currently identified index from the standard alphabet and grab the value from the given alphabet and return to total
          else {
            total += standardAlphabet[indexOfLetter]
            return total
          }
        }
      }, "")
      return result
    }
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
