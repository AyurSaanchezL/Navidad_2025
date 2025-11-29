document.addEventListener('DOMContentLoaded', () => {
    const btnAbrir = document.getElementById("btnAbrir");
    const audio = document.getElementById("its_timeee");
    const body = document.body;

    const RETRASO_NAV = 5100;

    btnAbrir.addEventListener('click', (event) => {
        event.preventDefault();
        
        // Añadir clase de apertura
        body.classList.add('opening');
        
        audio.play().then(() => {
            console.log("Audio iniciado. Navegando en " + RETRASO_NAV + "ms.");
            setTimeout(() => {
                window.location.href = btnAbrir.href;
            }, RETRASO_NAV);
        }).catch(error => {
            console.error("Fallo al reproducir el audio. Navegando inmediatamente.", error);
            window.location.href = btnAbrir.href;
        });
    });
});
