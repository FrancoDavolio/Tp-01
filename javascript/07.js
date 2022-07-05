let num1 = parseInt(prompt("Ingrese un numero"));
let num2 = parseInt(prompt("Ingrese un segundo numero"));
let num3 = parseInt(prompt("Ingrese un tercer numero"));

if (num1 > num2 && num1 > num3) {
    document.write("El numero mas grande es " + num1)
} else if (num2 > num3) {
    document.write("El numero mas grande es " + num2)
} else if (num1 === num2 && num1 == num3) {
    document.write("Los tres numeros son iguales " + num1  + num2  +   num3)
} else {
    document.write("El numero mas grande es " + num3)
};






