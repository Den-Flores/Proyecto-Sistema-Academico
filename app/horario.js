import { Link } from "expo-router";
import { StatusBar } from 'expo-status-bar';
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import { styles } from '../styles/horarioStyles';

export default function Horario(){

    const dias=[ "Lunes", "Martes", "Miércoles", "Jueves"];
    const materias=[ ["INF-114","INF-111", "INF-113"], ["INF-112","INF-116", "INF-115"]];
    const nombres=[["Álgebra I", "Introducción a la Informática", "Programacion Web I"], ["Fundamentos Digitales", "Física I", "Calculo I"]];
    const horas=[["08:00 - 10:00","10:00 - 12:00", "12:00 - 14:00"],["10:00 - 12:00", "12:00 - 14:00", "14:00 - 16:00"]];
    const aulas=[["A-101","B-205", "C-307"],["A-102", "B-203", "C-310"]];
    const colores=[["#D6EAF8","#D5F5E3", "#FADBD8"],["#FCF3CF", "#EBDEF0",  "#F5CBA7"]];

    return(

        <View style={styles.container}>

            <Text style={styles.titulo}>
                Horario
            </Text>

            <Text style={styles.subtitulo}>
                Primer Semestre
            </Text>

            <View style={styles.contenido}>
                <ScrollView
                    showsVerticalScrollIndicator={false}>
                    {
                        dias.map((dia,i)=>{
                        const indice = i % 2;
                        return(
                            <View key={i}>
                                <Text style={styles.tituloDia}>
                                    {dia}
                                </Text>

                            {   materias[indice].map((materia,j)=>(
                                    <View
                                        key={j}
                                        style={[
                                            styles.tarjeta,
                                            {backgroundColor: colores[indice][j]}
                                        ]}>

                                        <Text style={styles.codigo}>
                                            {materia}
                                        </Text>

                                        <Text style={styles.nombreMateria}>
                                            {nombres[indice][j]}
                                        </Text>

                                        <Text style={styles.info}>
                                            🕗 {horas[indice][j]}
                                        </Text>

                                        <Text style={styles.info}>
                                            🏫 Aula {aulas[indice][j]}
                                        </Text>
                                    </View> ))
                            }
                            </View>
                        ); })
                    }
                </ScrollView>
            </View>

            <View style={styles.menuInferior}>
                <Link href="/" asChild>
                    <TouchableOpacity style={styles.botonMenu}>
                        <Image
                            source={{
                                uri:'https://cdn-icons-png.flaticon.com/512/1946/1946488.png'
                            }}
                            style={styles.iconoMenu}
                        />
                    </TouchableOpacity>
                </Link>

                <Link href="/menuEstudiante" asChild>
                    <TouchableOpacity style={styles.botonMenu}>
                        <Image
                            source={{
                                uri:'https://cdn-icons-png.flaticon.com/512/271/271220.png'
                            }}
                            style={styles.iconoMenu}
                        />
                    </TouchableOpacity>
                </Link>
            </View>

            <StatusBar style="auto"/>
        </View>
    );
}