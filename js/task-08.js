const formRef = document.querySelector('.login-form');

formRef.addEventListener('submit', formSubmitHandler)

function formSubmitHandler(event) {
    event.preventDefault();
    const { elements: { email, password }} = event.currentTarget;
    // console.log(event.currentTarget.elemets);

    if (email.value === "" || password.value === "") {
      return alert("Заповніть усі поля!");
    }
    
    console.log(`Email: ${email.value}, Password: ${password.value}`);
  event.currentTarget.reset();
}

