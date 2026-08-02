document.querySelector('.btn').addEventListener('click',function(e){
e.preventDefault();
alert("Le questionnaire sera ajouté à l'étape suivante 🌿");
});
document.querySelectorAll(".answer").forEach(card => {
    card.addEventListener("click", function () {
        document.querySelectorAll(".answer").forEach(c => c.style.border = "none");
        this.style.border = "3px solid #5c8c63";
    });
});
