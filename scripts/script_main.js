document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById("btnMusic");
    const song = document.getElementById("song");
    let muted = true;

    button.addEventListener('click', () => {
        muted = !muted;
        if (!muted) {
            // Si NO está 'muted' (es decir, quieres reproducir)
            song.play();
            console.log("PLAY")
            icon.textContent = 'pause'; // Cambia el ícono a 'pause'
        } else {
            // Si está 'muted' (es decir, quieres pausar)
            song.pause();
            icon.textContent = 'play_arrow'; // Cambia el ícono a 'play_arrow' (o el que uses para 'play')
            // Nota: Tu HTML original usa 'play_pause', así que podrías ajustarlo aquí
        }
    });
})