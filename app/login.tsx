import { TextInput, ImageBackground, Image, TouchableOpacity } from "react-native";
import { Text, View } from "@/components/Themed";
import { useSession } from "./ctx";
import { router } from "expo-router";
import { BACKGROUND_IMG, LOGO_ICON } from '../assets/images';
import styles from "./loginStyles"

export default function Login() {
  const { signIn } = useSession();
  const handleLogin = () => {
    signIn();
    router.replace("/");
  };

  return (
    <ImageBackground source={BACKGROUND_IMG()} resizeMode="cover" style={styles.background}>
      <View style={styles.container}>
        <Image 
          source={LOGO_ICON()}
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