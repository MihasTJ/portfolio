const tabLinks = document.querySelectorAll(".tab-links");
const tabContents = document.querySelectorAll(".tab-contents");
const btnBurger = document.querySelector('.burgerbtn');
const navMenu = document.querySelector('#navmenu');
const navMenuItems = document.querySelectorAll('#navmenu li');

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

btnBurger.addEventListener('click',()=>{
    btnBurger.classList.toggle('active-menu');
    navMenu.style.right = navMenu.style.right !== "0px" ? "0px" : "-200px";
})
navMenuItems.forEach((element) =>{
    element.addEventListener('click',()=>{
        navMenu.style.right = "-200px";
    })
})


// -------------- API contact------------------

const scriptURL = 'https://script.google.com/macros/s/AKfycbzqRGsW1lW77dMuQbj4JCVCl7-EIpMNpbxY49z2nC9CH5J9kE0fAFGXlvnsv35QAPBD/exec'
const form = document.forms['submit-to-google-sheet']

form.addEventListener('submit', e => {
e.preventDefault()
fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => console.log('Success!', response))
    .catch(error => console.error('Error!', error.message))
})
