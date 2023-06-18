function sendEmail() {
    Email.send({
        SecureToken : "9a5e5ced-9bba-4810-afdb-5de28881a9b1",
        To : 'ssabiougodi@gmail.com',
        From : document.getElementById("email").value,
        Subject : "New",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );
}


