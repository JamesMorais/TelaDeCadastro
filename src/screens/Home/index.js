import React, { useState } from "react";
import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import { styles } from "../../components";
const cinemaImg = require("../../../assets/cinema-imagem.jpg");

export default function Home() {
    //Escrevo as funções
    const [titulo, setTitulo] = useState('');
    
    const limparTexto = () => {
        setTitulo('');
    };
    
    const cadastrarFilme = () => {
        console.log("Título do filme cadastrado:", titulo);
    };
    //Depois a estrutura
    return (
        <View style={styles.container}>
            <View style={styles.box}>
                <Image source={cinemaImg} style={styles.images} />
                <View style={{ alignItems: "center" }}>
                    <Text>Cadastre seu Filme:</Text>
                </View>
                <View style={{ flexDirection: "row", width: '100%', alignItems:"center" }}>
                    <Text>Título: </Text>
                    <TextInput
                        style={styles.input}
                        value={titulo}
                        onChangeText={text => setTitulo(text)}
                    />
                </View>
                <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 10, }}>
                    <TouchableOpacity style={styles.button} onPress={limparTexto}>
                        <Text style={{color:'#fff'}}>LIMPAR</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={cadastrarFilme}>
                        <Text style={{color:'#fff'}}>CADASTRAR</Text>
                    </TouchableOpacity>
                </View>
                {titulo !== '' && (
                    <View style={{ marginTop: 10 }}>
                        <Text>Título do Filme:</Text>
                        <Text>{titulo}</Text>
                    </View>
                )}
            </View>
        </View>
    );
}


