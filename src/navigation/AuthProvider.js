import React, {createContext} from 'react';
import auth from '@react-native-firebase/auth';
import {useState} from 'react/cjs/react.development';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  function verificaErro(mensagem) {
    if (mensagem.match(/wrong-password/)) {
      setError('*Senha incorreta.');
    } else if (mensagem.match(/user-not-found/)) {
      setError('*Usuário não encontrado.');
    } else if (mensagem.match(/email-already-in-use/)) {
      setError('*Email já cadastrado. Informe outro..');
    } else if (mensagem.match(/weak-password/)) {
      setError(
        '*Senha muito fraca. Informe uma senha com 6 ou mais caractéres.',
      );
    } else {
      setError('*Algum erro ocorreu, tente mais tarde.');
    }
  }

  return (
    //salvar email na coleção usuario para fazer find na primeira tela de cadastro
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
            await auth()
              .createUserWithEmailAndPassword(email, senha)
              .then(res => {
                const {
                  user: {uid},
                } = res;
                console.log(uid);
              });
            console.log('Usuário cadastrado com sucesso!');
            setError(null);
          } catch (e) {
            console.log(e.message);
            verificaErro(e.message);
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
