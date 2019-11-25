function myFunction() {
    var x = document.getElementById("navigacija");
    if (x.className === "meni") {
        x.className += " responsive";
        console.log("radi");
    } else {
        x.className="meni";
        
    }
}

//dobar dan, dobro vece

var datum=new Date();
var sat=datum.getHours();
var p=document.getElementById("ppp")
console.log(sat)

    if (sat>6 && sat<12){
        p.textContent="Dobro jutro!"
    }else if (sat>=12 && sat<18) p.textContent="Dobar dan!"
    else p.textContent="Dobro veče!"

//validacija forme
function validateForm() {
    var x=document.forms["kontakt"]["ime"].value;
    var y=document.forms["kontakt"]["mail"].value;
    var z=document.forms["kontakt"]["tekst"].value;

    if(x=="") {
        alert("Morate uneti ime");
        return false;

    }

    if(y.indexOf("@")==-1 ) {
        alert("Morate uneti email");
        return false;

    }

    if(z=="") {
        alert("Morate uneti poruku");
        return false;

    }
}






    
