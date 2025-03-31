// Cambiar Mensajes
const mensajes = [
"Jessica, si yo fuera una flor, tú serías la brisa que me acaricia. 🌸",
"Jessica, si yo fuera un cielo, tú serías mi luna, llena de magia. 🌙",
"Jessica, si yo fuera un árbol, tú serías mis hojas que siempre se renuevan. 🌳",
"Jessica, si yo fuera un mar, tú serías mi ola, siempre constante. 🌊",
"Jessica, si yo fuera una nube, tú serías el sol que me ilumina. ☁",
"Jessica, si yo fuera una melodía, tú serías la nota perfecta. 🎶",
"Jessica, si yo fuera una estrella, tú serías mi brillo más intenso. ✨",
"Jessica, si yo fuera un reloj, tú serías el minuto que siempre quiero detener. ⏰",
"Jessica, si yo fuera una montaña, tú serías mi cima, siempre altiva. 🏞",
"Jessica, si yo fuera un tren, tú serías la estación a la que siempre quiero llegar. 🚂",
"Jessica, si yo fuera un árbol, tú serías el viento que mueve mis ramas. 🍃",
"Jessica, si yo fuera una palmera, tú serías la sombra que me refresca. 🌴",
"Jessica, si yo fuera una estrella fugaz, tú serías el deseo que siempre pido. 🌠",
"Jessica, si yo fuera un río, tú serías mi cauce, mi rumbo. 🌊",
"Jessica, si yo fuera un pájaro, tú serías mi vuelo libre. 🦅",
"Jessica, si yo fuera un fuego, tú serías mi chispa. 🔥",
"Jessica, si yo fuera un mar, tú serías la isla que me acoge. 🌊",
"Jessica, si yo fuera una flor, tú serías la abeja que siempre me visita. 🌸",
"Jessica, si yo fuera un caracol, tú serías mi concha, mi protección. 🐚",
"Jessica, si yo fuera una brújula, tú serías mi norte. 🧭",
"Jessica, si yo fuera un faro, tú serías la luz que siempre me guía. 🗼",
"Jessica, si yo fuera un sueño, tú serías la realidad que quiero vivir. 🌙",
"Jessica, si yo fuera una paleta de colores, tú serías el tono que me hace brillar. 🎨",
"Jessica, si yo fuera un eco, tú serías la respuesta que siempre busco. 📢",
"Jessica, si yo fuera una brisa, tú serías la frescura que me da vida. 🍃",
"Jessica, si yo fuera una luna, tú serías la estrella que me acompaña. 🌙",
"Jessica, si yo fuera un camino, tú serías mi dirección. 🛤",
"Jessica, si yo fuera un sol, tú serías mi luz brillante. 🌞",
"Jessica, si yo fuera una estrella, tú serías mi universo. 🌌",
"Jessica, si yo fuera un océano, tú serías mi ola que siempre vuelve. 🌊",
"Jessica, si yo fuera un libro, tú serías la página que siempre quiero leer. 📚",
"Jessica, si yo fuera un faro, tú serías la roca que me sostiene. 🗼",
"Jessica, si yo fuera una ola, tú serías el mar que siempre me acompaña. 🌊",
"Jessica, si yo fuera una llama, tú serías mi fuego eterno. 🔥",
"Jessica, si yo fuera una nube, tú serías el cielo que me cubre. ☁",
"Jessica, si yo fuera un río, tú serías mi orilla. 🌊",
"Jessica, si yo fuera una semilla, tú serías el suelo que me permite crecer. 🌱",
"Jessica, si yo fuera una melodía, tú serías la armonía que la completa. 🎶",
"Jessica, si yo fuera un faro, tú serías la luz que me ilumina en la oscuridad. 🗼",
"Jessica, si yo fuera una estrella fugaz, tú serías mi deseo. 🌠",
"Jessica, si yo fuera una brisa, tú serías mi viento suave. 🍃",
"Jessica, si yo fuera un árbol, tú serías la sombra que siempre me da paz. 🌳",
"Jessica, si yo fuera una canción, tú serías mi letra. 🎶",
"Jessica, si yo fuera un río, tú serías mi corriente. 🌊",
"Jessica, si yo fuera un volcán, tú serías mi lava. 🌋",
"Jessica, si yo fuera una brújula, tú serías la dirección que siempre busco. 🧭",
"Jessica, si yo fuera un tren, tú serías la estación donde quiero parar. 🚂",
"Jessica, si yo fuera una flor, tú serías el aire que me da vida. 🌸",
"Jessica, si yo fuera una vela, tú serías mi luz. 🕯",
"Jessica, si yo fuera un sol, tú serías mi día brillante. 🌞",
"Jessica, si yo fuera un jardín, tú serías la flor que siempre quiero cuidar. 🌷",
"Jessica, si yo fuera una estrella, tú serías mi cielo, siempre a mi alrededor. ✨",
"Jessica, si yo fuera un libro, tú serías la página que siempre quiero leer. 📖",
"Jessica, si yo fuera un camino, tú serías la dirección correcta. 🛤",
"Jessica, si yo fuera una vela, tú serías mi llama, siempre brillando. 🕯",
"Jessica, si yo fuera un faro, tú serías la luz que me guía. 🗼",
"Jessica, si yo fuera un océano, tú serías mi marea, empujándome a nuevos horizontes. 🌊",
"Jessica, si yo fuera una brújula, tú serías el norte que siempre busco. 🧭",
"Jessica, si yo fuera un río, tú serías mi cauce, dándome forma. 🌊",
"Jessica, si yo fuera un camino, tú serías la dirección correcta. 🛤",
"Jessica, si yo fuera un sol, tú serías mi atardecer, dándome paz. 🌅",
"Jessica, si yo fuera una guitarra, tú serías mi acorde perfecto. 🎸",
"Jessica, si yo fuera un avión, tú serías mi piloto, guiándome alto. ✈",
"Jessica, si yo fuera una palmera, tú serías mi sombra, siempre refrescante. 🌴",
"Jessica, si yo fuera un caracol, tú serías mi concha, protegiéndome siempre. 🐚",
"Jessica, si yo fuera una mariposa, tú serías la flor que me atrae. 🦋",
"Jessica, si yo fuera un reloj, tú serías la hora que siempre quiero que llegue. ⏰",
"Jessica, si yo fuera un arco iris, tú serías el color que siempre me alegra. 🌈",
"Jessica, si yo fuera un viento, tú serías mi brisa, suave y constante. 🍃",
"Jessica, si yo fuera un volcán, tú serías la lava que me da energía. 🌋",
"Jessica, si yo fuera una estrella fugaz, tú serías mi deseo. 🌠",
"Jessica, si yo fuera un árbol, tú serías mi raíz, dándome estabilidad. 🌳",
"Jessica, si yo fuera un mar, tú serías mi isla, mi lugar tranquilo. 🌊",
"Jessica, si yo fuera una paleta de colores, tú serías el tono más brillante. 🎨",
"Jessica, si yo fuera una luna llena, tú serías mi noche clara, llena de luz. 🌙",
"Jessica, si yo fuera un jardín, tú serías la flor más hermosa que crece en él. 🌷",
"Jessica, si yo fuera una melodía, tú serías la armonía que me completa. 🎶",
"Jessica, si yo fuera un mapa, tú serías la ruta que siempre quiero seguir. 🗺",
"Jessica, si yo fuera una hoja en el viento, tú serías mi corriente. 🍂",
"Jessica, si yo fuera una chispa, tú serías el fuego que nunca se apaga. 🔥",
"Jessica, si yo fuera un sueño, tú serías la realidad que quiero alcanzar. 🌙",
"Jessica, si yo fuera un libro, tú serías la página que siempre quiero leer. 📖",
"Jessica, si yo fuera una guitarra, tú serías la cuerda que me da vibración. 🎸",
"Jessica, si yo fuera una brújula, tú serías mi dirección correcta. 🧭",
"Jessica, si yo fuera una ola, tú serías el mar, mi hogar constante. 🌊",
"Jessica, si yo fuera un árbol, tú serías mis hojas, dándome vida. 🌳",
"Jessica, si yo fuera un faro, tú serías la luz que me guía a casa. 🗼",
"Jessica, si yo fuera una mariposa, tú serías mi flor favorita. 🦋",
"Jessica, si yo fuera un sol, tú serías mi luna, siempre reflejándome. 🌞🌙",
"Jessica, si yo fuera un río, tú serías mi cauce, siempre fluyendo. 🌊",
"Jessica, si yo fuera un pájaro, tú serías el aire que me permite volar. 🦅",
"Jessica, si yo fuera una vela, tú serías mi luz en la oscuridad. 🕯",
"Jessica, si yo fuera un sol, tú serías la calidez de mi día. 🌞",
"Jessica, si yo fuera un cielo, tú serías mi estrella fugaz. 🌠",
"Jessica, si yo fuera un camino, tú serías la meta. 🛤",
"Jessica, si yo fuera un océano, tú serías mi marea tranquila. 🌊",
"Jessica, si yo fuera una luna, tú serías el sol que me da vida. 🌙",
"Jessica, si yo fuera un río, tú serías mi dirección hacia la calma. 🌊",
"Jessica, si yo fuera un sol, tú serías mi amanecer. 🌅",
"Jessica, si yo fuera un jardín, tú serías la flor que lo llena de color. 🌸",
"Si fueras un faro, serías el que guía mi barca en medio de la tormenta. La amistad es la luz que nunca se apaga. Antoine de Saint-Exupéry",

"Eres la tinta con la que escribo mis mejores historias. La amistad es el relato que nunca termina. Gabriel García Márquez",

"Como el río que siempre encuentra su cauce, así tu amistad fluye en mi vida. Un amigo es el puente que une almas. Hermann Hesse",

"Si la vida fuera un lienzo, tú serías el color que le da vida. La amistad es el arte de pintar juntos. Frida Kahlo",

"Eres la brújula que me orienta cuando me pierdo. La amistad es el norte que nunca deja de señalar. Julio Cortázar",

"Como la luna refleja la luz del sol, tu amistad ilumina mis noches más oscuras. Los amigos son reflejos de la mejor versión de nosotros. Sylvia Plath",

"Si fueras una estación, serías la primavera, porque con tu presencia todo florece. La amistad es el renacer de la esperanza. Emily Brontë",

"Eres la chispa que enciende mi entusiasmo. La amistad es el fuego que nunca deja de arder. Mark Twain",

"Como la montaña que desafía el viento, tu amistad me da fortaleza. Un verdadero amigo es el refugio que nunca se derrumba. Henry David Thoreau",

"Si la vida fuera un océano, tú serías la ola que me impulsa hacia adelante. La amistad es el mar donde siempre queremos nadar. Virginia Woolf",

"Eres la sombra que me acompaña bajo el sol y la luz que brilla en la oscuridad. La amistad es la presencia que nunca se desvanece. Oscar Wilde",

"Como un reloj que marca el tiempo con precisión, tu amistad siempre está en el momento justo. Un verdadero amigo es el compás que nunca se desajusta. Albert Einstein",

"Si fueras un árbol, serías aquel bajo cuya sombra siempre encuentro paz. La amistad es la raíz que nos mantiene firmes. Johann Wolfgang von Goethe",

"Eres la melodía que mi alma canta sin necesidad de partituras. La amistad es la armonía que nunca desafina. Ludwig van Beethoven",

"Como el fuego en el invierno, tu amistad me envuelve en calidez. Un verdadero amigo es el hogar donde siempre queremos volver. Charles Dickens",

"Si la vida fuera un cuento, tú serías el capítulo más inolvidable. La amistad es la historia que jamás deja de escribirse. Hans Christian Andersen",

"Eres el eco que me devuelve mis propias risas. La amistad es la música que nunca deja de sonar. Jane Austen",

"Como un puente suspendido sobre el abismo, tu amistad me lleva siempre al otro lado. Un verdadero amigo es el lazo que nunca se rompe. Miguel de Cervantes",

"Si fueras un perfume, serías aquel que deja una huella imborrable. La amistad es la esencia que nunca se desvanece. Coco Chanel",

"Eres la pluma con la que firmo los mejores momentos de mi vida. La amistad es la tinta que nunca se borra. Ernest Hemingway",




];

let indexMensaje = 0;
document.getElementById("cambiarMensaje").addEventListener("click", function() {
    indexMensaje = (indexMensaje + 1) % mensajes.length;
    document.getElementById("mensaje").textContent = mensajes[indexMensaje];
});

// Cambiar Música
const musicas = ["jessi.mp3","j1.mp3","j2.mp3","j3.mp3","j4.mp3","j5.mp3","j6.mp3","j7.mp3","j8.mp3","j9.mp3"];

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
