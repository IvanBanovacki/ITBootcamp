
const order = document.getElementsByClassName('order')
const orderNow = document.getElementsByClassName('order-now')
const counter = document.querySelector('#counter')
const message = document.querySelector('#message')

let count = 0
let date = new Date()
let currentDate = date.getDate()
let time = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds()

order[0].addEventListener('click', (e) => {
    count++
    counter.textContent = count
})

order[1].addEventListener('click', (e) => {
    count++
    counter.textContent = count
})

orderNow[0].addEventListener('click', (e) => {
    if(count > 0){
        message.textContent = `Pizza order amount: ${count}   Date: ${currentDate}   Time: ${time}`
        count = 0
        counter.textContent = ''
    }
    else{
        message.textContent = "You need to order!"
    }
})

orderNow[1].addEventListener('click', (e) => {
    if(count > 0){
        message.textContent = `Pizza order amount: ${count}   Date: ${currentDate}   Time: ${time}`
        count = 0
        counter.textContent = ''
    }
    else{
        message.textContent = "You need to order!"
    }
})
