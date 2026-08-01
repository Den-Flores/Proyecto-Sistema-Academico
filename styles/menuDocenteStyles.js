import { StyleSheet } from "react-native";

export const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#F4F7FC",
        padding:20,
    },

    titulo:{
        fontSize:32,
        fontWeight:"bold",
        color:"#1F4B5B",
        textAlign:"center",
        marginTop:20,
    },

    subtitulo:{
        fontSize:20,
        textAlign:"center",
        color:"#355C7D",
        marginTop:10,
        marginBottom:10,
    },

    selector:{
        backgroundColor:"#B4D6C5",
        borderRadius:15,
        padding:18,
        elevation:4,
    },

    textoSelector:{
        fontSize:20,
        color:"#1F4B5B",
        fontWeight:"bold",
    },

    lista:{
        marginTop:5,
        backgroundColor:"white",
        borderRadius:15,
        elevation:4,
    },

    opcion:{
        padding:18,
        borderBottomWidth:1,
        borderColor:"#E0E0E0",
    },

    textoOpcion:{
        fontSize:20,
        color:"#234E5C",
    },

    etiqueta:{
        marginTop:20,
        marginBottom:5,
        fontSize:18,
        color:"#1F4B5B",
        fontWeight:"600",
    },

    input:{
        backgroundColor:"white",
        borderRadius:12,
        padding:12,
        fontSize:18,
        elevation:3,
    },

    botonRegistrar:{
        backgroundColor:"#2B647D",
        borderRadius:15,
        padding:15,
        alignItems:"center",
        marginTop:15,
    },

    textoBoton:{
        color:"white",
        fontWeight:"bold",
        fontSize:20,
    },

    listaEstudiantes:{
        flex:1,
        marginTop:5,
    },

    fila:{
        flexDirection:"row",
        justifyContent:"space-between",
        backgroundColor:"#EAF3F8",
        borderRadius:12,
        marginBottom:10,
    },

    nombreAlumno:{
        fontSize:18,
        color:"#234E5C",
    },

    notaAlumno:{
        fontSize:18,
        fontWeight:"bold",
        color:"#2B647D",
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
    }
});