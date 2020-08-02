// Написати функцију која исписује све елементе низа који су дељиви са 5

// divisibleByFive([1,2,3,4,5,10,15,23,1,5]) // Исписује -> 5,10,15,5

function divisibleByFive(arr){
    console.log(arr.filter(el => el % 5 === 0));
}

divisibleByFive([5,10,11,15,25,-5,-10,20,500,501,502,0])