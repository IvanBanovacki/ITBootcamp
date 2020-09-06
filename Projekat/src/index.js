import { renderAll } from "./DOM.js";
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

function getPrihodiNiz() {
    return prihodiNiz;
}

function getRashodiNiz() {
    return rashodiNiz;
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
    }

    if (select.value === "rashod") {
        rashodiNiz.push({
            id: idCount++,
            opis: descText.value,
            iznos: amountText.value,
        });
    }
    renderAll();

    descText.value = "";
    amountText.value = "";
    select.value = "-";
});

export { select, descText, amountText, prihodList, rashodList, form, getPrihodiNiz, getRashodiNiz };
