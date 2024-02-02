const form = document.getElementById('myForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById("email");
const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");

form.addEventListener('submit', handleSubmit);

// form submit event handler
function handleSubmit(event){
    event.preventDefault(); //prevents form from submitting

    // validate form inputs
    const isValid = validateForm();

    if (isValid) {
    console.log('Form submitted successfully');
    form.reset();
    nameError.textContent = "";
    emailError.textContent = "";
    }
}

// form input validation
function validateForm() {
    const nameValue = nameInput.value.trim();
    const emailValue = emailInput.value.trim();
    let isValid = true;

    if (nameValue === '') {
        nameError.textContent = 'Email is required';
        isValid = false;
    } else {
        nameError.textContent = ''
    }

    if (emailValue === '') {
        emailError.textContent = 'Email is required';
        isValid = false;
    } else {
        emailError.textContent = ''
    }
    return isValid;
}