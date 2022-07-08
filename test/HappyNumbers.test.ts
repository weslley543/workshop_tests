import HappyNumbers from '../src/HappyNumbers'

type SutTypes = {
  sut: HappyNumbers
}

const makeSut = (): SutTypes => {
  const sut = new HappyNumbers()
  
  return { sut }
}

describe('Happy Numbers', () => {
  test('expect given number is happy', () => {
    const { sut } = makeSut()

    expect(sut.isHappyNumber(19)).toBeTruthy()
  })

  test('expect given number is not happy', () => {
    const { sut } = makeSut()

    expect(sut.isHappyNumber(8)).toBeFalsy()
  })
})