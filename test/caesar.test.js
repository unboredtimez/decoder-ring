// Write your tests here!
const {caesar} = require("../src/caesar")
const {expect} = require("chai")

describe ("caesarModule", () => {
    describe ("error handling on shift", () => {
        it ("should return false if shift value is 0", () => {
            const message = "decipher me"
            const shift = 0
            const actual = caesar(message, shift)

            expect(actual).to.be.false
        })
        it ("should return false if the shift value is greater than 25", () => {
            const message = "decipher me"
            const shift = 26
            const actual = caesar(message, shift)

            expect(actual).to.be.false
        })
        it ("should return false if shift value is less than -25", () => {
            const message = "deciper me"
            const shift = -26
            const actual = caesar(message, shift)

            expect(actual).to.be.false
        })
    })

    describe ("encoding tests", () => {
        it ("should return proper encoding when using a positive value and when going 'off' the alphabet", () => {
            const message = "zoo"
            const shift = 3
            const actual = caesar(message, shift)

            expect(actual).to.equal("crr")
        })
        it ("should return proper encoding with space", () => {
            const message = "I am a secret message"
            const shift = 4
            const actual = caesar(message, shift)

            expect(actual).to.equal("m eq e wigvix qiwweki")
        })
        it ("should return proper encoding with other symbols", () => {
            const message = "I am a secret message!"
            const shift = 4
            const actual = caesar(message, shift)

            expect(actual).to.equal("m eq e wigvix qiwweki!")
        })
        it ("should return proper encoding when using a negative value and going 'off' the alphabet", () => {
            const message = "apple"
            const shift = -3
            const actual = caesar(message, shift)

            expect(actual).to.equal("xmmib")
        })
        it ("should ignore capital letters", () => {
            const message = "Cow"
            const shift = 1
            const actual = caesar(message, shift)

            expect(actual).to.equal("dpx")
        })
    })

    describe ("decoding tests", () => {
        it ("should return proper decoding when using a positive value and when going 'off' the alphabet", () => {
            const message = "crr"
            const shift = 3
            const actual = caesar(message, shift, false)

            expect(actual).to.equal("zoo")
        })
        it ("should return proper decode with space", () => {
            const message = "m eq e wigvix qiwweki"
            const shift = 4
            const actual = caesar(message, shift, false)

            expect(actual).to.equal("i am a secret message")
        })
        it ("should return proper decoding with other symbols", () => {
            const message = "xpx!"
            const shift = 1
            const actual = caesar(message, shift, false)

            expect(actual).to.equal("wow!")
        })
        it ("should return proper decoding when using a negative value and going 'off' the alphabet", () => {
            const message = "xmmib"
            const shift = -3
            const actual = caesar(message, shift, false)

            expect(actual).to.equal("apple")
        })
        it ("should ignore capital letters", () => {
            const message = "Dpx"
            const shift = 1
            const actual = caesar(message, shift, false)

            expect(actual).to.equal("cow")
        })
    })
})

