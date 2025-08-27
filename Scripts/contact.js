document.getElementById('contactForm').onsubmit = function(e) {
    e.preventDefault();
    const emailTo = "oisinc.ryan100@gmail.com"; // my personal email
    const senderEmail = document.getElementById('user-email').value;
    const subject = document.getElementById('subject').value;
    const body = document.getElementById('body').value;

    // I couldn't make the email be sent from any email other than the one logged in on the device so I compromised and added "From: sender" at the top of the body for reference
    const mailBody = `From: ${senderEmail}\n\n${body}`;

    // encode subject and body for mailto
    const mailtoLink = `mailto:${emailTo}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(mailBody)}`;

    window.location.href = mailtoLink;
};

// for some reason the accessibility controls were not working on the contact page so I added this here and they worked again
const fontSlider = document.getElementById('fontSlider');
fontSlider.addEventListener('input', function() {
    document.body.style.fontSize = fontSlider.value + 'px';
});


const fontSelect = document.getElementById('fontSelect');
fontSelect.addEventListener('change', function() {
    document.body.style.fontFamily = fontSelect.value;
});