var email = document.getElementById("mail")
var form= document.getElementById("form")

form.addEventListener("submit", (e) => {
    let messages= []
    if(email.value === '' || email.value == null) {
        alert("Email is required")
    }
    e.preventDefault
})

function validation() {
    var form = document.getElementById ("form");
    var email = document.getElementById ("mail").value;
    var text = document.getElementById ("text");
    var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if(email.match(pattern)) {
        form.classList.add("valid");
        form.classList.remove("invalid");
        text.innerHTML = "Your email address is valid"
        text.style.color = "#00ff00"
    }
    else {
        form.classList.remove("valid");
        form.classList.add("invalid");
        text.innerHTML = "Please enter a valid email address";
        text.style.color = "red"
    }

}