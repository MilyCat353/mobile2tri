import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";

// npm install expo-image (usar este código no terminal)


export default function Profissional() {
  return (
    <View style={styles.container} >

      <View style = {styles.containerConteudo}>
        <View style = {styles.containerNome}>
          <Text style={styles.nome}>Experiência profissional:</Text>
        </View>
        <Text style = {styles.linha}>
          _______________________________________
        </Text>
        <View style = {styles.containerDados}>
          <Ionicons name="heart" size={24} color="white" />
          <Text style = {styles.textoDados}>Área da TI. Pŕedio Guaíra</Text>
        </View>
        <Text style = {styles.linha}>
          _______________________________________
        </Text>
        <View style = {styles.containerDados}>
          <Ionicons name="heart" size={24} color="white" />
          <Text style = {styles.textoDados}>Robótica</Text>
        </View>
        <Text style = {styles.linha}>
          _______________________________________
        </Text>
        <View style = {styles.containerDados}>
          <Ionicons name="heart" size={24} color="white" />
          <Text style = {styles.textoDados}>Ensino médio com Técnico de Análise e Projetos de Sistemas</Text>
        </View>
                <Text style = {styles.linha}>
          _______________________________________
        </Text>
        
        <View style = {styles.containerDados}>
          <Ionicons name="heart" size={24} color="white" />
          <Text style = {styles.textoDados}>Kirici</Text>
        </View>
        <Text style = {styles.linha}>
          _______________________________________
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "pink"
  },
  containerImg: {
    flex: 1,
    paddingTop: 60,
  },
  estiloFoto: {
    width: 300,
    height: 300,
  },
  containerConteudo: {
    flex: 1,
    marginLeft: 20,
  
  },
  containerNome:{
    marginTop: 20,
    alignItems:"center",
  },
  nome: {
    fontSize: 30,
    color: "white",
    fontWeight: "bold",
  },
  linha:{
    color: "white",
    fontSize: 20,
    marginBottom: 20
  },
  containerDados: {
    marginBottom: 8,
    flexDirection: "row",
    alignItems: "center",
  },
  textoDados: {
    marginLeft: 10,
    color: "white",
    fontSize: 24,
  }
})
