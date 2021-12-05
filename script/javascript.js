//JavaScript koji se odnosi na formu za prijavu

var program = localStorage.getItem("program")
var slika = localStorage.getItem("slika");
picture.src = slika;
if (program == '1') {odabraniProgram.innerHTML = "Prijava za kondicioni trening";}
if (program == '2') {odabraniProgram.innerHTML = "Prijava za jutarnji miks";}
if (program == '3') {odabraniProgram.innerHTML = "Prijava za pilates";}
if (program == '4') {odabraniProgram.innerHTML = "Prijava za boks";}
if (program == '5') {odabraniProgram.innerHTML = "Prijava za jogu";}
if (program == 'ind') {odabraniProgram.innerHTML = "Prijava za individualni trening"}

function prijava() {
        alert("Uspešno ste se prijavili, obavestićemo Vas o dostupnim terminima putem e-maila.");
        }

$( function() {
    $("#mail").tooltip
    {show: { effect: "shake" }}
    $("#broj").tooltip
    {show: { effect: "shake" }}
    $("#ime").tooltip
    {show: { effect: "shake" }}
    $("#prezime").tooltip
    {show: { effect: "shake" }}
    $("#termin").tooltip
    {show: { effect: "shake" }}
    } );
