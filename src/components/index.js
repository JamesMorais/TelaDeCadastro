import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        paddingTop: 45,
        backgroundColor: 'orchid',
        justifyContent:"flex-start",
        alignItems:"center"
    },
    box:{
        width:300,
        height:300
    },
    images:{
        width:'100%',
        height:'100%'
    },
    input:{
        flex: 2,
        borderColor: '#000',
        borderWidth:1,
        height: 35
    },
    button: {
        backgroundColor: 'royalblue',
        padding: 10,
        borderRadius: 5
    }
});
