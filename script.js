const sections = document.querySelectorAll("section");

window.addEventListener("scroll", ()=>{

sections.forEach(section=>{

const top=window.scrollY;

const offset=section.offsetTop-300;

const height=section.offsetHeight;

if(top>=offset && top<offset+height){

section.classList.add("active");

}
<script>
const form = document.getElementById("contact-form");

form.addEventListener("submit", function(e){
    e.preventDefault();

    emailjs.sendForm(
        "ntd2c0b",
        "11btROuuOHVTVw_uolthV",
        this
    ).then(() => {
        alert("Message sent successfully!");
        form.reset();
    }, (error) => {
        alert("Failed to send message.");
        console.log(error);
    });
});
</script>
});

});