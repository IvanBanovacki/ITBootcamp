import { prihodList, rashodList, getPrihodiNiz, getRashodiNiz } from "./index.js";

function renderPrihodi() {
    prihodList.innerHTML = "<li>Prihod:</li>";
    getPrihodiNiz().forEach((el) => {
        const item = document.createElement("li");
        const opis = document.createElement("span");
        const iznos = document.createElement("span");
        const iznosDiv = document.createElement("div");
        const izbrisiBtn = document.createElement("button");
        izbrisiBtn.classList.add("hidden");
        izbrisiBtn.textContent = "X";

        opis.textContent = el.opis;
        iznos.textContent = "+ " + el.iznos;

        item.addEventListener("mouseover", (e) => {
            e.preventDefault();
            izbrisiBtn.classList.remove("hidden");
            setTimeout(() => {
                izbrisiBtn.classList.add("hidden");
            }, 1000);
        });

        iznosDiv.append(iznos, izbrisiBtn);
        item.append(opis, iznosDiv);
        prihodList.append(item);

        izbrisiBtn.addEventListener("click", (e) => {
            e.preventDefault();
            izbrisiBtn.parentElement.parentElement.remove();
            getPrihodiNiz().splice(getPrihodiNiz().length - 1, 1);
            renderUkupanPrihod();
            renderBudzet();
            renderPercPerExpense();
            renderProcenti();
        });
    });
}

function renderRashodi() {
    rashodList.innerHTML = "<li>Rashod:</li>";
    getRashodiNiz().forEach((el) => {
        const item = document.createElement("li");
        const opis = document.createElement("span");
        const iznos = document.createElement("span");
        const iznosDiv = document.createElement("div");
        const percentage = document.createElement("span");
        percentage.className = "percentage";
        const izbrisiBtn = document.createElement("button");
        izbrisiBtn.className = "hidden";
        izbrisiBtn.textContent = "X";
        if (Math.round((el.iznos / renderUkupanPrihod()) * 100) == Infinity) {
            percentage.textContent = "";
        } else {
            percentage.textContent = Math.round((el.iznos / renderUkupanPrihod()) * 100) + "%";
        }

        item.addEventListener("mouseover", (e) => {
            e.preventDefault();
            izbrisiBtn.classList.remove("hidden");
            setTimeout(() => {
                izbrisiBtn.classList.add("hidden");
            }, 1000);
        });

        opis.textContent = el.opis;
        iznos.textContent = "- " + el.iznos;
        iznosDiv.append(iznos, percentage, izbrisiBtn);
        item.append(opis, iznosDiv);
        rashodList.append(item);

        izbrisiBtn.addEventListener("click", (e) => {
            e.preventDefault();
            izbrisiBtn.parentElement.parentElement.remove();
            getRashodiNiz().splice(getRashodiNiz().length - 1, 1);
            renderUkupanRashod();
            renderBudzet();
            renderPercPerExpense();
            renderProcenti();
        });
    });
}

function renderPercPerExpense() {
    getRashodiNiz().forEach((el) => {
        const perc = document.getElementsByClassName("percentage");
        perc.innerHTML = "";
        let percNumber = Math.round((el.iznos / renderUkupanPrihod()) * 100) + "%";
        perc.textContent = percNumber;
    });
}

const budzet = document.querySelector("#budzet");
const prihodTotal = document.querySelector("#prihod-total");
const rashodTotal = document.querySelector("#rashod-total");
const procenat = document.querySelector("#procenat");

function renderProcenti() {
    procenat.innerHTML = "";
    if (renderUkupanPrihod() > 0 && renderUkupanRashod() > 0) {
        procenat.textContent =
            Math.round((renderUkupanRashod() / renderUkupanPrihod()) * 100) + "%";
    }
}
function renderUkupanPrihod() {
    let ukupanPrihod = 0;
    getPrihodiNiz().forEach((el) => {
        ukupanPrihod += Number(el.iznos);
    });
    prihodTotal.innerHTML = "";
    prihodTotal.textContent = "+ " + ukupanPrihod;
    return ukupanPrihod;
}

function renderUkupanRashod() {
    let ukupanRashod = 0;
    getRashodiNiz().forEach((el) => {
        ukupanRashod += Number(el.iznos);
    });
    rashodTotal.innerHTML = "";
    rashodTotal.textContent = "- " + ukupanRashod;
    return ukupanRashod;
}

function renderBudzet() {
    let budzetTotal = 0;
    getRashodiNiz().forEach((el) => {
        budzetTotal -= Number(el.iznos);
    });
    getPrihodiNiz().forEach((el) => {
        budzetTotal += Number(el.iznos);
    });
    budzet.innerHTML = "";
    budzet.textContent = budzetTotal;
}

function renderAll() {
    renderPrihodi();
    renderRashodi();
    renderPercPerExpense();
    renderUkupanPrihod();
    renderUkupanRashod();
    renderBudzet();
    renderProcenti();
}

export { renderAll };
