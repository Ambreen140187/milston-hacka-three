const form = document.getElementById("Resume-form") as HTMLFormElement;
const resume = document.getElementById('resume-display') as HTMLDivElement;

form.addEventListener("submit", function(event)  {
    // Prevent page reload
    event.preventDefault();

    // Collect input values
    const name = (document.getElementById("name") as HTMLInputElement).value;
    const email = (document.getElementById("email") as HTMLInputElement).value;
    const phon = (document.getElementById("phon") as HTMLInputElement).value;
    const experience = (document.getElementById("experience") as HTMLInputElement).value;
    const education = (document.getElementById("Education") as HTMLInputElement).value;
    const skill = (document.getElementById("skills") as HTMLInputElement).value;

    // Generate resume content dynamically
    const ResumeHtml = `
        <h2><b>Resume</b></h2>
        <h3><b>Personal Information</b></h3>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phon}</p>
        <h3><b>Experience</b></h3>
        <p>${experience}</p>
        <h3><b>Education</b></h3>
        <p>${education}</p>
        <h3><b>Skills</b></h3>
        <p>${skill}</p>`;

    // Display the generated resume
    if (resume) {
        resume.innerHTML = ResumeHtml;
    } else {
        console.error("The resume display element is missing");
    }
});