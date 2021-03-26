import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  KeyboardAvoidingView,
  Image,
  TextInput,
  TouchableOpacity,
  Animated,
  Keyboard,
} from 'react-native';
import Estilos from './style';

const Login = ({navigation}) => {
  const [offset] = useState(new Animated.ValueXY({x: 0, y: 80}));
  const [opacity] = useState(new Animated.Value(0));
  const [logo] = useState(new Animated.ValueXY({x: 220, y: 245}));

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
          source={require('../../assets/logo.png')}
        />
      </View>
      <Animated.View
        style={[
          Estilos.container,
          {
            opacity: opacity,
            transform: [{translateY: offset.y}],
          },
        ]}>
        <TextInput
          style={Estilos.input}
          placeholder="Email"
          autoCorrect={false}
          onChangeText={() => {}}
        />
        <TextInput
          style={Estilos.input}
          placeholder="Senha"
          autoCorrect={false}
          onChangeText={() => {}}
        />
        <TouchableOpacity style={Estilos.btnSubmit}>
          <Text style={Estilos.submitText}>Acessar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Cadastro')}
          style={Estilos.btnRegister}>
          <Text style={Estilos.registerText}>
            Não possui cadastro? Clique aqui
          </Text>
        </TouchableOpacity>
      </Animated.View>
    </KeyboardAvoidingView>
  );
};

export default Login;
