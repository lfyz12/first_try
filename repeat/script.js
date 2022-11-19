const card = document.querySelectorAll('.info-card');

const text = document.getElementById('text');

for (let val of card) {
    val.addEventListener('click', function() {
        val.style.backgroundColor = '#000';
        val.style.border = '1px solid #0f0';
        text[0].style.color = '#fff';
    });
}