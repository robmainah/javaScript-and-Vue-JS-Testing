const { sum } = require("./sum")

describe('test sums', () => {
  it('should add number', () => {
    const result = sum(1, 2)
    expect(result).toBe(3)
  })

  it('object assignment', () => {
    const obj = {}
    expect(obj).toEqual({})
  })
})

describe('truthy or falsy', () => {
  it('to be falsy', () => {
    expect(null).toBeFalsy()
  })
  it('to be not true', () => {
    expect(null).not.toBeTruthy()
  })
  it('null negate', () => {
    expect(null).toBeNull()
  })
  it('null not undefined', () => {
    expect(null).not.toBeUndefined()
  })
})

describe('numbers', () => {
  it('greater than', () => {
    expect(2 + 2).toBeGreaterThan(1)
  })
  it('adding floats', () => {
    const sum = 0.1 + 0.2
    expect(sum).toBeCloseTo(0.29999)
  })
})

describe('strings', () => {
  it('there is e in team', () => {
    expect('team').toMatch(/e/)
  })
  it('there is no I in team', () => {
    expect('team').not.toMatch(/I/)
  })
})

describe('arrays', () => {
  const lists = [
    'item1', 'item2', 'item3'
  ]

  it('has item1', () => {
    expect(lists).toContain('item1')
  })
})

describe('exceptions', () => {
  const throwError = () => {
    throw new Error("should error")
  }

  it('should throw error', () => {
    // expect(() => throwError()).toThrow(Error)
    expect(() => throwError()).toThrow("should error")
  })
})

