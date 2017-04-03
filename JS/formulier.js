var naam = document.getElementById("formNaam").value;
var achternaam = document.getElementById("formAchterNaam").value;
var email = document.getElementById("formEMail").value;
// Alle input uit de form

var checkNummerNaam = isNaN(naam);
var checkNummerAchternaam = isNaN(achternaam);
var checkEmail = /e/.test(email);
// Kijkt of iets een nummer is

function checkForm() {
    console.log("form word gecheckt");
    if (naam !== "" && naam !== null && checkNummerNaam == true) {
        console.log("Naam is gecheckt");
        // Als naam goed is doe dit
        var naamGoed = true;
    }
    else if (achternaam !== "" && achternaam !== null && checkNummerAchternaam == true) {
        console.log("Achternaam is goed");
        // Als de achternaam goed is doe dit
        var achternaamGoed = true;
    }
    else if (email !== "" || email !== null || checkEmail == true) {
        var emailGoed = true;
    }
    else if (naamGoed == true && achternaamGoed == true || emailGoed == true) {
        document.forms["form"].submit()
    }
    else {
        alert("Error");
    }
}