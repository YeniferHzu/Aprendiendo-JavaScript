//Creando la clase producto 
       export class Producto{
        constructor(nombre,precio,cantidad){
            this.nombre = nombre;
            this.precio = precio;
            this.cantidad = cantidad;
        }
            //Implementando los métodos
                //Calcular el total
                calcularTotal(){
                return this.precio * this.cantidad; 
                }
                    //Imprimiendo el detalle
                    imprimirDetalle(){
                        const total = this.calcularTotal();
                            console.log=(`El producto seleccionado es ${this.nombre} con el precio de ${this.precio} por las piezas ${this.cantidad}. Su total es ${total}.`);
                    }
       }