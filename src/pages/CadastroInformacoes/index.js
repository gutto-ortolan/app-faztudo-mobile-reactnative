import React, {useState, useContext} from 'react';
import {View, Text, TouchableOpacity, ScrollView, Alert} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import Estilos from './style';
import {AuthContext} from '../../navigation/AuthProvider';
import FormInput from '../../components/CampoTexto';
import CampoTelefone from '../../components/CampoTelefone';
import Botao from '../../components/BotaoFormulario';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ModalDropdown from 'react-native-modal-dropdown';

const CadastroInformacoes = ({route, navigation}) => {
  const [termo, setTermo] = useState(false);
  const [profissional, setProfissional] = useState(false);
  const [cliente, setCliente] = useState(false);
  const [nome, setNome] = useState();
  const [telefone, setTelefone] = useState();
  const [genero, setGenero] = useState();
  const [erroNome, setErroNome] = useState(null);
  const [erroTelefone, setErroTelefone] = useState(null);
  const [erroCheck, setErroCheck] = useState(null);
  const [erroGenero, setErroGenero] = useState(null);
  const [tpUsuario, setTpUsuario] = useState(false);

  const {register, error} = useContext(AuthContext);

  const credenciais = route.params?.credenciais;

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

  const validar = () => {
    setErroNome(null);
    setErroTelefone(null);
    setErroCheck(null);
    setErroGenero(null);
    let error = false;
    if (nome == null) {
      setErroNome('Informe o seu nome completo');
      error = true;
    }

    if (telefone == null) {
      setErroTelefone('Informe o seu telefone de contato');
      error = true;
    } else {
      if (telefone.length != 15) {
        setErroTelefone('Informe o seu telefone de contato corretamente');
        error = true;
      }
    }

    if (!profissional && !cliente) {
      setErroCheck('Escolha uma das opções');
      error = true;
    }

    if (genero == null) {
      setErroGenero('Informe o seu gênero');
      error = true;
    }

    return !error;
  };

  const aceitarTermo = () => {
    if (!termo) {
      Alert.alert(
        'Termos de Uso',
        'Você deve aceitar os termos para continuar.',
      );
      return false;
    }

    return true;
  };

  function cadastrarUsuario() {
    if (validar() && aceitarTermo()) {
      const usuario = {
        nome: nome,
        telefone: telefone,
        tpUsuario: tpUsuario,
        genero: genero,
      };
      setTpUsuario(profissional ? true : false);
      register(credenciais.email, credenciais.senha, usuario);
    }
  }

  return (
    <ScrollView
      style={{backgroundColor: 'white'}}
      contentContainerStyle={{
        marginTop: 20,
      }}>
      <View style={Estilos.background}>
        <View style={Estilos.container}>
          <View style={Estilos.containerMensagem}>
            <Text style={Estilos.mensagemConta}>QUASE LÁ...</Text>
            <Text style={Estilos.mensagemCredencial}>
              Continue seu cadastro, informe mais alguns dados!
            </Text>
          </View>

          <FormInput
            labelValue={nome}
            onChangeText={setNome}
            placeholderText="Nome completo"
            iconType="user"
            autoCapitalize="words"
            autoCorrect={true}
          />
          {erroNome ? (
            <View style={Estilos.containerErro}>
              <Text style={Estilos.mensagemErro}>{erroNome}</Text>
            </View>
          ) : null}
          <CampoTelefone
            labelValue={telefone}
            onChangeText={setTelefone}
            placeholderText="Telefone"
            iconType="phone"
            autoCorrect={false}
          />
          {erroTelefone ? (
            <View style={Estilos.containerErro}>
              <Text style={Estilos.mensagemErro}>{erroTelefone}</Text>
            </View>
          ) : null}

          <View style={Estilos.inputContainer}>
            <View style={Estilos.iconStyle}>
              <Ionicons name={'transgender-outline'} size={22} color="#666" />
            </View>
            <View style={{marginLeft: 10}}>
              <ModalDropdown
                style={{width: 250}}
                defaultValue="Gênero"
                dropdownStyle={Estilos.dropdownStyle}
                textStyle={Estilos.genderTextStyle}
                dropdownTextStyle={Estilos.dropdownTextStyle}
                options={['Masculino', 'Feminino', 'Outro']}
                onSelect={(idx, value) => {
                  setGenero(value);
                }}
              />
            </View>
          </View>
          {erroGenero ? (
            <View style={Estilos.containerErro}>
              <Text style={Estilos.mensagemErro}>{erroGenero}</Text>
            </View>
          ) : null}

          <View style={Estilos.containerCheck}>
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
                  tintColors={{true: '#ffb745', false: '#ffb745'}}
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
                  tintColors={{true: '#ffb745', false: '#ffb745'}}
                  onValueChange={valor => selecionaCliente(valor)}
                />
              </View>
              {erroCheck ? (
                <View style={Estilos.containerErro}>
                  <Text style={Estilos.mensagemErro}>{erroCheck}</Text>
                </View>
              ) : null}
            </View>
          </View>

          <View style={Estilos.checkboxTermosCotainer}>
            <CheckBox
              value={termo}
              onValueChange={valor => setTermo(valor)}
              tintColors={{true: '#ffb745', false: '#ffb745'}}
            />
            <Text style={Estilos.labelSecundario}>Concordo com os</Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Termos');
                setTermo(true);
              }}>
              <Text style={(Estilos.labelSecundario, Estilos.labelTermo)}>
                Termos de uso.
              </Text>
            </TouchableOpacity>
          </View>

          {error ? <Text style={{color: 'red'}}>{error}</Text> : null}

          <Botao buttonTitle="Criar a minha conta" onPress={cadastrarUsuario} />
        </View>
      </View>
    </ScrollView>
  );
};

export default CadastroInformacoes;
