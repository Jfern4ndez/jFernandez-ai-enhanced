let phoneRef = document.querySelector("#phoneImg");
let phone = document.querySelector(".phone");
let name = document.querySelector(".name")

phoneRef.onmouseover = function() {
        phone.style.display = "block"
    }
    
phoneRef.onmouseout = function() {
        phone.style.display = "none";
    }

name.innerHTML = "Name: Jesus"

