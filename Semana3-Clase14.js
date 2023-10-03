//importando la clase Producto
    import {Producto} from './Semana3-Clase14-Producto.js';

    const nombre = 'Marcador';
    const precio = 17;
    const cantidad = 9;

    const producto = new Producto(nombre, precio, cantidad);
    producto.imprimirDetalle();