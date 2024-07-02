import { Button, StyleSheet } from "react-native";
import { Text, View } from "@/components/Themed";
import { useSession } from "../../../hooks/ctx";
import styles from "../styles";

export default function TabOneScreen() {
  const { signOut, session } = useSession();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab One</Text>
      <Button
        title="Sign Out"
        onPress={() => {
          signOut();
        }}
      />
    </View>
  );
}