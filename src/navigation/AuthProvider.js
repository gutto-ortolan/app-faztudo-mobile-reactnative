import React, {createContext} from 'react';
import auth from '@react-native-firebase/auth';
import {useState} from 'react/cjs/react.development';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState();

  function verificaErro(mensagem) {
    if (mensagem.match(/wrong-password/)) {
      console.log('Senha incorreta.');
      setError('Senha incorreta.');
    } else if (mensagem.match(/user-not-found/)) {
      console.log('Usuário não encontrado.');
      setError('Usuário não encontrado.');
    } else {
      console.log(mensagem);
      setError(null);
    }
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        error,
        login: async (email, senha) => {
          try {
            await auth().signInWithEmailAndPassword(email, senha);
            console.log('Usuário logado com sucesso!');
            setError(null);
          } catch (e) {
            console.log(e.message);
            verificaErro(e.message);
          }
        },
        register: async (email, senha) => {
          try {
            await auth().createUserWithEmailAndPassword(email, senha);
            console.log('Usuário cadastrado com sucesso!');
            setError(null);
          } catch (e) {
            console.log(e.message);
            setError(e.message);
          }
        },
        logout: async () => {
          try {
            console.log('Deslogando...');
            await auth().signOut();
            setError(null);
          } catch (e) {
            console.log(e.message);
            setError(e.message);
          }
        },
      }}>
      {children}
    </AuthContext.Provider>
  );
};
