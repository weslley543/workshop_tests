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

  test('expect sum of number under 1000 is ', () => {
    const { sut } = makeSut()

    const value = sut.calculateThreeOrFive(1000);

    expect(value).toEqual(233168)
  }) 
})