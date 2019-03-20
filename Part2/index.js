const id = document.getElementById("cardId"); 
const color = document.getElementById("cardStyle"); 
console.log(id); 
console.log(style); 


const setCard = () => {
    const card = document.getElementById(id.value)
    console.log(card)
    card.stylesheet.color = color.value; 
}

const cardReset = () => {
    
}