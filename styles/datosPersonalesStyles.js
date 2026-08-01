import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#F4F7FC",
        padding:30,
    },

    titulo:{
        fontSize:32,
        fontWeight:"bold",
        color:"#123C69",
        textAlign:"center",
        marginTop:20,
        marginBottom:25
    },

    imagenPerfil:{
        width:120,
        height:120,
        borderRadius:60,
        alignSelf:"center",
        marginBottom:20
    },

    informacion:{
        flexDirection:"row",
        alignItems:"center",
        marginBottom:10
    },

    icono:{
        width:35,
        height:35,
        marginRight:10
    },

    tituloInformacion:{
        fontSize:22,
        fontWeight:"bold",
        color:"#123C69"
    },

    contenido:{
        flex:1,
    },

    contenidoScroll:{
        paddingBottom:30,
    },

    label:{
        fontSize:18,
        color:"#355C7D",
        marginTop:6,
        marginBottom:4
    },

    input:{
        backgroundColor:"white",
        borderRadius:25,
        borderWidth:1,
        borderColor:"#D6D6D6",
        padding:12,
        fontSize:18
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
        width: 70,
        height: 70,
        borderRadius: 35,
        backgroundColor: '#B4D6C5',
        justifyContent: 'center',
        alignItems:"center",
        elevation: 5,
    },

    iconoMenu:{
        width:35,
        height:35,
    },
});