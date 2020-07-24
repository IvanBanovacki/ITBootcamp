

// zadatak5.js

// Исписати Марио пирамиду одређене висине:

// За n = 5

//     # #
//    ## ##
//   ### ###
//  #### ####  
// ##### #####


let n = 5
let red = ''

for (i = 1; i <= n; i++){
    red = ' '.repeat(n - i) + '#'.repeat(i) + ' ' + '#'.repeat(i) + ' '.repeat(n - i)
    console.log(red)
}
