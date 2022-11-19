'use strict';
let div = document.createElement('div');
let div1 = document.createElement('div');
let circle = document.querySelectorAll('.circle');
div1.classList.add('red');
div.classList.add('black');

circle[0].after(div);
circle[2].replaceWith(div1);

div.textContent = 'Fuck u';
div1.innerHTML = 'No, fuck u';
div.insertAdjacentHTML('afterend', '<h1>No, fuck u.</h1>');
document.querySelector('.heart').remove();