document.getElementById("quiz-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const answer = document.getElementById("answer").value;

    if (answer.toLowerCase() === "lucas") { // Substitua "data_correta" pela resposta correta.
        document.getElementById("result").classList.remove("hidden");
        
        // Use JavaScript para mostrar a galeria com um efeito suave
        const gallery = document.querySelector(".gallery");
        gallery.style.opacity = 1; // Altera a opacidade para 1
        gallery.style.height = "auto"; // Define a altura como "auto" para revelar a galeria
    } else {
        alert("Resposta incorreta. Tente novamente.");
    }
});