import MultiplesCalculator from './MultiplesCalculator'
import HappyNumbers from './HappyNumbers'
import { letterValuesMap } from './constants'

export default class WordsInNumbers {
  private readonly multipleCalculator: MultiplesCalculator
  private readonly happyNumbers: HappyNumbers
  
  constructor(mutipleCalculator: MultiplesCalculator,  happyNumbers: HappyNumbers){
    this.multipleCalculator = mutipleCalculator
    this.happyNumbers = happyNumbers
  }
  
  public sumWords (word: string) : any {
    const letters = word.split('')
    const sum = letters
                .map(letter => letterValuesMap[letter].value)
                .reduce((previousValue, currentValue) => previousValue + currentValue, 0)
    
    return {
      isHappyNumber: this.happyNumbers.isHappyNumber(sum),
      isDivisiblePerThreeOrFive: (this.multipleCalculator.isDivisiblePerThree(sum) || this.multipleCalculator.isDivisiblePerThree(sum)) || false,
      isPrime: this.isPrime(sum)
    }
  }

  private isPrime(num: number): boolean {
    
    if (num === 2 || num === 3){
      return true;
    }
    if (num <= 1 || num % 2 === 0 || num % 3 === 0){
      return false;  
    }
    for (let i = 5; i * i <= num ; i+=6){
      if (num % i == 0 || num % (i + 2) == 0){
        return false;
      }
    }
    return true;
  }
}