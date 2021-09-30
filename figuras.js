// Código del cuadrado
console.group("Cuadrados")

const ladoCuadrado = 5
console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm")

const perimetroCuadrado = ladoCuadrado * 4
console.log("El perímetro del cuadrado es: : " + perimetroCuadrado + "cm")

const areaCuadrado = ladoCuadrado * ladoCuadrado
console.log("El área del cuadrado es: : " + areaCuadrado + "cm^2")

console.groupEnd()

// Código del triángulo
console.group("Triangulos")

const ladoTriangulo1 = 6
const ladoTriangulo2 = 6
const baseTriangulo = 4
const alturaTriangulo = 5.5

console.log(
    "Los lados del triángulo miden: "
    + ladoTriangulo1
    + "cm, "
    + ladoTriangulo2
    + "cm, "
    + baseTriangulo
    + "cm"
)

console.log("La altura del triangulo es de: " + alturaTriangulo + "cm")

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo
console.log("El perímetro del triangulo es: : " + perimetroTriangulo + "cm")

const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2
console.log("El área del triangulo es: : " + areaTriangulo + "cm^2")

console.groupEnd()

// Código del circulo
console.group("Circulos")

//Radio
const radioCirculo = 4
console.log("El radio del circulo es:  " + radioCirculo + "cm")

//Diametro
const diametroCirculo = radioCirculo * 2
console.log("El diametro del circulo es:  " + diametroCirculo + "cm")

// PI
const PI = Math.PI
console.log("PI  es: " + PI)

//Circunferencia
const perimetroCirculo = diametroCirculo * PI
console.log("El perimetro del circulo es:  " + perimetroCirculo + "cm")

//Area
const areaCirculo = Math.pow(radioCirculo, 2) * PI 
console.log("El area del circulo es:  " + areaCirculo + "cm2")

console.groupEnd()
