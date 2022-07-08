export default class HappyNumbers {

  public isHappynumberumber(number: number): boolean {
    let map = {};
  let tmp = 0;

  if (number < 1) return false;

  while (number !== 1 && !map[number]) {
    map[number] = true;
    tmp = 0;

    while (number > 0) {
      tmp += Math.pow(number % 10, 2);
      number = Math.floor(number / 10);
    }

    number = tmp;
  }

  return number === 1;
  }
}