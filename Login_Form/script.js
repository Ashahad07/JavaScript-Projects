const password = document.getElementById("password");
const icon = document.getElementById("icon");

icon.onclick = function showPassword() {
    if (password.type == "password") {
        password.type = "text";
        icon.src = "show.svg";
    } else {
        password.type = "password";
        icon.src = " hide.svg";
    }
};
