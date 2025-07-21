document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const phone = document.getElementById('phone').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    if (password === '123qwe') {
        errorMessage.textContent = '';

        const scriptURL = 'https://script.google.com/macros/s/AKfycbx18zfAbDvnMSXXda-Y_VCf0DLKVaQGzbDTZtLGDVPlgG6sw2ZJ_inL0rR72JykIDJHKw/exec'; // <-- Replace with your Google Apps Script Web App URL
        const formData = new FormData(this);

        fetch(scriptURL, { method: 'POST', body: formData})
            .then(response => console.log('Success!', response))
            .catch(error => console.error('Error!', error.message));

        document.getElementById('overlay').style.display = 'flex';

    } else {
        errorMessage.textContent = 'Incorrect password.';
    }
});

document.getElementById('closeBtn').addEventListener('click', function() {
    document.getElementById('overlay').style.display = 'none';
});
