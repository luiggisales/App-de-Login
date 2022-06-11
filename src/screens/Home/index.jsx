import React from 'react';
import { View , Text , StyleSheet ,TouchableOpacity} from 'react-native';
import { userAuth } from '../../contexts/Auth';

const Home = ({navigation}) => {
  const { user } = userAuth();
  const nome = user.nome.split(" ", 2);

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>
        Essa tela só pode ser vista
        pelo usuario autenticado
      </Text>
     <View style={styles.containerPrimary}>
      <Text style={{fontSize: 22,fontWeight: '600'}} numberOfLines={1}> Bem vindo  {nome[0] + ' ' + nome[1]} </Text>
      <Text style={{fontSize: 22,fontWeight: '600'}}> Email: {user.email} </Text>
     </View>
      <View style={styles.containerButton}>
        <TouchableOpacity style={styles.button}  onPress={()=> { navigation.push('Settings')}}>
          <Text style={styles.textButton}>
            Ir para as configurações
          </Text>
        </TouchableOpacity>
      </View>
    </View>  
  );
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#fff',
    },
    containerPrimary: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    texto: {
      position: 'absolute',
      top: 8,
      fontWeight: '700',
      color :'#000',
      fontSize: 20,
    },
    containerButton: {
      flex: 1,
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'flex-end',
    },
    button: {
      padding: 12,
      borderRadius:5,
      alignItems: 'center',
      backgroundColor: '#43bc',
      marginBottom: 45,
    },
    textButton: {
      color: '#fff',
      fontSize: 20,
    },
})
export default Home;