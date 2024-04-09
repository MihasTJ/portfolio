// -------------- form contact------------------
const scriptURL = 'https://script.google.com/macros/s/AKfycbx9FAmUsy_cTlHi8_EUH1f0gVAV2VwmDFygJ7X645l31H2p-afqV37RvcCJuD4lJ5Oa/exec';
const form = document.forms['submit-to-google-sheet'];
const msg = document.getElementById("msg");
const variables = document.querySelectorAll('form[name="submit-to-google-sheet"] input, form[name="submit-to-google-sheet"] textarea');

form.addEventListener('submit', e => {
    e.preventDefault();
    // Check if all fields are filled
    let allFieldsFilled = true;
    variables.forEach(variable => {
        if (variable.value.trim() === '') {
            allFieldsFilled = false;
            return;
        }
    });
    if (!allFieldsFilled) {
        msg.innerHTML = "Fill in all fields";
        return;
    }
    // All fields are filled, submit the form
    msg.classList.remove('error', 'successfull');
    msg.innerHTML = "Sending...";
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            msg.classList.add('successfull');
            msg.innerHTML = "Message sent successfully!";
            setTimeout(function () {
                msg.innerHTML = "";
            }, 5000);
            form.reset();
        })
        .catch(error => {
            msg.classList.add('error');
            msg.innerHTML = "An error occurred while sending the message!";
        });
});