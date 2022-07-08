import MultiplesCalculator from '../src/MultiplesCalculator'


type SutTypes = {
  sut: MultiplesCalculator;
}

const makeSut = (): SutTypes => {
  const sut = new MultiplesCalculator();

  return { sut }
}


describe('Calculate sum of three or five', () => {
  test('expect sum of number under 10 is 23', () => {
    const { sut } = makeSut()

    const value = sut.calculateThreeOrFive(10);

    expect(value).toEqual(23)
  })

  test('expect sum of number divisible per 3 or 5 under 1000 is 233168', () => {
    const { sut } = makeSut()

    const value = sut.calculateThreeOrFive(1000);

    expect(value).toEqual(233168)
  }) 

  test('expect sum of number divisible per 3 and 5 under 1000 is 33165', () => {
    const { sut } = makeSut()

    const value = sut.calculateThreeAndFive(1000);

    expect(value).toEqual(33165)
  })
  
  test('expect sum of number divisible per (3 or 5) and 7 under 1000 is 33173', () => {
    const { sut } = makeSut()

    const value = sut.calculateThreeOrFiveAndSeven(1000);

    expect(value).toEqual(33173)
  })
})