// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    
    // Check for proper shift value
    if (shift < -25) return false
    if (shift > 25) return false
    if (shift === 0) return false

    // Set input to lowercase and spliting characters in an Array to iterate through it later
    const enteredText = input.toLowerCase().split('')
   
    // Check to see if we're encoding
    if (encode) {
      
      // Iterating through enteredText array
      const result = enteredText.reduce((total, text) => {

        // Creating variable to hold result of ascii and shift values
        let encodedCode = 0

        // Creating const that holds the value of the character converted to ascii
        const asciiCode = text.charCodeAt()

        // checking if the letter I'm working with is a lower case a-z character.
        if (asciiCode > 96 && asciiCode < 123) {

          // Add the ascii value and shift value together and set to encodedCode
          encodedCode = asciiCode + shift

          // Check if encodedCode value ended up going past z
          if (encodedCode > 122) {

            // Subtracting 26 from encodedCode to essentially loop the letter past z and back around to a
            encodedCode -= 26

            // Converting ascii to character and appending letter to total
            total += String.fromCharCode(encodedCode)

            return total
          }

          // Check if we moved before a
          else if (encodedCode < 97) {
            encodedCode += 26
            total += String.fromCharCode(encodedCode)
            return total
          }

          // If encodedCode value didn't go past z or below a then simply append to total and return the value
          else {
            total += String.fromCharCode(encodedCode)
            return total
          }
          // If character is not a value between a-z then it is simply appended to total
        } else {
          total += text
          return total
        }
        
      }, "")
      return result
      
      // Running the code below to decode 
    } else {

     // Iterating through enteredText array
     const result = enteredText.reduce((total, text) => {

      // Creating variable to hold result of ascii and shift values
      let encodedCode = 0

      // Creating const that holds the value of the character converted to ascii
      const asciiCode = text.charCodeAt()

      // checking if the letter I'm working with is a lower case a-z character.
      if (asciiCode > 96 && asciiCode < 123) {

        // Changing the math operator to 'minus' to allow for decode
        encodedCode = asciiCode - shift

        // Check if encodedCode value ended up going past z
        if (encodedCode > 122) {

          // Subtracting 26 from encodedCode to essentially loop the letter past z and back around to a
          encodedCode -= 26

          // Converting ascii to character and appending letter to total
          total += String.fromCharCode(encodedCode)

          return total
        }

        // Check if we moved before a
        else if (encodedCode < 97) {
          encodedCode += 26
          total += String.fromCharCode(encodedCode)
          return total
        }

        // If encodedCode value didn't go past z or below a then simply append to total and return the value
        else {
          total += String.fromCharCode(encodedCode)
          return total
        }
        // If character is not a value between a-z then it is simply appended to total
      } else {
        total += text
        return total
      }
      
    }, "")
    return result

    }



  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
