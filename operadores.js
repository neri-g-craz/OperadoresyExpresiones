/* Operador
Es un signo que especifica que debe efectuar una determinada operación
*/

/* Operadores aritméticos (+, -,*,/,%,++,--)
Operadores de asignacion (=) 
Operadores lógicos (&&, ||, !)
Operadores de comparación (==,===,!=,!==,<,>,<=,>=)
Operadores de cadena (toLowerCase, toUpperCase, trim, toString, concat, +)
*/

/*
Operadores aritméticos

(+):suma: se tuiliza para sumar dos números
(-) resta: se utliza para restar un número de otro
(+) multiplicaicón, se utiliza para multiplicar dos numeros
(/) división, se utiliza para dividir una numero entre otro
(%): residuo, se utiliza para obtener el resto de una división
(++): incremento, aumente de uno en uno la cantidad o el número
(--): decremento, disminuye de uno en uno la cantidad o el número
*/

let numero1 =20;
let nuemero2=7;

suma = numero1 + nuemero2;
resta = numero1 - nuemero2;
multiplicacion = numero1 * nuemero2;
division = numero1 / nuemero2;
residuo = numero1 % nuemero2;
incremento = numero1;
incremento ++;
decremento = nuemero2;
decremento --;

console.log(resta);
console.log(suma);
console.log(multiplicacion);
console.log(division);
console.log(residuo);
console.log(incremento);
console.log(decremento);

let precioReal = 1000;
let porcentajeDescuento = 20;
let cantidadDescuento = (precioReal * porcentajeDescuento)/100;
let precioConDescuento = precioReal - cantidadDescuento;

console.log(`Precio Real: $${precioReal}`);
console.log(`Porcentaje de descuento: ${porcentajeDescuento}%`);
console.log(`Cantidad de descuento: $${cantidadDescuento}`);
console.log(`Precio con descuento: $${precioConDescuento}`);

/*
Operadores de asignación
=: Este operador no compara, lo que hace es asignar
*/

let manzana = 1;
let frutas = manzana;

/*Operadores de comparacion

(==): Igualdad: compara si nuestros valores son iguales
*/
let numero3 = 10;
let texto = "10";
console.log(numero3 == texto);

// (===): Igualdad estricta, compara si los valores son iguales y el tipo de dato

let numero4 = 10;
let texto1 = "10";
console.log(numero4 === texto1);

/* (!==): Desigualdad o distinto, este operador verifica si dos valores no son iguales y de ser necesario realiza la conversión*/

let precioCaja = 1499;
let precioMaximo = 1500;

if (precioCaja !== precioMaximo) {
    console.log(`El precio del producto no es igual al precio máximo`);
} else {
    console.log("El precio del producto es igual al precio maximo permitido");
}
let numero5 =10;
let numero6 = "10";

if (numero5 != (numero6)) {
    console.log("Son diferentes");
} else{
    console.log("Los valores son iguales");
}

/* (!===)Desigualdad estricta, este operador verifica si dos valores no son iguales, pero a diferencia de (!=) en este caso ambos valores deben tener el mismo tipoo y valor.
*/

let numero7 = 41;
let numero8 = "41";

if (numero7 !== Number(numero8)) {
    console.log(`Los valores son diferentes`);
}else{
    console.log(`los valores son iguales`);
}

// (>): Mayor que, básicamente nos indica si un valor es mayor que otro

let puntuacionFinal = 85;
let puntuacionRequerida = 102;

console.log(puntuacionFinal > puntuacionRequerida);

// (>): Menor que, básicamente nos indica si un valor es menor que otro

let anios = 20;
let edadLimite = 30;

console.log(anios < edadLimite);

// (>=) Mayor o igual que, nos dice si un valor es mayor o igual a otro

let edad = 19;
let edadNecesaria = 18;
console.log(edad >= edadNecesaria);

// (<=) Menor o igual que, nos dice si un valor es menor o igual a otro

let temperatura = 17;
let temperaturaMaxima = 21;
console.log(temperatura <= temperaturaMaxima);

//Ejercicios
/*
let numero9 = prompt("Ingresa un número, por favor");
let numero10 = prompt("Ingresa un numero");
    if (numero9 != numero10){
        console.log(`Los numeros son diferentes`);
    }else if (numero9 > numero10 ){
           console.log(`"Tu primer número: " ${numero9} " es mayor que tu segundo número: " ${numero10}  `);
    }else if(numero9 < numero10){
           console.log(`"Tu primer número: " ${numero9} " es menor que tu segundo número: " ${numero10}  `);
    }else {
        console.log(`Los numeros son iguales`);
    }


let palabra1 = prompt("Ingrese una palabra");
let palabra2 = prompt("Ingresa otra palabra");

if(palabra1 === palabra2) {
  console.log("Las palabras son iguales");
} else {
  console.log("Las palabras son diferentes");
}
*/

/*Operadores lógicos
(&&) AND se utilizan cuando las dos condiciones deben cumplirse
*/
let mayoriaEdad = 18;
let tieneID = true;

if (mayoriaEdad >= 18 && tieneID){
    console.log("Puedes rentar el salón");
} else {
    console.log("No puedes rentar el salón");
}

// (||) OR se utiliza cuando se debe cumplir una condición u otra

let esUsuarioPrime = false;
let descuento = true;

if (esUsuarioPrime || descuento) {
    console.log("Califica para descuento");
} else {
    console.log("No califica para descuento");
}

// (!)NOT se utiliza pra ngar el valor de una condicion

let  esDiaLibre = false;
if (!esDiaLibre){
    console.log("Descancito");
} else {
    console.log("Se trabaja");
}

//Operadores de cadena

//toLowerCase hace el cambio de texto a minusculas

let mensajeUsuario = "Bienvenidx a la Tierra";
let cambioMinusculas = mensajeUsuario.toLowerCase();
console.log(cambioMinusculas);

//toUpperCase hace el cambio de texto a mayusculas

let saludo = "Casi viernes, casi Navidad";
let cambioMayusculas = saludo.toUpperCase();
console.log(cambioMayusculas);

//trim: quita los espacios antes y despues de la primera y ultima palabra respectivamente

let aviso = "    CH35    ES chida "
let sinEspacios = aviso.trim();
console.log(sinEspacios);

//toString: convierte un tipo de dato number en string

let numero11 = 31;
let cadenas = numero11.toString();
console.log(cadenas);

//concat

let nombre = "Rene";
let apellido = "Gomez";
let nombreCompleto = nombre.concat (" ",apellido);
console.log(nombreCompleto);

/* Expresiones 

expresión aritmética

let operación = 14 + 25 * 12; combina la suma con la multiplicaion

expresión de cadena
let notificación = "Casi, " + "Anio nuevo"; expresión concatenando

expresión lógica
let esMayorDeEdad = (23 > 18) && (65 > 23);

expresión de asignación
let frasco = chocolates; asigna el valor a la variable


*/


/*

let harina = parseInt ("150");
let huevo = toString(1);
let mantequilla = parseInt("5");
let leche = parseInt("500");

let nutella = 50;
let nutellatoString = nutella.toString();
console.log(typeof(nutellatoString));
console.log(nutella);*/
//console.log(typeof (toString(nutella)));

/*console.log(typeof(harina));
console.log(typeof(huevo));

let pasoUno = "Paso 1: Vierte todos los ingredientes en la licuadora y mezcla hasta lograr una consistencia homogenea. ";
let pasoDos = "<br> Paso 2: Despues, caliente un sarten con un poco de mantequilla. ";
let pasoTres = "<br> Paso 3: Posteriormente, sirve la mezcla de masa para jokeis al centro del sarten dejandola caer suavemente. ";
let pasoCuatro = "<br> Paso 4: Manten a flama baja y voltea una vez que aparezcan burbujas de aire. ";
let pasoCinco = "<br> Paso 5: Ahora, repite agregando mantequilla al sarten cada vez que sea necesario.";
let pasoSeis = "<br> Paso 6: Finalmente, sirve y disfruta.";

let texto = pasoUno + pasoDos + pasoTres + pasoCuatro + pasoCinco + pasoSeis
document.write(texto);
*/

const harina = 1;
const leche = 1;
const huevo = 2;
const aceite = 2;

const harinaDisponible = 2;
const lecheDisponible = 1.5;
const huevosDisponibles = 3;
const aceiteDisponible = 3;

let hayAceite = false
let hayMantequilla = false

const ingredientesSuficientes = harinaDisponible >= harina && lecheDisponible >= leche && huevosDisponibles >= huevo && hayAceite || hayMantequilla;

// Mostrar el resultado
if (ingredientesSuficientes) {
    console.log("¡Tienes suficientes ingredientes para hacer hotcakes!");
} else {
    console.log("No tienes suficientes ingredientes para hacer hotcakes. Compra lo que te falta.");
}
