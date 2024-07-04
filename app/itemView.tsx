import { StyleSheet, Image, TouchableOpacity } from "react-native";
import { Text, View } from "@/components/Themed";
import { CHAIR_IMG, FAVORITE_IMG } from "@/assets/images";
import styles from "./itemViewStyles"

export default function ItemScreen() {
  return (
    <View style={styles.container}>
        <Image source={CHAIR_IMG()} style={styles.image} ></Image>
        <View style={styles.separator}></View>

        <View style={styles.textContainer}>
            <View style={styles.priceContainer}>
                <Text style={styles.title}>36$</Text>
                <View style={styles.bannerContainer}>
                    <Text style={styles.bannerText}>New</Text>
                </View>
            </View>
            <View style={styles.priceContainer}>
             <Text style={styles.title}>Chair</Text>
             <TouchableOpacity>
              <Image source={FAVORITE_IMG()} ></Image>
             </TouchableOpacity>
            </View>
        </View>
    </View>
  );
}