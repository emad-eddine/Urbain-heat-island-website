const submitBtn = document.querySelector('.submit-btn'),
      errorDisplayers = document.getElementsByClassName('error'),
      inputFields = document.querySelectorAll('input'),
      cardContainer = document.querySelector('.card-container'),
      outroOverlay = document.querySelector('.outro-overlay')

let count = 2

function onValidation(current ,messageString, booleanTest){
    let message = current
    message.textContent = messageString
    booleanTest != 0 ? ++count : count
}

for(let i=0; i<inputFields.length; i++){
    let currentInputField = inputFields[i]
    let currentErrorDisplayer = errorDisplayers[i]

    currentInputField.addEventListener('keyup', (e)=>{
        let message = currentErrorDisplayer
        e.target.value != "" ? onValidation(currentErrorDisplayer, '', 0) : onValidation(currentErrorDisplayer, '*Ce champs est obligatoire', 0)
    })
}





// submitBtn.addEventListener('click', (e)=>{
//     e.preventDefault()
//     if(count > 5){
//         cardContainer.style.display = 'none'
//         outroOverlay.classList.remove('disabled')
//     }
//     else{
//         for(let i=0; i<errorDisplayers.length; i++){
//             errorDisplayers[i].textContent = '*This field is Required'
//         }
//     }
// })








