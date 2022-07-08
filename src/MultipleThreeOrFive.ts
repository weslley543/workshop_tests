export default class CalculateMultiples {
  
  public calculateThreeOrFive(numberUnder: number): number {
    let sum = 0;
    for(let i= 0 ; i< numberUnder; i ++){
      if(this.isDivisiblePerThree(i) || this.isDivisiblePerFive(i)){
        sum = sum + i
      }
      
    }
    
    return sum
  }
  public calculateThreeAndFive(numberUnder: number): number {
    let sum = 0;

    for(let i = 0; i< numberUnder; i++){
      if(this.isDivisiblePerThree(i) && this.isDivisiblePerFive(i)){
        sum = sum + i
      }
    }
    return sum
  }

  public calculateThreeOrFiveAndSeven(numberUnder: number): number {
    let sum = 0;
    for(let i= 0 ; i< numberUnder; i ++){
      if((this.isDivisiblePerThree(i) || this.isDivisiblePerFive(i)) && this.isDivisiblePerSeven(i)){
        sum = sum + i
      }
      
    }
    
    return sum
  }

  private isDivisiblePerThree(number: number): boolean {
    return number % 3 === 0
  }

  private isDivisiblePerFive(number: number): boolean {
    return number % 5 === 0
  }
  private isDivisiblePerSeven(number: number): boolean {
    return number % 7 === 0
  }
}