import { Link } from "expo-router";
import { StatusBar } from 'expo-status-bar';
import { Text, View, Image, TouchableOpacity} from 'react-native';
import { styles } from '../styles/styles';

export default function App() {
  return (
    <View style={styles.container}>

      <View style={styles.encabezado}>
          <Image
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/512/12084/12084662.png'
            }}
            style={{ width: 150, height: 150}}
          />

          <View style={styles.contenedorTitulo}>
                  <Text style={styles.tituloSistema}>
                    SISTEMA
                  </Text>

                  <Text style={styles.tituloAcademico}>
                    ACADÉMICO
                  </Text>
          </View>
      </View>

      <Text style={styles.subtitulo}>
        Bienvenido
      </Text>

      <Link href="/menuEstudiante" asChild>
        <TouchableOpacity style={styles.boton}>
          <View style={styles.contenedorIcono}>
            <Image
              source={{
                uri: 'https://cdn-icons-png.flaticon.com/512/4696/4696859.png'
              }}
              style={ styles.icono }
            />
            </View>

            <Text style={styles.textoBoton}>
              Estudiantes
            </Text>
        </TouchableOpacity>
      </Link>
      
      <Link href="/menuDocente" asChild>
        <TouchableOpacity style={styles.boton}>
          <View style={styles.contenedorIcono}>
            <Image
              source={{
                uri: 'https://cdn-icons-png.flaticon.com/512/3699/3699676.png'
              }}
              style={ styles.icono }
            />
          </View>
            <Text style={styles.textoBoton}>
              Docentes
            </Text>
        </TouchableOpacity>
      </Link>
      
      <Text style={styles.nombre}>
        Dennis Mauricio Flores Huanca
      </Text>

      <StatusBar style="auto" />
    </View>
  );
}