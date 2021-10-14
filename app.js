function registerRoute(){
        document.getElementById("home").setAttribute("class", "hide")
        document.getElementById("register").removeAttribute("class","hide")
}
function register(){
    let firstName = document.getElementById("defaultRegisterFormFirstName").value
    let lastName = document.getElementById("defaultRegisterFormLastName").value
    let userName = document.getElementById("defaultRegisterFormUsername").value
    let password = document.getElementById("defaultRegisterFormPassword").value
    let passwordConfirmation = document.getElementById("defaultRegisterRepeatPassword").value

    console.log(`${firstName} ${lastName} ${userName} ${password}`)
    if(password != passwordConfirmation){
        alert("ERROR!")
    }
}