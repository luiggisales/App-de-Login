import React from 'react';
import { View , Text , StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { userAuth } from '../../contexts/Auth';

const Settings = ({navigation}) => {
  const { Logout } = userAuth();
  return (
    <View style={styles.container}>
      <Text style={styles.texto}> Configurações </Text>
      <View style={styles.containerButton}>
        <TouchableOpacity style={styles.button} onPress={()=> Logout()}>
          <Text style={styles.textButton}>
            Sair da Conta
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
      backgroundColor: 'red',
      marginBottom: 45,
    },
    textButton: {
      color: '#fff',
      fontSize: 20,
    },
})
export default Settings;