var userName = "admin";
var userPassword = "admin";

// De inlog naam en wachtwoord


function log() {
    // Login van gebruiker
    var userNameInput = document.getElementById("username").value;
    var userPasswordInput = document.getElementById("password").value;
    // Haalt de ingetypde values op van de user
    
    if (userNameInput == userName && userPasswordInput == userPassword) {
        // Als die goed is doe dit
       
        window.open("https://preview.c9users.io/simonee/rijschool-rocket/lesrooster.html?_c9_id=livepreview2&_c9_host=https://ide.c9.io", "_parent", "", "");
        alert("ingelogd");
    }
    else {
        // Als die niet goed is doe dit
        alert("Voer username en wachtwoord in aub")
    }
}












