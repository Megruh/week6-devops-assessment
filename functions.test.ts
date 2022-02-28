const {shuffleArray} = require('./utils')

const testArr = [1, 2, 3, 4]

describe('shuffleArray should', () => {
    test('shuffleArray should return an array', () => {
        expect(Array.isArray(shuffleArray(testArr))).toBe(true)
    })
    test('make sure items have been shuffled', () => {
        let result = shuffleArray(testArr)
        expect(result.join()).not.toEqual(testArr.join())
    })
})