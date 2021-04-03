import React, {useContext} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {AuthContext} from '../../navigation/AuthProvider';

// import { Container } from './styles';

const Home = () => {
  const {user} = useContext(AuthContext);
  const {logout} = useContext(AuthContext);

  return (
    <View>
      <Text>{user.email}</Text>

      <TouchableOpacity onPress={logout}>
        <Text>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
