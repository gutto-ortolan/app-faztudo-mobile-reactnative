import React, {useState, useContext} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import Estilos from './style';
import {AuthContext} from '../../navigation/AuthProvider';
import FormInput from '../../components/CampoTexto';
import FormPassword from '../../components/CampoSenha';

const Cadastro = ({navigation}) => {
  const [profissional, setProfissional] = useState(false);
  const [cliente, setCliente] = useState(false);
  const [email, setEmail] = useState();
  const [senha, setSenha] = useState();
  const [nome, setNome] = useState();
  const [telefone, setTelefone] = useState();
  const [confirmaSenha, setConfirmaSenha] = useState();

  const {register} = useContext(AuthContext);

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
        <FormInput
          labelValue={nome}
          onChangeText={setNome}
          placeholderText="Nome"
          iconType="user"
          autoCapitalize="words"
          autoCorrect={true}
        />
        <FormInput
          labelValue={telefone}
          onChangeText={setTelefone}
          placeholderText="Telefone"
          iconType="phone"
          keyboardType="number-pad"
          autoCapitalize="none"
          autoCorrect={false}
        />
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
        <View style={Estilos.checkboxPrincipal}>
          <View style={Estilos.checkboxContainer}>
            <View>
              <Text style={Estilos.label}>Sou Profissional</Text>
              <Text style={Estilos.labelSecundario}>
                Quero oferecer meus serviços
              </Text>
            </View>
            <CheckBox
              value={profissional}
              onValueChange={valor => selecionaProfissional(valor)}
            />
          </View>

          <View style={Estilos.checkboxContainer}>
            <View>
              <Text style={Estilos.label}>Sou Cliente</Text>
              <Text style={Estilos.labelSecundario}>
                Quero contratar serviços
              </Text>
            </View>
            <CheckBox
              value={cliente}
              onValueChange={valor => selecionaCliente(valor)}
            />
          </View>
        </View>

        <TouchableOpacity
          style={Estilos.btnSubmit}
          onPress={() => registraUsuario(email, senha)}>
          <Text style={Estilos.submitText}>Cadastrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Cadastro;
