document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('login-form');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const errorMessage = document.getElementById('error-message');

    // *CONFIGURA AQUÍ TUS DOS USUARIOS, CONTRASEÑAS Y URLs DE REDIRECCIÓN*
    const usuarios = [
        { username: "jessi", password: "0712", redirect: "jessi.html" },
        { username: "arianne", password: "1009", redirect: "arianne.html" },
    ];

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const enteredUsername = usernameInput.value;
        const enteredPassword = passwordInput.value;

        let loggedIn = false;
        let redirectURL = "";

        for (const usuario of usuarios) {
            if (enteredUsername === usuario.username && enteredPassword === usuario.password) {
                loggedIn = true;
                redirectURL = usuario.redirect;
                break;
            }
        }

        if (loggedIn) {
            window.location.href = redirectURL;
        } else {
            errorMessage.textContent = "Usuario o contraseña incorrectos.";
            errorMessage.style.display = 'block';
        }
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const audio = document.getElementById("audio");
    const playPauseBtn = document.getElementById("playPauseBtn");
    const seekBar = document.getElementById("seekBar");
    const timeDisplay = document.getElementById("time");

    playPauseBtn.addEventListener("click", function() {
        if (audio.paused) {
            audio.play();
            playPauseBtn.textContent = "⏸";
        } else {
            audio.pause();
            playPauseBtn.textContent = "▶";
        }
    });

    audio.addEventListener("timeupdate", function() {
        seekBar.value = (audio.currentTime / audio.duration) * 100;
        let minutes = Math.floor(audio.currentTime / 60);
        let seconds = Math.floor(audio.currentTime % 60);
        timeDisplay.textContent = any;{minutes}any;{seconds < 10 ? '0' : ''}{seconds};
    });

    seekBar.addEventListener("input", function() {
        audio.currentTime = (seekBar.value / 100) ; audio.duration;
    });
});
