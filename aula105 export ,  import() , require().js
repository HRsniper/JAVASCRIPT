// sintaxe CommonJS
/*
module.exports = {
    foo: function () {
        return 'bar';
    },
    baz: 123
}
*/
// Usando a exportação padrão
function somax2() {
    let x = 5;
    let y = 5;
    return (x + y) * 2;
}
export default soma2;
// import dafault

// Usando exportações nomeadas
export function soma() {
    let x = 5;
    let y = 5;
    return x + y;
}
// import {soma}

// Usando exportações nomeadas
function cube() {
    let x = 5;
    return x * x * x;
}
export {cube};
// import { cube }