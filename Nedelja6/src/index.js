import { renderTotalAmounts, renderPercPerExpense } from "./DOM.js";
import { isValid, error } from "./uslov.js";

const form = document.querySelector("form");
const btnSubmit = document.querySelector("#btn-submit");
const select = document.querySelector("#select-option");
const descText = document.querySelector("#desc-text");
const amountText = document.querySelector("#amount-text");
const prihodList = document.querySelector("#list-prihod");
const rashodList = document.querySelector("#list-rashod");

let prihodiNiz = [];
let rashodiNiz = [];
let idCount = 0;
let ukupanPrihod = 0;
let ukupanRashod = 0;
let budzet = 0;

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
            renderRashodi(rashodiNiz);
        });
    });
}

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
    });
}

btnSubmit.addEventListener("click", (e) => {
    e.preventDefault();

    if (isValid(select, descText, amountText) === false) {
        error();
        return;
    }
    if (select.value === "prihod") {
        prihodiNiz.push({
            id: idCount++,
            opis: descText.value,
            iznos: amountText.value,
        });
        ukupanPrihod += Number(amountText.value);
        budzet += Number(amountText.value);
    }

    if (select.value === "rashod") {
        rashodiNiz.push({
            id: idCount++,
            opis: descText.value,
            iznos: amountText.value,
        });
        ukupanRashod += Number(amountText.value);
        budzet -= Number(amountText.value);
    }
    renderRashodi(rashodiNiz);
    renderPrihodi(prihodiNiz);
    renderPercPerExpense(rashodiNiz);
    renderTotalAmounts(budzet, ukupanPrihod, ukupanRashod);

    descText.value = "";
    amountText.value = "";
    select.value = "-";
});

export {
    select,
    descText,
    amountText,
    prihodiNiz,
    rashodiNiz,
    ukupanPrihod,
    ukupanRashod,
    budzet,
    prihodList,
    rashodList,
    form,
};
