import { Link } from "expo-router";
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { View, Text, TouchableOpacity, Pressable, Image, ScrollView, TextInput} from 'react-native';
import { styles } from '../styles/menuDocenteStyles';

export default function MenuDocente(){

    const materias=["INF-111", "INF-112", "INF-113"];
    const [mostrarLista,setMostrarLista]=useState(false);
    
    const [nombres,setNombres]=useState([
        ["Juan Pérez","María Flores","Carlos Rojas"],
        ["Ana López","Luis Vargas"],
        ["Pedro Quispe","Andrea Mamani","José García"]
    ]);

    const [notas,setNotas]=useState([
        [78,95,63],
        [88,54],
        [100,72,61]
    ]);

    const [indiceMateria,setIndiceMateria]=useState(0);
    const [nombre,setNombre]=useState("");
    const [nota,setNota]=useState("");

    return(

        <View style={styles.container}>

            <Text style={styles.titulo}>
                Registro de Notas
            </Text>

            <Text style={styles.subtitulo}>
                Seleccione la materia
            </Text>

            {/* Lista desplegable */}
            <Pressable
                style={styles.selector}
                onPress={()=> setMostrarLista(!mostrarLista) }>
                <Text style={styles.textoSelector}>
                    {materias[indiceMateria]}
                </Text>
            </Pressable>

            {   mostrarLista &&
                <View style={styles.lista}>
                    {
                        materias.map((item,index)=>(
                            <TouchableOpacity
                                key={index}
                                style={styles.opcion}
                                onPress={()=>{
                                    setIndiceMateria(index);
                                    setMostrarLista(false);
                                }}>
                                <Text style={styles.textoOpcion}>
                                    {item}
                                </Text>
                            </TouchableOpacity>
                        ))
                    }
                </View>
            }

            <Text style={styles.etiqueta}> Nombre del estudiante </Text>
            <TextInput style={styles.input}
                        placeholder="Ingrese el nombre"
                        value={nombre}
                        onChangeText={setNombre} />

            <Text style={styles.etiqueta}> Nota </Text>
            <TextInput  style={styles.input}
                        placeholder="0 - 100"
                        keyboardType="numeric"
                        value={nota}
                        onChangeText={setNota} />

            <TouchableOpacity
                style={styles.botonRegistrar}
                onPress={()=>{
                    if(nombre=="" || nota=="")
                        return;
                    const nuevosNombres=[...nombres];
                    const nuevasNotas=[...notas];

                    nuevosNombres[indiceMateria].push(nombre);
                    nuevasNotas[indiceMateria].push(Number(nota));

                    setNombres(nuevosNombres);
                    setNotas(nuevasNotas);

                    setNombre("");
                    setNota(""); }} >
                <Text style={styles.textoBoton}>
                    Registrar
                </Text>
            </TouchableOpacity>

            <ScrollView style={styles.listaEstudiantes}>
                {
                    nombres[indiceMateria].map((item,index)=>(
                    <View
                        key={index}
                        style={styles.fila}>
                        <Text style={styles.nombreAlumno}>
                            {item}
                        </Text>

                        <Text style={styles.notaAlumno}>
                            {notas[indiceMateria][index]}
                        </Text>
                    </View> ))
                }
            </ScrollView>

            {/* Menú inferior */}
            <View style={styles.menuInferior}>
                <Link href="/" asChild>
                    <TouchableOpacity style={styles.botonMenu}>
                        <Image
                            source={{
                                uri:"https://cdn-icons-png.flaticon.com/512/1946/1946488.png"
                            }}
                            style={styles.iconoMenu}
                        />
                    </TouchableOpacity>
                </Link>

                <Link href="/" asChild>
                    <TouchableOpacity style={styles.botonMenu}>
                        <Image
                            source={{
                                uri:"https://cdn-icons-png.flaticon.com/512/271/271220.png"
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