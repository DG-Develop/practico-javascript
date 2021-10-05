// Helpers
function esPar(num){
    return num % 2 === 0
}

function calcularMediaAritmetica(lista){
    let sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    )

    const promedioLista = sumaLista / lista.length
    return promedioLista
}

// Calculadora mediana
function medianaSalarios(lista){
    const mitad = parseInt(lista.length / 2)

    if(esPar(lista.length)){
        const personaMitad1 = lista[mitad - 1]
        const personaMitad2 = lista[mitad]

        const mediana = calcularMediaAritmetica([personaMitad1, personaMitad2])
        return mediana
    }else{
        const personaMitad = lista[mitad]
        return personaMitad
    }
}

// Mediana General
const salariosCol = colombia.map((persona) => persona.salary)

const salariosColSorted = salariosCol.sort((salaryA, salaryB) => salaryA - salaryB)

const medianaGeneralCol = medianaSalarios(salariosColSorted)

// Mediana del top 10 %

const spliceStart = (salariosColSorted.length * (100 - 10)) / 100
const spliceCount = salariosColSorted.length - spliceStart

const salarioColTop10 = salariosColSorted.splice(spliceStart, spliceCount)

const medianaTop10Col = medianaSalarios(salarioColTop10)

console.table({
    medianaGeneralCol,
    medianaTop10Col
})