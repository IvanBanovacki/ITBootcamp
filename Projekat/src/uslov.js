import { form, descText, amountText, select } from "./index.js";

function isValid(select, descText, amountText) {
    if (
        descText.value.trim() !== "" &&
        amountText.value.trim() !== "" &&
        amountText.value.trim() > 0 &&
        (select.value === "prihod" || select.value === "rashod")
    ) {
        return true;
    } else return false;
}

function error() {
    const error = document.createElement("span");
    error.innerHTML = '<b style="color: red;"> ERROR </b>';
    form.append(error);

    setTimeout(() => {
        error.remove();
    }, 1500);

    select.value = "";
    descText.value = "";
    amountText.value = "";
}

export { isValid, error };
