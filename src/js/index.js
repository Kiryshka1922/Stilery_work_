 let quetionnItem = document.querySelectorAll('.quetions__item');

        quetionnItem.forEach((item, index) => {
            const number = (index + 1).toString().padStart(2, '0');
            item.style.setProperty('--item-number', '"' + number + '"');
        });
let upto = 0;
let counts = setInterval(updated, 10);
function updated() {
    let count = document.getElementById("counter");
    count.innerHTML = ++upto;
    if (upto === 800) {
        clearInterval(counts);
    }
}
let upto_1 = 0;
let counts_1 = setInterval(updated_1, 15);

function updated_1() {
    let count_1 = document.getElementById("counter_1");
    count_1.innerHTML = ++upto_1;
    if (upto_1 === 42) {
        clearInterval(counts);
    }
}