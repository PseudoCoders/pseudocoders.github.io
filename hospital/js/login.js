const form = document.querySelector('form');
const erroLogin = document.querySelector('#erroLogin');

const validarLogin = form => {
    if (form.email.value.length < 7) {
        erroLogin.classList.remove('invisible');
        erroLogin.textContent = 'Email inválido';
        return false;
    }

    if (form.senha.value.length < 6) {
        erroLogin.classList.remove('invisible');
        erroLogin.textContent = 'Senha inválida';
        return false;
    }

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
