// Datos de rutas y recorridos
const routes = [
    {
        code: 'AB00A0',
        routeNumber: 'A',
        routeName: 'Colonia 10 de Octubre - San Marcos - 15 Calle Poniente y viceversa',
        startTime: '5:00 a.m.',
        endTime: '8:32 p.m.',
        department: 'San Salvador'
    },
    {
        code: 'AB00B0',
        routeNumber: 'B',
        routeName: 'Calle San Sebastián y 5 Avenida Sur - Ciudad Delgado - Metrocentro - UES y viceversa',
        startTime: '6:00 a.m.',
        endTime: '6:30 p.m.',
        department: 'San Salvador'
    },
    {
        code: 'AB001X0',
        routeNumber: '1',
        routeName: 'San Pedro - Ayutuxtepeque - Zacamil - Centro - Colonia América y viceversa',
        startTime: '5:00 a.m.',
        endTime: '8:00 p.m.',
        department: 'San Salvador'
    },
    {
        code: 'AB002A1',
        routeNumber: '2A-1',
        routeName: 'Colonia Buena Vista (Mejicanos) - 3a Calle Oriente - 2a Avenida Norte (San Salvador) y viceversa',
        startTime: '4:50 a.m.',
        endTime: '8:36 p.m.',
        department: 'San Salvador'
    },
    {
        code: 'AB002A2',
        routeNumber: '2A-2',
        routeName: 'Colonia Buena Vista (Mejicanos) - 3a Calle Poniente - 2a Avenida Norte (San Salvador) y viceversa',
        startTime: '4:45 a.m.',
        endTime: '8:35 p.m.',
        department: 'San Salvador'
    },
    {
        code: 'AB002B1',
        routeNumber: '2-B',
        routeName: 'Mejicanos - Modelo - Colonia Costa Rica y viceversa',
        startTime: '4:40 a.m.',
        endTime: '8:30 p.m.',
        department: 'San Salvador'
    },
    {
        code: 'AB002B1E',
        routeNumber: '02B-1E',
        routeName: 'Mejicanos - Modelo - Colonia Costa Rica y viceversa (Servicio Exclusivo)',
        startTime: '4:40 a.m.',
        endTime: '8:30 p.m.',
        department: 'San Salvador'
    },
    {
        "code": "AB002B2",
        "routeNumber": "02B-2",
        "routeName": "Mejicanos - San Jacinto - Colonia Costa Rica y viceversa",
        "startTime": "4:40 a.m.",
        "endTime": "8:30 a.m.",
        "department": "San Salvador"
    },
    {
        "code": "AB002B2E",
        "routeNumber": "02B-2E",
        "routeName": "Mejicanos - San Jacinto - Colonia Costa Rica y viceversa (Servicio Exclusivo)",
        "startTime": "4:40 a.m.",
        "endTime": "8:30 a.m.",
        "department": "San Salvador"
    },
    {
        "code": "AB002CO",
        "routeNumber": "2-C",
        "routeName": "Mejicanos - Metrocentro - Centro - Reloj de Flores y viceversa",
        "startTime": "5:40 a.m.",
        "endTime": "8:00 a.m.",
        "department": "San Salvador"
    },
    {
        "code": "AB002CE",
        "routeNumber": "002-CE",
        "routeName": "Mejicanos - Metrocentro - Centro - Reloj de Flores y viceversa",
        "startTime": "5:40 a.m.",
        "endTime": "8:00 a.m.",
        "department": "San Salvador"
    },
    {
        "code": "AB003AO",
        "routeNumber": "3-A",
        "routeName": "Col. Sierra Morena - Col. Las Brisas - Soyapango - Centro - Col. Atlacatl y viceversa",
        "startTime": "5:00 a.m.",
        "endTime": "8:00 p.m.",
        "department": "San Salvador"
    },
    {
        "code": "AB003AE",
        "routeNumber": "3-AE",
        "routeName": "Col. Sierra Morena - Col. Las Brisas - Soyapango - Centro - Col. Atlacatl y viceversa (Servicio Exclusivo)",
        "startTime": "5:00 a.m.",
        "endTime": "8:00 p.m.",
        "department": "San Salvador"
    },
    {
        "code": "AB003XO",
        "routeNumber": "3",
        "routeName": "Col. Sierra Morena - Soyapango - Centro - Col. Atlacatl y viceversa",
        "startTime": "5:00 a.m.",
        "endTime": "8:00 a.m.",
        "department": "San Salvador"
    },
    {
        "code": "AB003XE",
        "routeNumber": "003-XE",
        "routeName": "Col. Sierra Morena - Soyapango - Centro - Col. Atlacatl y viceversa (Servicio Exclusivo)",
        "startTime": "5:00 a.m.",
        "endTime": "8:00 p.m.",
        "department": "San Salvador"
    },
    {
        "code": "AB004XO",
        "routeNumber": "4",
        "routeName": "Km 10 1/2 Troncal del Norte - Ciudad Delgado - Centro Hospital - Terminal de Occidente y viceversa",
        "startTime": "4:50 a.m.",
        "endTime": "9:00 p.m.",
        "department": "San Salvador"
    },
    {
        "code": "AB005XO",
        "routeNumber": "5",
        "routeName": "Reparto San Patricio - La Cima I, II, III, IV - 8 Avenida Norte (San Salvador) y viceversa",
        "startTime": "4:39 a.m.",
        "endTime": "8:33 p.m.",
        "department": "San Salvador"
    },
    {
        "code": "AB005XE",
        "routeNumber": "005-XE",
        "routeName": "Reparto San Patricio - La Cima I, II, III, IV - 8 Avenida Norte (San Salvador) y viceversa (Servicio Exclusivo)",
        "startTime": "4:39 a.m.",
        "endTime": "8:33 p.m.",
        "department": "San Salvador"
    },
    {
        "code": "AB006X1",
        "routeNumber": "6",
        "routeName": "Vía Mariona (Cuscatancingo) - Mejicanos - Av. España - 90 C. Ote (San Salvador) y viceversa",
        "startTime": "4:30 a.m.",
        "endTime": "9:15 p.m.",
        "department": "San Salvador"
    },
    {
        "code": "AB006X2",
        "routeNumber": "6",
        "routeName": "Vía Mariona - Mejicanos - Parque Infantil y viceversa",
        "startTime": "5:18 a.m.",
        "endTime": "7:48 a.m.",
        "department": "San Salvador"
    },
    {
        "code": "AB006X3",
        "routeNumber": "6",
        "routeName": "Vía Mariona - Mejicanos - Parque Infantil y viceversa",
        "startTime": "5:00 a.m.",
        "endTime": "9:10 a.m.",
        "department": "San Salvador"
    },
    {
        "code": "AB007CO",
        "routeNumber": "7-C",
        "routeName": "Bosques UES de Prusia - Los Santos 1 - Terminal de Occidente y viceversa",
        "startTime": "4:30 a.m.",
        "endTime": "8:00 a.m.",
        "department": "San Salvador"
    },
    {
        "code": "AB007DO",
        "routeNumber": "7-D",
        "routeName": "Col. Los Conacastes - Centro - Metrocentro - Galerías Escalón y viceversa",
        "startTime": "5:00 a.m.",
        "endTime": "7:50 p.m.",
        "department": "San Salvador"
    },
    {
        "code": "AB007XO",
        "routeNumber": "7",
        "routeName": "Col. Guadalupe (Soyapango) - Plaza Las Américas - Galerías y viceversa",
        "startTime": "5:00 a.m.",
        "endTime": "8:00 p.m.",
        "department": "San Salvador"
    },
    {
        "code": "AB008AOSS",
        "routeNumber": "8-AOSS",
        "routeName": "Colonia Jardines (San Marcos) - Colonia Roma (San Salvador) y viceversa",
        "startTime": "5:00 a.m.",
        "endTime": "9:00 p.m.",
        "department": "San Salvador"
    },
    {
        "code": "AB008AESS",
        "routeNumber": "08A-E",
        "routeName": "Col. Jardines (San Marcos) - Col. Roma (San Salvador) y viceversa",
        "startTime": "5:00 a.m.",
        "endTime": "9:00 p.m.",
        "department": "San Salvador"
    },
    {
        "code": "AB008X0",
        "routeNumber": "8",
        "routeName": "Col. Dolores - Terminal de Oriente - Col. La Chacra y viceversa",
        "startTime": "4:40 a.m.",
        "endTime": "7:36 a.m.",
        "department": "San Salvador"
    },
    {
        "code": "AB009XO",
        "routeNumber": "9",
        "routeName": "Ciudad Credisa - Amatepec - Zacamil - Santísima Trinidad y viceversa",
        "startTime": "4:20 a.m.",
        "endTime": "8:00 p.m.",
        "department": "San Salvador"
    },
    {
        "code": "ABOIOXO",
        "routeNumber": "10",
        "routeName": "Urb. Colinas del Norte - Centro - Col. Vista Hermosa - Monserrat y viceversa",
        "startTime": "5:00 a.m.",
        "endTime": "8:20 p.m.",
        "department": "San Salvador"
    },
    {
        "code": "ABOIOXE",
        "routeNumber": "10-XE",
        "routeName": "Urb. Colinas del Norte - Centro - Col. Vista Hermosa - Monserrat y viceversa (Servicio Exclusivo)",
        "startTime": "5:00 a.m.",
        "endTime": "8:20 p.m.",
        "department": "San Salvador"
    },
    {
        "code": "ABOILXO",
        "routeNumber": "10",
        "routeName": "Col. Gálvez - Santa Fe - San Marcos - Hospitales - Res. San Luis y viceversa",
        "startTime": "5:00 a.m.",
        "endTime": "8:00 p.m.",
        "department": "San Salvador"
    },
    {
        "code": "AB012XOSS",
        "routeNumber": "12",
        "routeName": "Cantón El Cedro - Caserío Mil Cumbres - Planes de Renderos - Mercado Central y viceversa",
        "startTime": "4:35 a.m.",
        "endTime": "9:00 p.m.",
        "department": "San Salvador"
    },
    {
        "code": "AB013XO",
        "routeNumber": "13",
        "routeName": "Colonia Santa Lucia - Soyapango - Parque Infantil y viceversa",
        "startTime": "4:40 a.m.",
        "endTime": "8:00 a.m.",
        "department": "San Salvador"
    },
    {
        "code": "AB014AO",
        "routeNumber": "14-A",
        "routeName": "Pto. Sta. Teresa - San Martín - 12 Av. Sur - 2 C. Ote y Av. Cervantes (San Salvador) y viceversa",
        "startTime": "5:00 a.m.",
        "endTime": "7:00 p.m.",
        "department": "San Salvador"
    },
    {
        "code": "AB014XO",
        "routeNumber": "14",
        "routeName": "San Martín - Soyapango - Alcaldía de San Salvador y viceversa",
        "startTime": "4:30 a.m.",
        "endTime": "8:30 p.m.",
        "department": "San Salvador"
    },
    {
        "code": "AB015XO",
        "routeNumber": "15",
        "routeName": "Turicentro Apulo - Ilopango - Av. España y 9a Calle Oriente San Salvador y viceversa",
        "startTime": "4:45 a.m.",
        "endTime": "8:30 p.m.",
        "department": "San Salvador"
    },
    {
        "code": "AB016XO",
        "routeNumber": "16",
        "routeName": "San Antonio Abad - Plaza Las Américas - 9 Av. Norte - Juan Pablo II y viceversa",
        "startTime": "5:30 a.m.",
        "endTime": "7:30 p.m.",
        "department": "San Salvador"
    },
    {
        "code": "AB017BOSS",
        "routeNumber": "17-8",
        "routeName": "Hacienda Melara - Rosario de Mora - Planes de Renderos - Mercado Central y viceversa",
        "startTime": "5:15 a.m.",
        "endTime": "6:00 p.m.",
        "department": "San Salvador"
    },
    {
        "code": "AB017BISS",
        "routeNumber": "17-8",
        "routeName": "Cantón La Barrosa - Rosario de Mora - Mercado Central (San Salvador) y viceversa",
        "startTime": "4:00 a.m.",
        "endTime": "6:15 p.m.",
        "department": "San Salvador"
    },
    {
        "code": "AB018XOSS",
        "routeNumber": "18",
        "routeName": "Cantón Lomas de Candelaria - C.Ant. Huizúcar - Blvd. Los Próceres - Mdo. Ctral y viceversa",
        "startTime": "6:00 a.m.",
        "endTime": "6:00 p.m.",
        "department": "San Salvador"
    },
    {
        "code": "AB019XO",
        "routeNumber": "19",
        "routeName": "Cantón San José Cortez - Cantón Plan del Pino - Soyapango y viceversa",
        "startTime": "5:00 a.m.",
        "endTime": "7:00 p.m.",
        "department": "San Salvador"
    },
    {
        "code": "AB020XO",
        "routeNumber": "20",
        "routeName": "Cuscatancingo - 20 Avenida Norte - Avenida España - Parque Infantil y viceversa",
        "startTime": "5:30 a.m.",
        "endTime": "7:30 p.m.",
        "department": "San Salvador"
    },
    {
        "code": "AB021AOSS",
        "routeNumber": "21-A",
        "routeName": "Santiago Texacuangos - C.A. San Marcos - 4 C. Ote. - Av. Cuscatlán y viceversa",
        "startTime": "4:30 a.m.",
        "endTime": "6:00 p.m.",
        "department": "San Salvador"
    },
    {
        "code": "AB021BOSS",
        "routeNumber": "21-B",
        "routeName": "Santiago Texacuango - Mercado Central (San Salvador) - Vía Autopista y viceversa",
        "startTime": "6:00 a.m.",
        "endTime": "6:00 p.m.",
        "department": "San Salvador"
    },
    {
        "code": "AB022XO",
        "routeNumber": "22",
        "routeName": "Reparto Santa Clara - Juzgados - San Antonio Abad y viceversa",
        "startTime": "4:30 a.m.",
        "endTime": "8:00 p.m.",
        "department": "San Salvador"
    },
    {
        "code": "AB022XE",
        "routeNumber": "22-XE",
        "routeName": "Reparto Santa Clara - Juzgados - San Antonio Abad y viceversa (Servicio Exclusivo)",
        "startTime": "4:30 a.m.",
        "endTime": "8:00 p.m.",
        "department": "San Salvador"
    },
    {
        "code": "AB023AO",
        "routeNumber": "23-A",
        "routeName": "San Ramón - 29 Avenida Norte - Parque Infantil y viceversa",
        "startTime": "5:00 a.m.",
        "endTime": "7:30 p.m.",
        "department": "San Salvador"
    },
    {
        "code": "AB023BO",
        "routeNumber": "23-8",
        "routeName": "Cantón San Roque - 3a Calle Ote. y Av. Nte. y viceversa",
        "startTime": "5:00 a.m.",
        "endTime": "7:30 p.m.",
        "department": "San Salvador"
    },
    {
        "code": "AB024XO",
        "routeNumber": "24",
        "routeName": "Cuscatancingo - Mejicanos - Parque Infantil y viceversa",
        "startTime": "5:30 a.m.",
        "endTime": "7:00 p.m.",
        "department": "San Salvador"
    },
    {
        "code": "AB026XO",
        "routeNumber": "26",
        "routeName": "Jardines de San Marcos - Autopista Norte - Colonia Miralvalle y viceversa",
        "startTime": "4:50 a.m.",
        "endTime": "7:50 p.m.",
        "department": "San Salvador"
    },
    {
        "code": "AB026XEO",
        "routeNumber": "26-XE",
        "routeName": "Jardines de San Marcos - Autopista Norte - Col. Miralvalle y viceversa (Servicio Exclusivo)",
        "startTime": "4:50 a.m.",
        "endTime": "7:50 p.m.",
        "department": "San Salvador"
    },
    {
        "code": "AB027XO",
        "routeNumber": "27",
        "routeName": "Col. El Paraíso - Terminal - Jnes de Monserrat - Los Eliseos - Blvd Los Próceres y viceversa",
        "startTime": "4:30 a.m.",
        "endTime": "7:00 p.m.",
        "department": "San Salvador"
    },
    {
        "code": "AB027XE",
        "routeNumber": "27-XE",
        "routeName": "Col. El Paraíso - Terminal - Jnes de Monserrat - Los Eliseos - Blvd Los Próceres y viceversa (Servicio Exclusivo)",
        "startTime": "4:30 a.m.",
        "endTime": "7:00 p.m.",
        "department": "San Salvador"
    },
    {
        "code": "AB028XO",
        "routeNumber": "28",
        "routeName": "Col IVU - Mercado Central - Terminal Ote. y viceversa",
        "startTime": "5:30 a.m.",
        "endTime": "8:00 p.m.",
        "department": "San Salvador"
    },
    {
        "code": "AB029AO",
        "routeNumber": "29-A",
        "routeName": "Rto. Valle Nuevo - Col. Sta. Lucia - Metrocentro - Miramonte - Av. Bernal y viceversa",
        "startTime": "5:00 a.m.",
        "endTime": "7:20 p.m.",
        "department": "San Salvador"
    },
    {
        "code": "AB029AE",
        "routeNumber": "29-AE",
        "routeName": "Rto. Valle Nuevo - Col. Sta. Lucia - Metrocentro - Miramonte - Av. Bernal y viceversa (Servicio Exclusivo)",
        "startTime": "5:00 a.m.",
        "endTime": "7:20 p.m.",
        "department": "San Salvador"
    },
    {
        "code": "AB029CO",
        "routeNumber": "29-C",
        "routeName": "Col. Alta y viceversa",
        "startTime": "4:10 a.m.",
        "endTime": "8:45 p.m.",
        "department": "San Salvador"
    },
    {
        "code": "AB029C2",
        "routeNumber": "29-C2",
        "routeName": "Colonia Altavista - San Bartolo - Soyapango - (Retorno Hiper Paiz) - Metrocentro y viceversa",
        "startTime": "9:00 p.m.",
        "endTime": "9:00 p.m.",
        "department": "San Salvador"
    },
    {
        "code": "AB029C2E",
        "routeNumber": "29-C2E",
        "routeName": "Col. Alta Vista - San Bartolo - Soyapango - Metrocentro y viceversa (Servicio Exclusivo)",
        "startTime": "4:00 a.m.",
        "endTime": "9:00 p.m.",
        "department": "San Salvador"
    },
    {
        "code": "AB029CE",
        "routeNumber": "29-CE",
        "routeName": "Col. Alta Vista - San Bartolo - Soyapango - Metrocentro y viceversa (Servicio Exclusivo)",
        "startTime": "4:10 a.m.",
        "endTime": "8:45 p.m.",
        "department": "San Salvador"
    },
    {
        "code": "AB029DE",
        "routeNumber": "29-D",
        "routeName": "Reparto Las Cañas - Lopango - Metrocentro y viceversa (Servicio Exclusivo)",
        "startTime": "4:20 a.m.",
        "endTime": "8:20 p.m.",
        "department": "San Salvador"
    },
    {
        "code": "AB029EO",
        "routeNumber": "29-E",
        "routeName": "Col. Cimas de San Bartolo - San Bartolo - Soyapango (C/Retorno H. Paiz) - Metrocentro y viceversa",
        "startTime": "4:15 a.m.",
        "endTime": "8:45 p.m.",
        "department": "San Salvador"
    },
    {
        "code": "AB029EE",
        "routeNumber": "29-E",
        "routeName": "Col. Cimas de San Bartolo - San Bartolo - Soyapango - Metrocentro y viceversa (Servicio Exclusivo)",
        "startTime": "4:15 a.m.",
        "endTime": "8:45 p.m.",
        "department": "San Salvador"
    },
    {
        "code": "AB029FO",
        "routeNumber": "29-F",
        "routeName": "Rto. San Felipe - San Bartolo - Soyapango - Metrocentro y viceversa",
        "startTime": "4:15 a.m.",
        "endTime": "8:30 p.m.",
        "department": "San Salvador"
    },
    {
        "code": "AB029FE",
        "routeNumber": "29-F",
        "routeName": "Reparto San Felipe - San Bartolo - Soyapango - Metrocentro y viceversa (Servicio Exclusivo)",
        "startTime": "4:15 a.m.",
        "endTime": "8:30 p.m.",
        "department": "San Salvador"
    },
    {
        "code": "AB029GO",
        "routeNumber": "29-G",
        "routeName": "Jard. de San Bartolo - San Bartolo - Metrocentro y viceversa",
        "startTime": "4:40 a.m.",
        "endTime": "8:00 p.m.",
        "department": "San Salvador"
    },
    {
        "code": "AB029HO",
        "routeNumber": "29-H",
        "routeName": "Cumbres de San Bartolo - San Bartolo - Soyapango - Metrocentro y viceversa",
        "startTime": "5:00 a.m.",
        "endTime": "7:40 p.m.",
        "department": "San Salvador"
    },
    {
        "code": "AB029HE",
        "routeNumber": "29-H",
        "routeName": "Cumbres de San Bartolo - San Bartolo - Soyapango - Metrocentro y viceversa (Servicio Exclusivo)",
        "startTime": "5:00 a.m.",
        "endTime": "7:40 p.m.",
        "department": "San Salvador"
    },
    {
        "code": "AB029HEX1",
        "routeNumber": "29-XI",
        "routeName": "Cumbres de San Bartolo - San Bartolo - Soyapango - Metrocentro y viceversa",
        "startTime": "5:00 a.m.",
        "endTime": "7:40 p.m.",
        "department": "San Salvador"
    },
    {
        "code": "AB030BO",
        "routeNumber": "30-B",
        "routeName": "Col. Las Terrazas - Ayutuxtepeque - Col. San Benito y viceversa",
        "startTime": "4:50 a.m.",
        "endTime": "8:30 p.m.",
        "department": "San Salvador"
    },
    {
        "code": "AB030BE",
        "routeNumber": "30-BE",
        "routeName": "Col. Las Terrazas - Ayutuxtepeque - Col. San Benito y viceversa",
        "startTime": "4:50 a.m.",
        "endTime": "8:30 p.m.",
        "department": "San Salvador"
    },
    {
        "code": "AB030XO",
        "routeNumber": "30",
        "routeName": "Col. Metrópolis (Mejicanos) - Metrocentro - C. Rubén Darío - II O Av. Sur S.S. y viceversa",
        "startTime": "4:50 a.m.",
        "endTime": "8:00 p.m.",
        "department": "San Salvador"
    },
    {
        "code": "AB030X1",
        "routeNumber": "30-1",
        "routeName": "Col. Metrópolis - Metrocentro - Parque Infantil - 8 O Av. Norte - 10 C. Ote (S.S.) y viceversa",
        "startTime": "4:45 a.m.",
        "endTime": "9:00 p.m.",
        "department": "San Salvador"
    },
    {
        "code": "AB031XO",
        "routeNumber": "31",
        "routeName": "Col. Monte Carmelo - Zacamil - Mejicanos y viceversa",
        "startTime": "5:00 a.m.",
        "endTime": "7:00 p.m.",
        "department": "San Salvador"
    },
    {
        "code": "AB031XE",
        "routeNumber": "31-XE",
        "routeName": "Col. Monte Carmelo - Zacamil - Mejicanos y viceversa",
        "startTime": "5:00 a.m.",
        "endTime": "7:00 p.m.",
        "department": "San Salvador"
    },
    {
        "code": "AB034AO",
        "routeNumber": "34-A",
        "routeName": "Terminal de Oriente - Terminal de Occidente - San Benito y viceversa",
        "startTime": "4:40 a.m.",
        "endTime": "7:00 p.m.",
        "department": "San Salvador"
    },
    {
        "code": "AB034BO",
        "routeNumber": "34-B",
        "routeName": "Terminal de Ote - Terminal de Occidente - Santa Elena y viceversa",
        "startTime": "4:40 a.m.",
        "endTime": "7:00 p.m.",
        "department": "San Salvador"
    },
    {
        "code": "AB035XO",
        "routeNumber": "35",
        "routeName": "La Cima IV - Reparto San Patricio - Calle Ote. y Av. Cuscatlán S.S. y viceversa",
        "startTime": "4:40 a.m.",
        "endTime": "8:40 p.m.",
        "department": "San Salvador"
    },
    {
        "code": "AB036XO",
        "routeNumber": "36",
        "routeName": "Parque de Lopango - Cton. Asino - Joya Grande y viceversa",
        "startTime": "5:00 a.m.",
        "endTime": "7:00 p.m.",
        "department": "San Salvador"
    },
    {
        "code": "AB037AOSS",
        "routeNumber": "37-A",
        "routeName": "Cantón Las Casitas - San Marcos - Mercado Central y viceversa",
        "startTime": "6:00 a.m.",
        "endTime": "7:40 p.m.",
        "department": "San Salvador"
    },
    {
        "code": "AB037AISS",
        "routeNumber": "37-A",
        "routeName": "Cantón Joya de Girón - El Guaje 1 - Las Casitas - San Marcos - Mercado Central y viceversa",
        "startTime": "5:00 a.m.",
        "endTime": "7:00 p.m.",
        "department": "San Salvador"
    },
    {
        "code": "AB037BOSS",
        "routeNumber": "37-B",
        "routeName": "Cantón Agua Zarca - San Marcos - Mercado Central y viceversa",
        "startTime": "6:00 a.m.",
        "endTime": "7:40 p.m.",
        "department": "San Salvador"
    },
    {
        "code": "AB038AO",
        "routeNumber": "38-A",
        "routeName": "San José Las Flores - Apopa - Av. Norte (S.S.) y viceversa",
        "startTime": "4:00 a.m.",
        "endTime": "7:15 p.m.",
        "department": "San Salvador"
    },
    {
        "code": "AB038BO",
        "routeNumber": "38-B",
        "routeName": "Col. Valle del Sol - Col. Tikal - Apopa - 20 Calle Ote. (S.S.) y viceversa",
        "startTime": "5:00 a.m.",
        "endTime": "8:00 p.m.",
        "department": "San Salvador"
    },
    {
        "code": "AB038CO",
        "routeNumber": "38-C",
        "routeName": "Residencial Valle Verde (Apopa) - Centro Judicial Isidro Menéndez y viceversa",
        "startTime": "4:00 a.m.",
        "endTime": "8:00 p.m.",
        "department": "San Salvador"
    },
    {
        "code": "AB039XO",
        "routeNumber": "39",
        "routeName": "Huizucar - Mercado Central y viceversa",
        "startTime": "5:00 a.m.",
        "endTime": "7:00 p.m.",
        "department": "San Salvador"
    },
    {
        "code": "AB040AO",
        "routeNumber": "40-A",
        "routeName": "Fenadesal - Santa Tecla - Brisas y viceversa",
        "startTime": "4:00 a.m.",
        "endTime": "7:30 p.m.",
        "department": "La Libertad"
    },
    {
        "code": "AB040CO",
        "routeNumber": "40-C",
        "routeName": "Fenadesal - Mascota - Plaza Merliot y viceversa",
        "startTime": "4:00 a.m.",
        "endTime": "7:00 p.m.",
        "department": "La Libertad"
    },
    {
        "code": "AB040DO",
        "routeNumber": "40-D",
        "routeName": "Fenadesal - Vía Shell - Zaragoza y viceversa",
        "startTime": "4:00 a.m.",
        "endTime": "7:30 p.m.",
        "department": "La Libertad"
    },
    {
        "code": "AB041LAO",
        "routeNumber": "41-A",
        "routeName": "Col. San José - Soyapango - 1a C. Pte, Av. Nte. JP II (S.S.) y viceversa",
        "startTime": "4:30 a.m.",
        "endTime": "8:48 p.m.",
        "department": "San Salvador"
    },
    {
        "code": "AB041BO",
        "routeNumber": "41-B",
        "routeName": "Urb. Bosques del Río - Urb. El Limón (Soyapango) - 1a C. Pte y 98 Av. Nte. - JP II y viceversa",
        "startTime": "4:25 a.m.",
        "endTime": "9:00 p.m.",
        "department": "San Salvador"
    },
    {
        "code": "AB041CO",
        "routeNumber": "41-C",
        "routeName": "Col. Santa Eduviges (Soyapango) - 13 C. Pte y 93 Av. Nte. - Po II (S.S.) y viceversa",
        "startTime": "5:00 a.m.",
        "endTime": "8:00 p.m.",
        "department": "San Salvador"
    },
    {
        "code": "AB041DO",
        "routeNumber": "41-D",
        "routeName": "Reparto Las Margaritas - Prados de Venecia o Calle Pte y 90 Av. Nte. - JP II (S.S.) y viceversa",
        "startTime": "4:20 a.m.",
        "endTime": "9:00 p.m.",
        "department": "San Salvador"
    },
    {
        "code": "AB041DOE",
        "routeNumber": "41-DOE",
        "routeName": "Reparto Las Margaritas - Prados de Venecia I o Calle Poniente y 90 Av. Norte (San Salvador) y viceversa",
        "startTime": "4:20 a.m.",
        "endTime": "9:00 p.m.",
        "department": "San Salvador"
    },
    {
        "code": "AB041D1",
        "routeNumber": "41-D1",
        "routeName": "Urbanización La Campanera - Soyapango - 13 C. Pte y 9a Av. Nte. JP II (S.S.) y viceversa",
        "startTime": "5:00 a.m.",
        "endTime": "9:00 p.m.",
        "department": "San Salvador"
    },
    {
        "code": "AB041EO",
        "routeNumber": "41-E",
        "routeName": "C. Ciudadela Don Bosco (Cton. El Algodón - Soyapango) - Av. Nte. - JP II (S.S.) y viceversa",
        "startTime": "4:50 a.m.",
        "endTime": "8:00 p.m.",
        "department": "San Salvador"
    },
    {
        "code": "AB042AO",
        "routeNumber": "42-A",
        "routeName": "Col. Santa Teresa - Ciudad Merliot - Altos del Boulevard, San Salvador y viceversa",
        "startTime": "4:10 a.m.",
        "endTime": "8:00 p.m.",
        "department": "San Salvador"
    },
    {
        "code": "AB042BO",
        "routeNumber": "42-B",
        "routeName": "Col. Santa Mónica - Ciudad Merliot - 12 Av. Sur - San Salvador y viceversa",
        "startTime": "5:10 a.m.",
        "endTime": "7:30 p.m.",
        "department": "San Salvador"
    },
    {
        "code": "AB042CO",
        "routeNumber": "42-C",
        "routeName": "Jardines de la Sabana (Santa Tecla) - 14a Av. Ote. - C. Ote (S.S.) y viceversa",
        "startTime": "5:00 a.m.",
        "endTime": "8:20 p.m.",
        "department": "La Libertad"
    },
    {
        "code": "AB043XO",
        "routeNumber": "43",
        "routeName": "Ciudadela Don Bosco (Cton. El Algodón) - 1a C. Pte. y 98 Av. Nte. (S.S.) y viceversa",
        "startTime": "5:30 a.m.",
        "endTime": "8:00 p.m.",
        "department": "San Salvador"
    },
    {
        "code": "AB044X1",
        "routeNumber": "44-1",
        "routeName": "Antiguo Cuscatlán - Metrocentro - Zacamil y viceversa",
        "startTime": "5:00 a.m.",
        "endTime": "7:00 p.m.",
        "department": "La Libertad"
    },
    {
        "code": "AB044XIE",
        "routeNumber": "44-1E",
        "routeName": "Antiguo Cuscatlán - Metrocentro - Zacamil y viceversa (Servicio Exclusivo)",
        "startTime": "5:00 a.m.",
        "endTime": "7:30 p.m.",
        "department": "La Libertad"
    },
    {
        "code": "AB044X2",
        "routeNumber": "44-2",
        "routeName": "Antiguo Cuscatlán - Zacamil y viceversa",
        "startTime": "5:00 a.m.",
        "endTime": "7:00 p.m.",
        "department": "La Libertad"
    },
    {
        "code": "AB046X1",
        "routeNumber": "46",
        "routeName": "San Ramón (Mejicanos) - 3a C. Ote y 8a Av. Nte (S.S.) y viceversa",
        "startTime": "5:00 a.m.",
        "endTime": "8:30 p.m.",
        "department": "San Salvador"
    },
    {
        "code": "AB046X2",
        "routeNumber": "46",
        "routeName": "San Ramón (Mejicanos) - 13a Av. Binte y 10a C. Pte (S.S.) y viceversa",
        "startTime": "5:00 a.m.",
        "endTime": "8:30 p.m.",
        "department": "San Salvador"
    },
    {
        "code": "AB047XO",
        "routeNumber": "47",
        "routeName": "Col. Esmeralda - Mercado Central y viceversa",
        "startTime": "5:12 a.m.",
        "endTime": "7:48 p.m.",
        "department": "San Salvador"
    },
    {
        "code": "AB048XO",
        "routeNumber": "48-A",
        "routeName": "Col. Santa Marta - Mercado Central y viceversa",
        "startTime": "5:30 a.m.",
        "endTime": "8:00 p.m.",
        "department": "San Salvador"
    },
    {
        "code": "AB049AO",
        "routeNumber": "49-A",
        "routeName": "Col. La Campanera - Cantón El Limón - Soyapango y viceversa",
        "startTime": "4:30 a.m.",
        "endTime": "9:11 p.m.",
        "department": "San Salvador"
    },
    {
        "code": "AB049BO",
        "routeNumber": "49-B",
        "routeName": "Cton. El Rosario - Rto. San Ramón - Cton. El Limón - Urb. La Campanera - Soyapango y viceversa",
        "startTime": "6:00 a.m.",
        "endTime": "p.m.",
        "department": "San Salvador"
    },
    {
        "code": "AB052X1",
        "routeNumber": "52-1",
        "routeName": "Calle Fenadesal (San Salvador) - Redondel Masferrer (San Salvador) y viceversa (Hotel)",
        "startTime": "5:00 a.m.",
        "endTime": "8:20 p.m.",
        "department": "San Salvador"
    },
    {
        "code": "AB052XIE",
        "routeNumber": "52-1E",
        "routeName": "Calle Fenadesal (San Salvador) - Redondel Masferrer (San Salvador) y viceversa",
        "startTime": "5:00 a.m.",
        "endTime": "8:20 p.m.",
        "department": "San Salvador"
    },
    {
        "code": "AB052X2",
        "routeNumber": "52-2",
        "routeName": "Calle Fenadesal (San Salvador) - Redondel Masferrer (San Salvador) y viceversa (Paseo)",
        "startTime": "5:00 a.m.",
        "endTime": "8:20 p.m.",
        "department": "San Salvador"
    },
    {
        "code": "AB052X2E",
        "routeNumber": "52-X2E",
        "routeName": "Calle Fenadesal (San Salvador) - Redondel Masferrer (San Salvador) y viceversa (Paseo)",
        "startTime": "5:00 a.m.",
        "endTime": "8:20 p.m.",
        "department": "San Salvador"
    },
    {
        "code": "AB059XOSS",
        "routeNumber": "59",
        "routeName": "Cantón Casa de Piedra - Desvío de Carretera a Panchimalco - Kilómetro 8 1/2 y viceversa",
        "startTime": "5:00 a.m.",
        "endTime": "7:00 p.m.",
        "department": "San Salvador"
    },
    {
        "code": "AB097XO",
        "routeNumber": "97",
        "routeName": "Residencial Europa - Ciudad Merliot - Santa Tecla y viceversa",
        "startTime": "5:00 a.m.",
        "endTime": "8:00 p.m.",
        "department": "La Libertad"
    },
    {
        "code": "ABIOLAI",
        "routeNumber": "101-A",
        "routeName": "Colonia Las Delicias (Santa Tecla) - 5 Calle Poniente y 11 Avenida Norte (San Salvador) y viceversa",
        "startTime": "5:00 a.m.",
        "endTime": "8:00 p.m.",
        "department": "La Libertad"
    },
    {
        "code": "ABIOLA2",
        "routeNumber": "101-A",
        "routeName": "Col. Las Delicias - Santa Tecla - San Salvador y viceversa (Vía Shell)",
        "startTime": "5:00 a.m.",
        "endTime": "8:00 p.m.",
        "department": "La Libertad"
    },
    {
        "code": "ABIOLA2E",
        "routeNumber": "101-AE",
        "routeName": "Col. Las Delicias - Santa Tecla - San Salvador y viceversa (Vía Shell) (Servicio Exclusivo)",
        "startTime": "5:00 a.m.",
        "endTime": "8:00 p.m.",
        "department": "La Libertad"
    },
    {
        "code": "ABIOIBI",
        "routeNumber": "101-B",
        "routeName": "Col. Quezaltepec - Santa Tecla - San Salvador y viceversa",
        "startTime": "4:50 a.m.",
        "endTime": "8:00 p.m.",
        "department": "La Libertad"
    },
    {
        "code": "AB101B2",
        "routeNumber": "101-B",
        "routeName": "Alpes Suizos - Col. Quezaltepec - San Salvador y viceversa",
        "startTime": "4:30 a.m.",
        "endTime": "8:00 p.m.",
        "department": "La Libertad"
    },
    {
        "code": "ABIOICO",
        "routeNumber": "101-C",
        "routeName": "Hacienda San José - Santa Tecla - Antiguo Cuscatlán - San Salvador y viceversa",
        "startTime": "5:10 a.m.",
        "endTime": "7:00 p.m.",
        "department": "La Libertad"
    },
    {
        "code": "ABIOIDO",
        "routeNumber": "101-D",
        "routeName": "Residencial San Antonio - Santa Tecla - San Salvador y viceversa",
        "startTime": "4:15 a.m.",
        "endTime": "9:00 p.m.",
        "department": "La Libertad"
    },
    {
        "code": "ABIOLXISS",
        "routeNumber": "101-XI",
        "routeName": "Alpes Suizos - Colonia Quezaltepec - San Salvador y viceversa (Servicio Exclusivo)",
        "startTime": "4:30 a.m.",
        "endTime": "8:00 p.m.",
        "department": "La Libertad"
    },
    {
        "code": "AB109XISS",
        "routeNumber": "109",
        "routeName": "Nejapa - Apopa - San Salvador y viceversa",
        "startTime": "4:40 a.m.",
        "endTime": "7:00 p.m.",
        "department": "San Salvador"
    },
    {
        "code": "AB115XO",
        "routeNumber": "115",
        "routeName": "Tonacatepeque - Distrito Italia - Apopa - San Salvador y viceversa",
        "startTime": "4:45 a.m.",
        "endTime": "6:30 p.m.",
        "department": "San Salvador"
    },
    {
        "code": "AB117AOSS",
        "routeNumber": "117-A",
        "routeName": "Hacienda San Carlos - Aguilares - San Salvador y viceversa",
        "startTime": "5:00 a.m.",
        "endTime": "6:45 p.m.",
        "department": "San Salvador"
    },
    {
        "code": "AB117COSS",
        "routeNumber": "117-C",
        "routeName": "Cantón Tutultepeque - Aguilares y viceversa",
        "startTime": "5:05 a.m.",
        "endTime": "5:25 p.m.",
        "department": "San Salvador"
    },
    {
        "code": "AB117XOSS",
        "routeNumber": "117",
        "routeName": "El Paisnal - Aguilares - San Salvador y viceversa",
        "startTime": "3:55 a.m.",
        "endTime": "8:10 p.m.",
        "department": "San Salvador"
    },
    {
        "code": "AB140X7",
        "routeNumber": "140-7",
        "routeName": "San Martín - Carretera de Schafik Handal (Mejicanos) y viceversa",
        "startTime": "3:50 a.m.",
        "endTime": "9:30 p.m.",
        "department": "San Salvador"
    },
    {
        "code": "AB173XO",
        "routeNumber": "173",
        "routeName": "Nejapa - San Salvador y viceversa",
        "startTime": "4:00 a.m.",
        "endTime": "6:00 p.m.",
        "department": "San Salvador"
    },
    {
        "code": "AB190AOSS",
        "routeNumber": "190-A",
        "routeName": "San Martín - Carretera Panamericana - Cantón San Agustín y viceversa",
        "startTime": "5:30 a.m.",
        "endTime": "6:30 p.m.",
        "department": "San Salvador"
    },
    {
        "code": "AB190XO",
        "routeNumber": "190",
        "routeName": "Tonacatepeque - San Martín y viceversa",
        "startTime": "4:00 a.m.",
        "endTime": "7:00 p.m.",
        "department": "San Salvador"
    },
    {
        "code": "ABALI-S",
        "routeNumber": "ALI-S",
        "routeName": "Colonia Bosques del Río - Monte Blanco - Soyapango - Terminal SITRAMSS y viceversa",
        "startTime": "4:25 a.m.",
        "endTime": "9:00 p.m.",
        "department": "San Salvador"
    }

];



module.exports = routes;