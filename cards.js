let userInput;
let url = 'https://deckofcardsapi.com/api/deck/new/draw/?count=1';

const inputField = document.querySelector('#input-card');
const output = document.querySelector('#output-card');
const button = document.querySelector('#button-draw');

button.addEventListener('click', function (){
    GetDeck();
})

document.addEventListener('keydown', function (e){
    if(e.key === 'Enter')
    {
        GetDeck();
    }
})

function GetDeck(){
    fetch(url,{
        method: 'GET',
        headers: {
            'Accept': 'application/json'
        }
    })
    .then(res=>{
        if(res.ok)
        return res.json();
        throw new Error('Failed to get API');
    })
    .then(data =>{
        const cardImage = document.createElement('img');
        cardImage.setAttribute('src', data.cards[0].image);

        output.innerHTML = '';
        output.appendChild(cardImage);
    })
    .catch(error => console.error('Error fetching card:', error))
}