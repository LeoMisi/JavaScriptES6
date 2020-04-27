import axios from 'axios';
import Usuario from '../02 - Webpac_Server/functions';

//Funão delay aciona o .then após 1s
// const delay = () => new Promise(resolve => setTimeout(resolve, 1000));

// const umPorSegundo = async () => {
//     await delay (console.log('1s'));
//     await delay (console.log('2s'));
//     await delay (console.log('3s'));

// };
// umPorSegundo();
     

// class Api {
//     static async getUserFromGithub(user) {
//     try{
//         const response = await axios.get(`https://api.github.com/users/${user}`)
//         console.log(response.data);
//     } catch (err){
//         console.warn('Usuário não existe');
//     }
//     console.log(response)
// }}
// Api.getUserFromGithub('LeoMisi');

// class Github {
//     static async getRepositories(repo) {
//         try {
//             const response = await axios.get(`https://api.github.com/repos/${repo}`)
//             console.log(response.data);
//         } catch (err) {
//         console.log('Repositório não existe');
//         }
//     console.log(response)
//     }
// }
// Github.getRepositories('rocketseat/rocketseat.com.br');

const buscaUsuario = async user => {
    try{
        const responseUsuario = await axios.get(`https://api.github.com/users/${user}`)
        console.log(responseUsuario.data);
    } catch(err) {
        console.log('Usuário não existe');
    }
}
buscaUsuario('LeoMisi');