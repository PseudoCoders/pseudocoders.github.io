const form = document.querySelector('form');
const select = document.querySelector('#hospitalId');

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
