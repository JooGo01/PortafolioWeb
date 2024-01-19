const btn_switch=document.querySelector("#switch");


btn_switch.addEventListener('click',()=>{
    document.body.classList.toggle('oscuro');
    btn_switch.classList.toggle('activo');
})