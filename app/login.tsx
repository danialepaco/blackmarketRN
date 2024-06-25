import { StyleSheet, TextInput, ImageBackground, Image, TouchableOpacity } from "react-native";
import { Text, View } from "@/components/Themed";
import { useSession } from "./ctx";
import { router } from "expo-router";

export default function Login() {
  const { signIn } = useSession();
  const handleLogin = () => {
    signIn();
    router.replace("/");
  };

  return (
    <ImageBackground source={require('../assets/images/background.jpg')} resizeMode="cover" style={styles.background}>
      <View style={styles.container}>
        <Image 
          source={require('../assets/images/logo.jpg')}
          style={styles.logo}
        />
        <View style={styles.inputContainer}>
          <Text style={styles.email}>Email</Text>
          <TextInput placeholder="Type your email or telephone" style={styles.input} />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.password}>Password</Text>
          <TextInput
            placeholder="Type your password"
            secureTextEntry
            style={styles.input}
          />
        </View>
        <View style={styles.loginButtonContainer}>
          <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
              <Text style={styles.loginButtonTitle}>Log in</Text>
            </TouchableOpacity>
        </View>
        <TouchableOpacity>
          <Text style={styles.forgotButton}>I forgot my password</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.containerRegister}>
       <TouchableOpacity>
          <Text style={styles.noAccountButton}>Don’t have an account?</Text>
        </TouchableOpacity>
        <View style={styles.registerButtonContainer}>
          <TouchableOpacity style={styles.registerButton}>
              <Text style={styles.registerButtonTitle}>Sign up</Text>
            </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
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
