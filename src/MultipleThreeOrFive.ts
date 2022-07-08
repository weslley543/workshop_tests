export default class MultipleThreeOrFive {
  
  public calculateThreeOrFive(numberUnder: number): number {
    let sum = 0;
    for(let i= 0 ; i< numberUnder; i ++){
      if(i % 3 === 0 || i%5 === 0){
        sum = sum + i
      }
      
    }
    
    return sum
  }
}