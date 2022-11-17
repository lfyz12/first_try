const card = document.querySelector('.info-card');
console.log(card);
const text = document.getElementById('text');

card.addEventListener('click', function(e) {
    e.target.style.backgroundColor = 'red';
    document.body.style.backgroundColor = 'black';
});