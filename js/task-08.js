const formRef = document.querySelector('.login-form');

formRef.addEventListener('submit', formSubmitHandler);

function formSubmitHandler(event) {
    event.preventDefault();
    const formElements = event.currentTarget.elements;
    const email = formElements.email.value;
    const password = formElements.password.value;

    if (email === "" || password === "") {
      return alert("Заповніть усі поля!");
    } else {
    const formData = { email, password };
    console.log(formData);
    }
    // console.log(`Email: ${email.value}, Password: ${password.value}`);
    event.currentTarget.reset();
}






