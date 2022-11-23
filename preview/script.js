let btn = document.querySelector('#btn');

let deleteEvent = (e) => {console.log(e.target);};
btn.addEventListener('click', deleteEvent, {once: true});
// btn.removeEventListener('click', deleteEvent);

let a = document.querySelector('a');
a.addEventListener('click', (e) => {
    e.preventDefault();

    console.log(e.type);
});

