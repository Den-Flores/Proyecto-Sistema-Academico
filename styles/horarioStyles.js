import { StyleSheet } from "react-native";

export const styles=StyleSheet.create({

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
    },

    subtitulo:{
        fontSize:22,
        color:"#1D88AE",
        textAlign:"center",
        marginTop:8,
        marginBottom:20,
    },

    contenido:{
        flex:1,
    },

    tituloDia:{
        fontSize:25,
        fontWeight:"bold",
        color:"#355C7D",
        marginBottom:10,
        marginTop:15,
    },

    tarjeta:{
        borderRadius:18,
        padding:18,
        marginBottom:15,
        elevation:4,
    },

    codigo:{
        fontSize:24,
        fontWeight:"bold",
        color:"#1F4B5B",
    },

    nombreMateria:{
        fontSize:18,
        color:"#355C7D",
        marginTop:5,
    },

    info:{
        fontSize:17,
        color:"#234E5C",
        marginTop:4,
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