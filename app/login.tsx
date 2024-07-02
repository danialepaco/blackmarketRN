import { TextInput, ImageBackground, Image, TouchableOpacity } from "react-native";
import { Text, View } from "@/components/Themed";
import { useSession } from "./../hooks/ctx";
import { router } from "expo-router";
import { BACKGROUND_IMG, LOGO_ICON } from '../assets/images';
import styles from "./loginStyles"
import en from '@/translations/en.json';

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
          <Text style={styles.email}>{en.login.emailTitle}</Text>
          <TextInput placeholder={en.login.emailPlaceholder} style={styles.input} />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.password}>{en.login.passwordTitle}</Text>
          <TextInput
            placeholder={en.login.passwordPlaceholder}
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
          <Text style={styles.forgotButton}>{en.login.forgotTitle}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.containerRegister}>
       <TouchableOpacity>
          <Text style={styles.noAccountButton}>{en.login.noAccountTitle}</Text>
        </TouchableOpacity>
        <View style={styles.registerButtonContainer}>
          <TouchableOpacity style={styles.registerButton}>
              <Text style={styles.registerButtonTitle}>{en.login.signUpTitle}</Text>
            </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}