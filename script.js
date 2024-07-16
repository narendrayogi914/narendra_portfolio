var typed = new Typed('.text',{
    strings:["Java Developer","Front-End Developer", "System Designer", "Backend Developer"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
});

    (function() {
        emailjs.init("omnFIBOkMJMBOd-wH1LuM"); // Replace with your EmailJS user ID
    })();

    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();

        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;

        // Send email using EmailJS
        emailjs.send("service_39g46m4", "template_uxlwi9r", {
            from_name: name,
            from_email: email,
            subject: subject,
            message: message
        })
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            alert("Message sent successfully!");
        }, function(error) {
            console.log('FAILED...', error);
            alert("Failed to send the message. Please try again later.");
        });
    });
