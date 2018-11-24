const form = document.querySelector('form');
const erroCadastro = document.querySelector('#erroCadastro');

const validarCadastro = form => {
  console.log(form.senha.value);
  if (!form.nome.value || form.nome.value.length < 3) {
    erroCadastro.classList.remove('invisible');
    erroCadastro.textContent = 'Nome inválido';
    return false;
  }

  if (!form.email.value || form.email.value.length < 7) {
    erroCadastro.classList.remove('invisible');
    erroCadastro.textContent = 'Email inválido';
    return false;
  }

  if (!form.senha.value || form.senha.value.length < 6) {
    erroCadastro.classList.remove('invisible');
    erroCadastro.textContent = 'Senha inválida';
    return false;
  }

  return true;
};

form.addEventListener('submit', event => {
  event.preventDefault();

  const payload = {
    nome: form.nome.value,
    email: form.email.value,
    senha: form.senha.value
  }

  if (!validarCadastro(this.event.target)) return;

  axios.post('https://nossohospital.herokuapp.com/usuarios', payload)
    .then(res => {
      window.location.href = 'index.html';
    }) 
    .catch(err => console.error(err));
});