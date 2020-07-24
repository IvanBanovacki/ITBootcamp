// zadatak3.js

// Исписати Марио пирамиду одређене висине:

// За n = 5

// #
// ##
// ###
// ####
// #####

let n = 5

for (i = 1; i <= n; i++){
    let red = ''
    for(j = 0; j < i; j++){
        red += "#"
    }
    console.log(red)
}
