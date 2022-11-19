/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

movieDB.movies.sort();

const movieList = document.querySelectorAll('.promo__interactive-item');
movieList.forEach((item, i) => item.textContent = i+1 + '. ' + movieDB.movies[i]);

let advert = document.querySelectorAll('.promo__adv > img');
advert.forEach(item => item.remove());

let genre = document.querySelector('.promo__genre');
genre.innerHTML = 'ДРАММА';

let bg = document.querySelector('.promo__bg');
bg.style.backgroundImage = 'url(img/bg.jpg)';