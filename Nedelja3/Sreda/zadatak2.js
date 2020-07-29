// Написати функцију која израчунава цену пице по квадратном центиметру (параметри функције су полупречник у цм, и цена пице)

function cenaPicePoCm2(r, cenaPice){
    let P = r ** 2 * Math.PI
    return cenaPice / P
}

console.log(cenaPicePoCm2(10, 3146));