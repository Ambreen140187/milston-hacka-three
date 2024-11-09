var form = document.getElementById("Resume-form");
var resume = document.getElementById('resume-display');
form.addEventListener("submit", function (event) {
    // Prevent page reload
    event.preventDefault();
    // Collect input values
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phon = document.getElementById("phon").value;
    var experience = document.getElementById("experience").value;
    var education = document.getElementById("Education").value;
    var skill = document.getElementById("skills").value;
    // Generate resume content dynamically
    var ResumeHtml = "\n        <h2><b>Resume</b></h2>\n        <h3><b>Personal Information</b></h3>\n        <p><b>Name:</b> ".concat(name, "</p>\n        <p><b>Email:</b> ").concat(email, "</p>\n        <p><b>Phone:</b> ").concat(phon, "</p>\n        <h3><b>Experience</b></h3>\n        <p>").concat(experience, "</p>\n        <h3><b>Education</b></h3>\n        <p>").concat(education, "</p>\n        <h3><b>Skills</b></h3>\n        <p>").concat(skill, "</p>");
    // Display the generated resume
    if (resume) {
        resume.innerHTML = ResumeHtml;
    }
    else {
        console.error("The resume display element is missing");
    }
});
