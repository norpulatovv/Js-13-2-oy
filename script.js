let vaqt = document.querySelector("#hours");
let daqiqa = document.querySelector("#minute");
let soniya = document.querySelector("#second");

console.log(vaqt, daqiqa, soniya);

function soat() {
    let now = new Date();
    let sogot = String(now.getHours()).padStart(2, '0');
    let minut = String(now.getMinutes()).padStart(2, '0');
    let sikund = String(now.getSeconds()).padStart(2, '0');

    vaqt.textContent = sogot;
    daqiqa.textContent = minut;
    soniya.textContent = sikund;
};

setInterval(soat, 1000);