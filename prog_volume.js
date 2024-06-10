let reposta = document.getElementById('resposta')

function calcula_volume(){
let altura = Number (document.getElementById("altura").value)
let larg = Number (document.getElementById("larg").value)
let comp = Number (document.getElementById("comp").value)

    console.log(" alt = " + altura + " larg = " + larg + " comp = " + comp)

    let vol = altura * larg * comp

    console.log(" O volume do paralelepído é = " + vol + " m3")

    reposta.innerHTML = " O volume do paralelepído é = " + vol + " m3"

    reposta.style.fontSize = "1.25rem"
    reposta.style.fontWeight = "bold"
}