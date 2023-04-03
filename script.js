clima(false)

function clima (estaLloviendo){
    if(estaLloviendo){
        console.log("Si està lloviendo")
    }
    else{
        console.log("No està lloviendo")
    }

}

function calcular (num1,num2,num3) {
    let sumar = num1 + num2;
    let resultado = sumar + num3;
    return resultado
}
console.log(calcular(2,3,4))

function areaT(a, b) {
    let multiplicar = a*b;
    let resultado = multiplicar/2;
    return resultado
}
console.log(areaT(2,2))

let base = parseInt(prompt("Ingrese la base"));
let altura = parseInt(prompt("Ingrese altura"));
let area;
area = (base*altura)/2;
document.write("El resultado del area del triangulo es:"+ area);

function promedioNotas(){
    let n1 = parseFloat(prompt("Ingrese la nota numero1"))
    let n2 = parseFloat(prompt("Ingrese la nota numero2"))
    let n3 = parseFloat (prompt("Ingrese la nota3"))

    promedio = (n1+n2+n3)/3
    if(promedio >= 3){
        document.write("El estudiante aprueba con un promedio de: "+ promedio)
    }
    else{
        document.write("El estudiante reprueba con un promedio de: "+ promedio)
    }
    return promedio
}
console.log(promedioNotas())

/*crea una funcion llamada calculadora
  que reciba 3 parametros, un string llamado operacion y 2 numeros llamados (num1 y num2)
  el string nos debe indicar que tipo de operacion se lleva acaba entre num1 y num2
  hacer suma, resta, divicion, multiplicacion, exponente*/

  function calculadora( operacion, num1, num2) {
    switch (operacion) {
        case "suma":
            return num1 + num2
        case "resta":
            return num1 - num2   
        case "multiplicacion":
            return num1 * num2
        case "division":
            return num1 / num2
        case "exponente":
            return num1 ** num2
        default:
            return "Operacion inexistente"
    }
  }
  console.log(calculadora("division", 2, 8))


