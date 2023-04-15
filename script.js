function res() {
    document.getElementById("emailVal").value = ""
    document.getElementById("passwordVal").value = ""
    document.getElementById("result").innerHTML = "Enter valid E-Mail and Password"
    document.getElementById("result").style.color = "#fff"
    document.getElementById("sign-1").style.backgroundColor = "red"
    document.getElementById("emailVal").style.borderColor = "red"
    document.getElementById("sign").style.backgroundColor = "red"
    document.getElementById("passwordVal").style.borderColor = "red"
}

function result() {
    let emailVal = document.getElementById("emailVal")
    let pas = document.getElementById("passwordVal")

    if (emailVal.value.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/) || pas.value.match(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/)) {
        document.getElementById("result").innerHTML = "LOGIN SUCCESSFULL"
        alert("LOGIN SUCCESSFULL")
        document.getElementById("result").style.color = "#00ff00"
    }
    else {
        document.getElementById("result").innerHTML = "LOGIN UNSUCCESSFULL"
        alert("LOGIN UNSUCCESSFULL")
        document.getElementById("result").style.color = "red"

    }

    document.getElementById("emailVal").value = ""
    document.getElementById("passwordVal").value = ""
    document.getElementById("sign-1").style.backgroundColor = "red"
    document.getElementById("emailVal").style.borderColor = "red"
    document.getElementById("sign").style.backgroundColor = "red"
    document.getElementById("passwordVal").style.borderColor = "red"
}


function emailvalid() {
    let sign1 = document.getElementById("sign-1")
    let emailVal = document.getElementById("emailVal")
    if (emailVal.value.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)) {
        sign1.style.backgroundColor = "#00ff00"
        emailVal.style.borderColor = "#00ff00"

    }
    else {
        sign1.style.backgroundColor = "red"
        emailVal.style.borderColor = "red"
    }
}


function valPass() {

    let sign = document.getElementById("sign")
    let pas = document.getElementById("passwordVal")
    if (pas.value.match(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/)) {
        console.log("green")
        sign.style.backgroundColor = "#00ff00"
        pas.style.borderColor = "#00ff00"

    }
    else {
        sign.style.backgroundColor = "red"
        pas.style.borderColor = "red"

    }
}

