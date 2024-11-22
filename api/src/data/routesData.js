// Datos de rutas y recorridos
const routes = [
    {
        "code": "AB029GO",
        "routeNumber": "29-G",
        "routeName": "Jard. de San Bartolo - San Bartolo - Metrocentro y viceversa",
        "startTime": "4:40 AM",
        "endTime": "8:00 PM",
        "department": "san salvador",
        "cost": 0.2,
        "outbound": [
            "Parque San Bartolo",
            "Ilopango",
            "Bulevar del Ejército Nacional",
            "Aeropuerto Internacional de Ilopango",
            "Fuerza Aérea de El Salvador",
            "Cárcel de Mujeres",
            "Bulevar del Ejército",
            "Unidad Médica ISSS Ilopango",
            "Terminal Nuevo Amanecer",
            "Rotonda El Progreso",
            "Plaza Mundo Soyapango",
            "Walmart Soyapango",
            "Bulevar Venezuela",
            "Mercado Tinetti",
            "La Avenida",
            "Mercado Ex Cuartel",
            "Plaza Morazán",
            "Universidad Tecnológica de El Salvador (UTEC)",
            "Hospital Nacional Rosales",
            "Universidad Andrés Bello",
            "Metrosur",
            "Bulevar de Los Héroes",
            "Metrocentro"
        ],
        "return": [
            "Instituto Salvadoreño del Seguro Social – Oficinas Administrativas",
            "Universidad Salvadoreña Alberto Masferrer",
            "3ª Calle Poniente",
            "Colegio La Divina Providencia",
            "Reloj de Flores",
            "Mercado La Tiendona",
            "Museo del Ferrocarril y Parque Temático",
            "Plaza General Manuel José Arce",
            "IDEM"
        ],
        "map": "<iframe src='https://www.google.com/maps/d/u/0/embed?mid=1fF2nLmwV3KJZnoTYxPuQ2QIHfygrQ5k&ehbc=2E312F' width='640' height='480'></iframe>"
    },
    {
        "code": "AB029HO",
        "routeNumber": "29-H",
        "routeName": "Cumbres de San Bartolo - San Bartolo - Soyapango - Metrocentro y viceversa",
        "startTime": "5:00 AM",
        "endTime": "7:40 PM",
        "department": "san salvador",
        "cost": 0.2,
        "outbound": [
            "Urbanización Cimas de San Bartolo II",
            "Lotificación San Bartolo",
            "Lotificación Bartolo del Norte",
            "Reparto San Bartolo",
            "Puente de Ticsa",
            "Parque San Bartolo",
            "Ilopango",
            "Bulevar del Ejército Nacional",
            "Aeropuerto Internacional de Ilopango",
            "Fuerza Aérea de El Salvador",
            "Cárcel de Mujeres",
            "Bulevar del Ejército",
            "Unidad Médica ISSS Ilopango",
            "Terminal Nuevo Amanecer",
            "Rotonda El Progreso",
            "Plaza Mundo Soyapango",
            "Walmart Soyapango",
            "Bulevar Venezuela",
            "Mercado Tinetti",
            "La Avenida",
            "Mercado Ex Cuartel",
            "Plaza Morazán",
            "Universidad Tecnológica de El Salvador (UTEC)",
            "Hospital Nacional Rosales",
            "Universidad Andrés Bello",
            "Metrosur",
            "Bulevar de Los Héroes",
            "Metrocentro"
        ],
        "return": [
            "Instituto Salvadoreño del Seguro Social – Oficinas Administrativas",
            "Universidad Salvadoreña Alberto Masferrer",
            "3ª Calle Poniente",
            "Colegio La Divina Providencia",
            "Reloj de Flores",
            "Mercado La Tiendona",
            "Museo del Ferrocarril y Parque Temático",
            "Plaza General Manuel José Arce",
            "IDEM"
        ],
        "map": "<iframe src='https://www.google.com/maps/d/u/0/embed?mid=15jUmWZhRgMoGwha2Y03so7xYgeuCy8M&ehbc=2E312F' width='640' height='480'></iframe>"
    },
    {
        "code": "AB030BO",
        "routeNumber": "30-B",
        "routeName": "Col. Las Terrazas - Ayutuxtepeque - Col. San Benito y viceversa",
        "startTime": "4:50 AM",
        "endTime": "8:30 PM",
        "department": "san salvador",
        "cost": 0.2,
        "outbound": [
            "Ayutuxtepeque",
            "Parque Residencial Australia",
            "Unicentro Metrópolis",
            "José Simeón Cañas",
            "Colonia Ciudad Satélite",
            "Hospital Militar Central",
            "Redondel El Torogoz",
            "Hospital de Niños Benjamín Bloom",
            "Bulevar del Ejército",
            "Ministerio de Hacienda",
            "Metrocentro San Salvador",
            "Alameda Juan Pablo II",
            "Colegio García Flamenco",
            "Monumento al Divino Salvador del Mundo",
            "Centro Comercial Galerías",
            "Fuentes Beethoven",
            "Paseo General Escalón",
            "Plaza Chile",
            "Rotonda Brasil",
            "Zona Rosa",
            "Rotonda Italia",
            "Museo Nacional de Antropología Dr. David J. Guzmán (MUNA)",
            "Hospital Nacional El Salvador"
        ],
        "return": [
            "Alameda Manuel Enrique Araujo",
            "Comando de Doctrina y Educación Militar (CODEM)",
            "Mercado de Artesanías",
            "Ministerio de Obras Públicas y de Transporte",
            "Centro Comercial La Mascota",
            "Museo Forma",
            "Policía Nacional Civil (Solvencias) – Sucursal Flor Blanca",
            "Estadio Nacional Jorge Mágico Gonzalez",
            "Centro Comercial San Luis"
        ],
        "map": "<iframe src='https://www.google.com/maps/d/u/0/embed?mid=1nRs61CS4_g-3ndVsp-LHRBzRoStm7eA&ehbc=2E312F' width='640' height='480'></iframe>"
    },
    {
        "code": "AB030X1",
        "routeNumber": "30-1",
        "routeName": "Col. Metrópolis - Metrocentro - Parque Infantil - 8 O Av. Norte - 10 C. Ote (S.S.) y viceversa",
        "startTime": "4:45 AM",
        "endTime": "9:00 PM",
        "department": "san salvador",
        "cost": 0.2,
        "outbound": [
            "Walmart Constitución",
            "Bulevar Constitución",
            "Calle Zacamil",
            "Unicentro Metrópolis",
            "Redondel Zacamil",
            "Hospital Policlínico Zacamil del ISSS",
            "Universidad de El Salvador UES",
            "Redondel Torogoz",
            "Hospital de Niños Benjamin Bloom",
            "Bulevar de Los Héroes",
            "Ministerio de Hacienda",
            "Metrocentro San Salvador",
            "Metrosur",
            "Rotonda Plaza Mexico",
            "Hospital Pro Familia",
            "Hospital Central",
            "Bulevar Tutunichapa",
            "Centro Judicial Isidro Menéndez",
            "Universidad Politécnica de El Salvador",
            "Redondel José Martí",
            "Parque Infantil de Diversiones"
        ],
        "return": [
            "Mercado Ex Cuartel",
            "Parque San José",
            "Plaza Morazán",
            "Universidad Tecnológica de El Salvador (UTEC)",
            "Hospital Rosales",
            "Universidad Dr. Andrés Bello",
            "Condominios Medicentro La Esperanza",
            "Colonia Ciudad Satélite"
        ],
        "map": "<iframe src='https://www.google.com/maps/d/u/0/embed?mid=18vpXZ21LQTRJ69ep3FKip4vrB6xfxJw&ehbc=2E312F' width='640' height='480'></iframe>"
    },
    {
        "code": "AB031XO",
        "routeNumber": "31",
        "routeName": "Col. Monte Carmelo - Zacamil - Mejicanos y viceversa",
        "startTime": "5:00 AM",
        "endTime": "7:00 PM",
        "department": "san salvador",
        "cost": 0.2,
        "outbound": [
            "Santa Rita",
            "Plaza Mundo Soyapango",
            "Rotonda El Progreso",
            "Bulevar del Ejército",
            "Cementerio Municipal No. 2 Soyapango",
            "Cementerio General de Soyapango",
            "Walmart Soyapango",
            "Hospital Amatepec del ISSS",
            "Comunidad Ibérica",
            "Fenadesal",
            "Museo del Ferrocarril y Parque Temático",
            "Mercado La Tiendona",
            "Reloj de Flores",
            "Redondel La Isla",
            "Colonia Don Bosco",
            "San Judas",
            "Colonia Guadalupe",
            "Colonia Isidro Menéndez",
            "Bulevar Tutunichapa",
            "Fuente Luminosa",
            "Condominios Medicentro La Esperanza",
            "Hospital de Niños Benjamín Bloom",
            "Universidad de El Salvador",
            "Alcaldía Municipal de Ayutuxtepeque"
        ],
        "return": [
            "Cementerio Municipal de Mejicanos",
            "Iglesia La Luz del Mundo",
            "Parroquia María Auxiliadora",
            "Instituto Técnico Industrial",
            "Avenida Delicias",
            "Central 3",
            "Plaza El Trébol"
        ],
        "map": "<iframe src='https://www.google.com/maps/d/u/0/embed?mid=1F3aM0d49Dnt58qRDqydswrJD20lFPMc&ehbc=2E312F' width='640' height='480'></iframe>"
    },
    {
        "code": "AB031XE",
        "routeNumber": "31XE",
        "routeName": "Col. Monte Carmelo - Zacamil - Mejicanos y viceversa",
        "startTime": "5:00 AM",
        "endTime": "7:00 PM",
        "department": "san salvador",
        "cost": 0.35,
        "outbound": [
            "Santa Rita",
            "Plaza Mundo Soyapango",
            "Rotonda El Progreso",
            "Bulevar del Ejército",
            "Cementerio Municipal No. 2 Soyapango",
            "Cementerio General de Soyapango",
            "Walmart Soyapango",
            "Hospital Amatepec del ISSS",
            "Comunidad Ibérica",
            "Fenadesal",
            "Museo del Ferrocarril y Parque Temático",
            "Mercado La Tiendona",
            "Reloj de Flores",
            "Redondel La Isla",
            "Colonia Don Bosco",
            "San Judas",
            "Colonia Guadalupe",
            "Colonia Isidro Menéndez",
            "Bulevar Tutunichapa",
            "Fuente Luminosa",
            "Condominios Medicentro La Esperanza",
            "Hospital de Niños Benjamín Bloom",
            "Universidad de El Salvador",
            "Alcaldía Municipal de Ayutuxtepeque"
        ],
        "return": [
            "Cementerio Municipal de Mejicanos",
            "Iglesia La Luz del Mundo",
            "Parroquia María Auxiliadora",
            "Redondel Don Rua",
            "Universidad Politécnica de El Salvador",
            "La Avenida"
        ],
        "map": "<iframe src='https://www.google.com/maps/d/u/0/embed?mid=164niE-z3HlLO273nWoXGaHsofpB-OZY&ehbc=2E312F' width='640' height='480'></iframe>"
    },
    {
        "code": "AB034BO",
        "routeNumber": "34-B",
        "routeName": "Terminal de Ote - Terminal de Occidente - Santa Elena y viceversa",
        "startTime": "4:40 AM",
        "endTime": "7:00 PM",
        "department": "san salvador",
        "cost": 0.2,
        "outbound": [
            "Parque Residencial Lourdes",
            "Mercado Ex Cuartel",
            "Parque San José",
            "Plaza Morazán",
            "Parque Simón Bolívar",
            "Iglesia Perpetuo Socorro",
            "Parque Memorial La Bermeja",
            "Bulevar Venezuela",
            "Terminal de Occidente",
            "Instituto Nacional Técnico Industrial (INTI)",
            "Ministerio de Obras Públicas y de Transporte",
            "Mercado Nacional de Artesanías",
            "Hospital Nacional El Salvador",
            "Plaza del Soldado",
            "Multiplaza",
            "Centro Comercial Las Cascadas",
            "La Gran Vía",
            "Bulevar Santa Elena",
            "Embajada de Los Estados Unidos de América",
            "Redondel Orden de Malta",
            "Bulevar Orden de Malta",
            "Rotonda El Soldado",
            "Plaza Luis Poma"
        ],
        "return": ["Parque Cuscatlán", "IDEM"],
        "map": "<iframe src='https://www.google.com/maps/d/u/0/embed?mid=1A53kxMjhP3QsgA1QytwCHZgYHEBRFEA&ehbc=2E312F' width='640' height='480'></iframe>"
    },
    {
        "code": "AB037BOSS",
        "routeNumber": "37-B",
        "routeName": "Cantón Agua Zarca - San Marcos - Mercado Central y viceversa",
        "startTime": "6:00 AM",
        "endTime": "7:40 PM",
        "department": "san salvador",
        "cost": 0.36,
        "outbound": [
            "Colonia Morán",
            "San Marcos",
            "Colonia San Antonio 4",
            "Colonia Los Andes",
            "Residencial Terranova",
            "Colonia Manzano",
            "Centro de Historia Militar",
            "Barrio San Jacinto",
            "Parque Central de San Jacinto",
            "Barrio Candelaria",
            "Barrio El Calvario"
        ],
        "return": null,
        "map": "<iframe src='https://www.google.com/maps/d/u/0/embed?mid=11n6n9KRr8-kiXX9X8hNKgCAPFSyd1Go&ehbc=2E312F' width='640' height='480'></iframe>"
    },
    {
        "code": "AB037AOSS",
        "routeNumber": "37-A",
        "routeName": "Cantón Las Casitas - San Marcos - Mercado Central y viceversa",
        "startTime": "6:00 AM",
        "endTime": "7:40 PM",
        "department": "san salvador",
        "cost": 0.36,
        "outbound": [
            "Colonia Morán",
            "San Marcos",
            "Colonia San Antonio 4",
            "Residencial Terranova",
            "Colonia Manzano",
            "Barrio San Jacinto",
            "Barrio Candelaria",
            "Barrio El Calvario"
        ],
        "return": ["Centro de Historia Militar"],
        "map": "<iframe src='https://www.google.com/maps/d/u/0/embed?mid=1I4Usb8PI1YdjPsHwVXZwRWfgqrUnirY&ehbc=2E312F' width='640' height='480'></iframe>"
    },
    {
        "code": "AB037A1SS",
        "routeNumber": "37-A 1",
        "routeName": "Cantón Joya de Girón - El Guaje 1 - Las Casitas - San Marcos - Mercado Central y viceversa",
        "startTime": "6:00 AM",
        "endTime": "7:40 PM",
        "department": "san salvador",
        "cost": 0.34,
        "outbound": [
            "Cantón Las Casitas",
            "Colonia Morán",
            "San Marcos",
            "Colonia San Antonio 4",
            "Residencial Terranova",
            "Colonia Manzano",
            "Barrio San Jacinto",
            "Barrio Candelaria",
            "Barrio El Calvario"
        ],
        "return": ["Centro de Historia Militar"],
        "map": "<iframe src='https://www.google.com/maps/d/u/0/embed?mid=1mv5iSHOCNpJ2Lkan0DboGfTIlOK0RrE&ehbc=2E312F' width='640' height='480'></iframe>"
    },
    {
        "code": "AB038AO",
        "routeNumber": "38-A",
        "routeName": "San José Las Flores - Apopa - Av. Norte (S.S.) y viceversa",
        "startTime": "4:00 AM",
        "endTime": "7:15 PM",
        "department": "san salvador",
        "cost": 0.29,
        "outbound": [
            "Urbanización Distrito Italia Sector 2",
            "Urbanización Distrito Italia",
            "Comunidad Los Indígenas",
            "Residencial Santa Teresa de Las Flores",
            "Apopa",
            "Parroquia Santa Catalina de Alejandría",
            "Parque Noe Canjura",
            "Carretera Troncal del Norte",
            "Plaza Mundo Apopa",
            "Redondel Apopa Autopista Este Oeste",
            "Reparto Santa Marta",
            "Refineria Salvadoreña de Azúcar",
            "Cantón Calle Real",
            "Colonia Pipil",
            "Residencial Brisas del Bosque",
            "Ciudad Delgado",
            "Colonia San Joaquin Poniente",
            "Instituto Nacional General Francisco Menéndez (INFRAMEN)",
            "Colonia La Rábida",
            "Centro Comercial Las Terrazas",
            "Colonia 5 de Noviembre",
            "Parque Centenario",
            "Mercado Ex Cuartel"
        ],
        "return": null,
        "map": "<iframe src='https://www.google.com/maps/d/u/0/embed?mid=1ibB9obV5QQmhdPE_3J8X7dxOROth7lM&ehbc=2E312F' width='640' height='480'></iframe>"
    },
    {
        "code": "AB038BO",
        "routeNumber": "38-B",
        "routeName": "Col. Valle del Sol - Col. Tikal - Apopa - 20 Calle Ote. (S.S.) y viceversa",
        "startTime": "5:00 AM",
        "endTime": "8:00 PM",
        "department": "san salvador",
        "cost": 0.29,
        "outbound": [
            "Urbanización Valle del Sol San Leonardo",
            "Urbanización San Andrés",
            "Urbanización Nueva Apopa",
            "Residencial Ciudad Obrera",
            "Apopa",
            "Parroquia Santa Catalina de Alejandría",
            "Parque Noe Canjura",
            "Carretera Troncal del Norte",
            "Plaza Mundo Apopa",
            "Redondel Apopa Autopista Este Oeste",
            "Reparto Santa Marta",
            "Refineria Salvadoreña de Azúcar",
            "Cantón Calle Real",
            "Colonia Pipil",
            "Residencial Brisas del Bosque",
            "Ciudad Delgado",
            "Colonia San Joaquin Poniente",
            "Instituto Nacional General Francisco Menéndez (INFRAMEN)",
            "Colonia La Rábida",
            "Centro Comercial Las Terrazas",
            "Colonia 5 de Noviembre",
            "Parque Centenario",
            "Mercado Ex Cuartel"
        ],
        "return": null,
        "map": "<iframe src='https://www.google.com/maps/d/u/0/embed?mid=1ggS1SnftKSu6PikQwx35n0MXae-yw2I&ehbc=2E312F' width='640' height='480'></iframe>"
    },
    {
        "code": "AB038CO",
        "routeNumber": "38-C",
        "routeName": "Residencial Valle Verde (Apopa) - Centro Judicial Isidro Menéndez y viceversa",
        "startTime": "4:00 AM",
        "endTime": "8:00 PM",
        "department": "san salvador",
        "cost": 0.29,
        "outbound": [
            "Urbanización Popotlán 2",
            "Parcelación Praderas 2",
            "Troncal del Norte",
            "Monumento Santa Catarina",
            "Plaza Mundo Apopa",
            "Redondel Apopa Autopista Este Oeste",
            "Reparto Santa Marta",
            "Refineria Salvadoreña de Azúcar",
            "Cantón Calle Real",
            "Colonia Pipil",
            "Residencial Brisas del Bosque",
            "Ciudad Delgado",
            "Colonia San Joaquin Poniente",
            "Comunidad La Isla 1",
            "Redondel La Isla",
            "San Judas",
            "Plaza José Martí",
            "Universidad Politécnica de El Salvador",
            "Bulevar Tutunichapa",
            "Correos de El Salvador",
            "INDES",
            "Parque Centenario"
        ],
        "return": null,
        "map": "<iframe src='https://www.google.com/maps/d/u/0/embed?mid=1Xyl0ZryuWHcvzxo21AvyTknsMLZHLMY&ehbc=2E312F' width='640' height='480'></iframe>"
    },
    {
        "code": "AB044X1",
        "routeNumber": "44",
        "routeName": "Antiguo Cuscatlán - Metrocentro - Zacamil y viceversa",
        "startTime": "5:00 AM",
        "endTime": "7:00 PM",
        "department": "san salvador",
        "cost": 0.2,
        "outbound": [
            "Redondel Zacamil",
            "Hospital Policlínico Zacamil del ISSS",
            "Universidad de El Salvador UES",
            "Redondel El Torogoz",
            "Hospital de Niños Benjamín Bloom",
            "Ministerio de Hacienda",
            "Bulevar de Los Héroes",
            "Hotel Real InterContinental San Salvador",
            "Metrocentro San Salvador",
            "Metrosur",
            "Estadio Nacional Jorge «Mágico» González",
            "Monumento Hermano Lejano",
            "Bulevar Los Próceres",
            "Rotonda de Árbol de la Paz",
            "Plaza al Soldado",
            "Bulevar La Sultana",
            "Fiscalía General de la República- Sultana",
            "Parque Central de Antiguo Cuscatlán",
            "Calle Antiguo Cuscatlán"
        ],
        "return": [
            "La Ceiba de Guadalupe",
            "Estadio Cuscatlán",
            "Condominios Medicentro La Esperanza"
        ],
        "map": "<iframe src='https://www.google.com/maps/d/u/0/embed?mid=1nud7pS-xVnbaL8lK8pGNYjAAOYzeDl0&ehbc=2E312F&noprof=1' width='640' height='480'></iframe>"
    },
    {
        "code": "AB044X2",
        "routeNumber": "44 microbus",
        "routeName": "Antiguo Cuscatlán - Zacamil y viceversa",
        "startTime": "5:00 AM",
        "endTime": "7:00 PM",
        "department": "san salvador",
        "cost": 0.25,
        "outbound": [
            "Redondel Santísima Trinidad",
            "Ayutuxtepeque",
            "Hospital Policlínico Zacamil del ISSS",
            "Universidad de El Salvador UES",
            "Redondel El Torogoz",
            "Hospital de Niños Benjamín Bloom",
            "Ministerio de Hacienda",
            "Bulevar de Los Héroes",
            "Hotel Real InterContinental San Salvador",
            "Metrocentro San Salvador",
            "Metrosur",
            "Estadio Nacional Jorge «Mágico» González",
            "Monumento Hermano Lejano",
            "Bulevar Los Próceres",
            "Rotonda de Árbol de la Paz",
            "Plaza al Soldado",
            "Bulevar La Sultana",
            "Fiscalía General de la República- Sultana",
            "Parque Central de Antiguo Cuscatlán",
            "Calle Antiguo Cuscatlán",
            "Centro Comercial Las Cascadas",
            "La Gran Vía",
            "Chivo Pets",
            "Canal 12",
            "Bulevar Santa Elena",
            "Plaza Santa Elena",
            "Plaza Madero",
            "FUSADES",
            "La Prensa Gráfica",
            "Embajada de Los Estados Unidos de América",
            "Redondel Orden de Malta",
            "Plaza Malta",
            "Bulevar Orden de Malta",
            "Rotonda El Soldado",
            "Plaza Luis Poma"
        ],
        "return": [
            "La Ceiba de Guadalupe",
            "Estadio Cuscatlán",
            "Condominios Medicentro La Esperanza"
        ],
        "map": "<iframe src='https://www.google.com/maps/d/u/0/embed?mid=1vH91nuaXK2lIHTCEyUDusEMHFjvxGaw&ehbc=2E312F' width='640' height='480'></iframe>"
    },
    {
        "code": "AB101A1",
        "routeNumber": "101-A",
        "routeName": "Colonia Las Delicias (Santa Tecla) - 5 Calle Poniente y 11 Avenida Norte (San Salvador) y viceversa",
        "startTime": "5:00 AM",
        "endTime": "8:00 PM",
        "department": "san salvador",
        "cost": 0.2,
        "outbound": [
            "Estadio Nacional Las Delicias",
            "Condominio Los Girasoles",
            "Carretera Panamericana",
            "Hospital Nacional San Rafael",
            "El Trébol",
            "Universidad Dr. José Matías Delgado | Campus 1",
            "Telecorporación Salvadoreña TCS",
            "Canal 12",
            "Chivo Pets",
            "La Ceiba de Guadalupe",
            "Plaza del Soldado",
            "Hospital Nacional El Salvador",
            "Mercado Nacional de Artesanías",
            "Alameda Manuel Enrique Araujo",
            "Centro Comercial La Mascota",
            "Monumento al Divino Salvador del Mundo",
            "Alameda Franklin Delano Roosevelt",
            "Parque Cuscatlán",
            "Hospital Nacional Rosales",
            "Parque Simón Bolívar",
            "Centro Cívico Cultural Legislativo"
        ],
        "return": [
            "Ministerio de Salud de El Salvador",
            "Museo Universitario de Antropología",
            "Multiplaza",
            "Centro Comercial Las Cascadas",
            "La Gran Vía",
            "Parque San Martín",
            "Parque Daniel Hernández"
        ],
        "map": "<iframe src='https://www.google.com/maps/d/u/0/embed?mid=1YrHJRZJPkGGfR5Rc-JQ6v4LlOBAlPCA&ehbc=2E312F' width='640' height='480'></iframe>"
    },
    {
        "code": "AB101A2",
        "routeNumber": "101-A vía Shell",
        "routeName": "Col. Las Delicias - Santa Tecla - San Salvador y viceversa (Vía Shell)",
        "startTime": "5 AM",
        "endTime": "8 PM",
        "department": "san salvador",
        "cost": 0.2,
        "outbound": [
            "Estadio Nacional Las Delicias",
            "Condominio Los Girasoles",
            "Carretera Panamericana",
            "Rotonda Vía Madrid",
            "Bulevar Sur",
            "Redondel Utila",
            "Carretera Puerto de La Libertad",
            "Universidad Dr. José Matías Delgado | Campus 1",
            "Telecorporación Salvadoreña TCS",
            "Canal 12",
            "Chivo Pets",
            "La Ceiba de Guadalupe",
            "Plaza del Soldado",
            "Hospital Nacional El Salvador",
            "Mercado Nacional de Artesanías",
            "Alameda Manuel Enrique Araujo",
            "Centro Comercial La Mascota",
            "Monumento al Divino Salvador del Mundo",
            "Alameda Franklin Delano Roosevelt",
            "Parque Cuscatlán",
            "Hospital Nacional Rosales",
            "Hospital General del ISSS",
            "Centro Judicial Isidro Menéndez",
            "Bulevar Tutunichapa",
            "Universidad Politécnica de El Salvador",
            "Redondel José Martí"
        ],
        "return": [
            "Instituto Salvadoreño de Pensiones",
            "Hospital Pro Familia",
            "Rotonda Plaza México",
            "Multiplaza",
            "Centro Comercial Las Cascadas",
            "La Gran Vía",
            "Parque San Martín",
            "Parque Daniel Hernández"
        ],
        "map": "<iframe src='https://www.google.com/maps/d/u/0/embed?mid=1h9d61G0oGFRbUZWQLMqiD42nNBvd7OI&ehbc=2E312F' width='640' height='480'></iframe>"
    },
    {
        "code": "AB101B2",
        "routeNumber": "101-B MB",
        "routeName": "Alpes Suizos - Col. Quezaltepec - San Salvador y viceversa",
        "startTime": "5 AM",
        "endTime": "8 PM",
        "department": "san salvador",
        "cost": 0.31,
        "outbound": [
            "Parque Las Araucarias",
            "Colonia Quezaltepeque",
            "Centro Interactivo para el Aprendizaje de Ciencias – sede La Libertad",
            "Plaza Tegucigalpa",
            "La Skina",
            "Mercado Dueñas",
            "Gimnasio Municipal Adolfo Pineda",
            "Carretera Panamericana",
            "Hospital Nacional San Rafael",
            "Viceministerio de Transporte",
            "Universidad Dr. José Matías Delgado | Campus 1",
            "Telecorporación Salvadoreña TCS",
            "Canal 12",
            "Chivo Pets",
            "La Ceiba de Guadalupe",
            "Plaza del Soldado",
            "Hospital Nacional El Salvador",
            "Mercado Nacional de Artesanías",
            "Alameda Manuel Enrique Araujo",
            "Centro Comercial La Mascota",
            "Monumento al Divino Salvador del Mundo",
            "Alameda Franklin Delano Roosevelt",
            "Parque Cuscatlán",
            "Hospital Nacional Rosales"
        ],
        "return": [
            "Multiplaza",
            "Centro Comercial Las Cascadas",
            "La Gran Vía",
            "Parque San Martín"
        ],
        "map": "<iframe src='https://www.google.com/maps/d/u/0/embed?mid=1nfy3kiDwLRqw4dNx3VSDrwCh80cSwMk&ehbc=2E312F' width='640' height='480'></iframe>"
    },
    {
        "code": "AB042BO",
        "routeNumber": "42-B",
        "routeName": "Col. Santa Mónica - Ciudad Merliot - 12 Av. Sur - San Salvador y viceversa",
        "startTime": "5:10 AM",
        "endTime": "7:30 PM",
        "department": "san salvador",
        "cost": 0.31,
        "outbound": [
            "Residencial San Antonio",
            "Parque Ecológico San José",
            "Ministerio de Agricultura y Ganadería",
            "Parque San Martín",
            "Rotonda Vía Madrid",
            "Bulevar Sur",
            "Redondel Utila",
            "Carretera Puerto de La Libertad",
            "Carretera Panamericana",
            "Universidad Dr. José Matías Delgado | Campus 1",
            "Telecorporación Salvadoreña (TCS)",
            "Canal 12",
            "Plaza Brasilia",
            "La Ceiba de Guadalupe",
            "Plaza del Soldado",
            "Hospital Nacional El Salvador",
            "Mercado Nacional de Artesanías",
            "Ministerio de Obras Públicas y de Transporte",
            "Centro Comercial La Mascota",
            "Monumento al Divino Salvador del Mundo",
            "Alameda Franklin Delano Roosevelt",
            "Parque Cuscatlán",
            "Hospital Nacional Rosales",
            "Museo Universitario de Antropología",
            "Centro Cívico Cultural Legislativo"
        ],
        "return": [
            "Mercado Ex Cuartel",
            "Plaza Morazán",
            "Parque Simón Bolívar",
            "Urbanización Jardines de Cuscatlán",
            "Redondel El Platillo"
        ],
        "map": "<iframe src='https://www.google.com/maps/d/u/0/embed?mid=1WYvlsP32HWAi_ocxtWq3tJ4SEi0VE7I&ehbc=2E312F' width='640' height='480'></iframe>"
    },
    {
        "code": "AB101DO",
        "routeNumber": "101-D",
        "routeName": "Residencial San Antonio - Santa Tecla - San Salvador y viceversa",
        "startTime": "4:15 AM",
        "endTime": "9:00 PM",
        "department": "san salvador",
        "cost": 0.2,
        "outbound": [
            "Residencial San Antonio",
            "Parque Ecológico San José",
            "Parque Adela Van Severen De Contreras",
            "Urbanización San Antonio Las Palmeras",
            "Colegio Salesiano Santa Cecilia",
            "Plaza de La Cultura",
            "Parque San Martín",
            "Parque deportivo El Cafetalón",
            "Calle Chiltiupán",
            "Plaza Merliot",
            "Redondel El Platillo",
            "Calle El Pedregal",
            "La Gran Vía",
            "Centro Comercial Las Cascadas",
            "Multiplaza",
            "Redondel Mayor Roberto D’Aubuisson",
            "Redondel de Las Naciones Unidas",
            "Parque del Bicentenario",
            "Calle La Mascota",
            "Alianza Francesa de San Salvador",
            "Plaza Chile",
            "Fuentes Beethoven",
            "Alameda Juan Pablo II",
            "Plaza Baden Powell",
            "La Despensa de Don Juan Los Héroes",
            "Metrocentro San Salvador",
            "Instituto Salvadoreño del Seguro Social – Oficinas Administrativas",
            "Rotonda Plaza México",
            "Hospital Pro Familia",
            "Bulevar Tutunichapa",
            "Centro Judicial Isidro Menéndez",
            "Universidad Politécnica de El Salvador",
            "Mercado San Miguelito",
            "Avenida España"
        ],
        "return": ["Calle Los Sisimiles", "Plaza La Biblia", "Redondel Masferrer"],
        "map": "<iframe src='https://www.google.com/maps/d/u/0/embed?mid=1jM7S9ERQ2EeYho5qQVhwkkN0wZ5B9oc&ehbc=2E312F' width='640' height='480'></iframe>"
    }
];



module.exports = routes;