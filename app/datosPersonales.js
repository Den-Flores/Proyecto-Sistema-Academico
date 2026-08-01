import { Link } from "expo-router";
import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { styles } from '../styles/datosPersonalesStyles';

const datos = [ "18181818", "12345678 LP", "Luis Fernando Ticona Coteja", "77777710", "16/07/2005"];

export default function DatosPersonales() {
    const [matricula, setMatricula] = useState(datos[0]);
    const [carnet, setCarnet] = useState(datos[1]);
    const [nombre, setNombre] = useState(datos[2]);
    const [telefono, setTelefono] = useState(datos[3]);
    const [fechaNacimiento, setFechaNacimiento] = useState(datos[4]);

    return (
        <View style={styles.container}>

            <Text style={styles.titulo}>
                Datos Personales
            </Text>

            <Image
                source={{
                    uri: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png'
                }}
                style={styles.imagenPerfil}
            />

            <View style={styles.informacion}>
                <Image
                    source={{
                        uri: 'https://cdn-icons-png.flaticon.com/512/845/845646.png'
                    }}
                    style={styles.icono}
                />
                <Text style={styles.tituloInformacion}>
                    Información Estudiante
                </Text>
            </View>

            <View style={styles.contenido}>
                <ScrollView
                    showsVerticalScrollIndicator={false} 
                    contentContainerStyle={styles.contenidoScroll} >

                    <Text style={styles.label}> Nombre </Text>
                    <TextInput style={styles.input}
                        value={nombre} 
                        onChangeText={(texto)=>{setNombre(texto);
                                                datos[2] = texto;}}
                    />

                    <Text style={styles.label}> Carnet </Text>
                    <TextInput style={styles.input}
                        value={carnet} 
                        onChangeText={(texto)=>{setCarnet(texto);
                                                datos[1] = texto;}}
                    />

                    <Text style={styles.label}> Matrícula </Text>
                    <TextInput style={styles.input} 
                        value={matricula} 
                        onChangeText={(texto)=>{setMatricula(texto);
                                                datos[0] = texto;}}
                    />

                    <Text style={styles.label}> Teléfono </Text>
                    <TextInput style={styles.input}
                        value={telefono}
                        onChangeText={(texto)=>{setTelefono(texto);
                                                datos[3] = texto;}}
                    />

                    <Text style={styles.label}> Fecha de Nacimiento </Text>
                    <TextInput
                        style={styles.input} 
                        value={fechaNacimiento}
                        onChangeText={(texto)=>{setFechaNacimiento(texto);
                                                datos[4] = texto;}}
                    />
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
                                uri:'https://cdn-icons-png.flaticon.com/512/786/786197.png'
                            }}
                            style={styles.iconoMenu}
                        />
                    </TouchableOpacity>
                </Link>
            </View>
            <StatusBar style="auto" />
        </View>
    );
}