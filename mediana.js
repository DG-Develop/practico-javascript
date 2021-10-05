function calcularMediaAritmetica(lista){
    let sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    )

    const promedioLista = sumaLista / lista.length
    return promedioLista
}

const lista1 = [
    100,
    200,
    500,
    400000000,
]

const mitadLista1 = parseInt(lista1.length / 2)

function esPar(num){
    return num % 2 === 0
}

let mediana;

if(esPar(lista1.length)){
    const elemento1 = lista1[mitadLista1 - 1]
    const elemento2 = lista1[mitadLista1]

    const promedio1y2 = calcularMediaAritmetica([elemento1, elemento2])

    mediana = promedio1y2
}else{
    mediana = lista1[mitadLista1]
}