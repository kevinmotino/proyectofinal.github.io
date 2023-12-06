const handlerBarsContext = {
    "/index.html": {
        "title": "Home"
    },
    "/products.html": {
        "title": "Products"
    },
    "/about.html": {
        "title": "About Us"
    },
    "/contact.html": {
        "title": "Contacts Us"
    }
}

const destacados = [
    {title:"destacado-1", Image: "img/destacado1.png"},
    {title:"destacado-2", Image: "img/destacado2.png"},
    {title:"destacado-3", Image: "img/destacado3.png"},
    {title:"destacado-4", Image: "img/destacado4.png"},
  ];

  const masVendido = [
    {title:"Acetaminofen", Image: "img/masVendido1.jpg"},
    {title:"Nocetan", Image: "img/masVendido2.jpg"},
    {title:"Panadol Niño", Image: "img/masVendido3.jpg"},
    {title:"Prelone", Image: "img/masVendido4.jpeg"},
  ];

  const contactanosMain = [
    {title:"Hablanos a", Image: "img/telefono-icono.png", contacto: "Teléfono: 2234-6892"},
    {title:"Escríbenos a", Image: "img/email-icono.png", contacto: "kristalfarmacia@gmail.com"},
    {title:"Whatsapp", Image: "img/whatsapp-icono.png", contacto: "Teléfono: +504 9435-1294"},
  ];

  const servicios = [
    {title:"Examen Cardiovascular",  url:"img/cardiovascular.jpg", descripcionimg:"Imagen de examen cardiovascular"},
    {title:"Examen Gastrointestinal",  url:"img/gastrointestinal.jpg", descripcionimg:"Imagen de examen Gastrointestinal"},
    {title:"Examen Higado Graso",  url:"img/Higado.jpg", descripcionimg:"Imagen de examen higado graso"},
    {title:"Examen Ginecologia",  url:"img/ginecologia.jpg", descripcionimg:"Imagen de examen de ginecologioa"},
    {title:"Examen de Huesos Reumaticos",  url:"img/huesos.jpg", descripcionimg:"Imagen de examen de huesos reumaticos"},
    {title:"Examen de Funcion Del Cerebro",  url:"img/cerebro.jpg", descripcionimg:"Imagen de examen de funcion del cerebro"},
  ];

  const productosm = [
    {Title:"Mascarillas",  url:"img/Mascarillas.jpeg", descripcion:"Imagen de caja de mascarillas", price: "L. 158.00"},
    {Title:"Jeringas",  url:"img/jeringas.jpeg", descripcion:"Imagen de Jeringas", price: "L. 3.60"},
    {Title:"Oximetro",  url:"img/oximetro.jpg", descripcion:"Imagen de Oximetro", price: "L. 933.00"},
    {Title:"Detector de embarazo",  url:"img/detector de embarazo.png", descripcion:"Imagen de Detector de embarazo", price: "L. 93.00"},
    {Title:"Guantes de Nitrile",  url:"img/guantes.jpg", descripcion:"Imagen de Guantes de Nitrile", price: "L. 694.00"},
    {Title:"Mascarillas de niños",  url:"img/niños.jpeg", descripcion:"Imagen de Mascarillas de niños", price: "L. 157.00"},
  ];

  const respiratorySystem = {
    imagePath: "/respiratorio.webp",
    categories: {
      antihistaminicos: {
        imagePath: "/antihist.webp",
        description: "Los antihistamínicos tratan las alergias bloqueando la acción de la histamina.",
        medications: [
          { name: "Loratadina", imagePath: "/loratadina.jpg" },
          { name: "Cetirizina", imagePath: "/cetirizina.png" },
          { name: "Fexofenadina", imagePath: "/fexofenadine-180mg-1.jpg" },
        ],
      },
      broncodilatadores: {
        imagePath: "/broncodilatadores.png",
        description: "Los broncodilatadores relajan los músculos bronquiales, facilitando la respiración.",
        medications: [
          { name: "Albuterol", imagePath: "/albuterol.jpg" },
          { name: "Formoterol", imagePath: "/formoterol.jpg" },
          { name: "Tiotropio", imagePath: "/tiotropio.jpg" },
        ],
      },
      corticosteroides: {
        imagePath: "/corticos.webp",
        description: "Los corticosteroides inhalados reducen la inflamación en las vías respiratorias.",
        medications: [
          { name: "Fluticasona", imagePath: "/flutica.jpg" },
          { name: "Budesonida", imagePath: "/budesonida.jpg" },
          { name: "Beclometasona", imagePath: "/beclometasona.jpg" },
        ],
      },
    },
  };
  
  const cardiovascularSystem = {
    imagePath: "/cardiovas.jpg",
    categories: {
      antihipertensivos: {
        imagePath: "/tensiometro.webp",
        description: "Los antihipertensivos controlan la presión arterial elevada.",
        medications: [
          { name: "Enalapril", imagePath: "/enalapril.jpeg" },
          { name: "Amlodipino", imagePath: "/amlodipina.png" },
          { name: "Losartán", imagePath: "/losartan.png" },
        ],
      },
      anticoagulantes: {
        imagePath: "/anticoagulantes.jpg",
        description: "Los anticoagulantes previenen la formación de coágulos sanguíneos.",
        medications: [
          { name: "Warfarina", imagePath: "/warfarina.jpg" },
          { name: "Rivaroxabán", imagePath: "/rivaroxaban.webp" },
          { name: "Apixabán", imagePath: "/apixaban.webp" },
        ],
      },
      antiarritmicos: {
        imagePath: "/antiarritmicos.webp",
        description: "Los antiarrítmicos controlan las arritmias cardíacas.",
        medications: [
          { name: "Amiodarona", imagePath: "/amiodarona.png" },
          { name: "Propafenona", imagePath: "/propafenona.png" },
          { name: "Flecainida", imagePath: "/flecainida.png" },
        ],
      },
    },
  };

  const nervousSystem = {
    imagePath: "/cns.avif",
    categories: {
      analgésicos: {
        imagePath: "/analgesicos.jpg",
        description: "Los analgésicos alivian el dolor.",
        medications: [
          { name: "Paracetamol", imagePath: "/paracetamol.jpg" },
          { name: "Ibuprofeno", imagePath: "/ibuprofeno.jpg" },
          { name: "Morfina", imagePath: "/morfina.jpg" },
        ],
      },
      anticonvulsivantes: {
        imagePath: "/anticonvulsantes.jpg",
        description: "Los anticonvulsivantes previenen las convulsiones.",
        medications: [
          { name: "Carbamazepina", imagePath: "/carbamazepina.jpg" },
          { name: "Valproato", imagePath: "/valproato.webp" },
          { name: "Lamotrigina", imagePath: "/lamotrigina.png" },
        ],
      },
      antidepresivos: {
        imagePath: "/antidep.jpeg",
        description: "Los antidepresivos tratan la depresión y otros trastornos del estado de ánimo.",
        medications: [
          { name: "Fluoxetina", imagePath: "/fluoxe.jpeg" },
          { name: "Sertralina", imagePath: "/sertralina.avif" },
          { name: "Escitalopram", imagePath: "/escitalopram.jpg" },
        ],
      },
    },
  };

  const lymphaticSystem = {
    imagePath: "/linfaticos.jpg",
    categories: {
      antiinflamatorios: {
        imagePath: "/antiinflamatorios.jpg",
        description: "Los antiinflamatorios reducen la inflamación en el sistema linfático.",
        medications: [
          { name: "Ibuprofeno", imagePath: "/ibuprofeno.jpg" },
          { name: "Naproxeno", imagePath: "/naproxeno.jpg" },
          { name: "Indometacina", imagePath: "/indometacina.webp" },
        ],
      },
      corticosteroides: {
        imagePath: "/corticos.webp",
        description: "Los corticosteroides controlan la inflamación más severa en el sistema linfático.",
        medications: [
          { name: "Prednisona", imagePath: "/prednisona.jpg" },
          { name: "Dexametasona", imagePath: "/dexa.png" },
          { name: "Metilprednisolona", imagePath: "/metilprednisona.jpg" },
        ],
      },
      inmunosupresores: {
        imagePath: "/inmunosupresores.png",
        description: "Los inmunosupresores controlan la inflamación más severa en el sistema linfático.",
        medications: [
          { name: "Ciclosporina", imagePath: "/ciclosporina.webp" },
          { name: "Azatioprina", imagePath: "/azatio.jpg" },
          { name: "Micofenolato", imagePath: "/micofenolato.webp" },
        ],
      },
    },
  };

  const endocrineSystem = {
    imagePath: "/endocrino.jpg",
    categories: {
      hormonasTiroideas: {
        imagePath: "/tiroideas.webp",
        description: "Las hormonas tiroideas regulan el metabolismo.",
        medications: [
          { name: "Levotiroxina", imagePath: "/levoti.webp" },
          { name: "Metimazol", imagePath: "/metimazol.jpg" },
          { name: "Liotironina", imagePath: "/liotironina.webp" },
        ],
      },
    },
  };

const pageContext = (page)=>{
    const context= {...handlerBarsContext[page], destacados, masVendido, contactanosMain, servicios, productosm, endocrineSystem,respiratorySystem,cardiovascularSystem,nervousSystem,lymphaticSystem}
    return context;
}
export default pageContext;
