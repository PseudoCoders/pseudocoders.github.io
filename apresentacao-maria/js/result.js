const cardText = document.querySelector('.card-text');
const emotionsText = document.querySelector('.emotions');
const criminalIntentText = document.querySelector('.criminalIntent');
const categoriesText = document.querySelector('.categories');
const sentimentText = document.querySelector('.sentiment');
const user = document.querySelector('.user');

function parseCriminalCategories(categories) {
    return `• Intenção criminosa encontrada: ${categories.join(' • ')}`;
}

function parseEmotions(emotions) {
    return emotions ? `• Emoção encontrada: ${emotions.join('• ')}` : '';
}

function parseCriminalIntent(criminalIntent) {
    return criminalIntent ?
        '• Possui intenção criminosa' :
        '';
}

function parseSentiment(sentiment) {
    return sentiment ? `• Tweet contém: ${sentiment}` : '';
}

function fakeUser(user) {
    return user = 'Usuário: Ocultado por questões de segurança.';
}

(async() => {
    const response = await axios.get('https://maria-ia.herokuapp.com/maria');
    const res = response.data;

    console.log('response: ', res);
    cardText.textContent = res.tweet;
    emotionsText.textContent = parseEmotions(res.result.emotions);
    criminalIntentText.textContent = parseCriminalIntent(res.result.hasCriminalIntent);
    sentimentText.textContent = parseSentiment(res.result.sentiments);
    user.textContent = fakeUser();

    if (res.result.hasCriminalIntent) {
        categoriesText.textContent = parseCriminalCategories(res.result.criminalCategories);
    }
})();