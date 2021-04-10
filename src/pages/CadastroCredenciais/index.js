import React, {useState} from 'react';
import {View, Text, ActivityIndicator, TouchableOpacity} from 'react-native';
import Estilos from './style';
import FormInput from '../../components/CampoTexto';
import FormPassword from '../../components/CampoSenha';
import firestore from '@react-native-firebase/firestore';

const CadastroCredenciais = ({navigation}) => {
  const [email, setEmail] = useState();
  const [senha, setSenha] = useState();
  const [confirmaSenha, setConfirmaSenha] = useState();
  const [errorEmail, setErrorEmail] = useState(null);
  const [errorSenha, setErrorSenha] = useState(null);
  const [errorConfirmaSenha, setErrorConfirmaSenha] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const validar = () => {
    setErrorEmail(null);
    setErrorSenha(null);
    setErrorConfirmaSenha(null);
    let error = false;
    let temSenha = false;
    if (email == null || email.indexOf('@') == -1 || email.indexOf('.') == -1) {
      setErrorEmail('Informe um e-mail válido');
      error = true;
    }

    if (senha == null || senha.length < 6) {
      setErrorSenha('Informe uma senha de 6 ou mais caractéres');
      error = true;
    } else {
      temSenha = true;
    }

    if (confirmaSenha == null) {
      setErrorConfirmaSenha('Informe a confirmação da senha');
      error = true;
    } else {
      if (senha != confirmaSenha) {
        setErrorConfirmaSenha('As senhas não são iguais. Tente novamente');
        error = true;
      }
    }

    return !error;
  };

  async function continuar() {
    if (validar()) {
      setLoading(true);
      await firestore()
        .collection('usuario')
        .where('email', '==', email)
        .get()
        .then(querySnapshot => {
          if (querySnapshot.size == 0) {
            navigation.navigate('CadastroFuncionais', {
              credenciais: credenciais,
            });
            setLoading(false);
            setErrorEmail(null);
            setErrorSenha(null);
            setErrorConfirmaSenha(null);
            setError(null);
          } else {
            setError('*O e-mail informado já foi cadastrado');
            setLoading(false);
          }
        });
      //
    }
  }

  const credenciais = {
    email: email,
    senha: senha,
  };

  return (
    <View style={Estilos.background}>
      <View style={Estilos.container}>
        <View style={Estilos.containerMensagem}>
          <Text style={Estilos.mensagemConta}>CRIAÇÃO DE CONTA</Text>
          <Text style={Estilos.mensagemCredencial}>
            Primeiro, informe suas credenciais
          </Text>
        </View>
        <FormInput
          labelValue={email}
          onChangeText={setEmail}
          placeholderText="E-mail"
          iconType="mail"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
        />
        {errorEmail ? (
          <View style={Estilos.containerErro}>
            <Text style={Estilos.mensagemErro}>{errorEmail}</Text>
          </View>
        ) : null}
        <FormPassword
          labelValue={senha}
          onChangeText={setSenha}
          placeholderText="Senha"
          iconType="lock"
        />
        {errorSenha ? (
          <View style={Estilos.containerErro}>
            <Text style={Estilos.mensagemErro}>{errorSenha}</Text>
          </View>
        ) : null}
        <FormPassword
          labelValue={confirmaSenha}
          onChangeText={setConfirmaSenha}
          placeholderText="Confirme a senha"
          iconType="check"
        />
        {errorConfirmaSenha ? (
          <View style={Estilos.containerErro}>
            <Text style={Estilos.mensagemErro}>{errorConfirmaSenha}</Text>
          </View>
        ) : null}

        {error ? (
          <View style={Estilos.containerMensagemErro}>
            <Text style={{color: 'red'}}>{error}</Text>
          </View>
        ) : null}

        <TouchableOpacity
          style={Estilos.buttonContainer}
          onPress={() => navigation.navigate('CadastroFuncionais')}>
          {loading ? (
            <View style={{flexDirection: 'row'}}>
              <ActivityIndicator color="white" />
              <Text style={Estilos.buttonText}>Verificando</Text>
            </View>
          ) : (
            <Text style={Estilos.buttonText}>Continuar</Text>
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CadastroCredenciais;
