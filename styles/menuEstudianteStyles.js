import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

    container:{
        flex:1,
        backgroundColor:"#2B647D",
    },

    header:{
        height:170,
        flexDirection:'row',
        justifyContent:"center",
        alignItems:"center",
        paddingTop:40,
    },

    titulo:{
        fontSize:30,
        fontWeight:"bold",
        color:"white",
    },  

    body:{
        flex:1,
        backgroundColor:"#E8F2EC",
        borderTopLeftRadius:40,
        borderTopRightRadius:40,
        paddingHorizontal:25,
        paddingTop:20,
    },

    subtitulo:{
        marginTop:10,
        fontSize:24,
        color:"#355C7D",
        textAlign:"center",
        fontWeight:"600"
    },

    fecha:{
        marginTop:8,
        marginBottom:35,
        textAlign:"center",
        color:"#777",
        fontSize:16
    },

    contenedorBotones:{
        flexDirection:'row',
        flexWrap:'wrap',
        justifyContent:'space-around',
        marginTop:20,
    },

    tarjeta:{
        width:'45%',
        height:150,
        backgroundColor:'#b4cbd6',
        borderRadius:18,
        justifyContent:'center',
        alignItems:'center',
        marginBottom:18,
        elevation:5,
    },

    textoTarjeta:{
        color:'#123C69',
        fontSize:20,
        fontWeight:'bold',
        textAlign:'center',
    },

    icono:{
        width:55,
        height:55,
        marginBottom:12,
    },


    menuInferior:{
        position: "absolute",
        bottom: 48,
        left: 0,
        right: 0,

        flexDirection:"row",
        justifyContent:"space-around",

        borderTopWidth:1,
        borderColor:"#4ca3c6",
        paddingTop:10
    },

    botonMenu:{
        width:70,
        height:70,
        borderRadius:35,
        backgroundColor:'#B4D6C5',
        justifyContent:'center',
        alignItems:'center',
        elevation:5
    },

    iconoMenu:{
        width:35,
        height:35
    },
});