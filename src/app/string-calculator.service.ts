import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StringCalculatorService {

  constructor() { }
  add(numbers: string): number {
    if (!numbers) {
      return 0;
    }

    let delimiter = ',';

    if(numbers.startsWith('//')){
      delimiter =  numbers.charAt(2)
      numbers = numbers.replace(`//${delimiter}`, '');
    }
   
    if(numbers.includes('\\n')){
      numbers = numbers.replace('\\n',  delimiter);
    }

    const numArray = numbers.split(delimiter).map(num => parseInt(num?num :'0', 10));

    const negatives = numArray.filter(n => n < 0);
    if (negatives.length > 0) {
      throw new Error(`negative numbers not allowed ${negatives.join(',')}`);
    }

    return numArray.reduce((acc, current) => acc + current, 0);
  }
}
