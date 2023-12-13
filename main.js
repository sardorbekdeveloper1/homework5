//  Funksiyalar

// Func 1
// function power(a, n) {
//     return Math.pow(a, n);
//   }
  
//   console.log(power(3, 5));
  


// Func 2
// function mean(a, b) {
//     const arithmeticMean = (a + b) / 2;
//     const geometricMean = Math.sqrt(a * b);
//     return [arithmeticMean, geometricMean];
//   }
  
//   console.log(mean(12, 48)); 
  


// Func 3
// function sign(n) {
//     if (n < 0) {
//       return -1;
//     } else if (n > 0) {
//       return 1;
//     } else {
//       return 0;
//     }
//   }
  
//   console.log(sign(10));
  


// Func 4
// function numberOfRoots(A, B, C) {
//     const discriminant = B * B - 4 * A * C;
  
//     if (discriminant > 0) {
//       return 2;
//     } else if (discriminant === 0) {
//       return 1;
//     } else {
//       return 0;
//     }
//   }
  
//   console.log(numberOfRoots(1, -6, 9));
  


// Func 5
// function areaCircle(R) {
//     const pi = Math.PI;
//     const area = pi * R * R;
//     return area;
//   }
  
//   console.log(areaCircle(5));
  


// Func 6
// function sumRange(A, B) {
//     if (A > B) {
//       return 0;
//     }
  
//     let sum = 0;
//     for (let i = A; i <= B; i++) {
//       sum += i;
//     }
//     return sum;
//   }
  
//   console.log(sumRange(11, 10)); 
  


// Func 7
// function calc(A, B, S) {
//     if (S === '-') {
//       return A - B;
//     } else if (S === '*') {
//       return A * B;
//     } else if (S === '/') {
//       return A / B;
//     } else if (S === '+') {
//       return A + B;
//     } else {
//       return 0;
//     }
//   }
  
//   console.log(calc(10, 15, '*'));
//   console.log(calc(7, 8, '+'));
  


// Func 8
// function isEven(K) {
//     return K % 2 === 0;
//   }
  
//   console.log(isEven(11));
  


// Func 9
// function sortABC(a, b, c) {
//     const smallest = Math.min(a, b, c);
//     const largest = Math.max(a, b, c);
//     const middle = a + b + c - smallest - largest;
    
//     return `${smallest}, ${middle}, ${largest}`;
//   }
  
//   console.log(sortABC(10, 5, 8));
  


// Func 10
// function isPowerN(K, N) {
//     if (K <= 0 || N <= 0) {
//       return false;
//     }
  
//     let power = 1;
//     while (power < K) {
//       power *= N;
//     }
  
//     return power === K;
//   }
  
//   console.log(isPowerN(64, 4)); 
//   console.log(isPowerN(10, 3)); 
  


// Func 11
// function isPrime(N) {
//     if (N <= 1) {
//       return false;
//     }
  
//     for (let i = 2; i <= Math.sqrt(N); i++) {
//       if (N % i === 0) {
//         return false;
//       }
//     }
  
//     return true;
//   }
  
//   console.log(isPrime(7));
//   console.log(isPrime(12));



// Func 12
// function isPrime(num) {
//     if (num <= 1) {
//       return false;
//     }
  
//     for (let i = 2; i <= Math.sqrt(num); i++) {
//       if (num % i === 0) {
//         return false;
//       }
//     }
  
//     return true;
//   }
  
//   function numberOfPrime(N) {
//     let count = 0;
//     for (let i = 2; i <= N; i++) {
//       if (isPrime(i)) {
//         count++;
//       }
//     }
//     return count;
//   }
  
//   console.log(numberOfPrime(15));
  


// Func 13
// function digitCount(number) {
//     return number.toString().length;
//   }
  
//   function digitNth(K, N) {
//     const count = digitCount(K);
    
//     if (count < N) {
//       return -1;
//     }
    
//     const digit = parseInt(K.toString().charAt(count - N));
//     return digit;
//   }
  
//   console.log(digitNth(105782, 5));
//   console.log(digitNth(1057, 5));
  


// Func 14



// Func 15



// Func 16
// function factorial(N) {
//     if (N < 0) {
//       return 1;
//     } else if (N === 0 || N === 1) {
//       return 1;
//     } else {
//       let result = 1;
//       for (let i = 2; i <= N; i++) {
//         result *= i;
//       }
//       return result;
//     }
//   }
  
//   console.log(factorial(5));
//   console.log(factorial(-3));
  


// Func 17
// function getSum3(N) {
//     let sum = 0;
  
//     for (let i = 1; i <= N; i++) {
//       if (i % 3 === 0) {
//         sum += i;
//       }
//     }
  
//     return sum;
//   }
  
//   console.log(getSum3(15));
  


// Func 18
// function sumOddEven(N) {
//     let sumOdd = 0;
//     let sumEven = 0;
  
//     for (let i = 1; i <= N; i++) {
//       if (i % 2 === 0) {
//         sumEven += i; 
//       } else {
//         sumOdd += i;
//       }
//     }
  
//     return [sumOdd, sumEven];
//   }
  
//   console.log(sumOddEven(14)); 
  


// Func 19
// function invertTime(H, M, S) {
//     const totalSeconds = H * 3600 + M * 60 + S;
//     return totalSeconds;
//   }
  
//   console.log(invertTime(0, 6, 40));
  


// Func 20



// Func 21



// Func 22
// function isLeapYear(Y) {
//     return (Y % 4 === 0 && Y % 100 !== 0) || (Y % 400 === 0);
// }

// function monthDays(M, Y) {
//     const daysInMonth = [31, isLeapYear(Y) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

//     return daysInMonth[M - 1];
// }


// console.log(monthDays(2, 2020)); 
// console.log(monthDays(3, 2021)); 



// Func 23



// Func 24
// function isLeapYear(Y) {
//     return (Y % 4 === 0 && Y % 100 !== 0) || (Y % 400 === 0);
// }

// function monthDays(M, Y) {
//     const daysInMonth = [31, isLeapYear(Y) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
//     return daysInMonth[M - 1];
// }

// function nextDate(D, M, Y) {
//     const daysInThisMonth = monthDays(M, Y);

//     if (D < daysInThisMonth) {
//         D++;
//     } else {
//         D = 1;
//         if (M === 12) {
//             M = 1;
//             Y++;
//         } else {
//             M++;
//         }
//     }

//     const formattedDay = ("0" + D).slice(-2);
//     const formattedMonth = ("0" + M).slice(-2);
    
//     return `${formattedDay}.${formattedMonth}.${Y}`;
// }

// console.log(nextDate(10, 3, 2022)); 



// Func 25
// function getDividersNumberAndSum(N) {
//     let dividers = []; 
//     let sum = 0;

//     for (let i = 1; i <= N; i++) {
//         if (N % i === 0) {
//             dividers.push(i);
//             sum += i;
//         }
//     }

    
//     return `${dividers.length}, ${sum}`;
// }

// 
// console.log(getDividersNumberAndSum(12));
