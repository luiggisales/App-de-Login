import React from 'react';
import { View, Text , ActivityIndicator} from 'react-native'

const Loading = () => {
  return (
    <View style={{flex: 1,alignItems: 'center',justifyContent: 'center',backgroundColor: '#fff'}}>
        <Text style={{fontSize: 22,color: '#000',marginBottom:12}}>Carregando Aplicação ...</Text>
        <ActivityIndicator color={'#000'} size={'large'}/>
    </View>
  )
}

export default Loading;