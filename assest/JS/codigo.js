
var operandoA;
var operandoB;
var operacion;

//referencias HTML


//pantalla
let pantalla  = document.querySelector('#pantalla');


//numeros
let btn1 = document.querySelector('#num1');
let btn2 = document.querySelector('#num2');
let btn3 = document.querySelector('#num3');
let btn4 = document.querySelector('#num4');
let btn5 = document.querySelector('#num5');
let btn6 = document.querySelector('#num6');
let btn7 = document.querySelector('#num7');
let btn8 = document.querySelector('#num8');
let btn9 = document.querySelector('#num9');
let btn0 = document.querySelector('#num0');
let btnDecimal = document.querySelector('#coma');


//operadores
let btnBorrar = document.querySelector('#btnBorrar');
let btnMasMenos = document.querySelector('#btnMasMenos');
let btnPorcentaje = document.querySelector('#btnPorcentaje');
let btnDividir = document.querySelector('#btnDividir');
let btnMultiplicar = document.querySelector('#btnMultiplicar');
let btnRestar = document.querySelector('#btnRestar');
const btnSumar = document.querySelector('#btnSumar');
let btnResultado = document.querySelector('#btnResultado');


//Eventos
btn0.addEventListener('click', () => {
    pantalla.innerText = pantalla.innerText + '0';
});

btn1.addEventListener('click', () => {
    pantalla.innerText = pantalla.innerText + '1';
});

btn2.addEventListener('click', () => {
    pantalla.innerText = pantalla.innerText + '2';
});

btn3.addEventListener('click', () => {
    pantalla.innerText = pantalla.innerText + '3';
});

btn4.addEventListener('click', () => {
    pantalla.innerText = pantalla.innerText + '4';
});

btn5.addEventListener('click', () => {
    pantalla.innerText = pantalla.innerText + '5';
});

btn6.addEventListener('click', () => {
    pantalla.innerText = pantalla.innerText + '6';
});

btn7.addEventListener('click', () => {
    pantalla.innerText = pantalla.innerText + '7';
});

btn8.addEventListener('click', () => {
    pantalla.innerText = pantalla.innerText + '8';
});

btn9.addEventListener('click', () => {
    pantalla.innerText = pantalla.innerText + '9';
});

btnDecimal.addEventListener('click', () => {
    pantalla.innerText = pantalla.innerText + '.';
});

btnMasMenos.addEventListener('click', () => {
    pantalla.innerText = '-' + pantalla.innerText;
});

//operadores
btnBorrar.addEventListener('click', () => {
    borrar();
});

btnSumar.addEventListener('click', () => {
    operandoA = pantalla.innerText;
    operacion = '+';
    limpiar();
});

btnRestar.addEventListener('click', () => {
    operandoA = pantalla.innerText;
    operacion = '-';
    limpiar();
});

btnDividir.addEventListener('click', () => {
    operandoA = pantalla.innerText;
    operacion = '/';
    limpiar();
});

btnMultiplicar.addEventListener('click', () => {
    operandoA = pantalla.innerText;
    operacion = '*';
    limpiar();
});

btnPorcentaje.addEventListener('click', () => {
    operandoA = pantalla.innerText;
    operacion = '%';
    resolver();
});

btnResultado.addEventListener('click', () => {
    operandoB = pantalla.innerText;
    resolver();
});

//funciones
function borrar(){
    pantalla.innerText = " ";
    operandoA = 0;
    operandoB = 0;
    operacion = " ";
}

function limpiar(){
    pantalla.innerText = " ";
}

function resolver(){
    let resultado = 0;
    switch (operacion){
        case "+":
            resultado = parseFloat(operandoA) + parseFloat(operandoB);
            break;
        
        case "-":
            resultado = parseFloat(operandoA) - parseFloat(operandoB);
            break;
        
        case "/":
            resultado = parseFloat(operandoA) / parseFloat(operandoB);
            break;
        
        case "*":
            resultado = parseFloat(operandoA) * parseFloat(operandoB);
            break;

        case "%":
            resultado = parseFloat(operandoA) / 100;
            break;
    }
    
    borrar();
    pantalla.innerText = resultado;
}





















/*
const botones = {
    numeros: [0,1,2,3,4,5,6,7,8,9],
    operadores: ['ac','+/-','%','/','*','-','+','=',','],
};


//referencias HTML

//pantalla
const pantalla  = document.querySelector('#pantalla');

//numeros
const btn1 = document.querySelector('#num1');
const btn2 = document.querySelector('#num2');
const btn3 = document.querySelector('#num3');
const btn4 = document.querySelector('#num4');
const btn5 = document.querySelector('#num5');
const btn6 = document.querySelector('#num6');
const btn7 = document.querySelector('#num7');
const btn8 = document.querySelector('#num8');
const btn9 = document.querySelector('#num9');
const btn0 = document.querySelector('#num0');

//operadores
const btnBorrar = document.querySelector('#btnBorrar');
const btnMasMenos = document.querySelector('#btnMasMenos');
const btnTantoPorCiento = document.querySelector('#btnTantoPorCiento');
const btnDivision = document.querySelector('#btnDivision');
const btnMultiplicar = document.querySelector('#btnMultiplicar');
const btnRestar = document.querySelector('#btnRestar');
const btnSumar = document.querySelector('#btnSumar');
const btnResultado = document.querySelector('#btnResultado');


//numeros
btn1.addEventListener('click', () => {
     console.log (botones.numeros[1]);
     pantalla.innerText = botones.numeros[1];
     return botones.numeros[1];
 });

btn2.addEventListener('click', () => {
     console.log ('2');
     pantalla.innerText = 2;
     return 2;
 });

btn3.addEventListener('click', () => {
     console.log ('3');
     pantalla.innerText = 3;
     return 3;
 });

btn4.addEventListener('click', () => {
     console.log ('4');
     pantalla.innerText = 4;
     return 4;
 });

btn5.addEventListener('click', () => {
     console.log ('5');
     pantalla.innerText = 5;
     return 5;
 });

btn6.addEventListener('click', () => {
     console.log ('6');
     pantalla.innerText = 6;
     return 6;
 });

btn7.addEventListener('click', () => {
     console.log ('7');
     pantalla.innerText = 7;
     return 7;
 });

btn8.addEventListener('click', () => {
     console.log ('8');
     pantalla.innerText = 8;
     return 8;
 });

btn9.addEventListener('click', () => {
     console.log ('9');
     pantalla.innerText = 9;
     return 9;
 });

btn0.addEventListener('click', () => {
     console.log (botones.numeros[0]);
     pantalla.innerText = botones.numeros[0];
     return botones.numeros[0];
 });


 //operaciones
btnBorrar.addEventListener('click', () => {
    console.log ('borrar');
    pantalla.innerText = 0;
    console.clear();
});
 
btnMasMenos.addEventListener('click', () => {
    console.log ('+/-');
});

btnPorCiento.addEventListener('click', () => {
    console.log ('%');
    //return %;
});

btnDivision.addEventListener('click', () => {
    console.log ('/');
    //return /;
});
 
btnMultiplicar.addEventListener('click', () => {
    console.log ('*');
    //return *;
});
 
btnRestar.addEventListener('click', () => {
    console.log ('-');
    //return -;
});
 
btnSumar.addEventListener('click', () => {
    console.log ('+');
    btnSuma();
    //return +;
});
 
btnResultado.addEventListener('click', () => {
    console.log ('=');
    //return resultado;
});


//funciones operaciones
function suma(){

};

function resta(){

};

function division(){

};

function multiplicacion(){

};
*/