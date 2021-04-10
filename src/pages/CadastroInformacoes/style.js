import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
    width: '90%',
  },
  input: {
    backgroundColor: 'white',
    borderWidth: 2,
    borderColor: 'black',
    width: '90%',
    marginBottom: 15,
    fontSize: 17,
    borderRadius: 10,
    padding: 10,
  },
  btnSubmit: {
    backgroundColor: '#ffb745',
    width: '90%',
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  submitText: {
    color: '#222',
    fontSize: 18,
    fontFamily: 'Roboto-Regular',
  },
  btnRegister: {
    marginTop: 10,
  },
  checkboxContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    justifyContent: 'space-between',
  },
  checkboxPrincipal: {
    width: '80%',
    marginTop: 10,
  },
  containerCheck: {
    alignItems: 'center',
    width: '100%',
  },
  label: {
    marginRight: 8,
    fontSize: 15,
    fontFamily: 'Roboto-Regular',
  },
  labelSecundario: {
    marginRight: 8,
    fontSize: 13,
    fontFamily: 'Roboto-Regular',
  },
  containerMensagem: {
    marginBottom: 10,
  },
  mensagemConta: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#ffb745',
  },
  mensagemCredencial: {
    fontSize: 13,
    fontWeight: 'bold',
  },
  checkboxTermosCotainer: {
    flexDirection: 'row',
    marginBottom: 10,
    alignItems: 'center',
    width: '100%',
  },
  checkboxTermos: {
    color: '#ffb745',
  },
});
