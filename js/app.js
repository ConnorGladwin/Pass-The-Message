(function() {
    const form = document.getElementById('message-form');

    form.addEventListener('click', function(e) {
        e.preventDefault();

        // selects the content from the HTML
        const message = document.querySelector('#message');
        const feedback = document.querySelector('.feedback');
        const messageContent = document.querySelector('.message-content');

        // checks if a message has been input
        if (message.value === '') {
            feedback.classList.add('show');
            setTimeout(function() {
                feedback.classList.remove('show'), 2000
            })
        } else {
            // if a message has been input it wil be chaged on the page
            messageContent.textContent = message.value;
            message.value = '';
        }
    });
})();