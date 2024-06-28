import { StyleSheet } from "react-native";

export default StyleSheet.create({
  logo: {
    height: 30,
    marginTop: 40
  },
  background: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 25,
  },
  container: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: -250,
    borderRadius: 8,
    width: "100%",
  },
  containerRegister: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    width: "100%",
    marginTop: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    textAlign: "center",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  email: {
    marginTop: 35,
  },
  password: {
    marginTop: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 4,
    marginTop: 8,
    height: 44,
    paddingHorizontal: 12
  },
  inputContainer: {
    width: '100%',
    paddingHorizontal: 28
  },
  loginButtonContainer: {
    marginTop: 16,
    width: '100%',
    height: 44,
    paddingHorizontal: 28,
  },
  loginButton: {
    backgroundColor: '#E0E0E0',
    height: '100%',
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  loginButtonTitle: {
    fontWeight: 'bold',
    color: '#636363',
    textAlign: 'center'
  },
  forgotButton: {
    fontWeight: 'bold',
    color: '#076CE0',
    paddingBottom: 21,
    paddingTop: 16
  },
  noAccountButton: {
    color: '#00031A',
    marginTop: 16
  },
  registerButtonContainer: {
    marginTop: 16,
    marginBottom: 16,
    width: '100%',
    height: 44,
    paddingHorizontal: 28,
  },
  registerButton: {
    backgroundColor: '#ffffff',
    height: '100%',
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1
  },
  registerButtonTitle: {
    fontWeight: 'bold',
    color: '#00031A',
    textAlign: 'center'
  },
});
