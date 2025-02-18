document.addEventListener("DOMContentLoaded", () => {
    const texto = document.getElementById("texto");
    const toggleBtn = document.getElementById("toggleBtn");

    toggleBtn.addEventListener("click", () => {
        texto.classList.toggle("mostrar");
        toggleBtn.textContent = texto.classList.contains("mostrar") ? "▼" : "▲";
    });
    



    const texto2 = document.getElementById("texto2");
    const toggleBtn2 = document.getElementById("toggleBtn2");

    toggleBtn2.addEventListener("click", () => {
        texto2.classList.toggle("mostrar");
        toggleBtn2.textContent = texto2.classList.contains("mostrar") ? "▼" : "▲";
    });


    const texto3 = document.getElementById("texto3");
    const toggleBtn3 = document.getElementById("toggleBtn3");

    toggleBtn3.addEventListener("click", () => {
        texto3.classList.toggle("mostrar");
        toggleBtn3.textContent = texto3.classList.contains("mostrar") ? "▼" : "▲";
    });
    



    const texto4 = document.getElementById("texto4");
    const toggleBtn4 = document.getElementById("toggleBtn4");

    toggleBtn4.addEventListener("click", () => {
        texto4.classList.toggle("mostrar");
        toggleBtn4.textContent = texto4.classList.contains("mostrar") ? "▼" : "▲";
    });



    const texto5 = document.getElementById("texto5");
    const toggleBtn5 = document.getElementById("toggleBtn5");

    toggleBtn5.addEventListener("click", () => {
        texto5.classList.toggle("mostrar");
        toggleBtn5.textContent = texto5.classList.contains("mostrar") ? "▼" : "▲";
    });
    



    const texto6 = document.getElementById("texto6");
    const toggleBtn6 = document.getElementById("toggleBtn6");

    toggleBtn6.addEventListener("click", () => {
        texto6.classList.toggle("mostrar");
        toggleBtn6.textContent = texto6.classList.contains("mostrar") ? "▼" : "▲";
    });





    const texto7 = document.getElementById("texto7");
    const toggleBtn7 = document.getElementById("toggleBtn7");

    toggleBtn7.addEventListener("click", () => {
        texto7.classList.toggle("mostrar");
        toggleBtn7.textContent = texto7.classList.contains("mostrar") ? "▼" : "▲";
    });
    

});