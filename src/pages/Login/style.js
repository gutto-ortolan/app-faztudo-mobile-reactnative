import {StyleSheet} from 'react-native';
import {windowHeight, windowWidth} from '../../utils/Dimensions';

export default StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  containerLogo: {
    flex: 1,
    justifyContent: 'center',
    marginTop: 30,
    marginBottom: 50,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    paddingBottom: 50,
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
    fontFamily: 'Roboto-Regular',
  },
  submitText: {
    color: '#222',
    fontSize: 18,
    fontFamily: 'Roboto-Regular',
  },
  btnRegister: {
    marginTop: 10,
  },
  registerText: {
    color: '#222',
    fontFamily: 'Roboto-Regular',
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
