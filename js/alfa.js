
function continueGame(){
    const getAlfa= getARandomAlfabates();
    setBackgroundColor(getAlfa);
    const setDisplay = document.getElementById('display-screen');
    setDisplay.innerText = getAlfa.toUpperCase();
}

function playNow(){
    // const homeSection = document.getElementById('home-screen').classList;
    // homeSection.add('hidden');
    // const playSection= document.getElementById('play-screen').classList;
    // playSection.remove('hidden');
    hideElementById('home-screen');
    showElementById('play-screen');
    continueGame();
}