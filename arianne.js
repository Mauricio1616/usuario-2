// Cambiar Mensajes
const mensajes = [   
"Arianne, si yo fuera una brisa, tú serías el viento que me guía. 🍃",
"Arianne, si yo fuera una montaña, tú serías el valle que calma mi espíritu. 🏞",
"Arianne, si yo fuera una estrella, tú serías la luz que ilumina mi camino. 🌟",
"Arianne, si yo fuera un océano, tú serías el barco que me acompaña en cada viaje. 🚢",
"Arianne, si yo fuera un árbol, tú serías la hoja que siempre sigue mis movimientos. 🍃",
"Arianne, si yo fuera una flor, tú serías el agua que me da vida. 🌸",
"Arianne, si yo fuera una estrella fugaz, tú serías el deseo que siempre pido. 🌠",
"Arianne, si yo fuera un libro, tú serías la página que nunca quiero dejar de leer. 📖",
"Arianne, si yo fuera un río, tú serías el cauce que me guía a mi destino. 🌊",
"Arianne, si yo fuera un viaje, tú serías el destino que siempre quiero alcanzar. 🌍",
"Arianne, si yo fuera un sol, tú serías la luna que me da equilibrio. 🌞🌙",
"Arianne, si yo fuera un faro, tú serías la luz que me mantiene en el camino. 🗼",
"Arianne, si yo fuera una mariposa, tú serías la flor que me atrae. 🦋",
"Arianne, si yo fuera una semilla, tú serías el jardín que me hace florecer. 🌱",
"Arianne, si yo fuera un tren, tú serías la vía que me lleva al destino correcto. 🚂",
"Arianne, si yo fuera una nube, tú serías el cielo que me sostiene. ☁️",
"Arianne, si yo fuera una guitarra, tú serías la melodía que da vida a mi música. 🎸",
"Arianne, si yo fuera una hoja, tú serías el viento que me transporta. 🍂",
"Arianne, si yo fuera un reloj, tú serías el momento que siempre quiero detener.⏳⌛", 
"Arianne, si yo fuera un eco, tú serías la respuesta que siempre quiero escuchar. 📢",
"Arianne, si yo fuera una brújula, tú serías mi dirección correcta. 🧭",
"Arianne, si yo fuera un pájaro, tú serías el cielo que me permite volar. 🕊",
"Arianne, si yo fuera un río, tú serías mi orilla, siempre constante. 🌊",
"Arianne, si yo fuera un faro, tú serías la luz que nunca se apaga. 🗼",
"Arianne, si yo fuera un caracol, tú serías mi concha, protegiéndome siempre. 🐚",
"Arianne, si yo fuera un volcán, tú serías la lava que me da vida. 🌋",
"Arianne, si yo fuera un sueño, tú serías mi realidad. 🌙",
"Arianne, si yo fuera un árbol, tú serías la raíz que me sostiene firme. 🌳",
"Arianne, si yo fuera una vela, tú serías la llama que me da calor. 🕯",
"Arianne, si yo fuera una chispa, tú serías el fuego que me ilumina. 🔥",
"Arianne, si yo fuera un sol, tú serías la luz que da color a mi día. 🌞",
"Arianne, si yo fuera un jardín, tú serías la flor que me hace sonreír. 🌸",
"Arianne, si yo fuera un mapa, tú serías la ruta que nunca quiero dejar. 🗺",
"Arianne, si yo fuera un océano, tú serías mi isla, mi refugio. 🌴",
"Arianne, si yo fuera una palmera, tú serías la sombra que me da descanso. 🌴",
"Arianne, si yo fuera una estrella, tú serías mi constelación. ✨",
"Arianne, si yo fuera una luna llena, tú serías la estrella que me acompaña. 🌙",
"Arianne, si yo fuera un viento, tú serías la brisa que me da paz. 🍃",
"Arianne, si yo fuera un cielo, tú serías mi sol brillante. ☀",
"Arianne, si yo fuera un camino, tú serías la huella que dejo atrás. 🛤",
"Arianne, si yo fuera un árbol, tú serías la copa que me da sombra. 🌳",
"Arianne, si yo fuera una melodía, tú serías la armonía que la hace perfecta. 🎶",
"Arianne, si yo fuera una estrella fugaz, tú serías mi sueño realizado. 🌠",
"Arianne, si yo fuera un reloj, tú serías el momento que siempre quiero que llegue. ⏰",
"Arianne, si yo fuera un sol, tú serías mi atardecer, mi paz. 🌅",
"Arianne, si yo fuera un viaje, tú serías la aventura que me llena de emoción. ✈",
"Arianne, si yo fuera un río, tú serías mi cauce que me lleva al mar. 🌊",
"Arianne, si yo fuera un árbol, tú serías mi tronco, dándome fuerza. 🌳",
"Arianne, si yo fuera un caracol, tú serías la concha que me protege. 🐚",
"Arianne, si yo fuera una mariposa, tú serías la flor que me hace volar. 🦋",
"Arianne, si yo fuera un fuego, tú serías la chispa que me enciende. 🔥",
"Arianne, si yo fuera una estrella, tú serías mi luna que me acompaña. 🌙",
"Arianne, si yo fuera un sol, tú serías mi amanecer brillante. 🌞",
"Arianne, si yo fuera una ola, tú serías mi mar profundo. 🌊",
"Arianne, si yo fuera una palmera, tú serías la brisa que me refresca. 🌴",
"Arianne, si yo fuera una estrella, tú serías mi cielo estrellado. ✨",
"Arianne, si yo fuera un viento, tú serías la brisa cálida que me envuelve. 🍃",
"Arianne, si yo fuera un océano, tú serías mi ola más suave. 🌊",
"Arianne, si yo fuera un árbol, tú serías mi sombra refrescante. 🌳",
"Arianne, si yo fuera un río, tú serías mi corriente que me guía. 🌊",
"Arianne, si yo fuera un reloj, tú serías el segundo que marca el tiempo perfecto. ⏰",
"Arianne, si yo fuera un sol, tú serías mi luna, siempre equilibrando mi luz. 🌞🌙",
"Arianne, si yo fuera un campo, tú serías la flor más hermosa que crece en él. 🌻",
"Arianne, si yo fuera una brisa, tú serías el viento suave que acaricia mi piel. 🍃",
"Arianne, si yo fuera un faro, tú serías la luz que me guía hacia la paz. 🗼",
"Arianne, si yo fuera un mar, tú serías mi isla más tranquila. 🌊",
"Arianne, si yo fuera un árbol, tú serías mis raíces, dándome estabilidad. 🌳",
"Arianne, si yo fuera una estrella, tú serías la luz que me acompaña en la oscuridad. ✨",
"Arianne, si yo fuera un océano, tú serías la calma que lo calma. 🌊",
"Arianne, si yo fuera una mariposa, tú serías el aire que me eleva. 🦋",
"Arianne, si yo fuera una flor, tú serías mi aroma más dulce. 🌸",
"Arianne, si yo fuera un sol, tú serías mi noche llena de estrellas. 🌞🌙",
"Arianne, si yo fuera un sueño, tú serías mi despertar. 🌙",
"Arianne, si yo fuera un árbol, tú serías mi tronco, siempre firme. 🌳",
"Arianne, si yo fuera un viento, tú serías la brisa fresca que me renueva. 🍃",
"Arianne, si yo fuera un río, tú serías la orilla que me calma. 🌊",
"Arianne, si yo fuera una flor, tú serías la lluvia que me da vida. 🌸",
"Arianne, si yo fuera un sol, tú serías mi amanecer lleno de promesas. 🌅",
"Arianne, si yo fuera una mariposa, tú serías la flor que me hace sentir libre. 🦋",
"Arianne, si yo fuera un árbol, tú serías la copa que da sombra a mi corazón. 🌳",
"Arianne, si yo fuera un río, tú serías la corriente que me guía hacia la paz. 🌊",
"Arianne, si yo fuera un sol, tú serías la luna que brilla en mi noche. 🌞🌙",
"Arianne, si yo fuera un faro, tú serías la luz que ilumina mi vida. 🗼",
"Arianne, si yo fuera una estrella, tú serías mi constelación, siempre brillante. ✨",
"Arianne, si yo fuera una luna, tú serías mi reflejo, siempre brillante. 🌙",
"Arianne, si yo fuera un sol, tú serías mi razón para brillar. 🌞",
"Arianne, si yo fuera un campo, tú serías la flor que me llena de color. 🌸",
"Arianne, si yo fuera un río, tú serías el agua que me da vida. 🌊",
"Arianne, si yo fuera una mariposa, tú serías el viento que me impulsa a volar. 🦋",
"Arianne, si yo fuera una estrella fugaz, tú serías el deseo que siempre hago. 🌠",
"Arianne, si yo fuera un árbol, tú serías el sol que me alimenta. 🌳",
"Arianne, si yo fuera una flor, tú serías la tierra que me hace crecer. 🌸",
"Arianne, si yo fuera un océano, tú serías la marea que me eleva. 🌊",
"Arianne, si yo fuera un tren, tú serías mi destino. 🚂",
"Arianne, si yo fuera un viento, tú serías el aire que respiro. 🍃",
"Arianne, si yo fuera un sol, tú serías mi día perfecto. 🌞",
"Arianne, si yo fuera una estrella, tú serías mi universo. ✨",
"Arianne, si yo fuera un río, tú serías mi cauce. 🌊",
"Arianne, si yo fuera una luna, tú serías mi sol que me da luz. 🌙🌞",
"Arianne, si yo fuera un océano, tú serías mi calma profunda. 🌊",

"Si fueras un libro, serías mi página favorita, aquella que releo una y otra vez sin cansarme. La amistad es la tinta que nunca se borra. Jorge Luis Borges",  

"Eres el silencio que calma mis ruidos, el puerto donde siempre encuentro paz. La verdadera amistad es el refugio del alma. Rumi",  

"Como el mar abraza la orilla, así tu amistad rodea mi corazón. Amigos son aquellos que encuentran el camino a tu vida y se quedan para siempre. Khalil Gibran",  

"Si la vida fuera un jardín, tú serías la flor que nunca se marchita. La amistad es el perfume que perdura en el tiempo. Pablo Neruda", 

"Eres la melodía que alegra mis días tristes, la canción que nunca deja de sonar en mi corazón. La amistad es la música que nunca se apaga. Ludwig van Beethoven",

"En el mapa de mi vida, tú eres el destino más hermoso. La amistad es el viaje que nunca termina. Jack Kerouac",  

"Si fueras un color, serías el dorado del atardecer, aquel que ilumina todo a su paso. La amistad es la luz que nunca se desvanece. Vincent van Gogh",  

"Como el viento acaricia las hojas, tu amistad mece mi alma con ternura. Los verdaderos amigos son brisas que alivian el calor de la vida. Emily Dickinson",  

"Eres el susurro que calma mis tormentas, la voz que siempre me recuerda quién soy. La amistad es el eco que nunca se pierde. Maya Angelou",  

"Si fueras una constelación, serías la que guía mis noches más oscuras. La amistad es la estrella que nunca deja de brillar. Carl Sagan",  

"En el álbum de mi vida, tú eres la foto que siempre sonríe. La amistad verdadera es el recuerdo que nunca se desvanece. Anaïs Nin",  

"Como el café en las mañanas frías, tu amistad me abriga y me llena de energía. Un verdadero amigo es el aroma que nunca se disipa. Haruki Murakami",  

"Eres el verso que da ritmo a mi poema, la palabra que siempre encuentra su lugar. La amistad es la poesía que se escribe con el corazón. Federico García Lorca",  

"Si la vida fuera un rompecabezas, tú serías la pieza que siempre encaja. La amistad es el hilo que une sin romperse. Jane Austen",  

"Como el fuego en las noches frías, tu amistad me da calor sin quemarme. Los verdaderos amigos son llamas que nunca se apagan. Albert Camus",  

"Eres la sonrisa que ilumina mis días grises, el abrazo que lo cura todo. La amistad es el remedio que nunca falla. Sigmund Freud",  

"Si fueras un camino, serías el que siempre elijo, porque sé que me lleva a casa. La amistad es el destino que nunca se equivoca. J.R.R. Tolkien",  

"En el teatro de mi vida, tú eres el personaje que nunca quiero que se vaya. La amistad es la obra que nunca termina. William Shakespeare",  

"Como el agua calma la sed, tu amistad sacia mi alma. Un verdadero amigo es el manantial que nunca se seca. Lao Tzu",  

"Eres la luz que atraviesa mis sombras, la certeza de que nunca estoy solo. La amistad es el sol que nunca deja de alumbrar. Walt Whitman",  


];

let indexMensaje = 0;
document.getElementById("cambiarMensaje").addEventListener("click", function() {
    indexMensaje = (indexMensaje + 1) % mensajes.length;
    document.getElementById("mensaje").textContent = mensajes[indexMensaje];
});

// Cambiar Música
const musicas = ["ari.mp3","cherry.mp3","tokio.mp3","au1.mp3","au2.mp3","au3.mp3","au4.mp3","au5.mp3","au6.mp3","au7.mp3"];

let indexMusica = 0;
document.getElementById("cambiarMusica").addEventListener("click", function() {
    indexMusica = (indexMusica + 1) % musicas.length;
    document.getElementById("audioPlayer").src = musicas[indexMusica];
    document.getElementById("audioPlayer").play();
});
// Seleccionar el checkbox
const switchButton = document.getElementById("switch");

// Lista de colores aleatorios
const colors = ["#FF5733", "#33FF57", "#3357FF", "#F3FF33", "#FF33F6", "#33FFF3", "#F033FF"];

// Evento de cambio de color
switchButton.addEventListener("click", () => {
    // Elegir un color aleatorio de la lista
    let randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
});
