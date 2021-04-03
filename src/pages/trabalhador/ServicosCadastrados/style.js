import {StyleSheet} from 'react-native';

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
  },
  container: {
    flex: 1,
    alignItems: 'center',
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
  },
  btnRegister: {
    marginTop: 10,
  },
  registerText: {
    color: '#222',
  },
  checkboxContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    justifyContent: 'space-between',
  },
  checkboxPrincipal: {
    width: '75%',
  },
  label: {
    marginRight: 8,
  },
  labelSecundario: {
    marginRight: 8,
    fontSize: 12,
  },
});
