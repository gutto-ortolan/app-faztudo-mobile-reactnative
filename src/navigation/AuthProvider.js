import React, {createContext} from 'react';
import auth from '@react-native-firebase/auth';
import {useState} from 'react/cjs/react.development';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

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
    } else if (mensagem.match(/invalid-email/)) {
      setError('*E-mail inválido.');
    } else {
      setError('*Algum erro ocorreu, tente mais tarde.');
    }
    setLoading(false);
  }

  return (
    //salvar email na coleção usuario para fazer find na primeira tela de cadastro
    <AuthContext.Provider
      value={{
        user,
        setUser,
        error,
        loading,
        login: async (email, senha) => {
          try {
            setLoading(true);
            await auth()
              .signInWithEmailAndPassword(email, senha)
              .then(res => {
                setLoading(true);
              });
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
            setLoading(false);
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
