# 📚 Sistema Académico

# 📖 Descripción
El presente proyecto consiste en el desarrollo de una aplicación móvil denominada **Sistema Académico**, elaborada en React Native con Expo. 
La aplicación cuenta con un **menú principal** desde el cual el usuario puede ingresar al módulo de **Estudiantes** o **Docentes**.

# ✨ Funciones implementadas
## 👨‍🎓 Módulo Estudiante
- Menú principal del estudiante.
- Visualización de datos personales editables.
- Consulta del historial académico.
- Consulta del récord académico.
- Visualización del horario de clases.

## 👨‍🏫 Módulo Docente
- Selección de materia mediante una lista desplegable.
- Registro de estudiantes y sus notas.


# ⚛️ Conceptos de React Native aplicados
Durante el desarrollo del proyecto se utilizaron los siguientes componentes y conceptos:

- **View** para organizar la estructura de las pantallas.
- **Text** para mostrar información.
- **Image** para representar íconos e imágenes.
- **TextInput** para capturar y modificar datos.
- **TouchableOpacity** y **Pressable** para crear botones personalizados.
- **ScrollView** para permitir el desplazamiento vertical.
- **StatusBar** para controlar la barra superior del dispositivo.
- **useState** para el manejo de estados y actualización dinámica de la interfaz.
- **StyleSheet** para separar completamente la lógica de los estilos.

---

# 📊 Estructuras de datos utilizadas
Para simular el funcionamiento del sistema sin utilizar una base de datos se emplearon:
- Arreglos unidimensionales.
- Arreglos bidimensionales.
- Arreglos de objetos para representar materias, notas, paralelos y horarios.
- Generación aleatoria (Random) para asignar notas, paralelos y algunos datos de ejemplo.

Además, se implementó una lógica académica que simula el avance del estudiante entre gestiones considerando:
- Materias aprobadas.
- Materias reprobadas.
- Materias abandonadas.

---

# 🧭 Navegación
La navegación fue implementada mediante **Expo Router**, utilizando el componente **Link**.

Las pantallas disponibles son:
- 🏠 Pantalla principal
- 👨‍🎓 Menú de estudiantes
- 👨‍🏫 Menú de docentes
- 📄 Datos personales
- 📚 Historial académico
- 🏅 Récord académico
- 🗓️ Horario

También se implementó un **menú de navegación inferior** con botones de **Inicio** y **Volver**, para facilitar el acceso entre las diferentes ventanas de la aplicación.

---
# 🛠️ Tecnologías utilizadas
- React Native
- Expo
- Expo Router
- JavaScript
- Visual Studio Code
---

# 📌 Observaciones
Este proyecto tiene fines académicos. 
 La información utilizada es simulada y se maneja únicamente mediante estructuras de datos en memoria, sin conexión a bases de datos.
