// const atual = require('./deputados.json').resultado.filter(deputado => {
//   return deputado.legislaturas[0] == 56
// });
const novo = require('./novo.json');
const antigo = require('./antigo.json');

const diff = require('deep-object-diff');

console.log(diff.diff(antigo, novo));

console.log(JSON.stringify(novo) == JSON.stringify(antigo));