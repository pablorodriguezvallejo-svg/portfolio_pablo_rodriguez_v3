/*
  ===============================================================
  GUÍA DE PERSONALIZACIÓN — main.js
  ===============================================================
  Las zonas marcadas con "EDITA AQUÍ" son las que normalmente
  cambiarás al adaptar la web a tus proyectos reales.

  Este archivo controla: idioma, tema, menú móvil, animaciones
  del hero, migración del logo, scroll vertical -> horizontal,
  galería por proximidad, carrusel y lightbox.
  ===============================================================
*/
(() => {
  const body = document.body;
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const clamp = (n, min, max) => Math.min(Math.max(n, min), max);

  /* ============================================================
     EDITA AQUÍ — TEXTOS ES / EN
     ------------------------------------------------------------
     Todo lo que tenga data-i18n en los HTML se alimenta desde
     este objeto. Cambia el texto dentro de "es" y "en".
     No cambies las claves (por ejemplo navProjects), porque son
     los identificadores que usa el HTML.
     ============================================================ */
  const translations = {
    es: {
      navProjects:'Proyectos', 
      navAbout:'Sobre mí', 
      navContact:'Contacto', 
      menu:'Menú', 
      navigation:'Navegación',
      menuDescriptor:'Diseñador gráfico · Animación · Ilustración · Desarrollo',
      heroRole:'Diseñador gráfico', 
      heroLocation:'Ubicado en Madrid',
      heroStatement:'Diseño visual, identidad, ilustración, diseño web, 3D y motion e interacción con un lenguaje entre lo editorial y lo experimental.',
      metaDesign:'01 / DISEÑO', 
      metaAnimation:'02 / ANIMACIÓN', 
      metaIllustration:'03 / ILUSTRACIÓN', 
      metaDevelopment:'04 / DESARROLLO',
      scrollExplore:'Desplázate para explorar', 
      selectedProjects:'Proyectos seleccionados', 
      projectsTitle:'Proyectos<span>.</span>', 
      years:'(2023 — 2026)',
      project1Title:'Animación 3D',
      project1Meta:'Publicidad de marca · Dirección de arte · Animación',
      project2Title:'Identidad de marca',
      project2Meta:'Cybersigilismo · Y2K · Dirección de arte',
      project3Title:'Diseño visual de artículos',
      project3Meta:'Diseño 3D · Publicidad de marca',
      project4Title:'Ilustraciones para Starbucks',
      project4Meta:'Publicidad de marca · Ilustración',
      project5Title:'Bug Brawl',
      project5Meta:'Ilustración · Identidad de marca · Packaging',
      project6Title:'Ilustraciones personales',
      project6Meta:'Ilustración',
      project7Title: 'Revista',
      project7Meta:'Diseño editorial',
      viewProject:'Ver proyecto ↗', 
      keepScrolling:'Sigue desplazándote', 
      projectEnd:'Final / 07', 
      aboutMe:'Sobre mí', 
      about:'Sobre mí',
      aboutPreview:'Creo experiencias digitales que fusionan la estética editorial con la interacción moderna.', moreAbout:'Más sobre mí',
      strategy:'Paquete Adobe', 
      strategyMeta:'Concepto · Investigación · Dirección', 
      design:'Cinema 4D y Blender', 
      designMeta:'Identidad · Editorial · Packaging · Dirección de arte',
      development:'Figma', 
      developmentMeta:'Frontend · Interacción · Motion', 
      contact:'Contacto', 
      letsWork:'Trabajemos juntos',
      contactHeadline:'¿Tienes un proyecto<span>?</span>', 
      social:'Redes', 
      availability:'Disponibilidad', 
      freelance:'Freelance / Colaboraciones',
      footerRole:'Diseñador gráfico / Madrid', 
      creditsLegal:'Créditos y legal ↗',
      aboutRole:'Diseñador gráfico / Madrid', 
      aboutHeadline:'Diseñar con<br><span>intención.</span>',
      aboutLead:'Soy diseñador gráfico con formación en diseño, animación 3D e ilustración. Trabajo entre identidad visual, dirección de arte, diseño digital, motion, ilustración y desarrollo frontend.',
      aboutBody:'Me interesa construir sistemas visuales reconocibles, con una idea clara detrás y una ejecución que pueda funcionar tanto en una pieza estática como en una experiencia digital.',
      currentFocus:'Enfoque actual', 
      currentFocusMeta:'Identidad · Digital · Motion · 3D · Gráfica experimental', 
      capabilities:'Capacidades', 
      whatIDo:'Lo que hago',
      capabilitiesHeadline:'Un lenguaje visual<br>con distintos ritmos.', 
      strategyFull:'Identidad de marca · motion graphics · edición fotográfica · postproducción · diseño editorial',
      coding: 'Diseño y desarrollo web',
      codingFull:'HTML · CSS · JavaScript · GitHub · bibliotecas',
      designFull:'Animación 3D · modelado · iluminación · renderizado', 
      developmentFull:'Prototipado · UI · Animaciones',
      motion:'Procreate y ClipStudio Paint', 
      motionFull:'Ilustración · Diseño de personajes', 
      next:'Siguiente', 
      selectedProjectsLink:'Proyectos seleccionados', 
      madridSpain:'Madrid / España',
      selectedProject:'Proyecto seleccionado', 
      carouselEyebrow:'Dirección de arte / 3D / Motion', 
      carouselEyebrow1:'Animación 3D / Dirección de arte', 
      carouselEyebrow2:'Dirección de arte / Edición fotográfica / Creación de efectos', 
      carouselTitle:'Animación<br><span>3D</span>',
      carouselTitle1:'Animación<br><span>3D</span>',
      carouselTitle2:'Cibersigilismo',
      carouselLead:'Una propuesta visual para una campaña de festival que mezcla volumen, contraste y energía de club con una dirección gráfica oscura y precisa.',
      carouselLead1:'Una animación dinámica 3D que pretende ser el anuncio para la marca de cubos de rubik: "GAN"',
      carouselLead2:'Una serie de figuras que combinan el cibersigilismo y el Y2K.',
      year:'Año', 
      role:'Rol', 
      tools:'Herramientas', 
      direction:'Dirección', 
      directionHeadline:'Energía oscura,<br><span>controlada.</span>', 
      directionHeadline1:'Cubo<br><span>dinámico.</span>',
      directionHeadline2:'Figuras<br><span>experimentales.</span>',
      directionBody:'Para este proyecto universitario decidí crear un anuncio teórico para una marca de cubos de rubik llamada “GAN”. Como esta marca está posicionada como premium dentro del mundo del cubing, intenté lograr esta estética a través del anuncio, haciendo uso de fondos minimalistas, pulidos y oscuros con movimientos y giros suaves del cubo, el producto obtiene la estética de alta calidad que se deseaba.',
      directionBody2: 'Con el fin de establecer mi propio estilo y marca personal, creé estas tres figuras donde se combina el cybersigilismo y el Y2K, demostrando mi estética favorita y con la que me siento más cómodo trabajando.',
      carouselEyebrow3:'Diseño visual / 3D / Publicidad',
      carouselTitle3:'Diseño visual<br><span>de artículos.</span>',
      carouselLead3:'Representación de portadas para artículos de la revista "Jotdown".',
      carouselRole3:'Diseño 3D / Publicidad de marca',
      directionHeadline3:'Portadas<br><span>inmersivas.</span>',
      directionBody3:'En la asignatura de ilustración se nos encargó crear una identidad visual moderna para una publicación de artículos de la revista Jotdown. El ejercicio consistía en crear una portada para tres artículos diferentes. Uno hablaba sobre cómo las criptomonedas no llevarán a nada, otro sobre cómo los ingredientes de los medicamentos suelen proceder del mar y el tercero comparaba el espacio con el ajedrez. Así surgieron estas tres propuestas.',
      carouselEyebrow4:'Ilustración / Branding / Publicidad',
      carouselTitle4:'Ilustraciones<br><span>para Starbucks.</span>',
      carouselLead4:'Propuestas para una campaña de publicidad hipotética para la marca “Starbucks”.',
      carouselRole4:'Ilustración / Branding',
      directionHeadline4:'Publicidad<br><span>llamativa.</span>',
      directionBody4:'En la asignatura de ilustración se nos encargó crear una campaña para la marca de café Starbucks. El ejercicio consistía en crear diferentes versiones de una misma ilustración para distintas festividades del año (San Valentín, Halloween y Navidad), mostrando también el estilo de vida de Nueva York en los proyectos. Así se crearon estas tres ilustraciones, siguiendo un estilo naíf pero disfrutable para hacerlo cercano y amable para el público.',
      galleryEyebrow5:'Ilustración / Identidad de marca / Packaging',
      galleryTitle5:'Bug<br><span>Brawl.</span>',
      galleryLead5:'Juego de cartas funcional y estético creado como trabajo de fin de grado.',
      galleryRole5:'Ilustración / Identidad de marca / Packaging',
      directionHeadline5:'Estética<br><span>funcional.</span>',
      directionBody5:'Bug Brawl es la idea que terminó dando forma a mi trabajo de fin de grado. Decidí crear un juego de cartas con mecánicas y reglas propias, un juego funcional que también presta especial atención al detalle y al estilo artístico. El juego reúne los conceptos de insectos y lucha para crear un universo en el que una gran variedad de personajes se enfrentan entre sí para asegurar la victoria del jugador. El juego está formado por un mazo de 50 cartas (30 bichos y 20 objetos) que se utilizan conjuntamente para crear un juego sencillo pero dinámico, fácil de entender y visualmente llamativo.',
      galleryEyebrow6:'Ilustración',
      galleryEyebrow7:'Diseño editorial',
      galleryTitle6:'Ilustraciones<br><span>personales.</span>',
      gallerytitle7:'Imperfect<br><span>Issue.</span>',
      galleryRole7:'Diseño editorial',
      galleryLead6:'Ilustraciones hechas basadas en mis gustos personales tomando como referencia algunas de mis franquicias favoritas, como One Piece o Pokémon.',
      galleryRole6:'Ilustración',
      directionHeadline6:'Crecimiento<br><span>personal.</span>',
      directionBody6:'Con el fin de crecer como ilustrador y mejorar mi técnica, decidí crear una serie de ilustraciones que mostraran mis aficiones. Para ello, profundicé en mi estilo para perfeccionarlo mientras disfrutaba del proceso. A través de esta serie se representa una colección de mis Pokémon y personajes de anime favoritos desde mi propio punto de vista.',
      workjump3:'Ilustraciones para Starbucks ↗',
      workjump4:'Bug Brawl ↗',
      workjump5:'Ilustraciones personales ↗',
      nextProject:'Siguiente proyecto', 
      workjump:'Identidad de marca ↗', 
      workjump1:'Identidad de marca ↗', 
      directionHeadline7:'Narrativa<br><span>visual.</span>',
      workjump2:'Diseño visual de artículos ↗', 
      workjump6: 'Imperfect Issue ↗',
      dragClick:'Haz clic', 
      backProjects:'Volver a proyectos ↗',
      galleryEyebrow:'Branding / Ilustración / Editorial', 
      galleryTitle:'Identidad<br><span>visual</span>',
      galleryLead:'Un sistema visual para un juego de cartas coleccionables de insectos combatientes, con una dirección inspirada en fantasía oscura, cultura de combate y diseño de cartas.',
      visualSystem:'Sistema visual', 
      visualHeadline:'Un lenguaje visual<br><span>coleccionable.</span>',
      visualBody:'La dirección utiliza formas orgánicas, composición editorial y una paleta de alto contraste. Cada pieza debe funcionar individualmente y, a la vez, sentirse parte del mismo universo.',
      animation3d:'Animación 3D ↗', 
      projectFooter07:'Proyecto / 07',
      projectFooter01:'Proyecto / 01', 
      projectFooter02:'Proyecto / 02',
      projectFooter03:'Proyecto / 03',
      projectFooter04:'Proyecto / 04',
      projectFooter05:'Proyecto / 05',
      projectFooter06:'Proyecto / 06',
      directionbody7:'El diseño de la revista se enfoca en crear una experiencia narrativa visual que conecte con el lector a través de la composición y el uso del espacio.',
      captionKeyVisual:'01 / Visual principal', 
      captionMaterial:'02 / Estudio de materiales', 
      captionType:'03 / Sistema tipográfico', 
      carouselRole:'Dirección de arte / 3D / Motion', 
      carouselRole1:'Dirección de arte / 3D / Motion', 
      carouselRole2:'Dirección de arte / Edición fotográfica / Creación de efectos', 
      galleryRole:'Diseño gráfico / Ilustración / Sistema', 
      previousImage:'Imagen anterior', 
      nextImage:'Siguiente imagen', 
      closeViewer:'Cerrar visor', 
      imageViewer:'Visor de imágenes',
      galleryLead7:'Diseño de revista editorial con enfoque en la narrativa visual y la composición.', 
      home:'Inicio',
      cv__download:'Descargar CV ↗'
    },
    en: {
      navProjects:'Projects', 
      navAbout:'About me', 
      navContact:'Contact', 
      menu:'Menu', 
      navigation:'Navigation',
      menuDescriptor:'Graphic Designer · Animation · Illustration · Development',
      heroRole:'Graphic Designer', 
      heroLocation:'Based in Madrid',
      heroStatement:'Visual design, identity, illustration, web design, 3D and motion and interaction with a language between editorial and experimental.',
      metaDesign:'01 / DESIGN', 
      metaAnimation:'02 / ANIMATION',
      metaIllustration:'03 / ILLUSTRATION', 
      metaDevelopment:'04 / DEVELOPMENT',
      scrollExplore:'Scroll to explore', 
      selectedProjects:'Selected projects', 
      projectsTitle:'Projects<span>.</span>', 
      years:'(2023 — 2026)',
      project1Title:'3D Animation',
      project1Meta:'Brand advertising · Art direction · Animation',
      project2Title:'Brand Identity',
      project2Meta:'Cybersigilism · Y2K · Art direction',
      directionHeadline7:'Visual<br><span>narrative.</span>',
      project3Title:'Article Visual Design',
      project3Meta:'3D design · Brand advertising',
      project4Title:'Illustrations for Starbucks',
      project4Meta:'Brand advertising · Illustration',
      project5Title:'Bug Brawl',
      project5Meta:'Illustration · Brand identity · Packaging',
      project6Title:'Personal Illustrations',
      project6Meta:'Illustration',
      project7Title: 'Magazine',
      project7Meta:'Editorial design',
      viewProject:'View project ↗', 
      keepScrolling:'Keep scrolling', 
      projectEnd:'End / 07', 
      aboutMe:'About me', 
      about:'About',
      aboutPreview:'I create digital experiences that fuse editorial aesthetics with modern interaction.', 
      moreAbout:'More about me',
      strategy:'Adobe package', 
      strategyMeta:'Concept · Research · Direction', 
      design:'Cinema 4D and Blender', 
      designMeta:'Identity · Editorial · Packaging · Art direction',
      development:'Figma', 
      galleryLead7:'Editorial magazine design with a focus on visual narrative and composition.', 
      developmentMeta:'Frontend · Interaction · Motion', 
      contact:'Contact', 
      letsWork:"Let's work together",
      contactHeadline:'Have a project<span>?</span>', 
      social:'Social', 
      availability:'Availability', 
      freelance:'Freelance / Collaborations',
      footerRole:'Graphic Designer / Madrid', 
      creditsLegal:'Credits & legal ↗',
      aboutRole:'Graphic designer / Madrid', 
      aboutHeadline:'Design with<br><span>intent.</span>',
      aboutLead:'I am a graphic designer with a background in design, 3D animation and illustration. I work across visual identity, art direction, digital design, motion, illustration and frontend development.',
      aboutBody:'I am interested in building recognizable visual systems with a clear idea behind them and an execution that can work both as a static piece and as a digital experience.',
      currentFocus:'Current focus', 
      currentFocusMeta:'Identity · Digital · Motion · 3D · Experimental graphics', 
      capabilities:'Capabilities', 
      whatIDo:'What I do',
      capabilitiesHeadline:'A visual toolkit<br>with different speeds.', 
      strategyFull:'Brand identity · motion graphics · photographic editing · post-production · editorial design',
      coding: 'Web design and development',
      codingFull:'HTML · CSS · JavaScript · GitHub · libraries',
      designFull:'3D Animation · modeling · lighting · rendering', 
      developmentFull:'Prototyping · UI · Animations',
      motion:'Procreate and ClipStudio Paint', 
      motionFull:'Illustration · character design', 
      next:'Next', 
      selectedProjectsLink:'Selected projects', 
      madridSpain:'Madrid / Spain',
      selectedProject:'Selected project', 
      carouselEyebrow:'Art direction / 3D / Motion', 
      carouselEyebrow1:'Art direction / 3D / Motion', 
      carouselEyebrow2:'Art direction / Photo editing / Effect creation', 
      carouselTitle:'3D<br><span>Animation</span>',
      carouselTitle1:'3D<br><span>Animation</span>',
      carouselTitle2:'Cybersigilism',
      carouselLead:'A visual proposal for a festival campaign mixing volume, contrast and club energy with a dark and precise art direction.',
      carouselLead1:'A dynamic 3D animation intended to be the advertisement for the GAN Rubiks cube brand.',
      carouselLead2:'A series of figures that combine cybersigilism and Y2K.',
      year:'Year', 
      role:'Role', 
      projectFooter07:'Project / 07',
      tools:'Tools', 
      direction:'Direction', 
      directionbody7:'The magazine design focuses on creating a visual narrative experience that connects with the reader through composition and the use of space.',
      directionHeadline:'Dark energy,<br><span>controlled.</span>', 
      directionHeadline1:'Dynamic<br><span>cube.</span>',
      directionHeadline2:'Experimental<br><span>figures.</span>',
      directionBody:'For this college Project I decided to create a theoretical advertisement for a rubik´s speedcube brand called “GAN”. As this brand is positioned as high-end inside the world of cubing, I tried to achieve this aesthetic through the ad, by making use of minimalist, polished and dark backgrounds with smooth cube movements and spins, the product gets the high quality aesthetic that was desired.',
      directionBody2: 'In order to set my own personal style and brand, I created those three figures where cybersigilism and Y2K are combined, proving my favourite aesthetic and with what I feel more comfortable working with.',
      carouselEyebrow3:'Visual design / 3D / Advertising',
      carouselTitle3:'Article Visual<br><span>Design.</span>',
      carouselLead3:'Cover designs for articles from Jotdown magazine.',
      carouselRole3:'3D Design / Brand advertising',
      directionHeadline3:'Immersive<br><span>covers.</span>',
      directionBody3:'We were tasked in the illustration course to create a modern visual identity for an article publication for Jotdown magazine. The task demanded creating a cover for three different articles. One of them talked about how cryptocurrencies won’t lead to anything, another about how ingredients for medicines usually come from the sea, and the other compared space with chess. That is how these three proposals were created.',
      carouselEyebrow4:'Illustration / Branding / Advertising',
      carouselTitle4:'Illustrations<br><span>for Starbucks.</span>',
      carouselLead4:'Proposals for a hypothetical advertising campaign for the Starbucks brand.',
      carouselRole4:'Illustration / Branding',
      directionHeadline4:'Eye-catching<br><span>advertising.</span>',
      directionBody4:'We were tasked in the illustration course to create a campaign for the coffee brand Starbucks. The duty was to create different versions of the same illustration for different holidays of the year (Valentine’s, Halloween and Christmas), also showing the New York City lifestyle in the projects. That is how these three illustrations were created, following a naive but enjoyable style to make it friendly for the audience.',
      galleryEyebrow5:'Illustration / Brand identity / Packaging',
      galleryTitle5:'Bug<br><span>Brawl.</span>',
      galleryLead5:'A functional and aesthetic card game created as my final degree project.',
      galleryRole5:'Illustration / Brand identity / Packaging',
      directionHeadline5:'Functional<br><span>aesthetics.</span>',
      directionBody5:'Bug Brawl is the idea that ended up assembling my thesis. I decided to create a card game with its own mechanics and rules, a functional game that also widely focuses on attention to detail and art style. The game brings together the concepts of insects and fighting to create a universe where a great variety of characters fight each other to secure the player’s victory. The game is formed by a deck of 50 cards (30 bugs and 20 objects) that are used together to create a simple but dynamic game, easy to understand and eye-catching.',
      galleryEyebrow6:'Illustration',
      galleryEyebrow7:'Editorial design',
      galleryTitle6:'Personal<br><span>illustrations.</span>',
      gallerytitle7:'Imperfect<br><span>Issue.</span>',
      galleryRole7:'Editorial design',
      galleryLead6:'Illustrations based on my personal tastes, taking inspiration from some of my favourite franchises, such as One Piece and Pokémon.',
      galleryRole6:'Illustration',
      directionHeadline6:'Personal<br><span>growth.</span>',
      directionBody6:'In order to grow as an illustrator and improve my technique I decided to create a series of illustrations showing my hobbies. For this I dug deep into my style to refine it at the same time I enjoyed the process. Through this series a collection of my favourite Pokémon and anime characters are depicted through my point of view.',
      workjump3:'Illustrations for Starbucks ↗',
      workjump4:'Bug Brawl ↗',
      workjump5:'Personal Illustrations ↗',
      nextProject:'Next project', 
      workjump:'Brand Identity ↗', 
      workjump1:'Brand Identity ↗',
      workjump2:'Visual article design ↗',
      workjump6: 'Imperfect Issue ↗',
      dragClick:'Click', 
      backProjects:'Back to projects ↗',
      galleryEyebrow:'Branding / Illustration / Editorial', 
      galleryTitle:'Brand<br><span>Identity</span>',
      galleryLead:'A visual system for a collectible card game about fighting insects, with a direction inspired by dark fantasy, combat culture and card design.',
      visualSystem:'Visual system', 
      visualHeadline:'A collectible<br><span>visual language.</span>',
      visualBody:'The direction uses organic forms, editorial composition and a high-contrast palette. Each piece should work individually while still feeling part of the same universe.',
      animation3d:'3D Animation ↗', 
      projectFooter01:'Project / 01', 
      projectFooter02:'Project / 02',
      projectFooter03:'Project / 03',
      projectFooter04:'Project / 04',
      projectFooter05:'Project / 05',
      projectFooter06:'Project / 06',
      captionKeyVisual:'01 / Key visual', 
      captionMaterial:'02 / Material study', 
      captionType:'03 / Typography system', 
      carouselRole:'Art direction / 3D / Motion', 
      carouselRole1:'Art direction / 3D / Motion',
      carouselRole2:'Art direction / Photo editing / effect creation',  
      galleryRole:'Graphic design / Illustration / System', 
      previousImage:'Previous image', 
      nextImage:'Next image', 
      closeViewer:'Close viewer', 
      imageViewer:'Image viewer', 
      home:'Home',
      cv__download:'Download CV ↗'
    }
  };

  /* ============================================================
     EDITA AQUÍ — TÍTULO Y META DESCRIPTION DE CADA PÁGINA
     ------------------------------------------------------------
     Esto es lo que aparece en la pestaña del navegador y en
     parte de la información SEO de la página.
     ============================================================ */
  const pageCopy = {
    home: {
      es: { title:'Pablo Rodríguez — Diseñador gráfico', description:'Portfolio de Pablo Rodríguez, diseñador gráfico ubicado en Madrid. Diseño, animación, ilustración y desarrollo visual.' },
      en: { title:'Pablo Rodríguez — Graphic Designer', description:'Portfolio of Pablo Rodríguez, graphic designer based in Madrid. Design, animation, illustration and visual development.' }
    },
    about: {
      es: { title:'Sobre mí — Pablo Rodríguez', description:'Sobre Pablo Rodríguez — diseñador gráfico ubicado en Madrid.' },
      en: { title:'About me — Pablo Rodríguez', description:'About Pablo Rodríguez — graphic designer based in Madrid.' }
    },
    project1: {
      es: { title:'Animación 3D — Pablo Rodríguez', description:'Animación 3D, dirección de arte y motion de Pablo Rodríguez.' },
      en: { title:'3D Animation — Pablo Rodríguez', description:'3D animation, art direction and motion by Pablo Rodríguez.' }
    },
    project2: {
      es: { title:'Identidad de marca — Pablo Rodríguez', description:'Cibersigilismo, Y2K y dirección de arte de Pablo Rodríguez.' },
      en: { title:'Brand Identity — Pablo Rodríguez', description:'Cybersigilism, Y2K and art direction by Pablo Rodríguez.' }
    },
    project3: {
      es: { title:'Diseño visual de artículos — Pablo Rodríguez', description:'Diseño 3D y publicidad de marca para portadas de artículos de Jotdown.' },
      en: { title:'Article Visual Design — Pablo Rodríguez', description:'3D design and brand advertising for Jotdown article covers.' }
    },
    project4: {
      es: { title:'Ilustraciones para Starbucks — Pablo Rodríguez', description:'Ilustración y branding para una campaña publicitaria hipotética de Starbucks.' },
      en: { title:'Illustrations for Starbucks — Pablo Rodríguez', description:'Illustration and branding for a hypothetical Starbucks advertising campaign.' }
    },
    project5: {
      es: { title:'Bug Brawl — Pablo Rodríguez', description:'Juego de cartas funcional y estético creado como trabajo de fin de grado.' },
      en: { title:'Bug Brawl — Pablo Rodríguez', description:'A functional and aesthetic card game created as a final degree project.' }
    },
    project6: {
      es: { title:'Ilustraciones personales — Pablo Rodríguez', description:'Serie de ilustraciones personales inspiradas en Pokémon, One Piece y otras franquicias favoritas.' },
      en: { title:'Personal Illustrations — Pablo Rodríguez', description:'A personal illustration series inspired by Pokémon, One Piece and favourite franchises.' }
    },
    project7: {
      es: { title:'Imperfect Issue — Pablo Rodríguez', description:'Diseño de revista editorial con enfoque en la narrativa visual y la composición.' },
      en: { title:'Imperfect Issue — Pablo Rodríguez', description:'Editorial magazine design with focus on visual storytelling and composition.' }
    }
  };

  /* Detecta qué plantilla está abierta para aplicar el SEO correcto.
     Normalmente no necesitas tocar esta función. */
  const getPageKey = () => {
    if (body.classList.contains('about-page') || body.classList.contains('inner-page')) return 'about';
    if (body.classList.contains('project-page')) {
      const projectNumber = body.dataset.project;
      if (projectNumber) return `project${projectNumber}`;
      return document.querySelector('[data-proximity-gallery]') ? 'project5' : 'project1';
    }
    return 'home';
  };

  /* ============================================================
     TEMA — DARK / LIGHT
     ------------------------------------------------------------
     El tema visual se define principalmente en styles.css.
     Aquí solo guardamos la preferencia y actualizamos el botón.
     ============================================================ */
const applyTheme = (theme) => {
    const normalized = theme === 'light' ? 'light' : 'dark';

    document.documentElement.dataset.theme = normalized;

    // Cambiar el logo según el tema
    const logoSrc = normalized === 'light'
        ? 'assets/logo-dark.svg'
        : 'assets/logo-white.svg';

    document.querySelectorAll('[data-site-logo]').forEach(logo => {
        logo.src = logoSrc;
    });

    try {
        localStorage.setItem('portfolio-theme', normalized);
    } catch {}

    document.querySelectorAll('[data-theme-label]').forEach(el => {
        el.textContent = normalized === 'light'
            ? (document.documentElement.lang === 'es' ? 'Claro' : 'Light')
            : (document.documentElement.lang === 'es' ? 'Oscuro' : 'Dark');
    });

    document.querySelectorAll('[data-theme-symbol]').forEach(el => {
        el.textContent = normalized === 'light' ? '☼' : '◐';
    });

    document.querySelectorAll('[data-theme-toggle]').forEach(btn => {
        btn.setAttribute(
            'aria-label',
            normalized === 'light'
                ? (document.documentElement.lang === 'es'
                    ? 'Cambiar a modo oscuro'
                    : 'Switch to dark mode')
                : (document.documentElement.lang === 'es'
                    ? 'Cambiar a modo claro'
                    : 'Switch to light mode')
        );

        btn.setAttribute(
            'aria-pressed',
            String(normalized === 'light')
        );
    });
};
  /* ============================================================
     IDIOMA — ESPAÑOL / INGLÉS
     ------------------------------------------------------------
     Cambia textos, <html lang>, title y description.
     ============================================================ */
  const applyLanguage = (lang) => {
    const normalized = lang === 'en' ? 'en' : 'es';
    document.documentElement.lang = normalized;
    const copy = translations[normalized];
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.dataset.i18n;
      if (copy[key] !== undefined) el.textContent = copy[key];
    });
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
      const key = el.dataset.i18nHtml;
      if (copy[key] !== undefined) el.innerHTML = copy[key];
    });
    document.querySelectorAll('[data-i18n-aria]').forEach(el => {
      const key = el.dataset.i18nAria;
      if (copy[key] !== undefined) el.setAttribute('aria-label', copy[key]);
    });
    document.querySelectorAll('[data-lang-current]').forEach(el => { el.textContent = normalized.toUpperCase(); });
    document.querySelectorAll('[data-lang-other]').forEach(el => { el.textContent = normalized === 'es' ? 'EN' : 'ES'; });
    document.querySelectorAll('[data-lang-toggle]').forEach(btn => btn.setAttribute('aria-label', normalized === 'es' ? 'Switch to English' : 'Cambiar a español'));
    const copyForPage = pageCopy[getPageKey()][normalized];
    document.title = copyForPage.title;
    const description = document.querySelector('meta[name="description"]');
    if (description) description.setAttribute('content', copyForPage.description);
    const themeColor = document.querySelector('meta[name="theme-color"]');
    if (themeColor) themeColor.setAttribute('content', normalized === 'light' ? '#f2f1eb' : '#090909');
    try { localStorage.setItem('portfolio-lang', normalized); } catch {}
    applyTheme(document.documentElement.dataset.theme || 'dark');
  };

  document.querySelectorAll('[data-theme-toggle]').forEach(btn => btn.addEventListener('click', () => {
    applyTheme(document.documentElement.dataset.theme === 'light' ? 'dark' : 'light');
  }));
  document.querySelectorAll('[data-lang-toggle]').forEach(btn => btn.addEventListener('click', () => {
    applyLanguage(document.documentElement.lang === 'en' ? 'es' : 'en');
  }));
  applyLanguage(document.documentElement.lang || 'es');

  /* ============================================================
     NAVEGACIÓN / MENÚ MÓVIL
     ------------------------------------------------------------
     EDITA LOS ENLACES en los HTML, no aquí.
     Aquí solo se controla abrir/cerrar el menú.
     ============================================================ */
  const header = document.querySelector('[data-header]');
  const toggle = document.querySelector('.menu-toggle');
  const menu = document.getElementById('mobile-menu');
  const closeMenu = () => {
    if (!toggle || !menu) return;
    toggle.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
    menu.hidden = true;
    body.classList.remove('menu-open');
  };
  if (toggle && menu) {
    toggle.addEventListener('click', () => {
      const open = toggle.getAttribute('aria-expanded') === 'true';

      if (open) {
        closeMenu();
      } else {
        toggle.classList.add('is-open');
        toggle.setAttribute('aria-expanded', 'true');
        menu.hidden = false;
        body.classList.add('menu-open');
      }
    });

    // Cerrar al seleccionar una sección.
    menu.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));

    // Cerrar haciendo clic en una zona vacía del overlay.
    menu.addEventListener('click', event => {
      if (event.target === menu) closeMenu();
    });

    // Cerrar con Escape.
    document.addEventListener('keydown', event => {
      if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
        closeMenu();
        toggle.focus();
      }
    });

    // Si se cambia a escritorio con el menú abierto, restablecer su estado.
    window.addEventListener('resize', () => {
      if (window.innerWidth >= 700) closeMenu();
    }, { passive: true });
  }
  window.addEventListener('scroll', () => header?.classList.toggle('is-scrolled', window.scrollY > 40), { passive: true });

  /* ============================================================
     HERO — ANIMACIÓN DEL NOMBRE
     ------------------------------------------------------------
     La intensidad del efecto se puede ajustar en este bloque.
     La apariencia visual de las letras se controla en CSS.
     ============================================================ */
  const magneticText = document.querySelector('[data-magnetic-text]');
  if (magneticText) {
    const value = magneticText.dataset.magneticText || '';
    magneticText.innerHTML = [...value].map((char, i) => char === ' ' ? '<span class="word-space">&nbsp;</span>' : `<span data-letter="${i}">${char}</span>`).join('');
    const letters = [...magneticText.querySelectorAll('[data-letter]')];
    if (!reduceMotion) {
      magneticText.addEventListener('pointermove', (event) => {
        const rect = magneticText.getBoundingClientRect();
        const pointerX = event.clientX;
        letters.forEach((letter, i) => {
          const r = letter.getBoundingClientRect();
          const cx = r.left + r.width / 2;
          const distance = Math.abs(pointerX - cx);
          const influence = clamp(1 - distance / 130, 0, 1);
          letter.style.transform = `translate3d(0, ${-influence * (8 + (i % 3) * 4)}px, 0) rotate(${(cx < pointerX ? 1 : -1) * influence * 1.8}deg)`;
          letter.style.filter = influence > .55 ? 'blur(.1px)' : '';
          letter.style.color = influence > .78 ? 'var(--acid)' : '';
        });
        magneticText.style.setProperty('--mouse-x', `${((pointerX - rect.left) / rect.width) * 100}%`);
      });
      magneticText.addEventListener('pointerleave', () => {
        letters.forEach(l => { l.style.transform = ''; l.style.filter = ''; l.style.color = ''; });
      });
      const scrambleOnce = () => {
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789<>[]/\\';
        let frame = 0;
        const maxFrames = 9;
          const original = letters.map(letter => letter.textContent);
        const timer = setInterval(() => {
          magneticText.querySelectorAll('[data-letter]').forEach((letter, i) => {
            if (frame < maxFrames && Math.random() < .7) letter.textContent = chars[Math.floor(Math.random() * chars.length)];
            else letter.textContent = original[i];
          });
          frame++;
          if (frame > maxFrames) clearInterval(timer);
        }, 35);
      };
      magneticText.addEventListener('mouseenter', scrambleOnce, { once: false });
    }
  }

  /* Hero slideshow + media parallax */
  const heroSlides = [...document.querySelectorAll('.hero-slide')];
  const heroCount = document.querySelector('[data-hero-count]');
  if (heroSlides.length > 1) {
    let current = 0;
    const advance = () => {
      heroSlides[current].classList.remove('is-active');
      current = (current + 1) % heroSlides.length;
      heroSlides[current].classList.add('is-active');
      if (heroCount) heroCount.textContent = String(current + 1).padStart(2, '0');
    };
    if (!reduceMotion) window.setInterval(advance, 4200);
  }
  const heroMedia = document.querySelector('[data-hero-media]');
  if (heroMedia && !reduceMotion) {
    heroMedia.addEventListener('pointermove', e => {
      const r = heroMedia.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - .5;
      const y = (e.clientY - r.top) / r.height - .5;
      heroMedia.style.transform = `translate3d(${x * 8}px, ${y * 8}px, 0)`;
    });
    heroMedia.addEventListener('pointerleave', () => { heroMedia.style.transform = ''; });
  }

  /* Hero logo migration: the large logo visually travels into the navbar. */
  const heroLogoWrap = document.querySelector('[data-hero-logo-wrap]');
  const heroLogo = document.querySelector('[data-hero-logo]');
  const navLogo = document.querySelector('.site-logo--nav');
  let logoState = null;
  function measureLogo() {
    if (!heroLogoWrap || !heroLogo || !navLogo) return;
    const r = heroLogo.getBoundingClientRect();
    const n = navLogo.querySelector('.logo-mark')?.getBoundingClientRect() || navLogo.getBoundingClientRect();
    logoState = {
      startX: r.left,
      startY: r.top,
      targetX: n.left,
      targetY: n.top,
      startW: r.width,
      targetW: n.width
    };
  }
  measureLogo();
  window.addEventListener('resize', measureLogo);
  let lastLogoFrame = 0;
  function updateLogoMigration() {
    if (!heroLogo || !logoState || window.innerWidth < 700) return;
    const progress = clamp(window.scrollY / Math.max(window.innerHeight * .7, 480), 0, 1);
    const x = logoState.startX + (logoState.targetX - logoState.startX) * progress;
    const y = logoState.startY + (logoState.targetY - logoState.startY) * progress;
    const scale = 1 - .8 * progress;
    heroLogo.style.position = 'fixed';
    heroLogo.style.left = '0';
    heroLogo.style.top = '0';
    heroLogo.style.transform = `translate3d(${x}px, ${y}px, 0) scale(${scale})`;
    heroLogo.style.opacity = String(1 - progress);
    heroLogo.style.pointerEvents = progress > .8 ? 'none' : 'auto';
    navLogo.style.opacity = String(progress > .94 ? 1 : 0);
    navLogo.style.pointerEvents = progress > .94 ? 'auto' : 'none';
    if (performance.now() - lastLogoFrame > 20) lastLogoFrame = performance.now();
  }
  if (heroLogo && navLogo && window.innerWidth >= 700 && !reduceMotion) {
    window.addEventListener('scroll', updateLogoMigration, { passive: true });
    requestAnimationFrame(updateLogoMigration);
  } else if (navLogo) {
    // En móvil no animamos el logo desde el hero: permanece visible en el navbar.
    navLogo.style.opacity = '1';
    navLogo.style.pointerEvents = 'auto';
  }

  /* ============================================================
     PROJECTS — SCROLL VERTICAL -> MOVIMIENTO HORIZONTAL
     ------------------------------------------------------------
     IMPORTANTE: el usuario NO hace scroll horizontal directamente.
     La posición vertical determina cuánto se desplaza el track.

     Para cambiar la velocidad/duración del recorrido, ajusta
     la altura de .projects en CSS o la lógica de este bloque.
     ============================================================ */
  const section = document.querySelector('[data-horizontal-section]');
  const viewport = document.querySelector('[data-horizontal-viewport]');
  const track = document.querySelector('[data-horizontal-track]');
  const progressBar = document.querySelector('[data-progress-bar]');
  const progressLabel = document.querySelector('[data-project-progress]');
  if (section && viewport && track) {
    const cards = [...track.querySelectorAll('[data-project-card]')];
    let overflow = 0;
    let ticking = false;

    const measureHorizontal = () => {
      const viewportWidth = viewport.clientWidth;
      overflow = Math.max(0, track.scrollWidth - viewportWidth);
      const minHeight = window.innerHeight + overflow;
      section.style.height = `${Math.max(window.innerHeight + 1, minHeight)}px`;
    };
    const updateHorizontal = () => {
      ticking = false;
      const r = section.getBoundingClientRect();
      const distance = Math.max(section.offsetHeight - window.innerHeight, 1);
      const progress = clamp(-r.top / distance, 0, 1);
      const x = overflow * progress;
      track.style.transform = `translate3d(${-x}px, 0, 0)`;
      if (progressBar) progressBar.style.width = `${progress * 100}%`;
      if (progressLabel && cards.length) {
        const idx = clamp(Math.floor(progress * cards.length) + 1, 1, cards.length);
        progressLabel.textContent = `${String(idx).padStart(2,'0')} / ${String(cards.length).padStart(2,'0')}`;
      }
      cards.forEach((card, i) => {
        const center = i / Math.max(cards.length - 1, 1);
        const distanceFrom = Math.abs(progress - center);
        const influence = clamp(1 - distanceFrom * 3.2, 0, 1);
        card.style.setProperty('--focus', influence.toFixed(3));
      });
    };
    const onScroll = () => { if (!ticking) { ticking = true; requestAnimationFrame(updateHorizontal); } };
    measureHorizontal();
    updateHorizontal();
    window.addEventListener('resize', () => { measureHorizontal(); updateHorizontal(); });
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  /* Aparición del titular de contacto cuando entra en viewport. */
  const revealTargets = document.querySelectorAll('[data-contact-reveal]');
  if (revealTargets.length && 'IntersectionObserver' in window) {
    const io = new IntersectionObserver(entries => entries.forEach(entry => entry.isIntersecting && entry.target.classList.add('is-visible')), { threshold: .25 });
    revealTargets.forEach(el => io.observe(el));
  }

  /* ============================================================
     ABOUT — TILT 3D DEL RETRATO
     ------------------------------------------------------------
     Ajusta rotateX / rotateY / translate3d si quieres más o menos
     intensidad en el hover.
     ============================================================ */
  const tiltCards = document.querySelectorAll('[data-tilt-card]');
  tiltCards.forEach(card => {
    if (reduceMotion) return;
    card.addEventListener('pointermove', e => {
      if (window.innerWidth < 700) return;
      const r = card.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - .5;
      const y = (e.clientY - r.top) / r.height - .5;
      card.style.transform = `perspective(1100px) rotateX(${y * -4}deg) rotateY(${x * 5}deg) translate3d(${x * 4}px,${y * 4}px,0)`;
      card.style.setProperty('--mx', `${(x + .5) * 100}%`);
      card.style.setProperty('--my', `${(y + .5) * 100}%`);
    });
    card.addEventListener('pointerleave', () => { card.style.transform = ''; });
  });

  /* ============================================================
     ENLACES MAGNÉTICOS
     ------------------------------------------------------------
     Cambia los multiplicadores x*.03 / y*.08 para hacer el
     efecto más o menos intenso.
     ============================================================ */
  document.querySelectorAll('[data-magnetic-link]').forEach(link => {
    if (reduceMotion) return;
    link.addEventListener('pointermove', e => {
      const r = link.getBoundingClientRect();
      const x = e.clientX - (r.left + r.width / 2);
      const y = e.clientY - (r.top + r.height / 2);
      link.style.transform = `translate3d(${x * .03}px, ${y * .08}px, 0)`;
    });
    link.addEventListener('pointerleave', () => { link.style.transform = ''; });
  });

  /* ============================================================
     GALLERY — PROXIMITY EFFECT
     ------------------------------------------------------------
     "360" = radio de influencia del cursor.
     ".055" = escala máxima de ampliación.
     Cambia esos valores para hacer el efecto más fuerte/sutil.
     ============================================================ */
  const gallery = document.querySelector('[data-proximity-gallery]');
  if (gallery) {
    const items = [...gallery.querySelectorAll('.gallery-item')];
    gallery.addEventListener('pointermove', e => {
      const isDesktop = window.innerWidth >= 900;
      if (!isDesktop) return;
      items.forEach(item => {
        const r = item.getBoundingClientRect();
        const cx = r.left + r.width / 2;
        const cy = r.top + r.height / 2;
        const d = Math.hypot(e.clientX - cx, e.clientY - cy);
        const influence = clamp(1 - d / 360, 0, 1);
        item.style.transform = `translate3d(0, ${-influence * 6}px, 0) scale(${1 + influence * .055})`;
        item.style.setProperty('--mx', `${clamp(((e.clientX - r.left) / r.width) * 100,0,100)}%`);
        item.style.setProperty('--my', `${clamp(((e.clientY - r.top) / r.height) * 100,0,100)}%`);
        item.style.zIndex = String(Math.round(influence * 20));
      });
    });
    gallery.addEventListener('pointerleave', () => items.forEach(item => { item.style.transform = ''; item.style.zIndex = ''; }));
  }

  /* ============================================================
     CAROUSEL
     ------------------------------------------------------------
     La velocidad automática se configura en el HTML con
     data-autoplay="4800" (milisegundos).
     ============================================================ */
document.querySelectorAll('[data-carousel]').forEach(carousel => {
  const slides = [...carousel.querySelectorAll('.carousel-slide')];
  const prev = carousel.querySelector('[data-carousel-prev]');
  const next = carousel.querySelector('[data-carousel-next]');
  const current = carousel.querySelector('[data-carousel-current]');

  if (!slides.length) return;

  let index = 0;
  let timer = null;

  // Cambia de imagen
  const show = nextIndex => {
    slides[index]?.classList.remove('is-active');

    index = (nextIndex + slides.length) % slides.length;

    slides[index]?.classList.add('is-active');

    if (current) {
      current.textContent = String(index + 1).padStart(2, '0');
    }
  };

  // Reinicia el autoplay
  const start = () => {
    clearInterval(timer);

    if (!reduceMotion) {
      timer = setInterval(() => {
        show(index + 1);
      }, Number(carousel.dataset.autoplay || 4800));
    }
  };

  // BOTÓN ANTERIOR
  prev?.addEventListener('click', () => {
    show(index - 1);
    start();
  });

  // BOTÓN SIGUIENTE
  next?.addEventListener('click', () => {
    show(index + 1);
    start();
  });

  // Pausar autoplay al pasar por encima
  carousel.addEventListener('mouseenter', () => {
    clearInterval(timer);
  });

  // Reanudar autoplay al salir
  carousel.addEventListener('mouseleave', start);

  start();
});

  /* ============================================================
     LIGHTBOX
     ------------------------------------------------------------
     El lightbox toma automáticamente las imágenes de cada
     .gallery-item y permite navegar con flechas/teclado.
     ============================================================ */
  const lightbox = document.querySelector('[data-lightbox]');
  if (lightbox) {
    const triggers = [...document.querySelectorAll('[data-lightbox-index]')];
    const image = lightbox.querySelector('img');
    const current = lightbox.querySelector('[data-lightbox-current]');
    let index = 0;
    const update = () => {
      const source = triggers[index]?.querySelector('img');
      if (!source) return;
      image.src = source.src; image.alt = source.alt;
      if (current) current.textContent = String(index + 1).padStart(2,'0');
    };
    const open = i => { index = (i + triggers.length) % triggers.length; update(); lightbox.hidden = false; body.classList.add('lightbox-open'); };
    const close = () => { lightbox.hidden = true; body.classList.remove('lightbox-open'); };
    const step = amount => { index = (index + amount + triggers.length) % triggers.length; update(); };
    triggers.forEach(t => t.addEventListener('click', () => open(Number(t.dataset.lightboxIndex))));
    lightbox.querySelector('[data-lightbox-close]')?.addEventListener('click', close);
    lightbox.querySelector('[data-lightbox-prev]')?.addEventListener('click', () => step(-1));
    lightbox.querySelector('[data-lightbox-next]')?.addEventListener('click', () => step(1));
    lightbox.addEventListener('click', e => { if (e.target === lightbox) close(); });
    window.addEventListener('keydown', e => { if (lightbox.hidden) return; if (e.key === 'Escape') close(); if (e.key === 'ArrowLeft') step(-1); if (e.key === 'ArrowRight') step(1); });
  }
})();