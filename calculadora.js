let total = 0;
let valPantalla = '';

function refreshDisplay(totalPantalla) {

    document.getElementById("pantalla").innerHTML = totalPantalla;

}

function clearDisplay() {

    valPantalla = '0';
    total = 0;
    document.getElementById("pantalla").innerHTML = valPantalla;
    valPantalla = '';

}

function teclado(boton) {

    let tecla = boton.value;

    switch(tecla){

        case '+':
            valPantalla += tecla;
            refreshDisplay(valPantalla);
            break;
        case '-':
            valPantalla += tecla;
            refreshDisplay(valPantalla);
            break;
        case '*':
            valPantalla += boton.value;
            refreshDisplay(valPantalla);
            break;
        case '=':
            total = eval(valPantalla);
            valPantalla = total;
            refreshDisplay(valPantalla);
            valPantalla = ''
            //console.log(total);
            break;
        default:
            //total += boton.value;
            valPantalla += tecla;
            refreshDisplay(valPantalla);
            //console.log(tecla);
    }

}