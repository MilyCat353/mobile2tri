import { Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Button, Pressable, TextInput, ScrollView, KeyboardAvoidingView, Platform } from "react-native";
import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';

const foto = require("../../assets/images/react-logo.png");

export default function Index() {
  const [image, setImage] = useState<string | null>(null);
  const [nome, setNome] = useState("Emily Emanuelle Savczuk");
  const [idade, setIdade] = useState("16 anos");
  const [email, setEmail] = useState("emily.savczuk@escola.pr.gov.br");
  const [telefone, setTelefone] = useState("(42) 99999-6666");
  const [cidade, setCidade] = useState("Ponta Grossa / PR");

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images', 'videos'],
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });
    console.log(result);
    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={94}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.containerImg}>
          <Pressable onPress={pickImage}>
            <Image source={image == null ? foto : image} style={styles.estiloFoto}></Image>
          </Pressable>
          <Button title="Trocar imagem" onPress={pickImage} />
        </View>

        <View style={styles.containerConteudo}>
          <View style={styles.containerNome}>
            <TextInput
              style={styles.nome}
              value={nome}
              onChangeText={setNome}
              placeholder="Digite seu nome"
              placeholderTextColor="#fff8"
            />
          </View>

          <Text style={styles.linha}>
            _______________________________________
          </Text>

          <View style={styles.containerDados}>
            <Ionicons name="heart" size={24} color="white" />
            <TextInput
              style={styles.textoDados}
              value={idade}
              onChangeText={setIdade}
              placeholder="Idade"
              placeholderTextColor="#fff8"
            />
          </View>

          <View style={styles.containerDados}>
            <Ionicons name="heart-circle" size={24} color="white" />
            <TextInput
              style={styles.textoDados}
              value={email}
              onChangeText={setEmail}
              placeholder="Email"
              placeholderTextColor="#fff8"
            />
          </View>

          <View style={styles.containerDados}>
            <Ionicons name="heart" size={24} color="white" />
            <TextInput
              style={styles.textoDados}
              value={telefone}
              onChangeText={setTelefone}
              placeholder="Telefone"
              placeholderTextColor="#fff8"
            />
          </View>

          <View style={styles.containerDados}>
            <Ionicons name="heart-circle" size={24} color="white" />
            <TextInput
              style={styles.textoDados}
              value={cidade}
              onChangeText={setCidade}
              placeholder="Cidade"
              placeholderTextColor="#fff8"
            />
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "pink"
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 20,
  },
  containerImg: {
    flex: 1,
    paddingTop: 60,
    alignItems: "center"
  },
  estiloFoto: {
    width: 300,
    height: 300,
  },
  containerConteudo: {
    flex: 1,
    alignItems: "center",
    width: "100%",
    paddingHorizontal: 20,
  },
  containerNome: {
    alignItems: "center",
  },
  nome: {
    fontSize: 40,
    color: "white",
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: 'center'
  },
  linha: {
    color: "white",
    fontSize: 20,
    marginBottom: 20
  },
  containerDados: {
    marginBottom: 8,
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
  },
  textoDados: {
    marginLeft: 10,
    color: "white",
    fontSize: 24,
    borderBottomWidth: 1,
    borderColor: "#fff4",
    paddingVertical: 4,
    minWidth: 200,
    textAlign: 'center',
  }
});
