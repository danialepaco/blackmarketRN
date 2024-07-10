import { Image, ScrollView, TouchableOpacity, FlatList } from "react-native";
import { Text, View } from "@/components/Themed";
import styles from "../_homeStyles";
import en from "../../../translations/en.json";
import { router } from "expo-router";
import { FEDEX_IMG, DISCOUNT_IMG, CARD_ICON, PAYPAL_ICON, CRYPTO_ICON, HEADER_IMG } from '../../../assets/images';
import ItemScreen from "@/app/itemView";
import api from "@/api/getProductsAPI";
import { useState, useEffect } from "react";

export default function HomeScreen() {

  const [products, results, errorMessage] = api();

  return (
    <ScrollView style={styles.container}>
      <Image source={HEADER_IMG()} style={styles.header}></Image>
      <FlatList
        horizontal={true}
        indicatorStyle="white"
        data={results as any}
        renderItem={({item}) => <ItemScreen result={item} ></ItemScreen>}
        keyExtractor={item => item.id}
      />
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