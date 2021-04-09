import React, {useState, useContext} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import {Picker} from '@react-native-community/picker';
import Estilos from './style';
import {AuthContext} from '../../navigation/AuthProvider';
import FormInput from '../../components/CampoTexto';
import CampoTelefone from '../../components/CampoTelefone';
import Botao from '../../components/BotaoFormulario';

const CadastroInformacoes = ({route}) => {
  const [termo, setTermo] = useState(false);
  const [profissional, setProfissional] = useState(false);
  const [cliente, setCliente] = useState(false);
  const [email, setEmail] = useState();
  const [senha, setSenha] = useState();
  const [nome, setNome] = useState();
  const [telefone, setTelefone] = useState();
  const [confirmaSenha, setConfirmaSenha] = useState();

  const {register, error} = useContext(AuthContext);

  const usuario1 = route.params?.user;

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

  const [selectedValue, setSelectedValue] = useState('java');

  return (
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
        <CampoTelefone
          labelValue={telefone}
          onChangeText={setTelefone}
          placeholderText="Telefone"
          iconType="phone"
          autoCorrect={false}
        />

        <Picker
          selectedValue={selectedValue}
          style={{height: 50, width: 150}}
          onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}>
          <Picker.Item label="Java" value="java" />
          <Picker.Item label="JavaScript" value="js" />
        </Picker>

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
        </View>

        <View style={Estilos.checkboxTermosCotainer}>
          <CheckBox
            value={termo}
            onValueChange={valor => setTermo(valor)}
            tintColors={{true: '#ffb745', false: '#ffb745'}}
          />
          <Text style={Estilos.labelSecundario}>Concordo com os</Text>
          <TouchableOpacity>
            <Text
              style={
                (Estilos.labelSecundario,
                {
                  marginLeft: -3,
                  color: '#ffb745',
                  fontWeight: 'bold',
                })
              }>
              Termos de uso.
            </Text>
          </TouchableOpacity>
        </View>

        {error ? <Text style={{color: 'red'}}>{error}</Text> : null}

        <Botao
          buttonTitle="Criar a minha conta"
          onPress={() => registraUsuario(usuario1.nome, usuario1.sobrenome)}
        />
      </View>
    </View>
  );
};

export default CadastroInformacoes;
