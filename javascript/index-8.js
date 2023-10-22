const FORMULAR = document.querySelector(".login-form"); // The form.login-form stored in a variable.
/**
 * Ioana's code - Unexplained.
 */
FORMULAR.addEventListener("submit", function (event) {
  event.preventDefault();

  const EMAIL_INPUT = FORMULAR.elements.email;
  const PASSWORD_INPUT = FORMULAR.elements.password;

  const EMAIL_VALUE = EMAIL_INPUT.value;
  const PASSWORD_VALUE = PASSWORD_INPUT.value;

  if (!EMAIL_VALUE || !PASSWORD_VALUE) {
    alert("All fields must be filled in.");
    return;
  }
  const formData = {
    email: EMAIL_VALUE,
    password: PASSWORD_VALUE,
  };

  console.log(formData);
  FORMULAR.reset();
});
