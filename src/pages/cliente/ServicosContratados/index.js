import React, {useContext, useEffect, useState} from 'react';
import {Button, View, Text, TouchableOpacity} from 'react-native';
import {AuthContext} from '../../../navigation/AuthProvider';
import firestore from '@react-native-firebase/firestore';
import Estilo from './style';

const ServicosContratados = () => {
  const {logout, user} = useContext(AuthContext);
  const [usuario, setUsuario] = useState();

  useEffect(() => {
    getUsuarios();
  }, []);

  const getUsuarios = async () => {
    try {
      const usu = await firestore().collection('usuario').doc(user.uid).get();
      setUsuario(usu.data());
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <View style={Estilo.background}>
      <Text>{user.uid}</Text>
      <Text>{usuario ? usuario.nome : 'Sem nome'}</Text>
      <TouchableOpacity onPress={() => logout()} style={Estilo.btnSubmit}>
        <Text>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ServicosContratados;
