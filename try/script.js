// document.getElementById('d').innerHTML = 'place';


// console.log(Date());

// const newP = document.createElement('h1');
// // newP.innerHTML = 'Game';
// const op = document.createTextNode('Base');
// newP.appendChild(op);

// document.body.appendChild(newP);

// let ul = document.getElementById('f');
// let p = document.getElementById('d');

// ul.remove(p);

// const soldie = {
//     helth: 400,
//     armor: 100,
//     sayHello() {
//         console.log('Hello');
//     }
// };

// let jhon = Object.create(soldie);

// jhon.armor = 12;

// let k = '1006';

// console.log(k%10);

// let romanNumelize = {
//     M: 1000,
//     CM: 900,
//     D: 500,
//     C: 100,
//     XC: 90,
//     L: 50,
//     X: 10,
//     IX: 9,
//     V: 5,
//     IV: 4,
//     I: 1,
//     toRoman: function(num) {
//         let roman = '';
//         for (let i in this) {
//             while (num >= this[i]) {
//                 roman += i;
//                 num -= this[i];
//             }
//         }
//         return (console.log(roman));  
//     }
// };


// const obj = {
//     toRoman: function(num) {
//         let roman = '';
//         for (let i in romanNumelize) {
//             while (num >= romanNumelize[i]) {
//                 roman += i;
//                 num -= romanNumelize[i];
//             }
//         }
//         return (console.log(roman));  
//     }
// };

// obj.toRoman(1990);


// TODO: create a RomanNumerals helper object
// TODO: create a RomanNumerals helper object
// const romanNum = {
//     M: 1000,
//     CM: 900,
//     D: 500,
//     CD: 400,
//     C: 100,
//     XC: 90,
//     L: 50,
//     XL: 40,
//     X: 10,
//     IX: 9,
//     V: 5,
//     IV: 4,
//     I: 1
//   };
  
//   const Num = {
//     1000: 'M',
//     900: 'CM',
//     500: 'D',
//     400: 'CD',
//     100: 'C',
//     90: 'XC',
//     50: 'L',
//     40: 'XL',
//     10: 'X',
//     9: 'IX',
//     5: 'V',
//     4: 'IV',
//     1: 'I'
//   };
  
//   const RomanNumerals = {
//     toRoman: function(num) {
//       let roman = '';
//       let number = num;
//       for (let i in romanNum) {
//         while (number >= romanNum[i]) {
//           roman += i;
//           number -= romanNum[i];
//         }
//       }
//       return console.log(roman);
//     },
    
//     fromRoman: function(num) {
//       let number = 0;
//       let c = 0;
//       for (let i in Num) {
//         while(num[c] == Num[i]){
//           if (num[c] == 'I' && num[c+1] == 'V') {
//             number += 4;
//             c++;
//             c++;
//           } else if (num[c] == 'X' && num[c+1] == 'L') {
//             number += 40;
//             c++;
//             c++;
//           } else if (num[c] == 'C' && num[c+1] == 'D') {
//             number += 400;
//             c++;
//             c++;
//           } else if (num[c] == 'I' && num[c+1] == 'X') {
//             number += 9;
//             c++;
//             c++;
//           } else if (num[c] == 'X' && num[c+1] == 'C') {
//             number += 90;
//             c++;
//             c++;
//           } else if (num[c] == 'C' && num[c+1] == 'M') {
//             number += 900;
//             c++;
//             c++;
//           } else if (num[c] == Num[i]) {
//             number += Number(i); 
//             c++;
//           }
//         }
//       }
//       return console.log(number);
//     }
//   };

//   RomanNumerals.toRoman(1008);
//   RomanNumerals.fromRoman('MVIII');






//   const romanHash = {
//     I: 1,
//     V: 5,
//     X: 10,
//     L: 50,
//     C: 100,
//     D: 500,
//     M: 1000,
//   };
//   // const s = "MCMLXXXIX";
//   // s = 1989
//   function romanToInt(s) {
//     let accumulator = 0;
//     for (let i = 0; i < s.length; i++) {
//       if (s[i] === "I" && s[i + 1] === "V") {
//         accumulator += 4;
//         i++;
//       } else if (s[i] === "I" && s[i + 1] === "X") {
//         accumulator += 9;
//         i++;
//       } else if (s[i] === "X" && s[i + 1] === "L") {
//         accumulator += 40;
//         i++;
//       } else if (s[i] === "X" && s[i + 1] === "C") {
//         accumulator += 90;
//         i++;
//       } else if (s[i] === "C" && s[i + 1] === "D") {
//         accumulator += 400;
//         i++;
//       } else if (s[i] === "C" && s[i + 1] === "M") {
//         accumulator += 900;
//         i++;
//       } else {
//         accumulator += romanHash[s[i]];
//       }
//     }
//     return console.log(accumulator);
//   }

//   romanToInt('MVIII');

function isSolved(board) {
  // TODO: Check if the board is solved!
 let check = [...board[0],...board[1],...board[2]];
 return console.log(check);
}

isSolved([[1,1,1],[1,1,1],[1,1,1]]);