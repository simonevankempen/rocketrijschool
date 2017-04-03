function validateForm() {
    var onderwerp = "Les annuleren";
    var lesnummer = document.getElementById("lesnummer").value;
    
    if (lesnummer < "") {
        alert("Geen bericht ingevoerd");
    }
        else if (lesnummer > "") {
            document.location.href = "mailto:506356@edu.rocmn.nl?subject="
            + encodeURIComponent(onderwerp + " " + lesnummer) +
            "&body=Anuleren";
    }
}