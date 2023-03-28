const products = [
    {
        id:1,
        title: "Correa de Nylon Reflectiva Celeste" ,
        price: 32,
        description: "Correa gruesa de nylon resistente de 150cm reflectiva.",
        img: "https://i.ibb.co/XSH2s66/correa1.webp",
        category: "perros"
    },
    {
        id:2,
        title: "Correa Retractil De Colores Para Perro" ,
        price: 50,
        description: "Correa de cinta retráctil para perros, 3 metros de longitud fabricada en nylon",
        img: "https://i.ibb.co/XjN0LGC/correa2.png",
        category: "perros"
    }, 
    {
        id:3,
        title: "Correa para Perros para Amarrar a La Cintura" ,
        price: 35,
        description: "Correa para amarrar a la cintura y que tus manos queden libres",
        img: "https://i.ibb.co/7CywM4g/correa3.png",
        category: "perros"
    },
    {
        id:4,
        title: "Correa Con Pechera Económica" ,
        price: 20,
        description: "Correa con pechera económica by Nutypet. *Los colores y el estampado pueden variar",
        img: "https://i.ibb.co/YyKtTYv/correa4.png",
        category: "perros"
    },
    {
        id:5,
        title: "Pechera Neo Mesh Purple & Black Talla S" ,
        price: 60,
        description: "Pechera reversible. Hecha de neopreno y poliéster. Suave al tacto y transpirable",
        img: "https://i.ibb.co/JrmQMNk/pechera1.png",
        category: "perros"
    }, 
    {
        id:6,
        title: "Pechera Snooze Neo Mesh Talla M" ,
        price: 73,
        description: "Pechera reversible. Hecha de neopreno y poliéster. Suave al tacto y transpirable",
        img: "https://i.ibb.co/93sRXwQ/pechera2.png",
        category: "perros"
    }, 
    {
        id:7,
        title: "Pechera Unicornio Neo Mesh Talla S" ,
        price: 63,
        description: "Pechera reversible. Hecha de neopreno y poliéster. Suave al tacto y transpirable",
        img: "https://i.ibb.co/VTcG2yn/pechera3.png",
        category: "perros"
    }, 
    {
        id:8,
        title: "Pechera Neo Mesh Orange & Black Talla M" ,
        price: 70,
        description: "Pechera reversible. Hecha de neopreno y poliéster. Suave al tacto y transpirable",
        img: "https://i.ibb.co/x5FpGZ8/pechera4.png",
        category: "perros"
    }, 
    {
        id:9,
        title: "Plato para Perro Bones Talla L Basa Pets" ,
        price: 35.90,
        description: "Brinda a tu mascota su comida y agua en la cantidad ideal. Con bordes antideslizantes",
        img: "https://i.ibb.co/fG7WdNw/plato1.png",
        category: "perros"
    }, 
    {
        id:10,
        title: "Plato de Aluminio Extra Pesado Perros Grandes" ,
        price: 38,
        description: "Fabricado en aluminio resistente higiénico y fácil de limpiar",
        img: "https://i.ibb.co/YdR9dhr/plato2.png",
        category: "perros"
    }, 
    {
        id:11,
        title: "Plato Acero Inoxidable Mediano" ,
        price: 30,
        description: "Plato en acero inoxidable, repujado con antideslizante ideal para gatos",
        img: "https://i.ibb.co/f41q7sw/plato3.png",
        category: "gatos"
    }, 
    {
        id:12,
        title: "Plato para Perro Antiestres Celeste" ,
        price: 19,
        description: "Evita que tu perro se atragante y coma muy rápido. Ayuda en una digestión adecuada",
        img: "https://i.ibb.co/prhmpXV/plato4.jpg",
        category: "perros"
    }, 
    {
        id:13,
        title: "Plato Slow Doble Antideslizante" ,
        price: 24,
        description: "Plato doble, antideslizante y antiderrame. Incluye plato de acero",
        img: "https://i.ibb.co/8s4qcJ2/plato5.png",
        category: "perros"
    }, 
    {
        id:14,
        title: "Dispensador Automático de Agua para Gatos" ,
        price: 74,
        description: "Capacidad de 1L de agua, tiene filtros que eliminan impurezas. Con sensor de luz nocturna",
        img: "https://i.ibb.co/X48h1bt/bebedero1.png",
        category: "gatos"
    }, 
    {
        id:15,
        title: "Fuente de Agua Mini para Gatos Celeste" ,
        price: 52,
        description: "Incentiva a tu gato a beber agua limpia. Incluye pastilla dental. Capacidad 1,2 litros",
        img: "https://i.ibb.co/WPVXx7q/bebedero2.png",
        category: "gatos"
    }, 
    {
        id:16,
        title: "Gimnasio Rascador Azul 4 Pisos Clásico" ,
        price: 349.90,
        description: "Madera industrial resistente. Forro importado. Poste con sogas engomadas. Medidas: 147x54x46 cms",
        img: "https://i.ibb.co/PFScp16/rascador1.png",
        category: "gatos"
    }, 
    {
        id:17,
        title: "Rascador Cabaña de 2 Pisos" ,
        price: 199,
        description: "Rascador de 2 pisos de madera y forrado con tela peluche. Medidas: 55x55x70 cms",
        img: "https://i.ibb.co/wNR16Jh/rascador2.png",
        category: "gatos"
    }, 
    {
        id:18,
        title: "Gimanasio Rascador para Gato Doble Torre" ,
        price: 107,
        description: "Rascador para gatos con doble torre forrado con tela peluche. Medidas: 55x55x60",
        img: "https://i.ibb.co/NSgXSr7/rascador3.png",
        category: "gatos"
    }, 
    {
        id:19,
        title: "Mimaskot Cordero Cereal 15Kg" ,
        price: 99.9,
        description: "Comida para perros MIMASKOT adultos raza medianas y grandes cordero y cereales. Bolsa de 15Kg",
        img: "https://i.ibb.co/P4jmLgj/comidaperro1.png",
        category: "perros"
    }, 
    {
        id:20,
        title: "DOG CHOW Longevidad Bolsa 8Kg" ,
        price: 95.90,
        description: "Bolsa 8 kilos, alimento para perros. Para adultos de más de 7 años. Todos los tamaños",
        img: "https://i.ibb.co/m5N5DKM/comidaperro2.png",
        category: "perros"
    }, 
    {
        id:21,
        title: "DOG CHOW Cachorro Raza Mediana 15Kg" ,
        price: 159.90,
        description: "Dog Chow con Extralife, mezcla antioxidantes, vitaminas y minerales para tu cachorro",
        img: "https://i.ibb.co/BcJDDbn/comidaperro3.png",
        category: "perros"
    }, 
    {
        id:22,
        title: "Dog Chow X Life Minis 4kg" ,
        price: 65.90,
        description: "Alimento 100% completo y balanceado para cachorros de raza pequeña. Reforzado con DHA",
        img: "https://i.ibb.co/j5zm7tY/comidaperro4.png",
        category: "perros"
    }, 
    {
        id:23,
        title: "NutriTec Gatos y Gatitos 2kg" ,
        price: 45,
        description: "Alimento para gatos y gatitos más completo del mercado. Garantiza una total nutrición y salud",
        img: "https://i.ibb.co/4dkqmTW/comidagato1.png",
        category: "gatos"
    }, 
    {
        id:24,
        title: "Matisse Adulto Pollo y Arroz 2kg" ,
        price: 42.5,
        description: "Alimento completo y balanceado para gatos adultos, con ingredientes nobles de alto valor",
        img: "https://i.ibb.co/DgV44Pt/24comidagato2.png",
        category: "gatos"
    }, 
    {
        id:25,
        title: "EQUILIBRIO Gatos Adultos Castrados 1.5kg" ,
        price: 72.80,
        description: "Alimento para gatos adultos castrados de 1 a 7 años. Previenen la acumulación de bolas de pelo",
        img: "https://i.ibb.co/5MwkVgk/comidagato3.png",
        category: "gatos"
    }, 
    {
        id:26,
        title: "Whiskas Para Gatos Sabor Salmón 1.5kg " ,
        price: 28.5,
        description: "Alimento completo y balanceado de alta calidad, con linaza y fibra de remolacha",
        img: "https://i.ibb.co/TLb9GRf/comidagato4.png",
        category: "gatos"
    }, 
    {
        id:27,
        title: "Antipulgas para Perro Simparica 2.5 - 5 kg " ,
        price: 149.50,
        description: "Pastilla masticable que ofrece control de pulgas y garrapatas. Incl. 3 comprimidos. Peso de 2.5 a 5kg",
        img: "https://i.ibb.co/CHhKP5H/pastilla4.png",
        category: "perros"
    },
    {
        id:28,
        title: "Antipulgas para Perro Simparica 5 - 10 kg " ,
        price: 179.90,
        description: "Pastilla masticable que ofrece control de pulgas y garrapatas. Incl. 3 comprimidos. Peso de 5 a 10kg",
        img: "https://i.ibb.co/rykQ6jW/pastilla1.png",
        category: "perros"
    }, 
    {
        id:29,
        title: "Antipulgas para Perro Simparica 10 - 20 kg" ,
        price: 203,
        description: "Pastilla masticable que ofrece control de pulgas y garrapatas. Incl. 3 comprimidos. Peso de 10 a 20kg",
        img: "https://i.ibb.co/mFBZCMb/pastilla2.png",
        category: "perros"
    }, 
    {
        id:30,
        title: "Antipulgas para Perro Simparica 20 - 40 kg" ,
        price: 225.90,
        description: "Pastilla masticable que ofrece control de pulgas y garrapatas. Incl. 3 comprimidos. Peso de 20 a 40kg",
        img: "https://i.ibb.co/17XNhWP/pastilla3.png",
        category: "perros"
    }, 
    {
        id:31,
        title: "Antipulgas Para Perro Nexgard 4 a 10 kg" ,
        price: 140,
        description: "Tratamiento oral que elimina pulgas y garrapatas. Incl. 3 comprimidos. Proporciona un mes de protección",
        img: "https://i.ibb.co/k0GT4rx/pastilla5.png",
        category: "perros"
    }, 
    {
        id:32,
        title: "Antipulgas Para Perro Nexgard 10 a 25 kg" ,
        price: 160,
        description: "Tratamiento oral que elimina pulgas y garrapatas. Incl. 3 comprimidos. Proporciona un mes de protección",
        img: "https://i.ibb.co/k0GT4rx/pastilla5.png",
        category: "perros"
    }];

    export default products;