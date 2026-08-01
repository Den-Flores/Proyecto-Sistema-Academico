import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

    container:{
        flex:1,
        backgroundColor:"#F4F7FC",
        paddingHorizontal:20,
        paddingTop:30,
    },

    titulo:{
        fontSize:38,
        fontWeight:"bold",
        color:"#1F4B5B",
        textAlign:"center",
        marginBottom:20,
    },

    contenedorFiltros:{
        flexDirection:"row",
        justifyContent:"space-between",
        marginBottom:15,
    },

    botones:{
        width:"31%",
        backgroundColor:"#2B647D",
        borderRadius:30,
        paddingVertical:12,
        alignItems:"center",
        elevation:5,
    },

    textoBoton:{
        color:"white",
        fontSize:18,
        fontWeight:"bold",
    },

    encabezadoTabla:{
        flexDirection:"row",
        justifyContent:"space-around",
        paddingHorizontal:1,
        marginBottom:15,
    },

    tituloColumna:{
        fontSize:22,
        fontWeight:"bold",
        color:"#1d88ae",
        textAlign:"center",
    },

    contenido:{
        flex:1,
        paddingHorizontal:10,
    },

    listaMaterias:{
        flex:1,
    },

    contenidoScroll:{
        paddingBottom:10,
    },

    tituloGestion:{
        flexDirection:"row",
        alignItems:"center",
        marginBottom:15,
    },

    iconoCheck:{
        width:25,
        height:25,
        marginRight:10,
    },

    textoGestion:{
        fontSize:23,
        fontWeight:"bold",
        color:"#1F4B5B",
    },

    fila:{
        flexDirection:"row",
        justifyContent:"space-between",
        marginBottom:12,
        paddingHorizontal:10,
    },

    nota:{
        width:"20%",
        textAlign:"center",
        fontSize:20,
        color:"#234E5C",
    },

    materia:{
        width:"30%",
        textAlign:"center",
        fontSize:20,
        color:"#234E5C",
    },

    paralelo:{
        width:"30%",
        textAlign:"center",
        fontSize:20,
        color:"#234E5C",
    },

    estadisticas:{
        marginTop:10,
        borderTopWidth:1,
        borderColor:"#CFCFCF",
        paddingTop:15,
        paddingBottom:20,
    },

    textoEstadistica:{
        fontSize:20,
        color:"#1F4B5B",
        marginBottom:8,
    },

    menuInferior:{
        height:90,

        flexDirection:"row",
        justifyContent:"space-around",

        borderTopWidth:1,
        borderColor:"#D5D5D5",
        paddingTop:12,
    },

    botonMenu:{
        width:70,
        height:70,
        borderRadius:35,
        backgroundColor:"#B4D6C5",
        justifyContent:"center",
        alignItems:"center",
        elevation:5,
    },

    iconoMenu:{
        width:35,
        height:35,
    },
});