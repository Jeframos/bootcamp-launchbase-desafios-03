const modalOverlay = document.querySelector('.modal-overlay')
const cards = document.querySelectorAll('.card')

for(let card of cards){
    console.log(card)
    card.addEventListener("click", function(){
        modalOverlay.classList.add('active')
    })
}

document.querySelector("#btn_fechar").addEventListener("click", function(){
    modalOverlay.classList.remove('active')
})