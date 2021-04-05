import React, {createContext} from 'react';
import auth from '@react-native-firebase/auth';
import {useState} from 'react/cjs/react.development';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        login: async (email, senha) => {
          try {
            await auth().signInWithEmailAndPassword(email, senha);
            console.log('Usuário logado com sucesso!');
          } catch (e) {
            console.log(e);
          }
        },
        register: async (email, senha) => {
          try {
            await auth().createUserWithEmailAndPassword(email, senha);
            console.log('Usuário cadastrado com sucesso!');
          } catch (e) {
            console.log(e);
          }
        },
        logout: async () => {
          try {
            console.log('Deslogando...');
            await auth().signOut();
          } catch (e) {
            console.log(e);
          }
        },
      }}>
      {children}
    </AuthContext.Provider>
  );
};
