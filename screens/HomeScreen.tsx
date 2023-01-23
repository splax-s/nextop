import { ScrollView, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import Colors from '../constants/Colors';
import Cart from "../assets/svg/cart"
import Down from '../assets/svg/down'
import { EvilIcons } from '@expo/vector-icons';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container} edges={["left", "right", "top"]}>
      <ScrollView style={styles.top}>
      <View style={styles.topView}>
        <View>
        <Text style={styles.text}>Delivering to</Text>
        <View style={styles.sec}>
        <Text style={styles.text1}>Select hall</Text>
        <View style={{marginLeft: 4}}>
        <Down/>
        </View>
        </View>
        </View>
        <TouchableOpacity style={styles.circle}>
          <Cart/>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.searchBar}>
        <EvilIcons name="search" size={24} color="#C4C4C4" />
        <Text style={styles.text2}>Try ‘Jollof rice’</Text>
      </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 33,
  },
  top:{
    marginTop: 40,
  },
  topView:{
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  circle:{
    height: 26,
    width:42,
    backgroundColor: Colors.primary,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center"
  },
  text:{
    fontFamily: "space-medium",
    fontSize: 13,
    color: Colors.primary
  },
  text1:{
    fontFamily: "space-medium",
    fontSize: 16,
    color: "#757575"
  },
  text2:{
    fontFamily: "space-medium",
    fontSize: 12,
    color: "#757575",
    marginLeft: 10,
  },
  sec:{
    flexDirection: "row",
    alignItems: "center"
  },
  searchBar:{
    width: "100%",
    height: 45,
    backgroundColor: "rgba(248, 248, 248, 1)",
    marginTop: 24,
    alignItems: "center",
    paddingHorizontal: 15,
    flexDirection: "row",
    borderRadius: 5
  }
})
