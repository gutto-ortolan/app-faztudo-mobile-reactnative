import React from 'react';
import {View, ScrollView, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Estilos from './style';
import TextoTermo from './TextoTermo';

const TermosDeUso = ({navigation}) => {
  return (
    <View style={Estilos.background}>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Text>Termos de Uso</Text>
      </View>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          borderWidth: 1,
          borderColor: 'red',
          width: '90%',
          height: '60%',
        }}>
        <ScrollView>
          <TextoTermo />
        </ScrollView>
      </View>
      <TouchableOpacity
        style={{justifyContent: 'center', alignItems: 'center'}}>
        <Text>Li e concordo com os termos</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TermosDeUso;
