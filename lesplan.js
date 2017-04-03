function validateForm() {
var bericht = document.forms["form"]["verhaal"].value;
var onderwerp = "lesplan";
var cursist = document.getElementById("cursist").value;

if (bericht < "") {
alert("geen bericht ingevoerd");
}
else if (bericht > "") {
document.location.href="mailto:506356@edu.rocmn.nl?subject="
+ encodeURIComponent(onderwerp + " " + cursist)+
"&body=" encodeURIComponent(bericht);
}

}