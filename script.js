let inputCheckbox = document.getElementById("show-pw");
let password = document.getElementById("password");
inputCheckbox.addEventListener("click", () => {
    if (password.type === "password") {
        password.type = "text";
    } else {
        password.type = "password";
    }
});
