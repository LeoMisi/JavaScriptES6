// 3.1

const arr = [1, 2, 3, 4, 5];

const newArr = arr.map(item => item + 10);

console.log (newArr);

// 3.2

const usuario = {nome: 'Diego', idade: 23};

const mostraIdade = usuario => usuario.idade;

//mostraIdade(usuario)

console.log(usuario.idade);


// 3.3
// Dica: Utilize uma constante pra function
const nome = 'Diego';
const idade = 23;

const mostraUsuario = { nome, idade: 18 };

console.log(mostraUsuario);
console.log(mostraUsuario.nome);

// 3.4
const promise = () => new Promise (resolve, reject => resolve());
console.log(promise);