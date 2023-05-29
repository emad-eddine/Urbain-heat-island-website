// this script will be use the valide user inputs
// in signup and login form


/* 
signup :
===============================================
userName must be < 30 char and dont exist in DB
email musn't exist in DB
password < 30 char





//***************SIGNUP********************** */

// get inputs elements
var userName = document.querySelector("#userName");
var password = document.querySelector("#userPassword");
var confirmPassword = document.querySelector("#userConfirmPassword");

// get error tags

var userNameError = document.querySelector("#usernameSpan");
var passwordError = document.querySelector("#passwordSpan");
var confirmPassworError = document.querySelector("#confirmPasswordSpan");

var form = document.getElementById('signupForm');



const isRequired = value => value === '' ? false : true; // true if field is required

const isBetween = (length, min, max) => length < min || length > max ? false : true; // true if input bettween two values


const checkUsername = () => {

    let valid = false;
    const min = 3,
        max = 25;
    const username = userName.value.trim();

    if (!isRequired(username)) {
        userNameError.textContent = "Le nom d'utilisateur ne peut pas être vide"
        userNameError.classList.add("error")

    } else if (!isBetween(username.length, min, max)) {
        userNameError.textContent ='Le nom utilisateur doit être entre 3 et 25 characters';
        userNameError.classList.add("error")
        console.log(userNameError.value)
    } else {
        userNameError.classList.remove("error")
        userNameError.classList.add("succes")
        userNameError.textContent ="";
        valid = true;
    }
    return valid;
}

const checkPassword = () => {

    let valid = false;
    const min = 3,
        max = 25;
    const pass = password.value.trim();

    if (!isRequired(pass)) {
        passwordError.textContent = "Mot de passe ne peut pas être vide";
        passwordError.classList.add("error");
    } else if (!isBetween(pass.length, min, max)) {
        passwordError.textContent = "Mot de passe doit être entre 3 et 25 characters";
        passwordError.classList.add("error");
    } else {
        passwordError.classList.remove("error")
        passwordError.classList.add("succes")
        passwordError.textContent ="";
        valid = true;
    }
    return valid;
}


const checkConfirmPassword = () => {

    let valid = false;
    const min = 3,
        max = 25;
    const pass = password.value.trim();
    const Cpass = confirmPassword.value.trim();

    if (!isRequired(pass)) {
        confirmPassworError.textContent = "ce champs ne peut pas être vide";
        confirmPassworError.classList.add("error");
    } else if (pass !== Cpass) {
        confirmPassworError.textContent = "ce champ ne correspond pas à mot de passe";
        confirmPassworError.classList.add("error");
    } else {
        confirmPassworError.classList.remove("error")
        confirmPassworError.classList.add("succes")
        confirmPassworError.textContent ="";
        valid = true;
    }

    return valid;
}




form.addEventListener('submit', function (e) {

    // prevent the form from submitting
    e.preventDefault();


    // validate forms
    let isUsernameValid = checkUsername(),
        isPasswordValid = checkPassword(),
        isConfirmPasswordValid = checkConfirmPassword();

    

    let isFormValid = isUsernameValid &&
        isPasswordValid &&
        isConfirmPasswordValid;

    // submit to the server if the form is valid
    if (isFormValid) {
        form.submit();
    }
});


// end signupp for validation //
//************************************* */


// heat form validation ///

var fromDate = document.querySelector("#fdate");
var toDate = document.querySelector("#tdate")
var Hform = document.querySelector('#Hform');


const checkDates =()=>{
   
    var startDt = fromDate.value;
    var endDt = toDate.value;

    if( (new Date(startDt).getTime() < new Date(endDt).getTime()))
    {
        return true
    }
    else{
        return false
    }

}


Hform.addEventListener('submit', function (e) {

    // prevent the form from submitting
    e.preventDefault();

    let isDateValid = checkDates()
    if(isDateValid == true)
    {
        form.submit()
    }
    
});