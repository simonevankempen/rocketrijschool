// Script om het formulier te controleren
function validateForm() {
    var bericht = document.forms["form"]["Bericht"].value;
    var onderwerp = document.forms["form"]["onderwerp"].value;
    var x = document.getElementById("formEMail").value;
    var atpos = x.indexOf("@");
    var dotpos = x.lastIndexOf(".");
    if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length) {
        alert("Not a valid e-mail address");
        return false;
    }
    else {
        if (onderwerp < "") {
            onderwerp = "contact";
            document.location.href = "mailto:506356@edu.rocmn.nl?subject="
            + encodeURIComponent(onderwerp) +
            "&body=" + encodeURIComponent(bericht);
        }
        else if (onderwerp > "") {
            document.location.href = "mailto:506356@edu.rocmn.nl?subject="
            + encodeURIComponent(onderwerp) +
            "&body=" + encodeURIComponent(bericht);
        }
    }
}