import React, {useState, useContext} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import Estilos from './style';
import {AuthContext} from '../../provider/AuthProvider';

const Cadastro = ({navigation}) => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [email, setEmail] = useState();
  const [senha, setSenha] = useState();

  const {register} = useContext(AuthContext);

  return (
    <View style={Estilos.background}>
      <View style={Estilos.container}>
        <TextInput
          style={Estilos.input}
          placeholder="Nome"
          autoCorrect={false}
          onChangeText={() => {}}
        />
        <TextInput
          style={Estilos.input}
          placeholder="Telefone"
          autoCorrect={false}
          onChangeText={() => {}}
        />
        <TextInput
          style={Estilos.input}
          labelValue={email}
          onChangeText={setEmail}
          placeholder="E-mail"
          autoCorrect={false}
        />
        <TextInput
          style={Estilos.input}
          labelValue={senha}
          onChangeText={setSenha}
          placeholder="Senha"
          autoCorrect={false}
        />

        <TextInput
          style={Estilos.input}
          placeholder="Confirme a senha"
          autoCorrect={false}
          onChangeText={() => {}}
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
              disabled={false}
              value={toggleCheckBox}
              onValueChange={newValue => setToggleCheckBox(newValue)}
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
              disabled={false}
              value={toggleCheckBox}
              onValueChange={newValue => setToggleCheckBox(newValue)}
            />
          </View>
        </View>

        <TouchableOpacity
          style={Estilos.btnSubmit}
          onPress={() => register(email, senha)}>
          <Text style={Estilos.submitText}>Cadastrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Cadastro;
