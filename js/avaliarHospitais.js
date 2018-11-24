const form = document.querySelector('form');
const select = document.querySelector('#hospitalId');
const erroAvaliacao = document.querySelector('#erroAvaliacao');

const preencherSelect = hospitais => {
  hospitais.forEach(hospital => {
    const option = document.createElement('option');
    option.value = hospital._id;
    option.textContent = hospital.nome;

    select.appendChild(option);
  });
};

(() => {
  axios.get('https://nossohospital.herokuapp.com/hospitais')
    .then(res => {
      const hospitais = res.data;
      preencherSelect(hospitais);
    })
    .catch(err => console.error(err));
})();

const validarFormulario = form => {
  if (form.hospitalId.value.length < 10) {
    erroAvaliacao.classList.remove('invisible');
    erroAvaliacao.textContent = 'Hospital inválido';
    return false;
  }

  if (form.nota.value < 1 || form.nota.value > 5) {
    erroAvaliacao.classList.remove('invisible');
    erroAvaliacao.textContent = 'Nota inválida';
    return false;
  }

  if (form.mensagem.value.length < 10) {
    erroAvaliacao.classList.remove('invisible');
    erroAvaliacao.textContent = 'Avaliação inválida';
    return false;
  }

  return true;
};

form.addEventListener('submit', event => {
  event.preventDefault();

  if (!validarFormulario(form)) return;

  const payload = {
    mensagem: form.mensagem.value,
    nota: form.nota.value,
    hospitalId: form.hospitalId.value
  }

  axios.post('https://nossohospital.herokuapp.com/avaliacoes', payload)
  .then(() => window.location.href = 'hospitais.html')
  .catch(err => console.error(err));
});
