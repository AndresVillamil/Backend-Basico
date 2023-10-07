let numero =3

let tipoNumero = (numero%2==0) ? "Par" : "Impar"    
console.log(tipoNumero)

let a=1,
    b=2,
    c=3

if (a ==b && b ==c ) { console.log("es igual")} else { console.log("no es igual")}

var myNum = 123;
console.log(myNum)
console.log(typeof myNum)
var myString = myNum.toString(); //convertirá el equivalente en una string
console.log(myString)
typeof myString;
console.log(typeof myString)

console.log("Front " + 242);
var myDate = "19" + "67";
console.log(typeof myDate);

let browserType = "mozilla";
console.log(browserType.length);
console.log(browserType[0]);
console.log(browserType[browserType.length - 1]);
/*
Esto nos dá un resultado de 2, porque la subcadena "zilla" comienza en la posición 2 
(0, 1, 2 — por tanto 3 caracteres en total) dentro de "mozilla". 
Tal código podría usarse para filtrar cadena. Por ejemplo, podemos 
tener una lista de direcciones web y solo queremos imprimir las que contienen "mozilla".
*/
console.log(browserType.indexOf("zilla"))

let radData = "Mi NoMbRe Es MuD";
console.log(radData.toLowerCase());
console.log(radData.toUpperCase());


/*
Realice un código que resuelva el siguiente planeamiento:
a. Una tienda comenzó una oferta para ventas al
i.20% Para compras mayores a 10 docenas.
ii.15% Para compras mayores o iguales a 5 docenas.
iii.10% Para compras mayores a 1 docena.
Se desea determinar cuál es descuento dado una cantidad de decenas que se van a comprar. 
Imprima tambien cual es el valor de la compra si cada docena cuesta 60.000
*/

