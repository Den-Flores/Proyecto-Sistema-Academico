import { Link } from "expo-router";
import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import { styles } from '../styles/historialAcademicoStyles';

// Funcion que genera una nota entre 0 y 100
function generarNota(){
    return Math.floor(Math.random()*101);
}

// Funcion que genera un paralelo A, B, C
function generarParalelo(){
    const paralelos=["A","B","C"];
    return paralelos[Math.floor(Math.random()*3)];
}

function crearGestion(materias){
    const gestion=[];
    for(let i=0;i<materias.length;i++){
        gestion.push({
            materia:materias[i],
            nota:generarNota(),
            paralelo:generarParalelo(),
            semestre:0
        });
    }
    return gestion;
}

function construirGestion(gestionAnterior,materiasBase){
    const nuevaGestion=[];
    for(let i=0;i<gestionAnterior.length;i++){
        let semestre = gestionAnterior[i].semestre;
        if(gestionAnterior[i].nota>=51 && semestre<2){
            semestre++;
        }
        nuevaGestion.push({
            materia:materiasBase[semestre][i],
            nota:generarNota(),
            paralelo:generarParalelo(),
            semestre:semestre
        });
    }
    return nuevaGestion;
}

function calcularEstadisticas(historial){
    let aprobadas = 0;
    let reprobadas = 0;
    let abandonadas = 0;
    let sumaNotas = 0;
    let cantidadAprobadas = 0;

    for(let i = 0; i < historial.length; i++){
        if(historial[i].nota == 0){
            abandonadas++;
        }
        else if(historial[i].nota < 51){
            reprobadas++;
        }
        else{
            aprobadas++;
            sumaNotas += historial[i].nota;
            cantidadAprobadas++;
        }
    }
    let promedio = 0;
    if(cantidadAprobadas > 0){
        promedio = (sumaNotas / cantidadAprobadas).toFixed(2);
    }
    return{
        inscritas: historial.length,
        aprobadas,
        reprobadas,
        abandonadas,
        promedio
    };
}

function filtrarMaterias(gestion,filtro){
    if(filtro=="todas"){
        return gestion;
    }
    if(filtro=="aprobadas"){
        return gestion.filter(item => item.nota>=51);
    }
    if(filtro=="reprobadas"){
        return gestion.filter(item => item.nota > 0 && item.nota < 51);
    }
}

export default function HistorialAcademico() {
    const materiasBase = [
        ["INF-111","INF-112","INF-113"],
        ["INF-121","INF-122","INF-123"],
        ["INF-131","INF-132","INF-133"]
    ];

    const [gestiones] = useState(() => {
        const g1 = crearGestion(materiasBase[0]);
        const g2 = construirGestion(g1, materiasBase);
        const g3 = construirGestion(g2, materiasBase);

        return {
                gestion1: g1,
                gestion2: g2,
                gestion3: g3
            };
    });
    const { gestion1, gestion2, gestion3 } = gestiones;

    const historial = [...gestion1, ...gestion2, ...gestion3];
    const estadisticas = calcularEstadisticas(historial);

    const [filtro, setFiltro] = useState("todas");

    return (
        <View style={styles.container}>

            <Text style={styles.titulo}>
                Historial Académico
            </Text>

            <View style={styles.contenedorFiltros}>
                <TouchableOpacity style={styles.botones}
                                  onPress={() => setFiltro("todas")}>
                    <Text style={styles.textoBoton}>
                        TODAS
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.botones}
                                  onPress={() => setFiltro("aprobadas")}>
                    <Text style={styles.textoBoton}>
                        APROB.
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.botones}
                                  onPress={() => setFiltro("reprobadas")}>
                    <Text style={styles.textoBoton}>
                        REPROB.
                    </Text>
                </TouchableOpacity>
            </View>

            {/* Encabezado de la tabla */}
            <View style={styles.encabezadoTabla}>
                <Text style={styles.tituloColumna}>
                    MATERIA
                </Text>
                <Text style={styles.tituloColumna}>
                    NOTA
                </Text>
                <Text style={styles.tituloColumna}>
                    PARALELO
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
                                Gestion I/2025
                            </Text>
                        </View>
                                
                        {   filtrarMaterias(gestion1,filtro).map((item,index)=>(
                            <View style={styles.fila} key={index}>
                                <Text style={styles.materia}>
                                    {item.materia}
                                </Text>
                                <Text style={styles.nota}>
                                    {item.nota}
                                </Text>
                                <Text style={styles.paralelo}>
                                    {item.paralelo}
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
                                Gestion II/2025
                            </Text>
                        </View>

                        {   filtrarMaterias(gestion2,filtro).map((item,index)=>(
                            <View style={styles.fila} key={index}>
                                <Text style={styles.materia}>
                                    {item.materia}
                                </Text>
                                <Text style={styles.nota}>
                                    {item.nota}
                                </Text>
                                <Text style={styles.paralelo}>
                                    {item.paralelo}
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
                                Gestion I/2026
                            </Text>
                        </View>

                        {   filtrarMaterias(gestion3,filtro).map((item,index)=>(
                            <View style={styles.fila} key={index}>
                                <Text style={styles.materia}>
                                    {item.materia}
                                </Text>
                                <Text style={styles.nota}>
                                    {item.nota}
                                </Text>
                                <Text style={styles.paralelo}>
                                    {item.paralelo}
                                </Text>
                            </View>))
                        }

                    {/* Estadísticas */}
                    <View style={styles.estadisticas}>
                        <Text style={styles.textoEstadistica}>Inscritas: {estadisticas.inscritas}</Text>
                        <Text style={styles.textoEstadistica}>Materias Aprobadas: {estadisticas.aprobadas}</Text>
                        <Text style={styles.textoEstadistica}>Materias Reprobadas: {estadisticas.reprobadas}</Text>
                        <Text style={styles.textoEstadistica}>Materias Abandonadas: {estadisticas.abandonadas}</Text>
                        <Text style={styles.textoEstadistica}>Promedio Aprobación: {estadisticas.promedio}</Text>
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