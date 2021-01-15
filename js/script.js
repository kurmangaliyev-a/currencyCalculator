'use strict'

const inputTg = document.querySelector('#rub');
const inputUsd = document.querySelector('#usd');

inputTg.addEventListener('input', ()=>{
    const request = new XMLHttpRequest();
    request.open('GET', 'js/current.json');
    request.setRequestHeader('Content-type','application/json;charset=utf-8');
    request.send();
//readystatechange РЕДКО используется, так как редко нужны разные стадии
 /*   request.addEventListener('readystatechange',()=>{
        if(request.readyState === 4 && request.status === 200){
            console.log(request.response);
            const data = JSON.parse(request.response);
            inputUsd.value = (+inputTg.value/data.current.usd).toFixed(3);
        } else {
            inputUsd.value= "Что-то пошло не так";
        }
    })*/

    request.addEventListener('load', () => {
        if (request.status === 200) {
            console.log(request.response);
            const data = JSON.parse(request.response);
            inputUsd.value = (+inputTg.value / data.current.usd).toFixed(3);
        } else {
            inputUsd.value = "Что-то пошло не так";
        }
    })
})
