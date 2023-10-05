//Seleccionando los elementos del DOM
const display = document.getElementById('display');
const botones = document.querySelectorAll('button');

    //Inicializando las variables
    let currentNumber = '';
    let primerOperando = '';
    let operador = '';
    let resultado = '';

        //Actualizando el display
        function actualizaDisplay(){
            display.value = currentNumber;
        }

            //Eventos para los botones
            botones.forEach(button =>{
                button.addEventListener('click', () =>{
                    const buttonText = button.textContent;

                    if (buttonText >= '0' && buttonText <= '9') {
                        //Si presiona el número
                        currentNumber += buttonText;
                            actualizaDisplay();
                        } else if (buttonText === 'C') {
                            //Si presiona C
                            currentNumber = '';
                            primerOperando = '';
                            operador = '';
                            resultado = '';
                                actualizaDisplay();
                            } else if (buttonText === '='){
                             //Al presionar el botón igual =
                                   if (operador && primerOperando && currentNumber){
                                    switch(operador){
                                        case '+':
                                            resultado = parseFloat(primerOperando) + parseFloat(currentNumber);
                                            break;
                                        case '-':
                                            resultado = parseFloat(primerOperando) - parseFloat(currentNumber);
                                            break;
                                        case '*':
                                            resultado = parseFloat(primerOperando) * parseFloat(currentNumber);
                                            break;
                                        case '/':
                                            resultado = parseFloat(primerOperando) / parseFloat(currentNumber);
                                            break;
                                    }
                                    currentNumber = resultado.toString();
                                    primerOperando = '';
                                    operador = '';
                                    actualizaDisplay();
                                   }
                            } else {
                                // Si se presiona algún operador + , - , * , /
                                if (currentNumber && !operador) {
                                    primerOperando = currentNumber;
                                    currentNumber = '';
                                    operador = buttonText;
                                } else if ( currentNumber && operador) {
                                    //Si ya hay un operador seleccionado entonces realiza los calculos
                                    switch (operador){
                                        case '+':
                                            resultado = parseFloat(primerOperando) + parseFloat(currentNumber);
                                            break;
                                        case '-':
                                            resultado = parseFloat(primerOperando) - parseFloat(currentNumber);
                                            break;
                                        case '*':
                                            resultado = parseFloat(primerOperando) * parseFloat(currentNumber);
                                            break;
                                        case '/':
                                            resultado = parseFloat(primerOperando) / parseFloat(currentNumber);
                                            break;
                                    }
                                    currentNumber = resultado.toString();
                                    primerOperando = '';
                                    operador = buttonText;
                                }
                            }
                        actualizaDisplay();
                });
            });