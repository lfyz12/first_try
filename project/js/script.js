
/*1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

'use strict';

document.addEventListener('DOMContentLoaded', () => {
const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против...",
    ]
};

let movieList = document.querySelector('.promo__interactive-list');
let form = document.querySelector('form.add');
let acept = form.querySelector('button');
let inp = document.querySelector('.adding__input');
let likeMov = document.querySelector('input[type="checkbox"]');
let advert = document.querySelectorAll('.promo__adv > img');
let genre = document.querySelector('.promo__genre');
let bg = document.querySelector('.promo__bg');


form.addEventListener('submit', (e) => {
    e.preventDefault();

    let addInp = inp.value;
    let checkMove = likeMov.checked;
    if (addInp) {
        if (addInp.length > 21) {
            addInp = addInp.slice(0, 21) + '...'; 
        }
        if (checkMove) {
            console.log('Добавляем любимый фильм');
        }
        movieDB.movies.push(addInp);
        sortArr(movieDB.movies);
        addMovie(movieDB.movies, movieList);
    }
    
    form.reset();
});

const sortArr = (arr) => {
    arr.sort();
};

function addMovie(arr, place) {
    place.innerHTML = '';
    sortArr(arr);
    arr.forEach((val, i) => {
        place.innerHTML +='<li class="promo__interactive-item">' + (i+1) + '. ' + val + ' <div class="delete"></div></li>';});
    
    
    document.querySelectorAll('.delete').forEach((val, i) => {
        val.addEventListener('click', () => {
            val.parentElement.remove();
            arr.splice(i, 1);
            addMovie(arr, place);
        });
    });
}


function delEl(arr) {arr.forEach(item => item.remove());}

genre.innerHTML = 'ДРАММА';

bg.style.backgroundImage = 'url(img/bg.jpg)';




delEl(advert);
addMovie(movieDB.movies, movieList);
});