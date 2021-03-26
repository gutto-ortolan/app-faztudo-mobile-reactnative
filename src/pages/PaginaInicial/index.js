import React from 'react';
import {
  View,
  Text,
  KeyboardAvoidingView,
  Image,
  TouchableOpacity,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Estilos from './style';

const PaginaInicial = ({navigation}) => {
  return (
    <KeyboardAvoidingView style={Estilos.background}>
      <View style={Estilos.containerLogo}>
        <Image source={require('../../assets/logo.png')} />
      </View>
      <View style={Estilos.container}>
        <TouchableOpacity
          style={Estilos.btnEmail}
          onPress={() => navigation.navigate('Login')}>
          <Text style={Estilos.submitText}>
            <FontAwesome5 name={'envelope'} size={20} /> Acessar com Email e
            Senha
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={Estilos.btnGoogle}>
          <Text style={Estilos.submitText}>
            <FontAwesome5 name={'google'} size={20} /> Acessar com o Google
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Cadastro')}
          style={Estilos.btnRegister}>
          <Text style={Estilos.registerText}>Criar conta</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default PaginaInicial;
