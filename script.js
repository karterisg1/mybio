// script.js

// Smooth Scrolling
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// EmailJS integration
(function() {
    emailjs.init('YOUR_PUBLIC_KEY'); // Αντικατέστησε το YOUR_PUBLIC_KEY
})();

document.querySelector('#contact form').addEventListener('submit', function(e) {
    e.preventDefault(); // Προστατεύει την default συμπεριφορά της φόρμας

    const name = document.querySelector('input[type="text"]').value;
    const email = document.querySelector('input[type="email"]').value;
    const message = document.querySelector('textarea').value;

    const templateParams = {
        name: name,
        email: email,
        message: message
    };
   
    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams) // Αντικατέστησε το YOUR_SERVICE_ID και το YOUR_TEMPLATE_ID
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            alert('Το μήνυμα στάλθηκε επιτυχώς!');
            document.querySelector('#contact form').reset();
        }, function(error) {
            console.error('FAILED...', error);
            alert('Αποτυχία αποστολής μηνύματος, προσπαθήστε ξανά.');
        });
});