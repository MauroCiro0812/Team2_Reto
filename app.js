/**
 * Variables
 */
const signupButton = document.getElementById('signup-button'),
    loginButton = document.getElementById('login-button'),
    userForms = document.getElementById('user_options-forms')

/**
 * Add event listener to the "Sign Up" button
 */
signupButton.addEventListener('click', () => {
  userForms.classList.remove('bounceRight')
  userForms.classList.add('bounceLeft')
}, false)

/**
 * Add event listener to the "Login" button
 */
loginButton.addEventListener('click', () => {
  userForms.classList.remove('bounceLeft')
  userForms.classList.add('bounceRight')
}, false)

getDocument.getElementById('cambiarfondo').addEventListener('click',
  function(){
    var imagen = document.getElementById("fondo-imagen");
    imagen.style.backgroundImage = 'url("https://www.google.com/url?sa=i&url=https%3A%2F%2Fes.vecteezy.com%2Ffotos-gratis%2Fplaya&psig=AOvVaw0VNq08GmfkehvspvkCizPk&ust=1722093839080000&source=images&cd=vfe&opi=89978449&ved=0CA8QjRxqFwoTCNiowM2BxYcDFQAAAAAdAAAAABAE")';
  }
)
