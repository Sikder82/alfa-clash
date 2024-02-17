function hideElementById(elementId){
    const element= document.getElementById(elementId);
    element.classList.add('hidden');
}
function resetScoreLife(){
    const lifeTime = document.getElementById('life-time');
    const score = document.getElementById('Score');
    score.innerText = 0;
    lifeTime.innerText = 5;
}

function showElementById(elementId){
    const element= document.getElementById(elementId);
    element.classList.remove('hidden');
}
function setBackgroundColor(elementId){
    const element=document.getElementById(elementId);
    element.classList.add('bg-orange-400')
}
function removeBackgroundColor(elementId){
    const element=document.getElementById(elementId);
    element.classList.remove('bg-orange-400')
}

function getARandomAlfabates(){
    const alfaString = 'abcdefghijklmnopqrstuvwxyz';
    const alfas = alfaString.split('');
    const randomNumber = Math.round(Math.random()*25);
    return randomAlfa = alfas[randomNumber];  
}

function updateScore(){
    const score = document.getElementById('Score');
    const setScore=parseInt(score.innerText);
    score.innerText=setScore+1;
}
function updateLifeTime(){
    const lifeTime = document.getElementById('life-time');
    const displayKey = document.getElementById('display-screen').innerText; 
    const setLifeTime=(parseInt(lifeTime.innerText))-1;
    lifeTime.innerText=setLifeTime;
    if(setLifeTime === 0){
        console.log(displayKey.toLowerCase())
        hideElementById('play-screen');
        removeBackgroundColor(displayKey.toLowerCase());
        const finalScore = document.getElementById('final-score');
        const score = document.getElementById('Score');
        finalScore.innerText = score.innerText;
        showElementById('final-score-screen');
    }   
}