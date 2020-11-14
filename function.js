function validnoIP(obj) {
    obj.value = obj.value.toString();
    if (obj.value.match(/^[A-Z]{1,}\_+[A-Z]+$/) === null) {
        obj.style.color = 'red';
        document.getElementById("nameerror").innerHTML = "Unos nije dobar!";
        return false;
    }
    obj.style.color = 'green';
    document.getElementById("nameerror").innerHTML = "";
    return true;

}

function validnaporuka(obj) {
    obj.value = obj.value.toString();
    if (obj.value.match(/^[a-zA-Z0-9.!*(){}&^#@$/_?|><%+-,;:\s]{1,490}([0-9]{3}[/][0-9]{3}[-][0-9]{2}[-][0-9]{2})/) === null) {
        obj.style.color = 'red';
        document.getElementById("nameeror").innerHTML = "Unos nije dobar!";
        return false;
    }
    obj.style.color = 'green';
    document.getElementById("nameeror").innerHTML = "";
    return true;
}

function validanMejl(obj) {
    obj.value = obj.value.toString();
    if (obj.value.match(/^[A-Z]{1}[A-Z0-9.*(){}&^#@!$/_?|><%+-]{1,}[A-Z0-9]+@[A-Z]+(?:\.[A-Z]+)*$/i) === null) {
        obj.style.color = 'red';
        document.getElementById("namerror").innerHTML = "Unos nije dobar!";
        return false;
    }
    obj.style.color = 'green';
    document.getElementById("namerror").innerHTML = "";
    return true;
}

function validateForm() {
    var text = document.myForm.text.value;
    var email = document.myForm.email.value;
    var Message = document.myForm.Message.value;
    if (text == "" && email == "" && Message == "") {
        document.getElementById('nameerror').innerHTML = "Unos nije dobar!";
        document.getElementById('namerror').innerHTML = "Unos nije dobar!";
        document.getElementById('nameeror').innerHTML = "Unos nije dobar!";
        return false;
    }
    iwin = window.open("NoviProzor.html", "IWIN", "status=no,toolbar=no,location=no,menu=no,width=400,height=300")
    return true;
}