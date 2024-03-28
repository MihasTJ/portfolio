const tabLinks = document.querySelectorAll(".tab-links");
const tabContents = document.querySelectorAll(".tab-contents");
const btnBurger = document.querySelector('.burgerbtn');
const navMenu = document.querySelector('#navmenu');
const navMenuItems = document.querySelectorAll('#navmenu li');

// ------------- about section -----------------
const openLink = (index) => {
    // Remove "active-link" class from all tabLinks elements
    tabLinks.forEach(element => {
        element.classList.remove("active-link");
    });

    // Remove "active-tab" class from all tabContents elements
    tabContents.forEach(element => {
        element.classList.remove("active-tab");
    });

    // Add "active-link" class to the clicked tabLinks element
    tabLinks[index].classList.add("active-link");

    // Add "active-tab" class to the corresponding tabContents element
    tabContents[index].classList.add("active-tab");
};

// Assign openLink function to each tabLinks element
tabLinks.forEach((link, index) => {
    link.addEventListener("click", () => {
        openLink(index);
    });
});

// ------------- burger menu -----------------
btnBurger.addEventListener('click',()=>{
    btnBurger.classList.toggle('active-menu');
    navMenu.style.right = navMenu.style.right !== "0px" ? "0px" : "-200px";
})
navMenuItems.forEach((element) =>{
    element.addEventListener('click',()=>{
        navMenu.style.right = "-200px";
        btnBurger.classList.remove('active-menu');
    })
    
})


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