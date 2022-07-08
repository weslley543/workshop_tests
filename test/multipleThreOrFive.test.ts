import MultipleThreeOrFive from '../src/MultipleThreeOrFive'


type SutTypes = {
  sut: MultipleThreeOrFive;
}

const makeSut = (): SutTypes => {
  const sut = new MultipleThreeOrFive();

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
})