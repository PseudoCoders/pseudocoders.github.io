const form = document.querySelector('form');

const validarLogin = form => {
    return true;
};

form.addEventListener('submit', event => {
    event.preventDefault();

    if (!validarLogin(form)) return;

    const payload = {
        email: form.email.value,
        senha: form.senha.value
    }

    axios.post('https://nossohospital.herokuapp.com/usuarios/login', payload)
        .then(result => {
            criarCookieNome(result.data.nome);
            window.location.href = 'hospitais.html';
        })
        .catch(err => console.error(err));
});
