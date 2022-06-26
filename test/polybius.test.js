const {expect} = require("chai")
const {polybius} = require("../src/polybius")

describe("PolybiusModule", () => {
    describe("Encoding Tests", () => {
        it ("should return a string", () => {
            const input = "hi"
            const actual = polybius(input)
            
            expect(actual).to.be.a('string')
        })
        it ("should properly encode a string with all lowercase", () => {
            const input = "hi"
            const actual = polybius(input)

            expect(actual).to.equal("3242")
        })
        it ("should ignore capital letters", () => {
            const input = "Hi"
            const actual = polybius(input)

            expect(actual).to.equal("3242")
        })
        it ("should properly include spaces", () => {
            const input = "hello world"
            const actual = polybius(input)

            expect(actual).to.equal("3251131343 2543241341")
        })
        it ("should properly encode 'i' and 'j' to 42", () => {
            const input = "ij"
            const actual = polybius(input)

            expect(actual).to.equal("4242")
        })
    })

    describe("decoding tests", () => {
        it("should properly decode a string of numbers", () => {
            const input = "254325"
            const actual = polybius(input, false)

            expect(actual).to.equal("wow")
        })
        it("should properly return false if number of characters, excluding spaces, is odd", () => {
            const input = "1234 123"
            const actual = polybius(input, false)

            expect(actual).to.be.false
        })
        it("should include spaces", () => {
            const input = "334325 334325"
            const actual = polybius(input, false)

            expect(actual).to.equal("now now")
        })
        it ("should decode 42 to include 'i' and 'j' somehow", () => {
            const input = "3242"
            const actual = polybius(input, false)

            expect(actual).to.have.string("i", "j")
        })
    })
})