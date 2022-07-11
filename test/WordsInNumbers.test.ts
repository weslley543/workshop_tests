import MultiplesCalculator from '../src/MultiplesCalculator'
import HappyNumbers from '../src/HappyNumbers'
import WordsInNumbers from '../src/WordsInNumbers'

type SutTypes = {
  sut: WordsInNumbers
}

const makeSut = (): SutTypes => {
  const multiplesCalculator = new MultiplesCalculator()
  const happyNumbers = new HappyNumbers()

  const sut = new WordsInNumbers(multiplesCalculator, happyNumbers)
  return { sut }
}

describe('WordsInNumbers', () => {
  test('expect word "Abobrinha" contains this property', () => {
    const { sut } = makeSut()

    const value = sut.sumWords('Abobrinha')
    expect(value).toHaveProperty('isHappyNumber')
    expect(value).toHaveProperty('isDivisiblePerThreeOrFive')
    expect(value).toHaveProperty('isPrime')
  })

  test('expect word "Abobrinha" to is equals this values', () => {
    const { sut } = makeSut()

    const value = sut.sumWords('Abobrinha')
    expect(value).toEqual({
      isHappyNumber: false,
      isDivisiblePerThreeOrFive: false,
      isPrime: true
    })
  })
})