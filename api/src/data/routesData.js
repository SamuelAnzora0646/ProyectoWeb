// Datos de rutas y recorridos
const routes = [
    { route: 'A SS Bus', path: 'Colonia 10 de Octubre - San Marcos - 15 Calle Poniente y viceversa', department: 'San Salvador' },
    { route: 'B SS Bus', path: 'Calle San Sebastián y 5 Avenida Sur - Ciudad Delgado - Metrocentro - UES y viceversa', department: 'San Salvador' },
    { route: '1 SS Bus', path: 'San Pedro - Ayutuxtepeque - Zacamil - Centro - Colonia América y viceversa', department: 'San Salvador' },
    { route: '2-A SS Micro', path: 'Colonia Los Conacastes (Mnos) - Alameda Juan Pablo II y Diagonal Universitaria (San Salvador) y viceversa', department: 'San Salvador' },
    { route: '2-B 2 SS Bus', path: 'Mejicanos - San Jacinto - Colonia Costa Rica y viceversa', department: 'San Salvador' },
    { route: '2-B 1 SS Bus', path: 'Mejicanos - Modelo - Colonia Costa Rica y viceversa', department: 'San Salvador' },
    { route: '2-C SS Bus', path: 'Mejicanos - Metrocentro - Centro - Reloj de Flores y viceversa', department: 'San Salvador' },
    { route: '2-A 1 SS Bus', path: 'Colonia Buena Vista (Mejicanos) - 3ª Calle Oriente - 2ª Avenida Norte (San Salvador) y viceversa', department: 'San Salvador' },
    { route: '2-A 2 SS Bus', path: 'Colonia Buena Vista (Mejicanos) - 3ª Calle Poniente - 2ª Avenida Norte (San Salvador) y viceversa', department: 'San Salvador' },
    { route: '3 SS Micro', path: 'Colonia Sierra Morena (Soyapango) - 1ª Calle Poniente - 23ª Avenida Norte (San Salvador) y viceversa', department: 'San Salvador' },
    { route: '3-A SS Bus', path: 'Colonia Sierra Morena - Colonia Las Brisas - Soyapango - Centro - Colonia Atlacatl (San Salvador).', department: 'San Salvador' },
    { route: '3 SS Bus', path: 'Colonia Sierra Morena - Soyapango - Centro - Colonia Atlacatl y viceversa', department: 'San Salvador' },
    { route: '4 SS Micro', path: 'Colonia Las Colinas (Ciudad Delgado) - Terminal de Occidente (San Salvador) y viceversa', department: 'San Salvador' },
    { route: '4-T SS Micro', path: 'Colonia Guardado (Ciudad Delgado) - Terminal de Occidente (San Salvador) y viceversa', department: 'San Salvador' },
    { route: '4-A SS Micro', path: 'Colonia Santa Alegría (Ciudad Delgado) - 25 Avenida Norte (San Salvador) y viceversa', department: 'San Salvador' },
    { route: '4 SS Bus', path: 'Ciudad Delgado - Centro - Hospital - Terminal de Occidente y viceversa', department: 'San Salvador' },
    { route: '5 1 SS Micro', path: 'Colonia Montecristo - 8ª Avenida Sur A Nivel de Parqueo de Iglesia El Rosario Acceso Oriente (San Salvador) y viceversa', department: 'San Salvador' },
    { route: '5 SS Micro', path: 'Colonia La Cima - 8 Avenida Sur A Nivel Del Parqueo de La Iglesia Del Rosario Acceso Oriente (San Salvador) y viceversa', department: 'San Salvador' },
    { route: '5 SS Bus', path: 'Urbanización La Cima I, II, III, IV - Terminal de Oriente (San Salvador) y viceversa', department: 'San Salvador' },
    { route: '6-V H0 SS Micro', path: 'Colonia Vista Hermosa (Cuscatancingo) - Alda Juan Pablo II y Diagonal Universitaria (San Salvador) y viceversa', department: 'San Salvador' },
    { route: '6-C F0 SS Micro', path: 'Ciudad Futura (Cuscatancingo) - Alda Juan Pablo II y Diagonal Universitaria (San Salvador) y viceversa', department: 'San Salvador' },
    { route: '6-A SS Micro', path: 'Monte Carmelo (Cuscatancingo) - Parque Candelaria (San Salvador) - Lirios Del Norte (Cuscatancingo) - Parque Candelaria (San Salvador) y viceversa', department: 'San Salvador' },
    { route: '6 2 SS Bus', path: 'Vía Mariona - Mejicanos - Parque Infantil y viceversa', department: 'San Salvador' },
    { route: '6 3 SS Bus', path: 'Vía Mariona - Mejicanos - Parque Infantil y viceversa', department: 'San Salvador' },
    { route: '6 1 SS Bus', path: 'Vía Mariona (Cuscatancingo) - Mejicanos - Avenida España - 9ª Calle Oriente (San Salvador) y viceversa', department: 'San Salvador' },
    { route: '7-A SS Micro', path: 'Reparto Los Santos III (Soyapango) - 33ª Avenida Norte - Alameda Juan Pablo II (San Salvador) y viceversa', department: 'San Salvador' },
    { route: '7-D SS Bus', path: 'Colonia Los Conacastes - Centro - Metrocentro - Galerías Escalón y viceversa', department: 'San Salvador' },
    { route: '7 SS Bus', path: 'Colonia Guadalupe (Soyapango) - Plaza Las Américas - Galerías y viceversa', department: 'San Salvador' },
    { route: '7-C SS Bus', path: 'Bosques de Prusia - Los Santos 1 - Terminal de Occidente y viceversa', department: 'San Salvador' },
    { route: '8-A SS Bus', path: 'Colonia Jardines (San Marcos) - Colonia Roma (San Salvador) y viceversa', department: 'San Salvador' },
    { route: '8 SS Bus', path: 'Colonia Dolores - Terminal de Oriente - Colonia La Chacra y viceversa', department: 'San Salvador' },
    { route: '9 SS Micro', path: 'Colonia Santísima Trinidad (Ayutuxtepeque) - 11ª Avenida Sur - 4ª Calle Pte (San Salvador) y viceversa', department: 'San Salvador' },
    { route: '9-A SS Micro', path: 'Calle Credisa - Amatepec (Soyapango) - 13ª Avenida Norte - 3ª Calle Oriente (San Salvador) y viceversa', department: 'San Salvador' },
    { route: '9 SS Bus', path: 'Ciudad Credisa - Amatepec - Zacamil - Santísima Trinidad y viceversa', department: 'San Salvador' },
    { route: '10 SS Bus', path: 'Urbanización Colinas Del Norte - Centro - Colonia Vista Hermosa - Monserrat y viceversa', department: 'San Salvador' },
    { route: '11 SS Micro', path: 'Colonia 10 de Octubre (San Marcos) - 33 Avenida Norte y Bulevar Tutunichapa y viceversa', department: 'San Salvador' },
    { route: '11-K SS Micro', path: 'Colonia La Paz (Cuscatancingo) - 39A Avenida Sur (San Salvador) y viceversa', department: 'San Salvador' },
    { route: '11-C SS Micro', path: 'Colonia Escalante (San Marcos) - Metrocentro - Avenida Los Andes (San Salvador) y viceversa', department: 'San Salvador' },
    { route: '11-B SS Micro', path: 'Colonia 10 Octubre Km 12.5 Autopista Comalapa (San Marcos) - Alameda Juan Pablo II y viceversa', department: 'San Salvador' },
    { route: '11 SS Bus', path: 'Colonia Gálvez - Santa Fe - San Marcos - Hospitales - Res. San Luis y viceversa', department: 'San Salvador' },
    { route: '12 3 SS Micro', path: '6 Calle Poniente (San Salvador) - Cantón El Guayabo (San Salvador) y viceversa', department: 'San Salvador' },
    { route: '12 2 SS Micro', path: '6 Calle Poniente (San Salvador) - Cantón Los Palones (Panchimalco) y viceversa', department: 'San Salvador' },
    { route: '12 1 SS Micro', path: '6 Calle Poniente (San Salvador) - Mil Cumbres (Panchimalco) y viceversa', department: 'San Salvador' },
    { route: '12 SS Micro', path: '6 Calle Poniente (San Salvador) - Planes de Renderos (San Salvador) y viceversa', department: 'San Salvador' },
    { route: '12 SS Bus', path: 'Caserío Mil Cumbres - Planes de Renderos - Mercado Central y viceversa', department: 'San Salvador' },
    { route: '13 SS Bus', path: 'Colonia Santa Lucia - Soyapango - Parque Infantil y viceversa', department: 'San Salvador' },
    { route: '14 SS Bus', path: 'San Martín - Soyapango - Alcaldía de San Salvador y viceversa', department: 'San Salvador' },
    { route: '14-A SS Bus', path: 'Pto. Sta. Teresa - San Martín - 12 Avenida Sur - 2 Calle Oriente y Avenida Cervantes (San Salvador) y viceversa', department: 'San Salvador' },
    { route: '15 SS Bus', path: 'Turicentro Apulo - Ilopango - Ave. España y 9A Calle Oriente - San Salvador y viceversa', department: 'San Salvador' },
    { route: '16 SS Micro', path: 'Urbanización Melara San Antonio Abad (S. S) - 3A Calle Poniente y 9A Avenida Norte (San Salvador) y viceversa', department: 'San Salvador' },
    { route: '16 SS Bus', path: 'San Antonio Abad - Plaza Las Américas - 9 Avenida Norte - Juan Pablo II y viceversa', department: 'San Salvador' },
    { route: '17 SS Micro', path: 'Rosario de Mora - 8A Calle Oriente (San Salvador) y viceversa', department: 'San Salvador' },
    { route: '17-B SS Micro', path: 'Panchimalco - Planes de Renderos - San Salvador y viceversa', department: 'San Salvador' },
    { route: '17-A 1 SS Micro', path: 'Cantón Los Troncones - Panchimalco y viceversa', department: 'San Salvador' },
    { route: '17-A SS Micro', path: 'Cantón Azacualpa - Panchimalco y viceversa', department: 'San Salvador' },
    { route: '17-B 1 SS Bus', path: 'Cantón La Barrosa - Rosario de Mora - Mercado Central (San Salvador)', department: 'San Salvador' },
    { route: '18 SS Bus', path: 'Cantón Lomas de Candelaria - Calle Antigua A Huizúcar - Bulevar Los Próceres - Mdo. Central y viceversa', department: 'San Salvador' },
    { route: '19 SS Micro', path: 'Colonia El Charcón - Ciudad Delgado - Alameda Juan Pablo II y Diagonal Universitaria y viceversa', department: 'San Salvador' },
    { route: '19 SS Bus', path: 'Cantón San José Cortez - Cantón Plan Del Pino - Soyapango y viceversa', department: 'San Salvador' },
    { route: '20 SS Micro', path: 'Colonia Santa Rosa (Cuscatancingo) - 5º Avenida Norte (San Salvador) y viceversa', department: 'San Salvador' },
    { route: '20 SS Bus', path: 'Cuscatancingo - 20 Avenida Norte - Avenida España - Parque Infantil y viceversa', department: 'San Salvador' },
    { route: '21 SS Micro', path: 'Santiago Texacuangos - Santo Tomás - 8 Calle Oriente Vía Autopista y viceversa', department: 'San Salvador' },
    { route: '21-A SS Bus', path: 'Sgo. Texacuangos - Calle A San Marcos - 4 Calle Oriente - Avenida Cuscatlán y viceversa', department: 'San Salvador' },
    { route: '21-B SS Bus', path: 'Santiago Texacuango - Mercado Central (San Salvador) - Vía Autopista y viceversa', department: 'San Salvador' },
    { route: '22 SS Bus', path: 'Reparto Santa Clara - Juzgado de Instrucción y viceversa', department: 'San Salvador' },
    { route: '23 SS Micro', path: 'Colonia San Miguel - Mejicanos - Alameda Juan Pablo II - 6ª Calle Oriente y viceversa', department: 'San Salvador' },
    { route: '23-A SS Micro', path: 'Cantón Los Llanitos (Ayutux) - Alameda Juan Pablo II y Diagonal Universitaria (San Salvador) y viceversa', department: 'San Salvador' },
    { route: '23-A SS Bus', path: 'San Ramón - 29 Avenida Norte - Parque Infantil y viceversa', department: 'San Salvador' },
    { route: '23-B SS Bus', path: 'Cantón San Roque - 3A Calle Oriente y 2A Avenida Norte (S:S) y viceversa', department: 'San Salvador' },
    { route: '24 SS Micro', path: 'Colonia Santa Margarita (Cuscatancingo) - 9 Calle Poniente (San Salvador) y viceversa', department: 'San Salvador' },
    { route: '24-A SS Micro', path: 'Colonia Florencia (Cuscatancingo) - 5º Avenida Norte (San Salvador) y viceversa', department: 'San Salvador' },
    { route: '24 SS Bus', path: 'Cuscatancingo - Mejicanos - Parque Infantil y viceversa', department: 'San Salvador' },
    { route: '25 SS Bus', path: 'Cantón Istagua - San Martín - Reloj de Flores y viceversa', department: 'San Salvador' },
    { route: '8 SS Bus', path: 'Colonia Dolores - Terminal de Oriente - Colonia La Chacra y viceversa', department: 'San Salvador' },
    { route: '9 SS Micro', path: 'Colonia Santísima Trinidad (Ayutuxtepeque) - 11ª Avenida Sur - 4ª Calle Pte (San Salvador) y viceversa', department: 'San Salvador' },
    { route: '9-A SS Micro', path: 'Calle Credisa - Amatepec (Soyapango) - 13ª Avenida Norte - 3ª Calle Oriente (San Salvador) y viceversa', department: 'San Salvador' },
    { route: '9 SS Bus', path: 'Ciudad Credisa - Amatepec - Zacamil - Santísima Trinidad y viceversa', department: 'San Salvador' },
    { route: '10 SS Bus', path: 'Urbanización Colinas Del Norte - Centro - Colonia Vista Hermosa - Monserrat y viceversa', department: 'San Salvador' },
    { route: '11 SS Micro', path: 'Colonia 10 de Octubre (San Marcos) - 33 Avenida Norte y Bulevar Tutunichapa y viceversa', department: 'San Salvador' },
    { route: '11-K SS Micro', path: 'Colonia La Paz (Cuscatancingo) - 39A Avenida Sur (San Salvador) y viceversa', department: 'San Salvador' },
    { route: '11-C SS Micro', path: 'Colonia Escalante (San Marcos) - Metrocentro - Avenida Los Andes (San Salvador) y viceversa', department: 'San Salvador' },
    { route: '11-B SS Micro', path: 'Colonia 10 Octubre Km 12.5 Autopista Comalapa (San Marcos) - Alameda Juan Pablo II y viceversa', department: 'San Salvador' },
    { route: '11 SS Bus', path: 'Colonia Gálvez - Santa Fe - San Marcos - Hospitales - Res. San Luis y viceversa', department: 'San Salvador' },
    { route: '12 3 SS Micro', path: '6 Calle Poniente (San Salvador) - Cantón El Guayabo (San Salvador) y viceversa', department: 'San Salvador' },
    { route: '12 2 SS Micro', path: '6 Calle Poniente (San Salvador) - Cantón Los Palones (Panchimalco) y viceversa', department: 'San Salvador' },
    { route: '12 1 SS Micro', path: '6 Calle Poniente (San Salvador) - Mil Cumbres (Panchimalco) y viceversa', department: 'San Salvador' },
    { route: '12 SS Micro', path: '6 Calle Poniente (San Salvador) - Planes de Renderos (San Salvador) y viceversa', department: 'San Salvador' },
    { route: '12 SS Bus', path: 'Caserío Mil Cumbres - Planes de Renderos - Mercado Central y viceversa', department: 'San Salvador' },
    { route: '13 SS Bus', path: 'Colonia Santa Lucia - Soyapango - Parque Infantil y viceversa', department: 'San Salvador' },
    { route: '14 SS Bus', path: 'San Martín - Soyapango - Alcaldía de San Salvador y viceversa', department: 'San Salvador' },
    { route: '14-A SS Bus', path: 'Pto. Sta. Teresa - San Martín - 12 Avenida Sur - 2 Calle Oriente y Avenida Cervantes (San Salvador) y viceversa', department: 'San Salvador' },
    { route: '15 SS Bus', path: 'Turicentro Apulo - Ilopango - Ave. España y 9A Calle Oriente - San Salvador y viceversa', department: 'San Salvador' },
    { route: '16 SS Micro', path: 'Urbanización Melara San Antonio Abad (S. S) - 3A Calle Poniente y 9A Avenida Norte (San Salvador) y viceversa', department: 'San Salvador' },
    { route: '16 SS Bus', path: 'San Antonio Abad - Plaza Las Américas - 9 Avenida Norte - Juan Pablo II y viceversa', department: 'San Salvador' },
    { route: '17 SS Micro', path: 'Rosario de Mora - 8A Calle Oriente (San Salvador) y viceversa', department: 'San Salvador' },
    { route: '17-B SS Micro', path: 'Panchimalco - Planes de Renderos - San Salvador y viceversa', department: 'San Salvador' },
    { route: '17-A 1 SS Micro', path: 'Cantón Los Troncones - Panchimalco y viceversa', department: 'San Salvador' },
    { route: '17-A SS Micro', path: 'Cantón Azacualpa - Panchimalco y viceversa', department: 'San Salvador' },
    { route: '17-B 1 SS Bus', path: 'Cantón La Barrosa - Rosario de Mora - Mercado Central (San Salvador)', department: 'San Salvador' },
    { route: '18 SS Bus', path: 'Cantón Lomas de Candelaria - Calle Antigua A Huizúcar - Bulevar Los Próceres - Mdo. Central y viceversa', department: 'San Salvador' },
    { route: '19 SS Micro', path: 'Colonia El Charcón - Ciudad Delgado - Alameda Juan Pablo II y Diagonal Universitaria y viceversa', department: 'San Salvador' },
    { route: '19 SS Bus', path: 'Cantón San José Cortez - Cantón Plan Del Pino - Soyapango y viceversa', department: 'San Salvador' },
    { route: '20 SS Micro', path: 'Colonia Santa Rosa (Cuscatancingo) - 5º Avenida Norte (San Salvador) y viceversa', department: 'San Salvador' },
    { route: '20 SS Bus', path: 'Cuscatancingo - 20 Avenida Norte - Avenida España - Parque Infantil y viceversa', department: 'San Salvador' },
    { route: '21 SS Micro', path: 'Santiago Texacuangos - Santo Tomás - 8 Calle Oriente Vía Autopista y viceversa', department: 'San Salvador' },
    { route: '21-A SS Bus', path: 'Sgo. Texacuangos - Calle A San Marcos - 4 Calle Oriente - Avenida Cuscatlán y viceversa', department: 'San Salvador' },
    { route: '21-B SS Bus', path: 'Santiago Texacuango - Mercado Central (San Salvador) - Vía Autopista y viceversa', department: 'San Salvador' },
    { route: '22 SS Bus', path: 'Reparto Santa Clara - Juzgado de Instrucción y viceversa', department: 'San Salvador' },
    { route: '23 SS Micro', path: 'Colonia San Miguel - Mejicanos - Alameda Juan Pablo II - 6ª Calle Oriente y viceversa', department: 'San Salvador' },
    { route: '23-A SS Micro', path: 'Cantón Los Llanitos (Ayutux) - Alameda Juan Pablo II y Diagonal Universitaria (San Salvador) y viceversa', department: 'San Salvador' },
    { route: '23-A SS Bus', path: 'San Ramón - 29 Avenida Norte - Parque Infantil y viceversa', department: 'San Salvador' },
    { route: '23-B SS Bus', path: 'Cantón San Roque - 3A Calle Oriente y 2A Avenida Norte (S:S) y viceversa', department: 'San Salvador' },
    { route: '24 SS Micro', path: 'Colonia Santa Margarita (Cuscatancingo) - 9 Calle Poniente (San Salvador) y viceversa', department: 'San Salvador' },
    { route: '24-A SS Micro', path: 'Colonia Florencia (Cuscatancingo) - 5º Avenida Norte (San Salvador) y viceversa', department: 'San Salvador' },
    { route: '24 SS Bus', path: 'Cuscatancingo - Mejicanos - Parque Infantil y viceversa', department: 'San Salvador' },
    { route: '25 SS Bus', path: 'Cantón Istagua - San Martín - Reloj de Flores y viceversa', department: 'San Salvador' },
    { route: '25-A SS Bus', path: 'Cantón El Triunfo - San Salvador y viceversa', department: 'San Salvador' },
    { route: '26 SS Micro', path: 'Prolongación 75 Avenida Norte - Colonia Santa Leonor San Salvador - 3 Calle Oriente - 2 Avenida Norte y viceversa', department: 'San Salvador' },
    { route: '26 SS Bus', path: 'Jardines de San Marcos - Autopista Norte - Colonia Miralvalle y viceversa', department: 'San Salvador' },
    { route: '27 SS Bus', path: 'Colonia El Paraíso - Terminal - Jardines de Monserrat - Los Eliseos - Bulevar Los Próceres', department: 'San Salvador' },
    { route: '28 SS Bus', path: 'Colonia Ivu - Mercado Central - Terminal Oriente y viceversa', department: 'San Salvador' },
    { route: '29 7 SS Micro', path: 'Com. Las Delicias - Carr. De Oro - Alta Vista - San Bartolo - Metrocentro y viceversa', department: 'San Salvador' },
    { route: '29 6 SS Micro', path: 'Residencial Vista Al Lago - Soyapango - Centro - Hospitales - Metrocentro y viceversa', department: 'San Salvador' },
    { route: '29 5 SS Micro', path: 'San Felipe (Ilopango) - Metrocentro (San Salvador) y viceversa', department: 'San Salvador' },
    { route: '29 4 SS Micro', path: 'Colonia Alta Vista (Ilopango) - Metrocentro (San Salvador) y viceversa', department: 'San Salvador' },
    { route: '29 3 SS Micro', path: 'Reparto Las Cañas (Ilopango) - Metrocentro (San Salvador) y viceversa', department: 'San Salvador' },
    { route: '29 2 SS Micro', path: 'Colonia Cimas de San Bartolo (Ilopango) - Metrocentro (San Salvador) y viceversa', department: 'San Salvador' },
    { route: '29 1 SS Micro', path: 'Reparto Valle Nuevo (Ilopango) - 2 Avenida Norte y 3A Calle Oriente y viceversa', department: 'San Salvador' },
    { route: '29-A SS Bus', path: 'Reparto Valle Nuevo - Colonia Santa Lucía - Metrocentro - Miramonte - Av. Bernal y viceversa', department: 'San Salvador' },
    { route: '29-F SS Bus', path: 'Reparto San Felipe - San Bartolo - Soyapango - Metrocentro y viceversa', department: 'San Salvador' },
    { route: '29-D SS Bus', path: 'Reparto Las Cañas - Ilopango - Metrocentro y viceversa', department: 'San Salvador' },
    { route: '29-G SS Bus', path: 'Jardines de San Bartolo - San Bartolo - Metrocentro y viceversa', department: 'San Salvador' },
    { route: '29-H SS Bus', path: 'Cumbres de San Bartolo - San Bartolo - Soyapango - Metrocentro y viceversa', department: 'San Salvador' },
    { route: '29-C 2 SS Bus', path: 'Colonia Altavista - San Bartolo - Soyapango - (Retor. Hiper Paiz) - Metrocentro y viceversa', department: 'San Salvador' },
    { route: '29-E SS Bus', path: 'Colonia Cimas de San Bartolo - San Bartolo - Soyapango (C/Rtno. H. Paiz) - Metrocentro', department: 'San Salvador' },
    { route: '29-C SS Bus', path: 'Colonia Alta Vista - San Bartolo - Soyapango (C/Rtno. H. Paiz) - Metrocentro y viceversa', department: 'San Salvador' },
    { route: '30-A SS Micro', path: 'Calle Al Volcán Quinta Santa Eduviges (Mejicanos) 2 Calle Oriente y 12 Avenida S (San Salvador) y viceversa', department: 'San Salvador' },
    { route: '30 SS Bus', path: 'Colonia Metropolis (Mejicanos) - Metrocentro - Calle Rubén Darío - 11ª Avenida Sur', department: 'San Salvador' },
    { route: '30-B SS Bus', path: 'Colonia Las Terrazas - Ayutuxtepeque - Colonia San Benito y viceversa', department: 'San Salvador' },
    { route: '31 SS Bus', path: 'Colonia Monte Carmelo - Zacamil - Mejicanos y viceversa', department: 'San Salvador' },
    { route: '32 SS Micro', path: 'Colonia Montreal - Mejicanos - Parque Infantil (San Salvador) y viceversa', department: 'San Salvador' },
    { route: '33-B SS Micro', path: 'Cantón San Roque (Mejicanos) - Calle Gerardo Barrios - 9ª Avenida Sur y 4ª Calle Poniente (San Salvador) y viceversa', department: 'San Salvador' },
    { route: '33-A 2 SS Micro', path: 'Cantón Guadalupe (Mejicanos) - 1 Calle Poniente y Avenida Castro Morán (Mejicanos) y viceversa', department: 'San Salvador' },
    { route: '33-A 1 SS Micro', path: 'Colonia Altos Del Escorial (Mejicanos) - Calle Gdo. Barrios - 9ª Avenida Sur y 4ª Calle Pte (San Salvador) y viceversa', department: 'San Salvador' },
    { route: '33-A SS Bus', path: 'Colonia Bosques Del Matazano - Centro - Zacamil y viceversa', department: 'San Salvador' },
    { route: '34-B SS Bus', path: 'Terminal de Oriente - Terminal de Occidente - Santa Elena y viceversa', department: 'San Salvador' },
    { route: '34-A SS Bus', path: 'Terminal de Oriente - Terminal de Occidente - San Benito y viceversa', department: 'San Salvador' },
    { route: '35 SS Micro', path: 'Colonia Cima IV - 8ª Calle Oriente - Avenida Cuscatlán y viceversa', department: 'San Salvador' },
    { route: '35 SS Bus', path: 'La Cima IV - Reparto San Patricio - 4ª Calle Oriente y Avenida Cuscatlán (San Salvador) y viceversa', department: 'San Salvador' },
    { route: '36 SS Bus', path: 'Parque de Ilopango - Cantón Asino - Joya Grande y viceversa', department: 'San Salvador' },
    { route: '37-A SS Micro', path: 'Colonia Los Naranjos - Apopa y viceversa', department: 'San Salvador' },
    { route: '37-A SS Bus', path: 'Cantón Las Casitas - San Marcos - Mercado Central y viceversa', department: 'San Salvador' },
    { route: '37-A 1 SS Bus', path: 'Cantón Joya de Girón - El Guaje 1 - Las Casitas - San Marcos - Mercado Central y viceversa', department: 'San Salvador' },
    { route: '37-B SS Bus', path: 'Cantón Agua Zarca - San Marcos - Mercado Central y viceversa', department: 'San Salvador' },
    { route: '38-F SS Micro', path: 'Rto. Los Ángeles (Apopa) - 5 Calle Oriente y 6 Avenida Nte. (San Salvador) y viceversa', department: 'San Salvador' },
    { route: '38-E SS Micro', path: 'Colonia Valle Del Sol (Apopa) - 5º Calle Oriente - 2ª Avenida Norte (San Salvador) y viceversa', department: 'San Salvador' },
    { route: '38-D SS Micro', path: 'Rpto. Madre Tierra - Colonia Chintuc (Apopa) - 5ª Calle Oriente y 2ª Avenida Norte (San Salvador) y viceversa', department: 'San Salvador' },
    { route: '38-C SS Micro', path: 'Rto. Valle Verde (Apopa) - 5 Calle Oriente y 6 Avenida Norte (San Salvador) y viceversa', department: 'San Salvador' },
    { route: '38-B 1 SS Micro', path: 'Colonia San Andrés (Apopa) - 5 Calle Oriente y 6 Avenida Nte. (San Salvador) y viceversa', department: 'San Salvador' },
    { route: '38-A SS Micro', path: 'Colonia San José Las Flores (Tonacatepeque) - 5 Calle Oriente y 6 Avenida Norte (San Salvador) y viceversa', department: 'San Salvador' },
    { route: '38-A SS Bus', path: 'San José Las Flores - Apopa - 2ª Avenida Norte (San Salvador) y viceversa', department: 'San Salvador' },
    { route: '38-C SS Bus', path: 'Residencial Valle Verde (Apopa) - Centro Judicial Isidro Menéndez y viceversa', department: 'San Salvador' },
    { route: '38-B SS Bus', path: 'Colonia Valle Del Sol - Colonia El Tikal - Apopa - 2ª Calle Oriente (San Salvador) y viceversa', department: 'San Salvador' },
    { route: '39 SS Micro', path: 'Huizucar - Mercado Central (San Salvador) y viceversa', department: 'San Salvador' },
    { route: '39 SS Bus', path: 'Huizucar - Mercado Central y viceversa', department: 'San Salvador' },
    { route: '41-G SS Micro', path: 'Urbanización Prados de Venecia (Soyapango) - 1ª Calle Oriente - 9ª Avenida Norte (San Salvador) y viceversa', department: 'San Salvador' },
    { route: '41-F SS Micro', path: 'Montes de San Bartolo V (Soyapango) - 1ª Calle Oriente - 9ª Avenida Norte (San Salvador) y viceversa', department: 'San Salvador' },
    { route: '41-E SS Micro', path: 'Montes de San Bartolo IV (Soyapango) - 1º Calle Poniente - 9ª Avenida Norte (San Salvador) y viceversa', department: 'San Salvador' },
    { route: '41-D SS Micro', path: 'Colonia Guayacan (Soyapango) - 1ª Calle Poniente - 9ª Avenida Norte (San Salvador) y viceversa', department: 'San Salvador' },
    { route: '41-B SS Micro', path: 'Colonia Bosques Del Río (Soyapango) - 1ª Calle Oriente - 9ª Avenida Norte (San Salvador) y viceversa', department: 'San Salvador' },
    { route: '41-A SS Micro', path: 'Rpto. San José (Soyapango) - 1ª Calle Poniente - 9ª Avenida Norte (San Salvador) y viceversa', department: 'San Salvador' },
    { route: '41-D 1 SS Bus', path: 'Urbanización La Campanera - Soyapango - 1ª Calle Pte y 9ª Avenida Norte - Juan Pablo II (San Salvador) y viceversa', department: 'San Salvador' },
    { route: '41-B SS Bus', path: 'Urbanización Bosques Del Río - Urbanización El Limón (Soyapango) - 1ª Calle Pte y 9ª Avenida Norte - Juan Pablo II y viceversa', department: 'San Salvador' },
    { route: '41-D SS Bus', path: 'Reparto Las Margaritas - Prados de Venecia - 1ª Calle Poniente y 9ª Avenida Norte', department: 'San Salvador' },
    { route: '41-C SS Bus', path: 'Colonia Santa Eduviges (Soyapango) - 1ª Calle Poniente y 9ª Avenida Norte - Pj II (San Salvador) y viceversa', department: 'San Salvador' },
    { route: '41-A SS Bus', path: 'Colonia San José - Soyapango - 1ª Calle Pte y 9ª Avenida Norte - Juan Pablo II (San Salvador) y viceversa', department: 'San Salvador' },
    { route: '41-E SS Bus', path: 'Calle Ciudadela Don Bosco (Cantón El Algodón - Soyapango) - 9ª Avenida Norte - JP I (San Salvador) y viceversa', department: 'San Salvador' },
    { route: '42-E SS Micro', path: 'Paseo Independencia 16 Avenida Norte (San Salvador) - Colonia La Sabana (Santa Tecla) y viceversa', department: 'San Salvador' },
    { route: '42-D SS Micro', path: 'Paseo Independencia (San Salvador) - Colonia El Zaite 2 (Zaragoza) y viceversa', department: 'San Salvador' },
    { route: '42-C SS Micro', path: 'Paseo Independencia 16 Avenida Norte (San Salvador) - Colonia La Sabana Polideportivo (Santa Tecla) y viceversa', department: 'San Salvador' },
    { route: '42-B 1 SS Micro', path: 'Residencial San José, Final Calle San José (Santa Tecla) - 14ª Avenida Norte - 12ª Avenida Sur (San Salvador) y viceversa', department: 'San Salvador' },
    { route: '42-B SS Micro', path: 'Residencial San José, Final Calle San José (Santa Tecla) - 2 Calle Oriente y 12 Avenida Sur (San Salvador) y viceversa', department: 'San Salvador' },
    { route: '42-A SS Micro', path: 'Paseo Independencia y 16 Avenida Norte (San Salvador) - Pasaje Amapolas - 7 Avenida Norte (Santa Tecla) y viceversa', department: 'San Salvador' },
    { route: '42-C SS Bus', path: 'Jardines de La Sabana (Santa Tecla) - 14ª Avenida Norte - 1ª Bulevar (San Salvador) y viceversa', department: 'San Salvador' },
    { route: '42-A SS Bus', path: 'Colonia Santa Teresa - Ciudad Merliot - Altos Del Boulevard, San Salvador', department: 'San Salvador' },
    { route: '42-B SS Bus', path: 'Colonia Santa Mónica - Ciudad Merliot - 12 Avenida Sur - San Salvador y viceversa', department: 'San Salvador' },
    { route: '43 1 SS Micro', path: 'Colonia Los Alpes (Ciudad Delgado) - 39ª Avenida Norte y viceversa', department: 'San Salvador' },
    { route: '43 SS Micro', path: 'Colonia Los Alpes (Ciudad Delgado) - 1ª Calle Poniente - 9ª Avenida Norte (San Salvador) y viceversa', department: 'San Salvador' },
    { route: '43 SS Bus', path: 'Ciudadela Don Bosco (Cantón El Algodón) - 1ª Calle Poniente y 9ª Calle Oriente (San Salvador) y viceversa', department: 'San Salvador' },
    { route: '44 SS Micro', path: 'Colonia Santa Trinidad (Ayutuxte) - Bulevar Orden Malta - Santa Elena (Antiguo Cuscatlán) y viceversa', department: 'San Salvador' },
    { route: '44 2 SS Bus', path: 'Antiguo Cuscatlán - Zacamil y viceversa', department: 'San Salvador' },
    { route: '44 1 SS Bus', path: 'Antiguo Cuscatlán - Metrocentro - Zacamil y viceversa', department: 'San Salvador' },
    { route: '45-B SS Micro', path: 'Valle Del Sol (Apopa) - 5 Calle Oriente y 2 Avenida Norte (San Salvador) y viceversa', department: 'San Salvador' },
    { route: '45-A SS Micro', path: '2 Calle Oriente y 3 Avenida Norte (Apopa) - El Amate - Cantón Las Cabañitas (Ciudad Delgado) y viceversa', department: 'San Salvador' },
    { route: '46-C SS Micro', path: 'San Ramón (Mejicanos) - 11ª Avenida Sur - 4ª Calle Poniente (San Salvador) y viceversa', department: 'San Salvador' },
    { route: '46-B SS Micro', path: 'San Ramón - Calle Las Brisas (Mejicanos) - 9ª Avenida Norte - Juan Pablo II (San Salvador) y viceversa', department: 'San Salvador' },
    { route: '46 2 SS Bus', path: 'San Ramón (Mejicanos) - 13ª Avenida Norte y 1ª Calle Pte (San Salvador) y viceversa', department: 'San Salvador' },
    { route: '46 1 SS Bus', path: 'San Ramón (Mejicanos) - 3ª Calle Oriente y 8ª Avenida Norte (San Salvador) y viceversa', department: 'San Salvador' },
    { route: '47 SS Bus', path: 'Colonia Esmeralda - Mercado Central y viceversa', department: 'San Salvador' },
    { route: '48 SS Micro', path: 'Rto. Santa Marta (San Salvador) - 6 Calle Oriente y 2 Avenida Sur (San Salvador) y viceversa', department: 'San Salvador' },
    { route: '48 SS Bus', path: 'Colonia Santa Marta - Mercado Central y viceversa', department: 'San Salvador' },
    { route: '49-B SS Bus', path: 'Cantón El Rosario - Rto. San Ramón - Cantón El Limón - Urbanización La Campanera - Soyapango', department: 'San Salvador' },
    { route: '49-A SS Bus', path: 'Colonia La Campanera - Cantón El Limón - Soyapango y viceversa', department: 'San Salvador' },
    { route: '52 3 SS Micro', path: '22ª Avenida Norte (San Salvador) - Comunidad Fesiara y viceversa', department: 'San Salvador' },
    { route: '52 2 SS Micro', path: '22ª Avenida Norte (San Salvador) - Redondel Artiga y viceversa', department: 'San Salvador' },
    { route: '52 1 SS Micro', path: '22 Avenida Norte y Reloj de Flores (San Salvador) - Cantón El Carmen (San Salvador) y viceversa', department: 'San Salvador' },
    { route: '52 2 SS Bus', path: 'Calle Fenadesal (San Salvador) - Redondel Masferrer (San Salvador) y viceversa', department: 'San Salvador' },
    { route: '52 1 SS Bus', path: 'Calle Fenadesal (San Salvador) - Redondel Masferrer (San Salvador) y viceversa', department: 'San Salvador' },
    { route: '53 SS Micro', path: 'Residencial San Pedro (Mejicanos) - Calle Rubén Darío - 17ª Avenida Sur y viceversa', department: 'San Salvador' },
    { route: '53-C SS Micro', path: 'Residencial San Pedro - Calle San Carlos (Mejicanos) - 5ª Calle Poniente - 9ª Avenida Te (San Salvador) y viceversa', department: 'San Salvador' },
    { route: '53-A SS Micro', path: 'Residencial San Pedro - Zacamil - Hospital Bloom - Centro de Gobierno y viceversa', department: 'San Salvador' },
    { route: '54 SS Micro', path: 'Caserío Chantecuan - Carretera Los Planes de Renderos Km 8 1/2 y viceversa', department: 'San Salvador' },
    { route: '59 SS Bus', path: 'Cantón Casa de Piedra - Desvío de Carretera A Panchimalco - Kilómetro 8 1/2 y viceversa', department: 'San Salvador' },
    { route: '97 SS Bus', path: 'Residencial Europa - Ciudad Merliot - Santa Tecla y viceversa', department: 'San Salvador' },
    { route: '99-A 1 SS Bus', path: 'Terminal Del Sur - Caserío 4', department: 'San Salvador' },
    { route: '101-D Micro', path: 'Colonia San José - Cumbres de Santa Tecla - 11 Avenida Norte y viceversa', department: 'San Salvador' },
    { route: '101-B Micro', path: 'Alpes Suizos - Santa Tecla - 11ª Avenida Sur y viceversa', department: 'San Salvador' },
    { route: '101-D Bus', path: 'Residencial San Antonio - Santa Tecla - San Salvador y viceversa', department: 'San Salvador' },
    { route: '101-C Bus', path: 'Hacienda San José - Santa Tecla - Antiguo Cuscatlán - San Salvador y viceversa', department: 'San Salvador' },
    { route: '101-B 1 Bus', path: 'Colonia Quezaltepec - Girasoles (Santa Tecla) - 5ª Calle Poniente - 11ª Avenida Sur (San Salvador) y viceversa', department: 'San Salvador' },
    { route: '101-A 2 Bus', path: 'Colonia Las Delicias - Santa Tecla - San Salvador y viceversa (Vía Shell)', department: 'San Salvador' },
    { route: '101-A 1 Bus', path: 'Colonia Las Delicias (Santa Tecla) - 5ª Calle Poniente - 11ª Avenida Norte (San Salvador) y viceversa', department: 'San Salvador' },
    { route: '101-B 2 Bus', path: 'Alpes Suizos - Colonia Quezaltepec - San Salvador y viceversa', department: 'San Salvador' },
    { route: '107-B Bus', path: 'Hacienda Melara - Rosario de Mora - Planes de Renderos - Mercado Central y viceversa', department: 'San Salvador' },
    { route: '109 1 Bus', path: 'Nejapa - Apopa - San Salvador y viceversa', department: 'San Salvador' },
    { route: '115 Micro', path: 'Tonacatepeque - Distrito Italia - Apopa - San Salvador y viceversa', department: 'San Salvador' },
    { route: '115 Bus', path: 'Tonacatepeque - Distrito Italia - Apopa - San Salvador y viceversa', department: 'San Salvador' },
    { route: '117-A Bus', path: 'Hacienda San Carlos - Aguilares - San Salvador y viceversa', department: 'San Salvador' },
    { route: '117 Bus', path: 'El Paisnal - Aguilares - San Salvador y viceversa', department: 'San Salvador' },
    { route: '117-C Bus', path: 'Cantón Tutultepeque - Aguilares y viceversa', department: 'San Salvador' },
    { route: '140 7 Micro', path: 'San Martín - Unicentro Soyapango - Carretera de Oro - Paso A Desnivel Ca - 4 y viceversa', department: 'San Salvador' },
    { route: '140 5 Micro', path: 'San José Guayabal - San Martín - San Salvador y viceversa', department: 'San Salvador' },
    { route: '140 4 Micro', path: 'Colonia Santa Elena - San Martín - 8ª Avenida Sur y viceversa', department: 'San Salvador' },
    { route: '140 3 Micro', path: 'Cantón Tecomatepeque - San Martín - Soyapango - 8ª Avenida Sur y viceversa', department: 'San Salvador' },
    { route: '140 2 Micro', path: 'San Martín - Soyapango - 8ª Avenida Sur y viceversa', department: 'San Salvador' },
    { route: '140 1 Micro', path: 'San Martín - Soyapango - 8ª Avenida Sur y viceversa', department: 'San Salvador' },
    { route: '140 Micro', path: 'San Martín - Soyapango - 8ª Avenida Sur y viceversa', department: 'San Salvador' },
    { route: '140 7 Bus', path: 'San Martín - Unicentro Soyapango - Carretera de Oro - Paso A Desnivel Ca - 4', department: 'San Salvador' },
    { route: '173 Bus', path: 'Nejapa - San Salvador y viceversa', department: 'San Salvador' },
    { route: '190 Bus', path: 'Tonacatepeque - San Martín y viceversa', department: 'San Salvador' },
    { route: '190-A Bus', path: 'San Martín - Carretera Panamericana - Cantón San Agustín y viceversa', department: 'San Salvador' }
    ];

    module.exports = routes;