import { prihodList, rashodList, ukupanPrihod } from "./index.js";

function renderPrihodi(prihodiNiz) {
    prihodList.innerHTML = "<li>Prihod:</li>";
    prihodiNiz.forEach((el) => {
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
            renderPrihodi(prihodiNiz);
        });
    });
}

function renderRashodi(rashodiNiz) {
    rashodList.innerHTML = "<li>Rashod:</li>";
    rashodiNiz.forEach((el) => {
        const item = document.createElement("li");
        const opis = document.createElement("span");
        const iznos = document.createElement("span");
        const iznosDiv = document.createElement("div");
        const percentage = document.createElement("span");
        percentage.className = "percentage";
        const izbrisiBtn = document.createElement("button");
        izbrisiBtn.className = "hidden";
        izbrisiBtn.textContent = "X";
        if (Math.round((el.iznos / ukupanPrihod) * 100) == Infinity) {
            percentage.textContent = "";
        } else {
            percentage.textContent = Math.round((el.iznos / ukupanPrihod) * 100) + "%";
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
        });
    });
}

function renderPercPerExpense(el) {
    el.forEach((el) => {
        const perc = document.getElementsByClassName("percentage");
        perc.innerHTML = "";
        let percNumber = Math.round((el.iznos / ukupanPrihod) * 100) + "%";

        perc.textContent = percNumber;
    });
}

const budzet = document.querySelector("#budzet");
const prihodTotal = document.querySelector("#prihod-total");
const rashodTotal = document.querySelector("#rashod-total");
const procenat = document.querySelector("#procenat");

function renderTotalAmounts(budget, prihod, rashod) {
    budzet.innerHTML = "";
    prihodTotal.innerHTML = "";
    rashodTotal.innerHTML = "";
    procenat.innerHTML = "";
    budzet.textContent = budget;
    prihodTotal.textContent = "+ " + prihod;
    rashodTotal.textContent = "- " + rashod;

    if (prihod > 0 && rashod > 0) {
        procenat.textContent = Math.round((rashod / prihod) * 100) + "%";
    }
}

export { renderPrihodi, renderRashodi, renderTotalAmounts, renderPercPerExpense };
