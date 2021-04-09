import React, {useState, useContext} from 'react';
import {View, Text} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import Estilos from './style';
import {AuthContext} from '../../navigation/AuthProvider';
import FormInput from '../../components/CampoTexto';
import FormPassword from '../../components/CampoSenha';
import Botao from '../../components/BotaoFormulario';

const CadastroCredenciais = ({navigation}) => {
  const [profissional, setProfissional] = useState(false);
  const [cliente, setCliente] = useState(false);
  const [email, setEmail] = useState();
  const [senha, setSenha] = useState();
  const [nome, setNome] = useState();
  const [telefone, setTelefone] = useState();
  const [confirmaSenha, setConfirmaSenha] = useState();

  const {register, error} = useContext(AuthContext);

  const usuario = {
    nome: 'augusto163@gmail.com',
    sobrenome: '123456',
  };

  function selecionaProfissional(valor) {
    if (valor) {
      setProfissional(true);
      setCliente(false);
    } else {
      setProfissional(false);
      setCliente(true);
    }
  }

  function selecionaCliente(valor) {
    if (!valor) {
      setProfissional(true);
      setCliente(false);
    } else {
      setProfissional(false);
      setCliente(true);
    }
  }

  function registraUsuario(email, senha) {
    console.log(email);
    console.log(senha);
    register(email, senha);
  }

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
        <FormPassword
          labelValue={senha}
          onChangeText={setSenha}
          placeholderText="Senha"
          iconType="lock"
        />
        <FormPassword
          labelValue={confirmaSenha}
          onChangeText={setConfirmaSenha}
          placeholderText="Confirme a senha"
          iconType="check"
        />

        {error ? <Text style={{color: 'red'}}>{error}</Text> : null}

        <Botao
          buttonTitle="Continuar"
          onPress={() =>
            navigation.navigate('CadastroFuncionais', {user: usuario})
          }
        />
      </View>
    </View>
  );
};

export default CadastroCredenciais;
