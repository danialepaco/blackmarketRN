import { StyleSheet, Image, TouchableOpacity } from "react-native";
import { Text, View } from "@/components/Themed";
import { CHAIR_IMG, FAVORITE_IMG } from "@/assets/images";
import styles from "./itemViewStyles"

const ItemScreen = ({result}: any) => {
  return (
    <View style={styles.container}>
        <Image source={{uri: result.pictures[0]}} style={styles.image} ></Image>
        <View style={styles.separator}></View>

        <View style={styles.textContainer}>
            <View style={styles.priceContainer}>
                <Text style={styles.title}>{result.unit_price}</Text>
                <View style={styles.bannerContainer}>
                    <Text style={styles.bannerText}>{result.state == 'used' ? 'Used' : 'New'}</Text>
                </View>
            </View>
            <View style={styles.priceContainer}>
             <Text numberOfLines={1} style={styles.title}>{result.title}</Text>
             <TouchableOpacity>
              <Image source={FAVORITE_IMG()} ></Image>
             </TouchableOpacity>
            </View>
        </View>
    </View>
  );
}

export default ItemScreen;