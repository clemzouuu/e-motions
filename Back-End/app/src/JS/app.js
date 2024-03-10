let showForm = document.getElementsByClassName("showForm")
let hideForm = document.getElementsByClassName("hideForm")
let hideButton = document.getElementsByClassName("hideButton")
let sendButton = document.getElementsByClassName("sendButton")
let sendPost = document.getElementById("sendPost")


for (let i = 0; i < showForm.length; i++) {
    showForm[i].addEventListener('click', () => {
        hideForm[i].style.display = "inline"
        showForm[i].style.display = "none"
    })
}

for (let i = 0; i < hideButton.length; i++) {
    hideButton[i].addEventListener('click', () => {
        hideForm[i].style.display = "none"
        showForm[i].style.display = "inline"
    })
}


sendPost.addEventListener('click', (e) => {
    let formValue = document.getElementById("textarea").value
       if (formValue == ""){
           alert("Veuillez entrer une réponse")
           e.preventDefault()
       }
})


for (let i = 0; i < sendButton.length; i++) {
    sendButton[i].addEventListener('click', (e) => {
        let formValue = document.getElementsByClassName("formValue")
        let formValueInput = formValue[i]
        let formValueInputValue = formValueInput.value
        if (formValueInputValue.trim() ==  "") {
            alert("Veuillez entrer au minimum 1 caractère.")
            e.preventDefault()
        }
    })
}