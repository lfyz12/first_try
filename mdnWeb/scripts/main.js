let myHeading = document.querySelector('h1');
let changeImage = document.querySelector('img');
let myButton = document.querySelector('button');
myButton.onclick = function() {
    let myName = prompt('Введи свое имя.');
    myHeading.textContent = 'Теперь ты воин, ' + myName;
    // setUserName();
};
// function setUserName() {
//     let myName = prompt('Введи свое имя.');
//     localStorage.setItem('name', myName);
//     myHeading.textContent = 'Теперь ты воин, ' + myName;
// }

// if (!localStorage.getItem('name')) {
//     setUserName();
// } else {
//     let storedName = localStorage.getItem('name');
//     myHeading.textContent = 'Теперь ты воин, ' + storedName;        
// }

// myHeading.onclick = function() {
//     if (myHeading.textContent == 'Изучение веб') {
//         myHeading.textContent = 'Hello world';
//     } else {
//         myHeading.textContent = 'Изучение веб';
//     }
    
// };

changeImage.onclick = function() {
    let mySrc = changeImage.getAttribute('src');

    if (mySrc == 'images/image.jpg') {
        changeImage.setAttribute('src', 'images/cat.jpg');
        changeImage.setAttribute('alt', 'Кот сидит смешно');
    } else {
        changeImage.setAttribute('src', 'images/image.jpg');
        changeImage.setAttribute('alt', 'Хакер пишет программу');
    }
    
};