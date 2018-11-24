const container = document.querySelector('.container');

const criarAvaliacao = avaliacao => {
  const divCard = document.createElement('div');
  divCard.classList.add('card');

  const divCardBody = document.createElement('div');
  divCardBody.classList.add('card-body');

  divCard.appendChild(divCardBody);

  const h5 = document.createElement('h5');
  h5.classList.add('card-title');
  h5.textContent = 'Nome do hospital';

  divCardBody.appendChild(h5);

  const h6 = document.createElement('h6');
  h6.classList.add('card-subtitle');
  h6.classList.add('mb-2');
  h6.classList.add('text-muted');
  h6.textContent = 'Cidade';

  divCardBody.appendChild(h6);

  const pCardText = document.createElement('p');
  pCardText.classList.add('card-text');
  pCardText.textContent = avaliacao.mensagem;

  divCardBody.appendChild(pCardText);

  const a = document.createElement('a');
  a.classList.add('card-link');
  a.setAttribute('href', '#');
  a.textContent = avaliacao.nota;

  divCardBody.appendChild(a);

  container.appendChild(divCard);
};

(() => {
  axios.get('https://nossohospital.herokuapp.com/avaliacoes')
    .then(response => {
      const avaliacoes = response.data;
      console.log(avaliacoes);

      avaliacoes.forEach(avaliacao => criarAvaliacao(avaliacao));
    })
    .catch(err => console.error(err));
})();