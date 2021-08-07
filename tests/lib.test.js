const lib = require('../lib')

describe('absolute', () => {
    it("should return a positive number if the input is positive", () => {
        const result = lib.absolute(1)
        expect(result).toBe(1)
    })
    
    it("should return a positive number if the input is negative", () => {
        const result = lib.absolute(-1)
        expect(result).toBe(1)
    })
    
    it("should return zero if the input is zero", () => {
        const result = lib.absolute(0)
        expect(result).toBe(0)
    })
})

test("sum - adds 1 + 2 to equal 3", () => {
    const result = lib.sum(1, 2)
    expect(result).toBe(3)
})


describe("greet", () => {
    const result = lib.greet("Hassan")
    expect(result).toContain("Hello Hassan")
})
