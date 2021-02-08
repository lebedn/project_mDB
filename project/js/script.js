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

document.addEventListener('DOMContentLoaded', () => {
    let adv = document.querySelectorAll('.promo__adv img'),
        bg = document.querySelector('.promo__bg'),
        genre = bg.querySelector('.promo__genre'),
        list = document.querySelector('.promo__interactive-list'),
        form = document.querySelector('form.add'),
        inputAdd = form.querySelector('.adding__input'),
        checkbox = form.querySelector('[type="checkbox"]');

    function FormAdd() {
        form.addEventListener('submit', (event) => {
            event.preventDefault();
            let newFilms = inputAdd.value;
            let favorite = checkbox.checked;
            sortArr(movieDB.movies);
            if (newFilms) {
                newFilms = `${newFilms.substring(0, 22)}...`;
            }
            if (newFilms) {
                movieDB.movies.push(newFilms);
                FormList(movieDB.movies, list);
            }
            if (favorite) {
                console.log('Добавляем любый фильм');
            }
            event.target.reset();
        });


    }
    FormAdd();

    function advertising(par) {
        par.forEach((item) => {
            item.remove();
        });
    }
    advertising(adv);
    const banner = () => {
        genre.textContent = "Драма";
        bg.style.background = "url('img/bg.jpg')";

    };
    banner();
    const sortArr = (arr) => {
        arr.sort();

    };

    function FormList(films, par) {

        par.innerHTML = "";
        sortArr(movieDB.movies);
        films.forEach((item, i) => {
            par.innerHTML += `<li class="promo__interactive-item">${i+1}.${item}
            <div class="delete"></div>
        </li>`;
        });
        document.querySelectorAll('.delete').forEach((btn, i) => {
            btn.addEventListener('click', () => {
                btn.parentElement.remove();
                films.splice(i, 1);
                FormList(movieDB.movies, list);
            });

        });
    }
    FormList(movieDB.movies, list);





});