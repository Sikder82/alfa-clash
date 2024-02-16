function handleKeyboardBtnPress(event){
    const pressKey = event.key;
    const displayKey = document.getElementById('display-screen').innerText;
    if( pressKey === displayKey.toLowerCase()){
        updateScore();
        continueGame();
        removeBackgroundColor(pressKey)
    }else{
        updateLifeTime();  
    }

}
document.addEventListener('keyup', handleKeyboardBtnPress);

function continueGame(){
    const getAlfa= getARandomAlfabates();
    setBackgroundColor(getAlfa);
    const setDisplay = document.getElementById('display-screen');
    setDisplay.innerText = getAlfa.toUpperCase();
}

function playNow(){
    hideElementById('home-screen');
    showElementById('play-screen');
    continueGame();
}

function playAgain(){
    hideElementById('final-score-screen');
    showElementById('home-screen');
}