const button = document.getElementById('button');
const text = document.querySelector('.header-text');
const maintext = document.querySelector('.main-text');
const main = document.querySelector('main');

function randCol(num) {
  return Math.floor(Math.random() * (num + 1));
} 

function hexCol(fnum, snum, thnum) {
  
}

button.addEventListener('click', function() {
  main.style.backgroundColor = 'rgb(' + randCol(255) + ',' + randCol(255) + ',' + randCol(255) + ')';
  text.style.color = 'rgb(' + randCol(255) + ',' + randCol(255) + ',' + randCol(255) + ')';
  maintext.style.color = text.style.color;
  button.style.color = text.style.color;
  button.style.borderColor = text.style.color;
  maintext.textContent = 'This is background color ' + main.style.backgroundColor + ' and text color ' + text.style.color + '.';
  buttonBg.style.color = text.style.color;
  buttonBg.style.borderColor = text.style.color;
  buttonCl.style.color = text.style.color;
  buttonCl.style.borderColor = text.style.color;
});

const buttonBg = document.querySelector('.bg');
const buttonCl = document.querySelector('.cl');

buttonBg.addEventListener('click', () => {
  main.style.backgroundColor = 'rgb(' + randCol(255) + ',' + randCol(255) + ',' + randCol(255) + ')';
  maintext.textContent = 'This is background color ' + main.style.backgroundColor + ' and text color ' + text.style.color + '.';
});

buttonCl.addEventListener('click', () => {
  text.style.color = 'rgb(' + randCol(255) + ',' + randCol(255) + ',' + randCol(255) + ')';
  maintext.style.color = text.style.color;
  button.style.color = text.style.color;
  button.style.borderColor = text.style.color;
  maintext.textContent = 'This is background color ' + main.style.backgroundColor + ' and text color ' + text.style.color + '.';
  buttonBg.style.color = text.style.color;
  buttonBg.style.borderColor = text.style.color;
  buttonCl.style.color = text.style.color;
  buttonCl.style.borderColor = text.style.color;
});