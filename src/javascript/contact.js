function sendEmail(senderName, email, subject, message) {
    var params = {
        subject: subject,
        email: email,
        from_name: senderName,
        message: message
    }
    emailjs.send("service_k1q1xpl", "template_hvirplg", params).then(function (res){
        alert("Sent Mail!");
    })
};

$("#contact-form").on("submit", function (event) {
    event.preventDefault();
    sendEmail(event.target[0].value, event.target[1].value, event.target[2].value, event.target[3].value);
    event.target.reset();
});