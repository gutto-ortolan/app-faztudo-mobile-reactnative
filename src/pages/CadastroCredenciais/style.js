import {StyleSheet} from 'react-native';
import {windowHeight, windowWidth} from '../../utils/Dimensions';

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
  mensagemErro: {
    fontSize: 12,
    color: 'red',
  },
  containerErro: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    width: '100%',
    marginTop: -10,
    marginBottom: 5,
  },
  containerMensagemErro: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  buttonContainer: {
    marginTop: 10,
    width: '100%',
    height: windowHeight / 15,
    backgroundColor: '#ffb745',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 3,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
    fontFamily: 'Lato-Regular',
  },
});
