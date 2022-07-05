let num1 = parseInt(prompt("Ingrese un numero"));
let num2 = parseInt(prompt("Ingrese un segundo numero"));

if (num1 > num2) {
    document.write("El numero mas grande es " + num1)
} else if (num1 === num2) {
    document.write("Los dos numeros son iguales")
} else {
    document.write("El numero mas grande es " + num2)
};