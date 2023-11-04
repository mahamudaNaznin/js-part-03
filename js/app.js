let decrement = document.querySelector('#decrement');
let increment = document.querySelector('#increment');
let cart = document.querySelector('#cart');
let passId = document.querySelector('#pass-id');
let password = document.querySelector('#password');
let range = document.querySelector('.form-range');
let result = document.querySelector('.result');



// INCEREMENT DECRIMENT START
decrement.addEventListener('click', function(){
    let cartValue = Number(cart.value);
    if(cartValue > 1 ){
        cart.value = --cartValue;
    }
})

increment.addEventListener('click', function(){
    let cartValue = Number(cart.value);
    cart.value = ++cartValue;
})
// INCEREMENT DECRIMENT END


// PASS SHOW OR HIDE START
passId.addEventListener('click', function(){
    password.type === "password" ?  password.type = "text" :  password.type = "password";
})



// RANGE START 

range.addEventListener('input', function(){
    result.innerHTML =  range.value;
})



