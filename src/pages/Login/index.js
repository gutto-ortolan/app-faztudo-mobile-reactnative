import React, {useState, useEffect, useContext} from 'react';
import {
  View,
  Text,
  KeyboardAvoidingView,
  TouchableOpacity,
  Animated,
  Keyboard,
} from 'react-native';
import Estilos from './style';
import {AuthContext} from '../../navigation/AuthProvider';
import FormInput from '../../components/CampoTexto';
import FormPassword from '../../components/CampoSenha';

const Login = ({navigation}) => {
  const [offset] = useState(new Animated.ValueXY({x: 0, y: 80}));
  const [opacity] = useState(new Animated.Value(0));
  const [logo] = useState(new Animated.ValueXY({x: 220, y: 245}));

  const {login, error} = useContext(AuthContext);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  useEffect(() => {
    keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      keyboardDidShow,
    );
    keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      keyboardDidHide,
    );

    Animated.parallel([
      Animated.spring(offset.y, {
        toValue: 0,
        speed: 4,
        bounciness: 20,
      }),
      Animated.timing(opacity, {
        toValue: 1,
        duration: 200,
      }),
    ]).start();
  }, []);

  function keyboardDidShow() {
    Animated.parallel([
      Animated.timing(logo.x, {
        toValue: 105,
        duration: 10,
      }),
      Animated.timing(logo.y, {
        toValue: 115,
        duration: 10,
      }),
    ]).start();
  }

  function keyboardDidHide() {
    Animated.parallel([
      Animated.timing(logo.x, {
        toValue: 220,
        duration: 100,
      }),
      Animated.timing(logo.y, {
        toValue: 245,
        duration: 100,
      }),
    ]).start();
  }

  return (
    <KeyboardAvoidingView style={Estilos.background}>
      <View style={Estilos.containerLogo}>
        <Animated.Image
          style={{
            width: logo.x,
            height: logo.y,
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
        <FormPassword
          labelValue={password}
          onChangeText={setPassword}
          placeholderText="Senha"
          iconType="lock"
        />

        {error ? <Text style={{color: 'red'}}>{error}</Text> : null}

        <TouchableOpacity
          style={Estilos.btnSubmit}
          onPress={() => login(email, password)}>
          <Text style={Estilos.submitText}>Acessar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Cadastro')}
          style={Estilos.btnRegister}>
          <Text style={Estilos.registerText}>
            Não possui cadastro? Clique aqui
          </Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Login;
