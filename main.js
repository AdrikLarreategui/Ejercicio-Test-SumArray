/**
 * Devuelve la suma de todos los número de un array recibido por argumentos, excluye de la suma el valor más bajo y el más alto
 * Si recibimos null, undefined, array vacío o un array con un número o dos número, deberá devolverse 0
 *
 * OBLIGATORIO: USA TESTS!
 *
 * Hazlo de dos maneras distintas:
 * 1- Como quieras
 * 2- Sin el método de Array "sort" ni con "reduce"
 *
 * Datos para pruebas: input | ouput
 * sumArray(null) | 0
 * sumArray([ ]) | 0
 * sumArray([ 3 ]) | 0
 * sumArray([ 3, 5 ]) | 0
 * sumArray([ 6, 2, 1, 8, 10 ]) | 16
 * sumArray([ 0, 1, 6, 10, 10 ]) | 17
 * sumArray([ -6, -20, -1, -10, -12 ]) | -28
 * sumArray([ -6, 20, -1, 10, -12 ]) | 3
 */


// Si recibimos null, deberá devolverse 0: sumArray(null) | 0
// Si recibimos un array vacío, deberá devolverse 0: sumArray([ ]) | 0
//Si recibimos un array compuesto por un valor, deberá devolverse 0: sumArray([ 3 ]) | 0
//Si recibimos un array compuesto por dos valores, deberá devolverse 0: sumArray([ 3, 5 ]) | 0
function sumArray(array) {
    let sum = 0, otherArray = []
    if (array === null || array === undefined || array.length <=2 ) {
    return sum

//Si recibimos un array compuesto por varios valores, que devuelva la suma de todos menos el más alto y el más bajo: 
//sumArray([ 6, 2, 1, 8, 10 ]) | 16
//sumArray([ 0, 1, 6, 10, 10 ]) | 17
//sumArray([ -6, -20, -1, -10, -12 ]) | -28
//sumArray([ -6, 20, -1, 10, -12 ]) | 3
    } else {
        const max = Math.max(...array)
        const min = Math.min(...array)
        array.forEach((n) => {
            if(n < max && n> min) {
                if(otherArray.length === 0) {
                    otherArray = [n]
                } else {
                    otherArray.push(n)
                }
            }
        })
        for(let i = 0; i< otherArray.length; i++) {
            sum += otherArray[i]
        }
        return sum
    }
}


//SEGUNDA VUELTA SIN UTILIZAR "SORT" NI "REDUCE":

//Si recibimos null, deberá devolverse 0: sumArray(null) | 0
//Si recibimos un array vacío, deberá devolverse 0: sumArray([ ]) | 0
//Si recibimos un array compuesto por un valor, deberá devolverse 0: sumArray([ 3 ]) | 0
//Si recibimos un array compuesto por dos valores, deberá devolverse 0: sumArray([ 3, 5 ]) | 0
function sumArray2(array) {
    let sum2 = 0, anotherArray = []
    if(array === null || array === undefined || array.length<=2) {
    return sum2
//Si recibimos un array compuesto por varrios valores, que devuelva la suma de todos menos el más alto y el más bajo: 
//sumArray([ 6, 2, 1, 8, 10 ]) | 16
//sumArray([ 0, 1, 6, 10, 10 ]) | 17
//sumArray([ -6, -20, -1, -10, -12 ]) | -28
//sumArray([ -6, 20, -1, 10, -12 ]) | 3
    } else {
        const max2 = Math.max(...array)
        const min2 = Math.min(...array)
        for (let i = 0; i < array.length; i++) {
                if(array[i] < max2 && array[i] > min2) {
                    if(anotherArray.length === 0) {
                        anotherArray = [array[i]]
                    } else {
                    anotherArray.push(array[i])
                    }
                }
            }
            for(let i = 0; i < anotherArray.length; i++) {
                sum2 += anotherArray[i]
            }
        return sum2
    }
}
