function generatePassword() {
    var charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    var password = "";
    for (var i = 0; i < 8; i++) { 
        var randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }
    document.getElementById("input").value = password;
}

function copyPassword() {
    var input = document.getElementById("input");
    input.select();
    document.execCommand("copy");
    alert("Password copied to clipboard!");
}