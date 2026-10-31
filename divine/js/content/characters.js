/* PERSONAJES — una entrada por personaje; el orden define el orden de la revista.
   image:   ruta de su portada, p. ej. "assets/images/aurelia.jpg" (vacío = espacio de relleno)
   gallery: opcional, lista de { src, caption } para añadir más imágenes a su página de perfil */
const characters = [
  {
    firstName: "Mia",
    lastName: "Montgomery",
    color: "#facde4",
    image: "DEF/MIADEFI.png",
    role: "Influenciadora de masas",
    coverLines: [
      "La mujer de rosa",
      "Lo que no sabias de ella"
    ],
    story: "Mia llegó a la cima llevando sobre sus hombros la responsabilidad de cuidar sola de sus hijas y mantener a flote a su familia. A pesar de las dificultades y de todo lo que tuvo que enfrentar, nunca se rindió. Supo salir adelante, abrirse camino en un mundo tan exigente y construir su propio éxito, hasta convertirse en una de las influenciadoras más importantes de la actualidad.",
    curiosities: [
      "No cree en los sucesos paranormales y considera que quienes afirman creer en ellos son un tanto ingenuos. Tiene fe y cree en un poder superior, pero no se identifica con las iglesias ni sus instituciones.",
      "Ama el chocolate y los dulces de una manera casi incontrolable; siente que no podría vivir sin ellos. Su mayor debilidad es el pastel de chocolate, al que adora tanto que presume de su «hombre de chocolate» cada vez que tiene oportunidad.",
      "Es madre de cinco hijas y, aunque hasta ahora no ha conseguido concebir un niño, mantiene la ilusión de tener uno próximamente."
    ],
    interview: [
      {
        question: "¿Lo primero que haces al despertar?",
        answer: "Quitarme los nudos de mi cabello y admirar mi belleza."
      },
      {
        question: "¿Cuántas veces ha contraído matrimonio?",
        answer: "tres veces."
      },
      {
        question: "¿Qué te hace divina?",
        answer: "No lo se, supongo que diosito me hizo con mucho amor."
      }
    ]
  },
  {
    firstName: "Melanie",
    lastName: "Belmond",
    color: "#ff99be",
    image: "DEF/Melanie.png",
    role: "Artista sobre la piel",
    coverLines: [
      "Mi guardarropa, mis reglas",
      "Fanatica del queso"
    ],
    story: "Melanie es una chica común que, desde pequeña, ha sabido salirse con la suya. A pesar de crecer sin sus padres, contó con el apoyo incondicional de su hermano mayor, quien lo dio todo para que tanto ella como su otro hermano disfrutaran de una infancia feliz. Con el tiempo, aprendió a confiar en sí misma y a destacar en aquello que realmente le apasiona. No es solo una rebelde por naturaleza, sino también esa amiga incondicional con la que cualquiera tendría la suerte de contar.",
    curiosities: [
      "Es bastante selectiva a la hora de elegir sus amistades, aunque, cuando está en confianza, no faltan las travesuras y los destrozos por puro aburrimiento.",
      "Es una pésima perdedora, pero disfruta muchísimo pasar tiempo con su pareja, especialmente cuando pueden compartir alguna actividad juntos.",
      "Trabaja ocasionalmente colocando piercings y realizando tatuajes. Gracias a ello, en más de una ocasión ha tenido la oportunidad de encontrarse con algunas celebridades."
    ],
    interview: [
      {
        question: "¿Quién fue la persona que la crió junto a sushermanos?",
        answer: "Mi hermano Malcolm. Él siempre nos cuidó y trabajaba en un restaurante para poder darnos de comer."
      },
      {
        question: "¿Qué sueles hacer cuando no trabajas?",
        answer: "Me gusta ir a clases de baile o, cuando me aburro, ponerme a escribir canciones."
      },
      {
        question: "¿Algo que no perdonarias?",
        answer: "La traición de un amigo. Odio a las personas de doble cara y a quienes disfrutan haciendo daño a los demás."
      }
    ]
  },
  {
    firstName: "Spek",
    lastName: "Cloudveil",
    color: "#f277b8",
    image: "DEF/Spek.png",
    role: "Monarca de las nubes",
    coverLines: [
      "Reina dulce",
      "Su máxima benevolencia"
    ],
    story: "Spek es hija ilegítima de unos monarcas que usurparon el trono de todo un reino. Creció entre el desprecio y la indiferencia, y terminó convirtiéndose en la esposa de una bestia cuyo poder sería capaz de destrozar el mundo bajo sus pies. Sin embargo, ni siquiera las adversidades lograron apagar su bondad. Spek ama a todos los seres por igual y es considerada una mujer única y especial por su gente. No necesita una corona para demostrar que es una verdadera reina; lo demuestra con sus acciones, su compasión y el amor que entrega a quienes la rodean. Hoy, como madre y esposa, dedica sus días a repartir felicidad por todo su reino, demostrando que la grandeza de un monarca no reside en su linaje, sino en su corazón.",
    curiosities: [
      "Su apodo de «Reina Dulce» no es solo un título decorativo: Spek está literalmente hecha de dulces. Aunque parezca increíble, muchos todavía dudan de que su naturaleza sea realmente tan dulce como aparenta.",
      "Es la única capaz de ver quién es realmente la bestia que la acompaña. Conoce sus vivencias y su historia, pero sabe que, detrás de su apariencia aterradora, se encuentra un hombre bueno.",
      "Su relación con sus padres es bastante turbulenta. No los odia, pero tampoco siente demasiado cariño por ellos. Aun así, guarda cierto aprecio por su padre, pues parecía ser el único que notaba su presencia y prestaba atención a sus sentimientos."
    ],
    interview: [
      {
        question: "¿Te gusta cocinar?",
        answer: "¡Me encanta! Aunque lo mío es exclusivamente la repostería. Después de todo, tengo un hombre en casa que ama comer."
      },
      {
        question: "¿Cómo conoció a la bestia que hoy es su esposo?",
        answer: "Lo secuestraron y lo trajeron ante mí. Intenté comprender quién era y qué le había sucedido. Poco a poco comenzamos a conocernos y, sin darme cuenta, terminamos enamorándonos."
      },
      {
        question: "¿Que es lo que mas te gusta de ser reina?",
        answer: "¡Tener el mando de todo! Así puedo asegurarme de que todos estén bien y no les falte nada."
      }
    ]
  },
  {
    firstName: "Lamia",
    lastName: "Morvane",
    color: "#751425",
    image: "DEF/LAMIADEF.png",
    role: "Gobernante de las sombras",
    coverLines: [
      "Bruja sombria",
      "Mala por naturaleza"
    ],
    story: "Lamia es una madre y reina marcada por un pasado doloroso. Hubo un tiempo en el que su juventud estuvo llena de alegría y amor por el hombre que creyó sería el amor de su vida. Sin embargo, todo terminó cuando aquel hombre traicionó su confianza y destrozó lo que ambos habían construido. Consumida por la furia y el rencor, obtuvo un poder inmenso que utilizó para desatar su venganza contra todo aquello que la rodeaba. O al menos así fue hasta el nacimiento de su hijo, pues desde entonces algo en lo más profundo de su ser comenzó a cambiar. Hoy es reina, madre y una auténtica pesadilla para cualquiera que se atreva a poner un pie en sus dominios.",
    curiosities: [
      "Aunque es una bruja y una reina temida, no es tan cruel como aparenta.",
      "Adora a su hijo con todo su corazón; él es lo más valioso que tiene en su vida.",
      "Es amante de la propia Muerte y, de hecho, tiene planeado casarse con él en el futuro."
    ],
    interview: [
      {
        question: "¿Qué recuerdo guardas con más cariño?",
answer: "Cuando nació mi hijo y cuando pasaba tiempo con mi padre. Era un hechicero y un gran hombre."
},
{
  question: "¿Tu mayor miedo?",
  answer: "Que le pase algo a mi hijo."
},
{
  question: "¿Qué opinas de otros reyes?",
  answer: "Me dan completamente igual, aunque le tengo cierto odio a la reina Spek."
      }
    ]
  }
];
