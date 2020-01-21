const showHides = document.querySelectorAll('h4')

for(showHide of showHides){
    let selector = document.querySelector(".topic-content")


    showHide.addEventListener("click", function(){
        console.log(showHide.innerHTML)

        if(showHide.innerHTML == "MOSTRAR"){
            //add class
            alert('Clique no mostrar!')
        } else if(showHide.innerHTML == "ESCONDER"){
            //add class

            //add style
            alert('Clique no esconder!')
        }
    })
}