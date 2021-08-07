const lib = require('../lib')

test("absolute - should return a positive number if the input is positive", () => {
    const result = lib.absolute(1)
    expect(result).toBe(1)
})

test("absolute - should return a positive number if the input is negative", () => {
    const result = lib.absolute(-1)
    expect(result).toBe(1)
})

test("absolute - should return zero if the input is zero", () => {
    const result = lib.absolute(0)
    expect(result).toBe(0)
})

test("sum - adds 1 + 2 to equal 3", () => {
    const result = lib.sum(1, 2)
    expect(result).toBe(3)
})