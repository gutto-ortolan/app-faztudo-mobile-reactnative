import React, {useContext} from 'react';
import {Button, View, Text, TouchableOpacity} from 'react-native';
import {AuthContext} from '../../../navigation/AuthProvider';

import Estilo from './style';

const ServicosContratados = () => {
  const {logout, user} = useContext(AuthContext);
  return (
    <View style={Estilo.background}>
      <Text>{user.email}</Text>
      <TouchableOpacity onPress={() => logout()} style={Estilo.btnSubmit}>
        <Text>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ServicosContratados;
