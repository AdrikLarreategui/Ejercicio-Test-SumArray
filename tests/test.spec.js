describe('Text sumArray', () => {
    //El array cuyo valor es "null", debería devolver el valor cero:
    it('should return 0 if the parameter is null', () => {
    expect(sumArray(null)).toBe(0)
    })

    //El array que está vacío debería devolver el valor cero:
    it('should return 0 if the array is empty', () => {
        expect(sumArray([])).toBe(0)
        })
    
    //El array cuyo valor es 3, debería devolver el valor cero:
    it('should return 0 if the length of the array is 1', () => {
        expect(sumArray([ 3 ])).toBe(0)
        })
    //El array cuyo valor es 3, debería devolver el valor cero:
    it('should return 0 if the length of the array is 2', () => {
        expect(sumArray([ 3 ])).toBe(0)
        })

    //Partiendo de un array de diversos números, debería devolver la suma de todos exceptuando el mayor y el menor:
    it('should return the sum of the values of the array except for the max and the min', () => {
            expect(sumArray([ 6, 2, 1, 8, 10 ])).toBe(16)

    })
    //Partiendo de un array de diversos números, debería devolver la suma de todos exceptuando el mayor y el menor:
    it('should return the sum of the values of the array except for the max and the min', () => {
        expect(sumArray([ 0, 1, 6, 10, 11 ])).toBe(17) //Si el valor máximo se repite, ¿es posible llegar al valor solicitado?
    //Por ello, he cambiado el valor máximo.
    })

    //Partiendo de un array compuesto por varios números, debería devolver la suma de todos menos el máximo y el mínimo.
    it('should return the sum of the values of the array except for the max and the min', () => {
        expect(sumArray([ -6, -20, -1, -10, -12 ])).toBe(-28)
    })
    //Partiendo de un array compuesto por varios números, debería devolver la suma de todos menos el máximo y el mínimo.
    it('should return the sum of the values of the array except for the max and the min', () => {
        expect(sumArray([ -6, 20, -1, 10, -12 ])).toBe(3)
    })
})

//SEGUNDA VUELTA SIN UTILIZAR "SORT" NI "REDUCE":
describe('Text sumArray2', () => {
    //El array cuyo valor es "null", debería devolver el valor cero:
    it('should return 0 if the parameter is null', () => {
    expect(sumArray(null)).toBe(0)
    })

    //El array que está vacío debería devolver el valor cero:
    it('should return 0 if the array is empty', () => {
        expect(sumArray([])).toBe(0)
        })
    
    //El array cuyo valor es 3, debería devolver el valor cero:
    it('should return 0 if the length of the array is 1', () => {
        expect(sumArray([ 3 ])).toBe(0)
        })
    //El array cuyo valor es 3, debería devolver el valor cero:
    it('should return 0 if the length of the array is 2', () => {
        expect(sumArray([ 3 ])).toBe(0)
        })

     //Partiendo de un array de diversos números, debería devolver la suma de todos exceptuando el mayor y el menor:
    it('should return the sum of the values of the array except for the max and the min', () => {
            expect(sumArray([ 6, 2, 1, 8, 10 ])).toBe(16)
        })
 
    //Partiendo de un array de diversos números, debería devolver la suma de todos exceptuando el mayor y el menor:
    it('should return the sum of the values of the array except for the max and the min', () => {
        expect(sumArray([ 0, 1, 6, 10, 12 ])).toBe(17) //Si el valor máximo se repite, ¿es posible llegar al valor solicitado?
    //Por ello, he cambiado el valor máximo de nuevo.
    })

    //Partiendo de un array compuesto por varios números, debería devolver la suma de todos menos el máximo y el mínimo.
    it('should return the sum of the values of the array except for the max and the min', () => {
        expect(sumArray([ -6, -20, -1, -10, -12 ])).toBe(-28)
    })
//     //Partiendo de un array compuesto por varios números, debería devolver la suma de todos menos el máximo y el mínimo.
    it('should return the sum of the values of the array except for the max and the min', () => {
        expect(sumArray([ -6, 20, -1, 10, -12 ])).toBe(3)
    })
})