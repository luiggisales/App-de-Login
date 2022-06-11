import React,{useState} from 'react';
import { 
    View, 
    Text, 
    StyleSheet, TextInput , KeyboardAvoidingView , TouchableOpacity,} from 'react-native';
import { Ionicons } from '@expo/vector-icons'
import { userAuth } from '../../contexts/Auth';

const SingUp2 = ({navigation}) => {
    const { Register } = userAuth();
    const [ nome , setNome ] = useState(null);
    const [ email , setEmail ] = useState(null);
    const [ senha , setSenha ] = useState(null);
    const [ confSenha , setConfSenha ] = useState(null);
    const [senhaVisivel , setSenhaVisivel] = useState(true);
    return (
        <View style={styles.container}>
                <View style={styles.container_primary}>
                    <View style={styles.container_form}>
                        <KeyboardAvoidingView>
                            <View style={styles.container_input}>
                                <TextInput
                                style={styles.input}
                                keyboardAppearance='dark'
                                autoCapitalize='words'
                                placeholderTextColor={'#000'}
                                value={nome}
                                onChangeText={(nome)=> setNome(nome)}
                                placeholder='Digite seu Nome'/>
                            </View>
                            <View style={styles.container_input}>
                                <TextInput
                                style={styles.input}
                                keyboardAppearance='dark'
                                keyboardType='email-address'
                                autoCapitalize='none'
                                placeholderTextColor={'#000'}
                                value={email}
                                onChangeText={(email)=> setEmail(email)}
                                placeholder='Digite seu Email'/>
                            </View>
                            <View style={styles.container_input}>
                                <TextInput
                                style={styles.inputSenha}
                                keyboardAppearance='dark'
                                value={senha}
                                onChangeText={(senha)=> setSenha(senha)}
                                secureTextEntry={senhaVisivel}
                                placeholderTextColor={'#000'}
                                placeholder='Digite sua senha'/>
                                <TouchableOpacity style={styles.view_senha} onPress={()=> setSenhaVisivel(!senhaVisivel)}>
                                    <Ionicons name='eye' color={'#000'} size={16}/>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.container_input}>
                                <TextInput
                                style={styles.inputSenha}
                                keyboardAppearance='dark'
                                value={confSenha}
                                onChangeText={(confSenha)=> setConfSenha(confSenha)}
                                secureTextEntry={senhaVisivel}
                                placeholderTextColor={'#000'}
                                placeholder='Confirme sua senha'/>
                                <TouchableOpacity style={styles.view_senha} onPress={()=> setSenhaVisivel(!senhaVisivel)}>
                                    <Ionicons name='eye' color={'#000'} size={16}/>
                                </TouchableOpacity>
                            </View>
                        </KeyboardAvoidingView>
                        <TouchableOpacity style={styles.button} onPress={()=> Register(nome,email,senha,confSenha,navigation)}>
                            <Text style={styles.textButton}>Cadastrar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{alignItems: 'center',marginTop:25,}} onPress={()=> navigation.push('SingIn')}>
                            <Text style={{fontSize: 20,}}>Já possui conta? <Text style={{color: '#000',fontWeight: '800'}}>Entrar na conta</Text></Text>
                        </TouchableOpacity>
                    </View>
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
    container_primary: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    container_input:{
        width: 500,
        height: 46,
        display: 'flex',
        flexDirection: 'row',
        alignItems :'center',
        justifyContent: 'space-between',
        padding: 8,
        marginTop: 8,
        backgroundColor: '#ebebeb',
        borderRadius: 8,
        paddingHorizontal: 12,
    },
    input: {
        width: 482,
        color: '#000',
        fontSize: 14,
    },
    inputSenha: {
        width: 442,
        color: '#000',
        fontSize: 14,
    },
    view_senha: {
        width: 42,
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        padding: 12,
        marginTop: 15,
        borderRadius:5,
        alignItems: 'center',
        backgroundColor: '#43bc',
    },
    textButton: {
        color: '#fff',
        fontSize: 20,
    },
})

export default SingUp2;