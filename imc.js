function imc(){
    let peso= document.getElementById("peso").value;
    let altura= document.getElementById("estatura").value;
    let indiceimc = peso /altura**2;
     document.getElementById("valor").value = indiceimc
}

boton.addEventListener('click', imc)

function reinicio(){
    document.getElementById("peso").value=''
    document.getElementById("estatura").value=''
    document.getElementById("valor").value = ''
}

reset.addEventListener('click', reinicio)

function color(){
    let peso= document.getElementById("peso").value;
    let altura= document.getElementById("estatura").value;
    let indiceimc = peso /altura**2;
    if(indiceimc<18.5){
        document.getElementById("valor").style.background = "deepskyblue";

    }else if(indiceimc < 25){
        document.getElementById("valor").style.background = "green";

    }else if(indiceimc<30){
        document.getElementById("valor").style.background = "orange";

    }else if(indiceimc<35){
        document.getElementById("valor").style.background = "red";

    }else if(indiceimc<40){
        document.getElementById("valor").style.background = "violet";

    }else{
        document.getElementById("valor").style.background = "violet";
    }

}

boton.addEventListener('click', color)
