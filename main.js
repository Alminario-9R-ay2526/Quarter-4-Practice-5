function checkPassword (){
let password = "";

do {
    password = prompt("Enter a password longer than 4 characters" , "12345");
} while (password.length < 5);

    window.alert("Entered Password: ",password);
    }