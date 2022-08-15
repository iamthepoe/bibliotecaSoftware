/* 
 Em biblioteca.php e usuario.php, incluir:

    header('Acess-Control-Allow-Origin: *');
*/
let form = document.getElementById('entrar');
let login = document.getElementById('login');
let senha = document.getElementById('senha');

form.addEventListener('click', ()=>{
    let formData = new FormData();
    formData.append('login', `${login.value}`);
    formData.append('login', `${senha.value}`);
    fetch('http://adinfinutum.profrodolfo.com.br/usuario.php',
    {
        body: formData,
        method: 'POST',
        mode: 'cors',
        cache: 'default'
    }
    ).then(res=> {res.json().then(data=>{
        alert(data.dados.nome);
    })})
});
