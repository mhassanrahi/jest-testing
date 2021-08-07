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