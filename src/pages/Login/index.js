import React, {useState, useContext} from 'react';
import {
  View,
  Text,
  KeyboardAvoidingView,
  TouchableOpacity,
  Image,
  ScrollView,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import Estilos from './style';
import {AuthContext} from '../../navigation/AuthProvider';
import FormInput from '../../components/CampoTexto';
import FormPassword from '../../components/CampoSenha';

const Login = ({navigation}) => {
  const {login, error, loading} = useContext(AuthContext);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [erroEmail, setErroEmail] = useState(null);
  const [erroSenha, setErroSenha] = useState(null);

  const validar = () => {
    setErroEmail(null);
    setErroSenha(null);
    let error = false;
    if (email == null || email.indexOf('@') == -1 || email.indexOf('.') == -1) {
      setErroEmail('Preencha seu e-mail corretamente');
      error = true;
    }

    if (password == null) {
      setErroSenha('Preencha sua senha corretamente');
      error = true;
    }

    return !error;
  };

  const acessar = () => {
    if (validar()) {
      login(email, password);
    }
  };

  const cadastrar = () => {
    setErroEmail(null);
    setErroSenha(null);
    navigation.navigate('CadastroCredenciais');
  };

  return (
    <ScrollView
      style={{backgroundColor: 'white'}}
      contentContainerStyle={{
        marginTop: 20,
      }}>
      <KeyboardAvoidingView style={Estilos.background}>
        <View style={Estilos.containerLogo}>
          <Image
            style={{
              width: 245,
              height: 220,
            }}
            source={require('../../assets/images/logo.png')}
          />
        </View>
        <View style={Estilos.container}>
          <FormInput
            labelValue={email}
            onChangeText={setEmail}
            placeholderText="E-mail"
            iconType="mail"
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
          />
          {erroEmail ? (
            <View style={Estilos.containerErro}>
              <Text style={Estilos.mensagemErro}>{erroEmail}</Text>
            </View>
          ) : null}
          <FormPassword
            labelValue={password}
            onChangeText={setPassword}
            placeholderText="Senha"
            iconType="lock"
          />
          {erroSenha ? (
            <View style={Estilos.containerErro}>
              <Text style={Estilos.mensagemErro}>{erroSenha}</Text>
            </View>
          ) : null}

          {error ? <Text style={{color: 'red'}}>{error}</Text> : null}

          <TouchableOpacity
            style={Estilos.buttonContainer}
            onPress={() => acessar()}>
            {loading ? (
              <View style={{flexDirection: 'row'}}>
                <ActivityIndicator color="white" />
                <Text style={Estilos.buttonText}>Carregando</Text>
              </View>
            ) : (
              <Text style={Estilos.buttonText}>Acessar</Text>
            )}
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => cadastrar()}
            style={Estilos.btnRegister}>
            <Text style={Estilos.registerText}>
              Não possui cadastro? Clique aqui
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {}}
            style={(Estilos.btnRegister, {marginTop: 20})}>
            <Text style={Estilos.registerText}>Esqueceu a senha?</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default Login;
