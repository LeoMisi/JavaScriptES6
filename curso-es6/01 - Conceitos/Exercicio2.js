const usuarios = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
   ];
   
const newUsuariosMap = usuarios.map(function(item){
    return item.idade;

});

console.log(newUsuariosMap);

const newUsuariosFilter = usuarios.filter(function(item){
    return item.empresa === 'Rocketseat' && item.idade >= 18 ;
    
});

console.log(newUsuariosFilter);

const newUsuariosFind = usuarios.find(function(item){
    return item.empresa === 'Google';
    
});

console.log(newUsuariosFind);

const newUsuariosMapp = usuarios.map(users => ({...users, idade : users.idade * 2})).filter(users => users.idade <= 50);

console.log(newUsuariosMapp)