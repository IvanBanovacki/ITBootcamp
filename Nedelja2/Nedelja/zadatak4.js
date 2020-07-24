// zadatak4.js

// Исписати Марио пирамиду одређене висине:

// За n = 5

//     #
//    ## 
//   ###
//  ####   
// #####

let n = 12
let red = ''

for (i = 1; i <= n; i++){
    red = ' '.repeat(n - i) + '#'.repeat(i)
    console.log(red)
}

