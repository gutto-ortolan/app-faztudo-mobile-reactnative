import React from 'react';
import {View, ScrollView, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Estilos from './style';
import TextoTermo from './TextoTermo';

const TermosDeUso = ({navigation}) => {
  return (
    <View style={Estilos.background}>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: 20,
        }}>
        <Text
          style={{
            fontSize: 22,
            fontWeight: 'bold',
            color: '#ffb745',
          }}>
          Termos de Uso
        </Text>
      </View>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          borderWidth: 1,
          borderColor: '#6666',
          borderRadius: 2,
          width: '90%',
          height: '70%',
        }}>
        <ScrollView style={{backgroundColor: 'white'}}>
          <TextoTermo />
        </ScrollView>
      </View>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}
        style={
          ({justifyContent: 'center', alignItems: 'center'},
          Estilos.buttonContainer)
        }>
        <Text style={Estilos.buttonText}>Li e concordo com os termos</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TermosDeUso;
