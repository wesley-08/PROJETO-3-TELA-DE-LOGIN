import { SafeAreaView, View, Text, StyleSheet, Pressable, TextInput, Image } from 'react-native'
import { useState } from 'react'

function App () {

  //'count' vai armazenar e exibir o valor definido
  //'setCount' vai alterar o valor da constante chamada 'count'
  const [cpf,setCpf] = useState('000.000.000-00')
  const [cpfField, setCpfField] = useState('')

  function sendCpf() {
    if(cpfField == '')
    setCpf(cpfField)
  }

  function clearCpf(){
    setCpf('')
    setCpfField('')
  }

  return (
    <SafeAreaView style={styles.exibicao}>
      {
        cpf == '' &&
        <View>
          <Image style={styles.image} source={require('./assets/icone-de-pessoas-icone-de-pessoa-icone-de-usuario-no-elegante-estilo-plano-isolado-700-150665401.jpg')} />
        <TextInput 
          placeholder="Insira seu CPF aqui"
          placeholderTextColor= '#999'
          style={styles.input}
          value={cpfField}
          onChangeText={
            (text) => setCpfField(text)
          }
        />

        <Pressable  style={styles.button} onPress={sendCpf}>
          <Text style={styles.text}>Logar</Text>
        </Pressable>
        </View>
      }


      {
        cpf == '000.000.000-00' &&
        <View >
        <Image style={styles.image2} source={require('./assets/pngtree-user-icon-isolated-on-abstract-background-png-image_5192160.jpg')} />
          <Text>
          Usuario Logado com o CPF: 000.000.000-00
          </Text>
           <Pressable style={styles.button} onPress={clearCpf}>
           <Text style={styles.text}>Pressione o botão para sair</Text>
           </Pressable>
         </View>
      }
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  exibicao: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    justifyContent: 'center',
    width: '80%'
  },
  text: {
    textAlign: 'center',
    color: 'white',
  },
  input: {
    backgroundColor: 'lightgray',
    borderRadius: 4,
    width: 200,
    height: 30,
    borderWidth: 2,
  },
  image:{
    width:200,
    height:320
  },
  image2:{
    width:220,
    height:200
  },

  button:{
    backgroundColor: 'black',
        fontSize: '12px',
        padding: '8px 12px',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
  }
})

export default App
