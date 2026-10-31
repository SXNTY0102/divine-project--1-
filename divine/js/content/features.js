/* FEATURES & STORIES — un objeto por artículo.
   accentCharacter:   índice del personaje cuyo color tiñe el artículo
   relatedCharacters: índices de personajes enlazados en la columna "Expediente"
   figures:           opcional, lista de { src, caption } con imágenes dentro del artículo */
const features = [
  {
    category: "Entrevista",
    teaser: "La pareja del momento y su atrevido vestuario de Halloween",
    accentCharacter: 0,
    relatedCharacters: [
      0
    ],
    readingMinutes: 4,
    image: "DEF/PAREJADEF.png",
    headline: "Mia Montgomery: “No es mi culpa que no puedas dejar de mirarme”",
    deck: "La Noche de brujas nos regalo una gran foto y entrevista a la bella modelo y su pareja.",
    paragraphs: [
      "La alfombra roja estaba acostumbrada a recibir grandes estrellas, pero aquella noche de Halloween tuvo una aparición difícil de ignorar. Entre disfraces extravagantes y celebridades compitiendo por llamar la atención, una de las modelos más reconocidas de la industria hizo su entrada acompañada de su esposo. ¿Su elección? Nada menos que una versión muy particular de Bowser y la princesa Peach.",
      "Él, imponente y con una expresión que parecía hacer honor al mismísimo rey de los Koopas, la sostenía entre sus brazos. Ella, por supuesto, lucía como una auténtica princesa, aunque de esas que no necesitan ser rescatadas por nadie. Con su característica seguridad y una sonrisa que parecía decir que toda la alfombra le pertenecía, acaparó inmediatamente los flashes.",
      "Mientras los fotógrafos pedían una pose más, ella notó que uno de ellos llevaba demasiado tiempo apuntando su cámara en su dirección. Sin perder la sonrisa, soltó con absoluta naturalidad: «No es mi culpa que no puedas dejar de mirarme».",
      "Y es que, si algo ha dejado claro a lo largo de su carrera, es que la modestia nunca ha sido precisamente su accesorio favorito.",
      "Definitivamente, Bowser podrá ser el rey de los Koopas, pero esa noche quedó claro quién llevaba la corona.",
    ],
    pullQuote: "«Qué suerte la suya de tener una esposa tan hermosa como yo»",
    closingFigures: [
    { src: "DEF/PAREJADEF.png", caption: "La pareja en la alfombra roja" },
    ]
  },
  {
    category: "Rivalidad",
    teaser: "La guerra fría de la Dulzura y las Sombras",
    accentCharacter: 1,
    relatedCharacters: [
      1,
      3
    ],
    readingMinutes: 3,
    image: "DEF/speklamia.jpg",
    headline: "Spek vs. Lamia: La guerra fría de la Dulzura y las Sombras",
    deck: "Una se caracteriza por su dulzura y bondad, La otra por su frialdad y liderazgo agresivo,",
    paragraphs: [
      "Pocas rivalidades resultan tan opuestas como la de Spek y Lamia. Por un lado, Spek, la dulce reina de los corazones, cuya amabilidad parece no tener límites y que, pese a todo, prefiere mantener las distancias antes que alimentar cualquier conflicto. Por el otro, Lamia, una soberana despiadada que parece encontrar motivos para despreciar absolutamente todo lo que Spek representa.",
      "Su aversión va mucho más allá del característico color rosa: detesta su bondad, su benevolencia y, especialmente, el amor que siente por su esposo. A quien considera una bestia brutal y carente de inteligencia, aunque tampoco olvida que fue incapaz de someterlo a su voluntad. Mientras Lamia encuentra razones para odiarlos, Spek y su monstruoso compañero siguen construyendo juntos un reino y una vida. Dos reinas, dos filosofías y una rivalidad que difícilmente tendrá reconciliación."
    ],
    pullQuote: "Dos reinas, dos mundos: una rivalidad inevitable."
  },
  {
    category: "Momento memorable",
    teaser: "El día que conocí a mi esposa.",
    accentCharacter: 2,
    relatedCharacters: [
      0,
      2
    ],
    readingMinutes: 4,
    image: "DEF/PAREJASPEK.jpg",
    headline: "Una historia de amor que aun no tiene final",
    deck: "Sin ella no seria nada mas que una bestia",
    paragraphs: [
      "Al preguntarle a Algaregor por su recuerdo más preciado, no tarda demasiado en responder. Se trata del día en que conoció a Spek.",
      "«Me tenían encerrado en una jaula. Había perdido la cabeza y quería destrozar todo lo que se me pusiera delante. Estaba furioso, y no me importaba quién estuviera cerca. Entonces llegó ella. Recuerdo haberla visto y... no sé cómo explicarlo. Dejé de querer romper cosas. Era tan pequeña, tan bonita... Nunca había visto a alguien como ella. Pensé que era demasiado buena para estar cerca de una criatura como yo.",
      "Pero no salió corriendo. Tampoco intentó hacerme daño. Se acercó poco a poco, me habló y me dio tiempo para acostumbrarme a ella. Fue la primera que no me miró como si solo fuera un monstruo.",
      "Spek me enseñó muchas cosas. Me hizo entender que no tenía que destrozarlo todo para hacerme escuchar. La quiero muchísimo. Ahora tenemos una pequeña juntos y un reino que cuidar. No podría pedir nada mejor. Ella es mi todo»."
    ],
    pullQuote: "Amo verla cada mañana  y saber que todo a sido real.. y no un sueño."
  },
  {
    category: "Secretos",
    teaser: "Algunos secretos de la bella Mia",
    accentCharacter: 0,
    relatedCharacters: [
      2
    ],
    readingMinutes: 3,
    image: "DEF/MIA.jpg",
    headline: "Mia bajo la lupa: secretos y rumores.",
    deck: "Detrás del camerino y el glamour. Algunos secretos de la bella mia",
    paragraphs: [
      "Detrás de las cámaras, las sesiones fotográficas y su impecable imagen pública, Mia también tiene sus pequeñas peculiaridades. Estos son algunos de los rumores que circulan sobre la modelo, aunque ninguno ha sido confirmado oficialmente.",
      "Celosa en secreto: Se dice que puede ser bastante celosa cuando se trata de sus relaciones. No suele demostrarlo abiertamente, pero quienes la conocen aseguran que tiene su carácter.",
      "Su propia fan número uno: Al parecer, busca su nombre en Google de vez en cuando para revisar qué se dice de ella y mantenerse al tanto de los comentarios.",
      "Las disculpas no son lo suyo: Según algunos rumores, practica frente al espejo de su camerino cuando debe ofrecer disculpas públicas. Admitir que se equivoca nunca ha sido precisamente su fuerte."
    ],
    pullQuote: "«No necesito competir con nadie; sería injusto para las demás»."
  },
];
