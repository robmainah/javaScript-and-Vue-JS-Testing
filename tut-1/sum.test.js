const sum = require("./sum")

test('adding numbers', () => {
  expect(sum(1, 2)).toBe(3)
})