document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll("section");

    const options = {
        root: null, // Use the viewport as the root
        rootMargin: "0px",
        threshold: 0.1 // Trigger when 10% of the section is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("section-visible");
                observer.unobserve(entry.target); // Stop observing once the class is added
            }
        });
    }, options);
    sections.forEach(section => {
        observer.observe(section); // Observe each section
    });
});

document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from reloading the page

    // Get form data
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (name && email && message) {
        alert("Thank you for reaching out! We will get back to you soon.");
        // Reset the form
        document.getElementById("contact-form").reset();
    } else {
        alert("Please fill out all fields.");
    }
});
