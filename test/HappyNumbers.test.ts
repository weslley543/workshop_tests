import HappyNumbers from '../src/HappyNumbers'

type SutTypes = {
  sut: HappyNumbers
}

const makeSut = (): SutTypes => {
  const sut = new HappyNumbers()
  
  return { sut }
}