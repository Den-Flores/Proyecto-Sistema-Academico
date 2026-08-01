import { Link } from "expo-router";
import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import { styles } from '../styles/recordAcademicoStyles';

// Funcion que genera una nota entre 51 y 100
function generarNota(){
    return Math.floor(Math.random()*50)+51;
}

// Genera la información de un semestre
function crearSemestre(materias, gestion){
    const semestre=[];
    for(let i=0;i<materias.length;i++){
        semestre.push({
            materia:materias[i],
            nota:generarNota(),
            gestion:gestion
        });
    }
    return semestre;
}

// Funcion para calcular las materias aprobadas y el prom. de aprobacion
function calcularEstadisticas(historial){
    let aprobadas = 0;
    let sumaNotas = 0;

    for(let i = 0; i < historial.length; i++){
        aprobadas++;
        sumaNotas += historial[i].nota;
    }
    const promedio = (sumaNotas / aprobadas).toFixed(2);
    return{
        aprobadas,
        promedio
    };
}

export default function HistorialAcademico() {
    const materiasBase = [
        ["INF-111","INF-112","INF-113"],
        ["INF-121","INF-122","INF-123"],
        ["INF-131","INF-132","INF-133"]
    ];

    const semestre1 = crearSemestre(materiasBase[0], "I/2025");
    const semestre2 = crearSemestre(materiasBase[1], "II/2025");
    const semestre3 = crearSemestre(materiasBase[2], "I/2026");
    const historial = [...semestre1, ...semestre2, ...semestre3];
    const estadisticas = calcularEstadisticas(historial);

    return (
        <View style={styles.container}>

            <Text style={styles.titulo}>
                Record Académico
            </Text>

            {/* Encabezado de la tabla */}
            <View style={styles.encabezadoTabla}>
                <Text style={styles.tituloColumna}>
                    MATERIA
                </Text>
                <Text style={styles.tituloColumna}>
                    NOTA
                </Text>
                <Text style={styles.tituloColumna}>
                    GESTIÓN
                </Text>
            </View>

            <View style={styles.contenido}>
                {/* Lista de materias */}
                <ScrollView
                    style={styles.listaMaterias}
                    contentContainerStyle={styles.contenidoScroll}
                    showsVerticalScrollIndicator={false} >

                        <View style={styles.tituloGestion}>
                            <Image
                                source={{
                                    uri: 'https://cdn-icons-png.flaticon.com/512/845/845646.png'
                                }}
                                style={styles.iconoCheck} />

                            <Text style={styles.textoGestion}>
                                Semestre I
                            </Text>
                        </View>
                                
                        {   semestre1.map((item,index)=>(
                            <View style={styles.fila} key={index}>
                                <Text style={styles.materia}>
                                    {item.materia}
                                </Text>
                                <Text style={styles.nota}>
                                    {item.nota}
                                </Text>
                                <Text style={styles.gestion}>
                                    {item.gestion}
                                </Text>
                            </View>))
                        }
                    
                        <View style={styles.tituloGestion}>
                            <Image
                                source={{
                                    uri: 'https://cdn-icons-png.flaticon.com/512/845/845646.png'
                                }}
                                style={styles.iconoCheck}
                            />
                            <Text style={styles.textoGestion}>
                                Semestre II
                            </Text>
                        </View>

                        {   semestre2.map((item,index)=>(
                            <View style={styles.fila} key={index}>
                                <Text style={styles.materia}>
                                    {item.materia}
                                </Text>
                                <Text style={styles.nota}>
                                    {item.nota}
                                </Text>
                                <Text style={styles.gestion}>
                                    {item.gestion}
                                </Text>
                            </View>))
                        }
                                    
                        <View style={styles.tituloGestion}>
                            <Image
                                source={{
                                    uri: 'https://cdn-icons-png.flaticon.com/512/845/845646.png'
                                }}
                                style={styles.iconoCheck}
                            />

                            <Text style={styles.textoGestion}>
                                Semestre III
                            </Text>
                        </View>

                        {   semestre3.map((item,index)=>(
                            <View style={styles.fila} key={index}>
                                <Text style={styles.materia}>
                                    {item.materia}
                                </Text>
                                <Text style={styles.nota}>
                                    {item.nota}
                                </Text>
                                <Text style={styles.gestion}>
                                    {item.gestion   }
                                </Text>
                            </View>))
                        }

                    {/* Estadísticas */}
                    <View style={styles.estadisticas}>
                        <Text style={styles.textoEstadistica}>Materias Aprobadas: {estadisticas.aprobadas}</Text>
                        <Text style={styles.textoEstadistica}>Promedio de Aprobación: {estadisticas.promedio}</Text>
                    </View>

                </ScrollView>
            </View>

            {/* Menú inferior */}
            <View style={styles.menuInferior}>
                <Link href="/" asChild>
                    <TouchableOpacity style={styles.botonMenu}>
                        <Image
                            source={{
                                uri: 'https://cdn-icons-png.flaticon.com/512/1946/1946488.png'
                            }}
                            style={styles.iconoMenu}
                        />
                    </TouchableOpacity>
                </Link>

                <Link href="/menuEstudiante" asChild>
                    <TouchableOpacity style={styles.botonMenu}>
                        <Image
                            source={{
                                uri: 'https://cdn-icons-png.flaticon.com/512/271/271220.png'
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