'use strict';
// let storeName = 'drugmarket';

// let storeDescription = {
//     budget: 10000,
//     employees: ['Iluha', 'Roma', 'Misha'],
//     products: {
//         met: 100,
//         sativa: 150,
//         gash: 250        
//     },
//     open: true
// };
// ---------------------------------------------------------
// let count = 5;

// for (let i = 0; i < 6; i++) {
//     console.log(count);
//     count++;
// }
// ----------------------------------------------------------
// for (let i = 20; i >= 13; i--) {
//     console.log(i);
// }
// -----------------------------------------------------------
// for (let i = 1; i < 11; i++) {
//     if (i % 2 == 0) {
//         console.log(i);
//     }
// }
// -----------------------------------------------------------
// let i = 1;

// while (i != 16) {
//     i++;

//     if (i%2 > 0) {
//         console.log(i);
//     }
// }
// ------------------------------------------------------------
// let arr = [];

// for (let i = 5; i <= 10; i++) {
//     arr[i - 5] = i;
// }
// console.log(arr);
// ------------------------------------------------------------
// let star = '     *\n    ***\n   *****\n  *******\n *********\n*********** ';
// console.log(star);
// function sayHelllo(name) {
//     console.log(`hello ${name}`);
//     return;
// }
// ----------------------------------------------------------
// sayHelllo('Misha');
// let arr = [];

// function retNum(num) {
//     for (let i = 0;i < 3; i++) {
//         if (i == 1) {
//             arr[i] = num;
//         } else if (i < 1) {
//             arr[i] = num - 1;
//         } else {
//             arr[i] = num + 1; 
//         }
//     }
//     console.log(arr);
//     return;
// }

// retNum(5);
// ------------------------------------------------------------
// let win = confirm(''),
//     times = confirm('');

// function counRet(num, ret) {
//     if (typeof(ret) !== 'number' || ret <= 0) {
//         console.log(num);
//     }

//     let str = '';

//     for (let i = 1; i < ret+1; i++) {
//         if (i === ret) {
//             str += `${num * i}`;
//         } else {
//             str += `${num * i}---`;
//         }
//     }
//     console.log(str);
//     return;
// }

// counRet(345, 5432);
// --------------------------------------------------------------
// function cube (num) {
//     if (typeof(num) !== 'number' || num < 0 || Math.floor(num) != num) {
//         console.log('Error');
//     } else {
//         console.log(`Объем куба: ${Math.pow(num, 3)}. Площадь всей поверхности: ${Math.pow(num, 2) * 6}`);
//     }
// }

// cube(10.3);
// ---------------------------------------------------------------
// function numOfCupe(num) {


//     if (typeof(num) !== 'number' || num < 0 || Math.floor(num) != num) {
//         console.log('Ошибка. Проверьте правильность веденного номера места.');
//     } else if (num == 0 || num > 36) {
//         console.log('Таких мест в вагоне не существует');
//     } else if (num <= 4) {
//         console.log(1);
//     } else if (num == 5 || num <= 8) {
//         console.log(2);        
//     } else if (num == 9 || num <= 12) {
//         console.log(3);        
//     } else if (num == 13 || num <= 16) {
//         console.log(4);        
//     } else if (num == 17 || num <= 20) {
//         console.log(5);        
//     } else if (num == 21 || num <= 24) {
//         console.log(6);
//     } else if (num == 25 || num <= 28) {
//         console.log(7);
//     } else if (num == 29 || num <= 32) {
//         console.log(8);
//     } else if (num == 33 || num <= 36) {
//         console.log(7);
//     }
//     return;
// }

// numOfCupe(23);
// ---------------------------------------------------------------
// function timeHelp(min) {
//     if (typeof(min) !== 'number' || min < 0 || Math.floor(min) != min || parseInt(min/60) > 10) {
//         console.log('Ошибка. Проверьте данные');
//     } else if (parseInt(min/60) == 1) {
//         console.log(`1 час ${min%60} минут`);
//     } else if (parseInt(min/60) >= 2 && parseInt(min/60) <= 4) {
//         console.log(`${parseInt(min/60)} часа ${min%60} минут`);
//     } else {
//         console.log(`${parseInt(min/60)} часов ${min%60} минут`);
//     }
    
//     return;
// }

// timeHelp(360);
// -----------------------------------------------------------------

// function maxNum(a, b, c, d) {
//     if (typeof(a) !== 'number' || typeof(b) !== 'number' || typeof(c) !== 'number' || typeof(d) !== 'number'){
//         console.log(0);
//     } else {
//         console.log(Math.max(a, b, c, d));
//     }
// }

// maxNum(45, 564, 23, 2);
// --------------------------------------------------------------------
// function fib(count) {
//     let num = [0, 1];
    
//     if (typeof(count) !== 'number' || count <= 0){
//         num = '';
//     } else {

//         for (let i = 0; i < count; i++) {
//             if (num.length < count) {
//                 num.push(num[i] + num[i+1]);
//             }
//         }
//     }

//     console.log(num);
//     return;
// }

// fib(5);
// -------------------------------------------------------------------------
// function showExp(inf) { 
//     const {exp} = inf.skills;
    
//     return console.log(exp); 
// }

// function showLanguage(mem) {
//     let str ='';
//     const {programmingLangs} = personalPlanPeter.skills;

//     for (let key in programmingLangs) {
//         str += `Язык ${key} изучен на ${programmingLangs[key]}\n`;
//     }

//     return console.log(str);
// }

// const personalPlanPeter = {
//     name: "Peter",
//     age: "29",
//     skills: {
//         languages: ['ru', 'eng'],
//         programmingLangs: {
//             js: '20%',
//             php: '10%'
//         },
//         exp: '1 month'
//     },
//     showAgeAndLanguage: function(plan) {
//         const {age} = plan,
//               {languages} = plan.skills;

//         let info = `Мне ${age} лет и я владею языками:`;

//         languages.forEach(function(lang) {
//             info += `${lang.toUpperCase()}, `;
//         });

//         return console.log(info);
//     }
// };

// personalPlanPeter.showAgeAndLanguage(personalPlanPeter);
// showLanguage(personalPlanPeter);
// showExp(personalPlanPeter);
// -----------------------------------------------------------------
// const family = ['Peter', 'Ann', 'Alex', 'Linda'];

// function showFamily(fam) {
//     let str = 'Моя семья состоит из: ';

//     if (fam.length == 0) {
//         str = 'Семья пуста';
//     } else {
//         fam.forEach(memb => {
//             str += `${memb} `;
//         });
//     }

//     return console.log(str);
// }

// showFamily(family);
// ----------------------------------------------------------------
// const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

// function standartizeString(doc) {
//     let str = '';
//     doc.forEach(city => {
//         console.log(city.toLowerCase());
//     });
// }

// standartizeString(favoriteCities);
// ----------------------------------------------------------------
// const someString = 'Улыбок тебе дед макар';

// function reverse(str) {
//     let arr = str.split('');
//     arr.reverse();
//     return console.log(arr.join(''));
// }

// reverse('Стивен');
// -----------------------------------------------------------------
// const baseCurrencies = ['USD', 'EUR'];
// const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

// function availableCurr(all, miss) {
//     let str = 'Доступные валюты:\n';
//     if (all.length == 0) {
//         str = 'Нет доступных валют';
//     }

//     all.forEach(valut => {
//         if (valut !== miss) {
//             delete all[miss];
//             str += `${valut}\n`; 
//         }
//     });

//     return console.log(str);
// }

// availableCurr(['USD', 'EUR', 'UAH', 'RUB', 'CNY'], 'RUB');
// -------------------------------------------------------------------
// const shoppingMallData = {
//     shops: [
//         {
//             width: 10,
//             length: 5
//         },
//         {
//             width: 15,
//             length: 7
//         },
//         {
//             width: 20,
//             length: 5
//         },
//         {
//             width: 8,
//             length: 10
//         }
//     ],
//     height: 5,
//     moneyPer1m3: 30,
//     budget: 50000
// };

// function isBudgetEnough(data) {
//     let s = 0;
    
//     data.shops.forEach(shop => {
//         s += shop.width * shop.length;
//     });
//     s = s * data.height;

//     if (data.budget >= s * data.moneyPer1m3) {
//         console.log('Бюджета достаточно');
//     } else {
//         console.log('Бюджета не достаточно');
//     }

//     return;
// }

// isBudgetEnough(shoppingMallData);
// ------------------------------------------------------------------
// const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam'];

// function sortStudentsByGroups(arr) {
//     arr.sort();
//     let teamOne = [], teamTwo = [], teamthree = [];

//     arr.forEach(student => {
//         if (teamOne.length < 3) {
//             teamOne.push(student);
//         } else if (teamTwo.length < 3) {
//             teamTwo.push(student);
//         } else if (teamthree.length < 3) {
//             teamthree.push(student);
//         }
//     });

//     arr.splice(0, 9);
//     let str = 'Оставшиеся студенты - ';
//     str += arr.join(', ');
//     arr = [teamOne, teamTwo, teamthree, str];
//     console.log(arr);
//     return;
// } 

// sortStudentsByGroups(students);
// // ---------------------------------------------------------------------

// function createCount() {
//     let counter = 0;

//     const myFunction = function() {
//         counter = counter + 1;
//         return counter;
//     };

//     return myFunction;
// }

// const increment = createCount();

// const c1 = increment();
// const c2 = increment();
// const c3 = increment();

// console.log(c1, c2, c3);

// let ass;
// ass.strictEqual(("Welcome"), "emocleW");
// console.log(ass);

let arr = [],
    data = '';

while (arr.length < 5) {
    arr.push(Math.floor(Math.random(-100, 100) * 100));
}

data += `Max num: ${arr.forEach(value => {
    Math.max(value);
})} `; 
console.log(data);

let qus = prompt('You are fagot?', 'Yes/No');

while (qus != 'Yes') {
    if (qus == 'No' || qus == '') {
        alert('You are pizdabol');
        qus = prompt('You are fagot?', 'Yes/No');
    }
}
alert('All right!!!');
