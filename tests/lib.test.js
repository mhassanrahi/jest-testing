const lib = require('../lib')
test("absolute - should return a positive number if the input is positive", () => {

    const result = lib.absolute(1)
    expect(result).toBe(1)
})