let btn_l = document.getElementById("btn_ligar")
let btn_d = document.getElementById("btn_desligar")
let btn_ld = document.getElementById("btn_ligades")
let lamp = document.getElementById("lampada")
let btn_ocu = document.getElementById("btn_ocu")

btn_l.addEventListener("click",ligarlamp)
btn_d.addEventListener("click", desligalamp)
btn_ld.addEventListener("click", ligadesligalamp)
btn_ocu.addEventListener("click", ocultarlamp)


btn_ld.style.backgroundColor = "red"
btn_ld.textContent = "Desligado"
btn_ld.style.color = "white"

btn_d.style.backgroundColor = "red"
btn_d.style.color = "white"
btn_d.style.borderRadius = "15px"
btn_d.style.border = "none"

btn_l.style.backgroundColor = "green"
btn_l.style.borderRadius = "15px"
btn_l.style.border = "none"

function ligarlamp(){
    console.log("Clicou no botão ligar")
    lamp.src = "img/lampada_acesa.png"
}

function desligalamp(){
    console.log("Clicou no botão desligar")
    lamp.src = "img/lampada_apagada.png"
}

function ligadesligalamp(){
    console.log(lamp.getAttribute("src"))
   if(lamp.getAttribute("src") == "img/lampada_apagada.png"){
    lamp.src = "img/lampada_acesa.png"
    btn_ld.style.backgroundColor = "green"
    btn_ld.style.color = "black"
    btn_ld.textContent = "Ligado"
   }else{
    lamp.src = "img/lampada_apagada.png"
    btn_ld.style.backgroundColor = "red"
    btn_ld.style.color = "white"
    btn_ld.textContent = "Desligado"
   }
}

function ocultarlamp(){
    console.log("Clicou em ocultar")
    if(lamp.style.visibility == "hidden"){
        lamp.style.visibility = "visible"
    }else{
        lamp.style.visibility = "hidden"
    }
}