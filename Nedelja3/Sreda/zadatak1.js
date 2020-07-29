// Написати функцију која враћа максимум од 3 броја (Параметри функције су 3 броја)

function max(x,y,z){
    if (x > y && x > z) {
        return x
    }
    else if (y > z) {
        return y
    }
    else {
        return z
    }
}
