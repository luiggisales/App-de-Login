import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext,useContext ,useEffect,useState } from "react";
import { Alert } from 'react-native';
import api from "../services/Api";


const AuthContext = createContext();

export function AuthProvider({children}){
    const [ user ,setUser ] = useState();
    const [ loading ,setLoading ] = useState(true);//*animação de loading

    useEffect(() => {
        setTimeout(() => {
            LoadFromStorage()
        }, 1000);
    }, [])
    

    async function LoadFromStorage(){
        const user = await AsyncStorage.getItem('blob-token@user');
        if (user){
            setUser(JSON.parse(user));
        }
        setLoading(false);
    }
    async function Login(email,senha){
        try {
            const response = await api.post('/login',{ email: email,senha: senha})
            Alert.alert('Atenção',response.data.mensagem)
            if (response.data.data){
                setUser(response.data.data)
                api.defaults.headers.Authorization = `Bearer ${response.data.data.token}`;
                await AsyncStorage.setItem('blob-token@user',JSON.stringify(response.data.data));
            }
        } catch (error) {
            console.log(error);
        }
    }
    async function Register(nome,email,senha,confSenha,navigation){
        try {
            const response = await api.post('/register',{ nome: nome, email: email, senha: senha, confSenha: confSenha })
            Alert.alert('Atenção',response.data.mensagem);
            if (response.data.status == true){
                navigation.push('SingIn')
            }
        } catch (error) {
            console.log(error)
        }   
    }
    async function Logout(){
        await AsyncStorage.removeItem('blob-token@user');
        api.defaults.headers.Authorization = null;
        setUser(false)
    }
    return (
        <AuthContext.Provider value={{ user,Login,Logout,Register,loading}}>
            {children}
        </AuthContext.Provider>
    );
}

export function userAuth(){
    const context = useContext(AuthContext);
    if (!context) {
        throw  new Error('App deve ficar dentro do Provider')
    }
    return context;
}