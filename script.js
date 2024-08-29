
function validateForm() {
    let isValid = true;


    document.querySelectorAll('.error').forEach(i => i.innerText = '');

    
    let firstName = document.getElementById('firstName').value;
    if (firstName.length >= 10) {
        document.getElementById('firstNameError').innerText = "First name must be less than 10 characters" ;
        isValid = false;
    }

    
    let lastName = document.getElementById('lastName').value;
    if (lastName.length >= 10) {
        document.getElementById('lastNameError').innerText = "Last name must be less than 10 characters";
        isValid = false;
    }

   
    let email = document.getElementById('email').value;
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        document.getElementById('emailError').innerText = "Please enter a valid email";
        isValid = false;
    }

 
    let password = document.getElementById('password').value;
    let passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(password)) {
        document.getElementById('passwordError').innerText = "Password must be at least 8 characters long, include uppercase, lowercase, number, and special character";
        isValid = false;
    }

    
    let confirmPassword = document.getElementById('confirmPassword').value;
    if (confirmPassword !== password) {
        document.getElementById('confirmPasswordError').innerText = "Passwords do not match";
        isValid = false;
    }

   
    let phone = document.getElementById('phone').value;
    let phoneRegex = /^[0-9]{12}$/;
    if (!phoneRegex.test(phone)) {
        document.getElementById('phoneError').innerText = "Phone number must be 12 digits";
        isValid = false;
    }

    return isValid;
}

