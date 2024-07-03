import { Image, ScrollView, TouchableOpacity } from "react-native";
import { Text, View } from "@/components/Themed";
import styles from "../_homeStyles";
import en from "../../../translations/en.json";
import { router } from "expo-router";
import { FEDEX_IMG, DISCOUNT_IMG, CARD_ICON, PAYPAL_ICON, CRYPTO_ICON } from '../../../assets/images';

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity 
        onPress={() => {
          router.navigate("productsView")
        }}
      >
        <Text style={styles.seeAllButton}>{en.home.seeAll}</Text>
      </TouchableOpacity>
      <View style={styles.discountImageContainer}>
       <Image 
          source={DISCOUNT_IMG()}
          style={styles.discountImage}
        />
      </View>
      <View style={styles.paymentMethodContainer}>
        <Text style={styles.title}>{en.home.paymentMethods}</Text>
        <View
          style={styles.paymentMethodsHorizontalContainer}>
        <View style={styles.icoContainer}>
          <Image 
            source={CARD_ICON()}
            style={styles.ico}
          />
          <Text style={styles.icoText}>{en.home.credit}</Text>
        </View>
        <View style={styles.separator}></View>
        <View style={styles.icoContainer}>
          <Image 
            source={PAYPAL_ICON()}
            style={styles.ico}
          />
          <Text style={styles.icoText}>{en.home.paypal}</Text>
        </View>
        <View style={styles.separator}></View>
        <View style={styles.icoContainer}>
          <Image 
            source={CRYPTO_ICON()}
            style={styles.ico}
          />
          <Text style={styles.icoText}>{en.home.crypto}</Text>
        </View>
        </View>
      </View>
        <Image 
          source={FEDEX_IMG()}
          style={styles.fedexImage}
        />
    </ScrollView>
  );
}