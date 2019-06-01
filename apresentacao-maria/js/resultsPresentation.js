const cardText = document.querySelector('.card-text');
const emotionsText = document.querySelector('.emotions');
const criminalIntentText = document.querySelector('.criminalIntent');
const categoriesText = document.querySelector('.categories');
const sentimentText = document.querySelector('.sentiment');
const user = document.querySelector('.user');
const time = document.querySelector('.time');

const headers = {
    headers: { 'secret': 'PseudoCoders' }
};

function parseCriminalCategories(categories) {
    return `• Intenção criminosa encontrada: ${categories.join(' • ')}`;
}

function parseEmotions(emotions) {
    if (emotions.length > 0) {
        return emotions = `• Emoção encontrada: ${emotions.join(' • ')}`;
    }
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

(async () => {
    const response = await axios.get('https://maria-ia.herokuapp.com/maria', headers);
    const res = response.data;
    console.log(res)
    cardText.textContent = res.text;
    emotionsText.textContent = parseEmotions(res.result.emotions);
    criminalIntentText.textContent = parseCriminalIntent(res.result.hasCriminalIntent);
    sentimentText.textContent = parseSentiment(res.result.sentiment);
    user.textContent = fakeUser();


    if (res.result.hasCriminalIntent) {
        categoriesText.textContent = parseCriminalCategories(res.result.criminalCategories);
    }
})();