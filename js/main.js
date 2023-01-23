// Запросы, XMLHttpRequest, AJAX. Домашняя работа

/* Задание №1.1. 
Сделайте запрос на адрес 'https://rickandmortyapi.com/api/character'.
Используйте fetch. Отобразите на странице имена персонажей из 
Рика и Морти в list.
(Вы можете стилизовать страницу по желанию.)
*/

/* Задание №1.2. 
Рядом с именами отобразите все изображения
которые вы получили вместе с остальными данными из сервера.
*/

let block1 = document.querySelector('.block-1');
let ul = document.querySelector('.list');
fetch('https://rickandmortyapi.com/api/character')
  .then((item) => item.json())
  .then((data) => {
    data.results.forEach((i) => {
      ul.innerHTML += `<li>${i.name}<img src=${i.image}></li>`;
    });
  });

/* Задание №1.3. 
Создайте файл db.json и запустите локальный сервер.
Данные которые вы получили во втором задании, сохраните 
в локальном сервере db.json, в массиве под 
названием "characters".
Подсказка: как только ваши данные сохранились в db.json
функцию, которая отправляет запрос на db.json стоит закомментировать.
*/

let arr = [];
fetch('https://rickandmortyapi.com/api/character')
.then((item) => item.json())
.then((data) => {
    data.results.forEach(i =>{
        arr.push(i)
    });
});


    // console.log(arr)

    arr.forEach(item => {
        fetch('http://localhost:8000/characters', {
            method: 'POST',
            body: JSON.stringify(item),
            headers: {
                "Content-Type": "application/json;charset=utf-8" 
            }
        }) 
    })


// Задание №1.4. 
// А теперь сделайте запрос на локальный сервер.
// Во второй блок с классом 'block-2', отобразите имена, которые 
// вы получили (стянули) с db.json.

    fetch('http://localhost:8000/characters')
    .then (res => res.json())
    .then (data => {
        // console.log(data);
        let list2 = document.querySelector('.list2');
        list2.innerHTML = '';
        data.forEach(i => {
            list2.innerHTML +=
            `<li>${i.name}<img src=${i.image}></li>`
        })
        
    })





/* Задание №1.5. 
К именам добавьте картинки персонажей.
В итоге у вас должна получиться точная копия первых двух тасков.
Отличие которых лишь в базе данных.
*/
