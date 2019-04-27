const cardText = document.querySelector('.card-text');
const emotionsText = document.querySelector('.emotions');
const criminalIntentText = document.querySelector('.criminalIntent');
const categoriesText = document.querySelector('.categories');
const sentimentText = document.querySelector('.sentiment');

function parseCriminalCategories(categories) {
  return `Intenções criminosas encontradas: ${categories.join(', ')}`;
}

function parseEmotions(emotions) {
  return `Emoções encontradas: ${emotions.join(', ')}`;
}

function parseCriminalIntent(criminalIntent) {
  return criminalIntent ?
    'Possui intenção criminosa' :
    'Não possui intenção criminosa';
}

function parseSentiment(sentiment) {
  return sentiment ? `Tweet contém: ${sentiment}` : '';
}

(async() => {
  const response = await axios.get('https://maria-ia.herokuapp.com/maria');
  const res = response.data;

  console.log('response: ', res);
  cardText.textContent = res.tweet;
  emotionsText.textContent = parseEmotions(res.result.emotions);
  criminalIntentText.textContent = parseCriminalIntent(res.result.hasCriminalIntent);
  sentimentText.textContent = parseSentiment(res.result.sentiments);

  if (res.result.hasCriminalIntent) {
    categoriesText.textContent = parseCriminalCategories(res.result.criminalCategories);
  }
})();
