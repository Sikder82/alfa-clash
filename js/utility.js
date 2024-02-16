function hideElementById(elementId){
    const element= document.getElementById(elementId);
    element.classList.add('hidden');
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
    const setLifeTime=(parseInt(lifeTime.innerText))-1;
    lifeTime.innerText=setLifeTime;
    if(setLifeTime === 0){
        hideElementById('play-screen');
        const finalScore = document.getElementById('final-score');
        const score = document.getElementById('Score').innerText;
        finalScore.innerText = score;
        showElementById('final-score-screen');
    }   
}

