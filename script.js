const tabLinks = document.querySelectorAll(".tab-links");
const tabContents = document.querySelectorAll(".tab-contents");

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
