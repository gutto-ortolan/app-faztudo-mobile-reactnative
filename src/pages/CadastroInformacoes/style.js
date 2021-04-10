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
  inputContainer: {
    marginTop: 5,
    marginBottom: 10,
    width: '100%',
    height: windowHeight / 15,
    borderColor: '#ccc',
    borderRadius: 3,
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  iconStyle: {
    padding: 10,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRightColor: '#ccc',
    borderRightWidth: 1,
    width: 50,
  },
  input: {
    padding: 10,
    flex: 1,
    fontSize: 16,
    fontFamily: 'Roboto-Regular',
    color: '#333',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dropdownStyle: {
    width: 200,
    height: 130,
    borderColor: '#ffb745',
    borderWidth: 1,
  },
  genderTextStyle: {
    fontSize: 16,
    fontFamily: 'Roboto-Regular',
    color: '#666',
  },
  dropdownTextStyle: {
    fontSize: 16,
    fontFamily: 'Roboto-Regular',
    color: '#333',
  },
  labelTermo: {
    marginLeft: -3,
    color: '#ffb745',
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
});
