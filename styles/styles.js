import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    subtitulo: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#f2e8e8',
        marginBottom: 40,
        marginTop: 10,
    },

    encabezado: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 40,
        marginBottom: 40,
    },

    contenedorTitulo: {
        justifyContent: 'center',
    },

    tituloSistema: {
        fontSize: 34,
        fontWeight: 'bold',
        color: '#ecf3f9',   
    },

    tituloAcademico: {
        fontSize: 30,
        letterSpacing:3,
        color: '#d7f0d8',   
        marginTop: 10,
    },

    boton: {
        width: '80%',
        backgroundColor: '#b4d6c5',
        paddingVertical:18,
        paddingHorizontal:20,
        paddingLeft: 55,
        borderRadius: 15,
        flexDirection:'row',
        alignItems: 'center',
        marginTop:15,
    },

    textoBoton: {
        flex:1,
        textAlign:'center',
        fontSize:20,
        fontWeight:'bold',
        color:'#0D4A3A',
        marginRight:50
    },

    icono:{
        width:40,
        height:40,
        marginRight:20
    },

    contenedorIcono:{
        width:50,
        alignItems:'center',
        justifyContent:'center',
    },

    nombre: {
        position: 'absolute',
        bottom: 30,
        color: '#fff',
        fontSize: 20,
        fontStyle:'italic',
    },

    container: {
        flex: 1,
        backgroundColor: '#053827',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
});