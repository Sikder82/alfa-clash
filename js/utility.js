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

function getARandomAlfabates(){
    const alfaString = 'abcdefghijklmnopqrstuvwxyz';
    const alfas = alfaString.split('');
    const randomNumber = Math.round(Math.random()*25);
    return randomAlfa = alfas[randomNumber];  
}

