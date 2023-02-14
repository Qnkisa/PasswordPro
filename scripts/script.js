var generatePassword = document.getElementById("generate-password");

generatePassword.addEventListener("click",function(){
    var length = document.getElementById("password-length").value;
    var letters = document.getElementById("letters").checked;
    var mixedCase = document.getElementById("mixed-case").checked;
    var punctuation = document.getElementById("punctuation").checked;
    var numbers = document.getElementById("numbers").checked;
    var outputField = document.getElementById("password");
    const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const symbols = "!@#$%^&*()_-+={}[];:'\"<>,.?/\\|";
    const digits = "0123456789";
    let password = "";
    let characters = "";

    var errorMessage = document.getElementById('error-message');


    if(letters == false && punctuation == false && numbers == false){
        alert("Please select at least one symbol for your password!");
    }

    if (letters) {
        characters += lowercaseLetters;
        if (mixedCase) {
          characters += uppercaseLetters;
        }
      }
    
      if (punctuation) {
        characters += symbols;
      }
    
      if (numbers) {
        characters += digits;
      }
    
      for (let i = 0; i < length; i++) {
        password += characters.charAt(Math.floor(Math.random() * characters.length));
      }
      outputField.value = password;

      if(length === ""){
        alert("Please provide length for your password!");
    }

    if(length < 6){
        alert("Your password should be 6 symbols or more");
    }
});

var copyPassword = document.getElementById("copy-password");

copyPassword.addEventListener('click',function(){
    const passwordField = document.getElementById("password");
    passwordField.select();
    passwordField.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(passwordField.value)
    .then(() => {
      alert("Password copied to clipboard!");
    })
    .catch(err => {
      console.error("Failed to copy password: ", err);
    });
});