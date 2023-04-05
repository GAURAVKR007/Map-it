
const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
// const signinDiv = document.querySelector('.sign-in')
const main = document.getElementById('main');

signUpButton.addEventListener('click', () => {
    main.classList.add("right-panel-active");
    // signinDiv.style.display = "none";
});

signInButton.addEventListener('click', () => {
    main.classList.remove("right-panel-active");
    // signinDiv.style.display = "block";
});




