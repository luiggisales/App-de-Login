import React, { useEffect, useState } from "react";
import { View, TouchableOpacity, Text, StyleSheet, Image, Alert } from "react-native";
import { userAuth } from '../../contexts/Auth';
import Constants from "expo-constants";
import * as Permissions from "expo-permissions";
import * as ImagePicker from "expo-image-picker";
import AsyncStorage from "@react-native-async-storage/async-storage";
import api from "../../services/Api";

export default function Upload() {
  const [avatar, setAvatar] = useState();
  const { user , Logout } = userAuth();
  const [imgDefault ,setImgDefault ] = useState('https://image.shutterstock.com/image-vector/default-avatar-profile-icon-grey-600w-518740741.jpg')
  
  async function imagePickerCall() {
    if (Constants.platform.ios) {
      const { status } = await Permissions.askAsync(Permissions.MEDIA_LIBRARY);

      if (status !== "granted") {
        alert("Nós precisamos dessa permissão.");
        return;
      }
    }

    const data = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All
    });

    if (data.cancelled) {
      return;
    }

    if (!data.uri) {
      return;
    }

    setAvatar(data);
  }

  useEffect(() => {
    LoadFromStore();
  }, [])
  
  async function RemoveImage(){
    await api.post(`/files/update/${user.id_usuario}`,{
      uri: null,
    })
    const dados = { uri: imgDefault }
    setAvatar(dados);
  }
  async function LoadFromStore(){
    //*Listar um usuario especifico e coloca a foto dele no perfil
    const response = await api.get(`/users/${user.id_usuario}`);
    if (response.data[0].foto){
      const dados = {
        uri: response.data[0].foto
      }
      setAvatar(dados)
    }
    const dados = { uri: imgDefault }
    setAvatar(dados);
  }
  
  async function uploadImage() {
    const data = new FormData();

    data.append("avatar", {
      uri: avatar.uri,
      type: avatar.type
    });
    if (data){
      const response = await api.post(`/files/update/${user.id_usuario}`,{
        uri: avatar.uri,
      })
      if (response.data){
        Alert.alert('Atenção',response.data.mensagem)
      }
    }
  }

  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: avatar
            ? avatar.uri
            : imgDefault
        }}
        style={styles.avatar}
      />
      <TouchableOpacity style={styles.button} onPress={imagePickerCall}>
        <Text style={styles.buttonText}>Escolher imagem</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={RemoveImage}>
        <Text style={styles.buttonText}>Remover imagem</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={uploadImage}>
        <Text style={styles.buttonText}>Salvar imagem</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button,{backgroundColor: 'red',borderRadius:8,}]} onPress={Logout}>
        <Text style={styles.buttonText}>Sair da Conta</Text>
      </TouchableOpacity>
    </View>  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  button: {
    width: 150,
    height: 50,
    borderRadius: 3,
    backgroundColor: "#7159c1",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20
  },
  buttonText: {
    color: "#fff"
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50
  }
});