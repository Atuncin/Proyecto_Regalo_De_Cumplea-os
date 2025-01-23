document.addEventListener("DOMContentLoaded", function() {
    const flowerContainer = document.getElementById('flower-container');
    const music = document.getElementById('background-music');
    const playPauseButton = document.getElementById('play-pausa');
    const botondia9 = document.getElementById('dia9');
    const musictitle = document.getElementById('music-title');
    const days = 10; // Número total de días
    const currentDay = getCurrentDay(); // Función para obtener el día actual (1 a 30)
 
    
    // Ruta de la música
    let musicSrc = '';
    let songname =  '';

    if (currentDay === 1) {
        musicSrc = 'Dia1/Ejemplo cancion.m4a';
        songname = 'Nombre de la cancion la cual se visualizara';
        
    } 
    if (currentDay === 2) {
        musicSrc = 'Dia2/....';
        songname = '.....';
       
    }
    if (currentDay === 3) {
        musicSrc = 'Dia3/.....';
        songname = '.....';
       
    }
    if (currentDay === 4) {
        musicSrc = 'Dia4/.....';
        songname = '.....';
       
    }
    if (currentDay === 5) {
        musicSrc = 'Dia5/.....';
        songname = '.....';
       
    }
    if (currentDay === 6) {
        musicSrc = 'Dia6/.....';
        songname = '.....';
       
    }
    if (currentDay === 7) {
        musicSrc = 'Dia7/.....';
        songname = '.....';
       
    }
    if (currentDay === 8) {
        musicSrc = 'Dia8/.....';
        songname = '.....';
       
    }
    if (currentDay === 9) {
        musicSrc = 'Dia9/.....';
        songname = '..... ';
       
    }

    else if (currentDay === 10) {
        musicSrc = '.';
        songname = 'Vamos a ver tus verdaderas flores!' //Mensaje de indicacion para ir a la carpeta de flores amarillas
    }

    if (musicSrc) {
        music.src = musicSrc;
        musictitle.textContent = songname;
    }

    if (currentDay === 10) {
        playPauseButton.style.display = 'none'; // Ocultar el botón de pausa
        botondia9.style.display = 'block'; // Mostrar el botón exclusivo del día 9
    } else {
        playPauseButton.style.display = 'block'; // Mostrar el botón de pausa
        botondia9.style.display = 'none'; // Ocultar el botón exclusivo del día 9
    }


    // Añadir evento al botón de reproducción/pausa
    playPauseButton.addEventListener('click', function() {
        if (music.paused) {
            music.play();
            playPauseButton.textContent = 'Pausa';
        } else {
            music.pause();
            playPauseButton.textContent = 'Play';
        }
    });
});

function getCurrentDay() {
    const startDate = new Date('2025-01-23'); // Fecha de inicio (reemplaza con la fecha en la cual inicie el contador se actualiza segun la hora UTC (Coordinated Universal Time))
    const today = new Date();
    const difference = today - startDate;
    return Math.floor(difference / (1000 * 60 * 60 * 24)) + 1;
} 