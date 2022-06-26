const {expect} = require("chai")
const {substitution} = require("../src/substitution")

describe("substitution", () => {

    describe("error handling on given alphabet", () => {
        it("should return false when alphabet given is not exactly 26 characters", () => {
            const input = "hi"
            const alphabet = "abc"
            const actual = substitution(input, alphabet)

            expect(actual).to.be.false
        })
        it("should return false if given alphabet has any duplicate characters", () => {
            const input = "hi"
            const alphabet = "qwertquiopasdfghjklxxcvbbm"
            const actual = substitution(input, alphabet)

            expect(actual).to.be.false
        })
    })

    describe("encoding tests", () => {
        it("should properly encode input using given alphabet", () => {
            const input = "hi"
            const alphabet = "qwertyuiopasdfghjklzxcvbnm"
            const actual = substitution(input, alphabet)

            expect(actual).to.equal("io")
        })
        it("should ignore capital letters", () => {
            const input = "Hi"
            const alphabet = "qwertyuiopasdfghjklzxcvbnm"
            const actual = substitution(input, alphabet)

            expect(actual).to.equal("io")
        })
        it("should maintain spaces throughout", () => {
            const input = "one two three"
            const alphabet = "qwertyuiopasdfghjklzxcvbnm"
            const actual = substitution(input, alphabet)

            expect(actual).to.equal("gft zvg ziktt")
        })
        it("should be able to utilize symbols for given alphabet", () => {
            const input = "hi"
            const alphabet = "qwertyu!$pasdfghjklzxcvbnm"
            const actual = substitution(input, alphabet)

            expect(actual).to.equal("!$")
        })

    })

    describe("decoding tests", () => {
        it("should properly dencode input using given alphabet", () => {
            const input = "io"
            const alphabet = "qwertyuiopasdfghjklzxcvbnm"
            const actual = substitution(input, alphabet, false)

            expect(actual).to.equal("hi")
        })
        it("should ignore capital letters", () => {
            const input = "Io"
            const alphabet = "qwertyuiopasdfghjklzxcvbnm"
            const actual = substitution(input, alphabet, false)

            expect(actual).to.equal("hi")
        })
        it("should maintain spaces throughout", () => {
            const input = "gft zvg ziktt"
            const alphabet = "qwertyuiopasdfghjklzxcvbnm"
            const actual = substitution(input, alphabet, false)

            expect(actual).to.equal("one two three")
        })
        it("should be able to utilize symbols for given alphabet", () => {
            const input = "!$"
            const alphabet = "qwertyu!$pasdfghjklzxcvbnm"
            const actual = substitution(input, alphabet, false)

            expect(actual).to.equal("hi")
        })

    })
})