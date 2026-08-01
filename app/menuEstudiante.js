import { Link } from "expo-router";
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { styles } from '../styles/menuEstudianteStyles';

export default function MenuEstudiante() {

    const fecha = new Date();

    const fechaActual =
        fecha.toLocaleDateString('es-BO', {
            weekday: 'long',
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        });

    return (

        <View style={styles.container}>

            {/* Encabezado */}
            <View style={styles.header}>
                    <Image
                        source={{
                        uri: 'https://cdn-icons-png.flaticon.com/512/12084/12084662.png'
                        }}
                        style={{ width: 90, height: 90, marginBottom:10}}
                    />
                    <Text style={styles.titulo}>
                        MENÚ ESTUDIANTE
                    </Text>
            </View>


            <View style={styles.body}>
                <Text style={styles.subtitulo}>
                    Bienvenido Carlos
                </Text>

                <Text style={styles.fecha}>
                    {fechaActual}
                </Text>

                <View style={styles.contenedorBotones}>
                    <Link href="/recordAcademico" asChild>
                        <TouchableOpacity style={styles.tarjeta}>
                            <Image
                                source={{
                                    uri:'https://cdn-icons-png.flaticon.com/512/5351/5351008.png'
                                }}
                                style={styles.icono}
                            />
                            <Text style={styles.textoTarjeta}>
                                Record{"\n"}Académico
                            </Text>
                        </TouchableOpacity>
                    </Link>

                    <Link href="/historialAcademico" asChild>
                        <TouchableOpacity style={styles.tarjeta}>
                            <Image
                                source={{
                                    uri:'https://cdn-icons-png.flaticon.com/512/3145/3145765.png'
                                }}
                                style={styles.icono}
                            />
                            <Text style={styles.textoTarjeta}>
                                Historial{"\n"}Académico
                            </Text>
                        </TouchableOpacity>
                    </Link>

                    <Link href="/datosPersonales" asChild>
                        <TouchableOpacity style={styles.tarjeta}>
                            <Image
                                source={{
                                    uri:'https://cdn-icons-png.flaticon.com/512/1077/1077114.png'
                                }}
                                style={styles.icono}
                            />
                            <Text style={styles.textoTarjeta}>
                                Datos Personales
                            </Text>
                        </TouchableOpacity>
                    </Link>

                    <Link href="/horario" asChild>
                        <TouchableOpacity style={styles.tarjeta}>
                            <Image
                                source={{
                                    uri:'https://cdn-icons-png.flaticon.com/512/3652/3652191.png'
                                }}
                                style={styles.icono}
                            />
                            <Text style={styles.textoTarjeta}>
                                Horario
                            </Text>
                        </TouchableOpacity>
                    </Link>
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

                    <Link href="/" asChild>
                        <TouchableOpacity style={styles.botonMenu}>
                            <Image
                                source={{
                                    uri:'https://cdn-icons-png.flaticon.com/512/786/786197.png'
                                }}
                                style={styles.iconoMenu}
                            />
                        </TouchableOpacity>
                    </Link>
                </View>
            </View>
            <StatusBar style="auto" />
        </View>
    );

}