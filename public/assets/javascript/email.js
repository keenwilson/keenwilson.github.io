window.onload = function() {

    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        console.log(this)

        this.contact_number.value = Math.random() * 100000 | 0;
        console.log(this)
        emailjs.sendForm('keen-wilson-portfolio', 'keen_wilson_portfolio_contact', this)
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
         }, function(error) {
            console.log('FAILED...', error);
         });;
        

    
    });
}
