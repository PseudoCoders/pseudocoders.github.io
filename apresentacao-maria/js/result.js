const cardText = document.querySelector('.card-text');
const emotionsText = document.querySelector('.emotions');
const criminalIntentText = document.querySelector('.criminalIntent');
const categoriesText = document.querySelector('.categories');
const sentimentText = document.querySelector('.sentiment');
const user = document.querySelector('.user');
const time = document.querySelector('.time');

function parseCriminalCategories(categories) {
    return `• Intenção criminosa encontrada: ${categories.join(' ')}`;
}

function parseEmotions(emotions) {
    if (emotions == 'raiva'
        || emotions == 'tristeza'
        || emotions == 'desgosto'
        || emotions == 'medo') {
        return emotions = `• Emoção encontrada: ${emotions.join(' ')}`;
    } else {
        return emotions = '• As emoções encontradas não se referem a    Raiva, Tristeza, Desgosto ou Medo.';
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
    const response = await axios.get('https://maria-ia.herokuapp.com/maria');
    const res = response.data;
    cardText.textContent = res.text;
    emotionsText.textContent = parseEmotions(res.result.emotions);
    criminalIntentText.textContent = parseCriminalIntent(res.result.hasCriminalIntent);
    sentimentText.textContent = parseSentiment(res.result.sentiments);
    user.textContent = fakeUser();


    if (res.result.hasCriminalIntent) {
        categoriesText.textContent = parseCriminalCategories(res.result.criminalCategories);
    }
})();