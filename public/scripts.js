const modalOverlay = document.querySelector('.modal-overlay')
const cards = document.querySelectorAll('.card')

for(let card of cards){
    card.addEventListener("click", function (){
        const videoId = card.getAttribute("id") //pegue o atributo a ID da classe card, poderia pegar o card tbm
        // modalOverlay.classList.add('active') // adcionando uma classe 'active' em modalOverlay
        // modalOverlay.querySelector("iframe").src = `https://www.youtube.com/embed/${videoId}`
        // // linha 8: depois de ter pego o atributo IDBCursor, eu adiciono sua id no emdeb do video
        window.location.href = `video?id=${videoId}`
    })
}

// document.querySelector(".close-modal").addEventListener("click", function(){
//     modalOverlay.classList.remove("active"); // removendo a classe 'active'
//     modalOverlay.querySelector("iframe").src = ""
//     // linha 15: desligando o video, ou trazendo atribuição de nada
// })