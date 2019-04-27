const cardText = document.querySelector('.card-text');
const emotionsText = document.querySelector('.emotions');
const criminalIntentText = document.querySelector('.criminalIntent');
const categoriesText = document.querySelector('.categories');

function parseEmotions(emotions) {
  const found = emotions.reduce(emotion => emotion + ' ', '');

  return `Emoções encontradas: ${found}`;
}

function parseCriminalIntent(criminalIntent) {
  return criminalIntent ?
    'Possui intenção criminosa' :
    'Não possui intenção criminosa';
}

(async() => {
  const response = await axios.get('https://maria-ia.herokuapp.com/maria');
  const res = response.data;

  cardText.textContent = res.tweet;
  emotionsText = parseEmotions(res.result.emotions);
  criminalIntentText = parseCriminalIntent(res.result.hasCriminalIntent);
})();
