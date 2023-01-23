import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import {SafeAreaView} from 'react-native-safe-area-context'
import Colors from '../constants/Colors'
import CustomButton from '../components/CustomButton'

const IntroScreen = ({navigation}: any) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.image}>
      <Image source={require("../assets/images/food.gif")} style={styles.image1}/>
      </View>


      <View style={styles.textView}>
        <Text style={styles.text}>Order. Pay. Repeat</Text>
        <Text style={styles.text1}>Burgers, fries, soda at your fingertips</Text>
      </View>


      <View style={styles.hi}>

      <CustomButton
                title="Sign up"
                marginTop={80}
                loading={false}
                disabled={false}
                _onPress={()=>{
                  navigation.navigate('SignupScreen')
                }}
                containerStyle={{}}
                color={Colors.primary}
                textStyle={{}}
                />
                <CustomButton
                title="Login"
                marginTop={12}
                loading={false}
                disabled={false}
                _onPress={()=>{
                    navigation.navigate('SigninScreen')
                }}
                containerStyle={{}}
                color={"#FFF3ED"}
                textStyle={{color: Colors.primary}}
                />

            </View>
    </SafeAreaView>
  )
}

export default IntroScreen

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      paddingHorizontal: 30,
      justifyContent: "center",
    },
    image:{
      justifyContent: "center",
      alignItems: "center",
      marginTop: 170
    },
    hi: {
      //justifyContent: "center",
      marginBottom: 50
    },
    image1:{
      height: 300,
      width: 300
    },
    textView:{
        alignText: 'center',
        justifyContent: "center",
        alignItems: "center",
        marginTop: 70
    },
     text:{
        fontFamily: 'space-medium',
        fontSize: 18
     },
     text1:{
        fontSize: 16,
        fontFamily: 'space-regular',
        color: '#757575',
        marginTop: 12
     }
  })

