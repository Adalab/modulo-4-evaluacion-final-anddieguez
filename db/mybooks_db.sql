CREATE DATABASE mybooks_db;

USE mybooks_db;

CREATE TABLE `mybooks_db`.`books` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(55) NULL,
  `author` VARCHAR(55) NULL,
  `genre` VARCHAR(45) NULL,
  `year` SMALLINT NULL,
  `synopsis` VARCHAR(1017) NULL,
  PRIMARY KEY (`id`));
  
  INSERT INTO `mybooks_db`.`books` (`title`, `author`, `genre`, `year`, `synopsis`) VALUES ('La sombra del viento', 'Carlos Ruiz Zafón', 'Suspense', '2001', 'El pequeño Daniel Sempere llega a El Cementerio de los Libros Olvidados de la mano de su padre. Allí escoge un libro llamado La sombra del viento, escrito por Julián Carax. Mientras crece e interesado en conocer más de este indescifrable autor, va investigando y descubre que todos sus libros han sido misteriosamente quemados por uno de los personajes del libro. La trama se desenvuelve en la ciudad embrujada de Barcelona donde, junto a su nuevo amigo Fermín, intentará descubrir la verdad que envuelve a un enigmático ser que a toda costa intenta enterrar el pasado de Julián Carax');
INSERT INTO `mybooks_db`.`books` (`title`, `author`, `genre`, `year`, `synopsis`) VALUES ('Como agua para chocolate', 'Laura Esquivel', 'Novela', '1989', 'Pedro Muzquiz y Tita de la Garza se han enamorado, pero se trata de un amor prohibido. Cuando Pedro y su padre le piden a la madre de Tita la mano de su hija en matrimonio esta se niega. Según la tradición familiar, Tita siendo la hija menor, debe quedarse en casa para cuidar de su madre en su vejez. Ante esto, Pedro accede a casarse con la hermana mayor de Tita, Rosaura, para poder vivir en el rancho de la familia y estar cerca de su amada Tita.');
INSERT INTO `mybooks_db`.`books` (`title`, `author`, `genre`, `year`, `synopsis`) VALUES ('La metamorfosis', 'Franz Kafka', 'Novela existencial', '1915', 'Narra de forma magistral la transformación de Gregorio Samsa de comerciante a un monstruoso insecto. Samsa primero cree que es un sueño, pero poco a poco va descubriendo que la pesadilla es real y su transformación en animal es un hecho que afecta a su trabajo y a su relación con su familia.');
INSERT INTO `mybooks_db`.`books` (`title`, `author`, `genre`, `year`, `synopsis`) VALUES ('Los pazos de Ulloa', 'Emilia Pardo Bazán', 'Naturalismo', '1886', 'El marqués de Ulloa, rudo y pasional, se ve obligado a contraer matrimonio con Nucha, una señorita de ciudad para quien el ambiente de los pazos es una pesadilla. Sabel, la criada de perversa belleza y que ha dado un hijo bastardo al marqués, es la figura opuesta a Nucha');
INSERT INTO `mybooks_db`.`books` (`title`, `author`, `genre`, `year`, `synopsis`) VALUES ('El camino', 'Miguel Delibes', 'Novela', '1950', 'A lo largo de la noche que precede a la partida, Daniel, insomne, con un nudo en la garganta, evocará sus correrías con sus amigos —Roque el Moñigo y Germán el Tiñoso— a través de los campos descubriendo el cielo y la tierra, y revivirá las andanzas de la gente sencilla de la aldea.');
INSERT INTO `mybooks_db`.`books` (`title`, `author`, `genre`, `year`, `synopsis`) VALUES ('El cuento de la criada', 'Margaret Atwood', 'Ficción histórica', '1985', 'La criadas es una mujer que se considera un objeto, cuyo valor está en sus ovarios, siendo un receptáculo necesario para alcanzar el nivel de nuevos nacimientos deseado en Gilead, velando por mantener el modelo de sociedad impuesto. En esta sociedad, Defred es una mujer que pierde su dinero, su empleo y su nombre.');
INSERT INTO `mybooks_db`.`books` (`title`, `author`, `genre`, `year`, `synopsis`) VALUES ('Las edades de Lulú', 'Almudena Grandes', 'Novela', '1989', 'La protagonista, Lulu, es una adolescente seducida por un amigo de su hermano con el que se acaba casando. A lo largo de su relación experimentaran con el sexo desde diferentes perspectivas. Y a medida que crezca, Lulú se irá adentrando en otro tipo de placeres prohibidos.');
INSERT INTO `mybooks_db`.`books` (`title`, `author`, `genre`, `year`, `synopsis`) VALUES ('Un mundo feliz', 'Aldous Huxley', 'Ciencia ficción', '1932', 'Los valores humanos esenciales no tienen cabida en este mundo y los habitantes se crean in vitro con una técnica concebida a imagen y semejanza de una cadena de montaje. El soma, la droga por excelencia en este mundo distópico que propone Huxley, ayuda a los habitantes a escapar de la rutina.');
INSERT INTO `mybooks_db`.`books` (`title`, `author`, `genre`, `year`, `synopsis`) VALUES ('El guardián invisible', 'Dolores Redondo', 'Novela negra', '2013', 'El cuerpo de una adolescente aparece a orillas del río Baztán, en Navarra. Las circunstancias en las que se encuentra el cuerpo relacionan el crimen con un asesinato ocurrido un mes atrás. La inspectora Amaia Salazar es la encargada de dirigir la investigación. Para ello deberá desplazarse hasta Elizondo, el pueblo donde creció y del que ha tratado de huir toda su vida. La inspectora deberá enfrentarse a las complicaciones del caso y a sus propios fantasmas del pasado para encontrar al asesino.');