//se importa la función desde app.js:
const {sum} = require('./app.js');
//comienza la prueba:
test('adds 14 + 9 to equal 23', () => {
    //se llama a la función:
    let total = sum(14,9);
    //lo que se espera en el test:
    expect(total).toBe(23);
});

test("One EUR should be 1.07 USD", function() {
    // Importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js');

    // Uso la función como debe ser usada
    const dollars = fromEuroToDollar(3.5);

    // Si 1 euro son 1.07 dólares, entonces 3.5 euros debe ser (3.5 * 1.07)
    const expected = 3.5 * 1.07;

    // Hago mi comparación (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
})

test ("One USD should be 146.26 JPY", function() {
    const {fromDollarToYen} = require('./app.js');
    const yens = fromDollarToYen(2);
    const expected = 2 / 1.07 * 156.5;
    expect(fromDollarToYen(2)).toBe(292.5233644859813);
})

test ("One JPY should be 0.005559 GBP", function() {
    const {fromYenToPound} = require('./app.js');
    const pounds = fromYenToPound(3);
    const expected = 3 / 156.5 * 0.87;
    expect(fromYenToPound(3)).toBe(0.01667731629392971);
})