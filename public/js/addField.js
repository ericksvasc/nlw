// Procurar o botão 
document.querySelector("#add-time")
// quando clicar no botão
.addEventListener("click", cloneField)


//executar uma ação
function cloneField(){
    //duplicar os campos
    
    const newfieldContainer = document.querySelector(".schedule-item").cloneNode(true) // boolean: true or false

    //limpar os campos

    const fields = newfieldContainer.querySelectorAll("input")
    const buttons = newfieldContainer.querySelectorAll("button")
    
    
    fields.forEach(function(field){
        field.value = ""
    })
    buttons.forEach(function(buttoncolor){
    	buttoncolor.style.color = " #8257E5"
    })
    buttons.forEach(function(buttoncursor){
        buttoncursor.style.cursor = "pointer"
    })
    
    //colocar na pagina
    document.querySelector("#schedule-items").appendChild(newfieldContainer)
}    

document.querySelector("")
    

