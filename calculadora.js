//Seleccionando los elementos del DOM
const display = document.getElementById('display');
const botones = document.querySelectorAll('button');

    //Inicializando las variables
    let currentNumber = '';
    let primerOperando = '';
    let operador = '';
    let result = '';

        //Actualizar el display
        function actualizaDisplay(){
            display.value = currentNumber;
        }

            //