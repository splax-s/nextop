import { StyleSheet, Text, View, Image, Animated } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const StartScreen = ({navigation}: any) => {
    const [shakeAnimation] = useState(new Animated.Value(0));

    const startShake = () => {
    Animated.sequence([
      Animated.timing(shakeAnimation, { toValue: 20, duration: 1000, useNativeDriver: true }),
      Animated.timing(shakeAnimation, { toValue: -10, duration: 100, useNativeDriver: true }),
      Animated.timing(shakeAnimation, { toValue: 10, duration: 100, useNativeDriver: true }),
      Animated.timing(shakeAnimation, { toValue: 0, duration: 100, useNativeDriver: true })
    ]).start();
  }


    useEffect(() => {
        startShake();

        setTimeout(() => {
            navigation.navigate('GetReadyScreen')
        }, 1200)
      }, []);

  return (
    <SafeAreaView style={styles.container}>
        <Animated.View style={[styles.circle,{transform: [{translateX: shakeAnimation}]}]}>
            <Image source={require("../assets/images/cup.png")} style={styles.image}/>
        </Animated.View>

      <Text style={styles.text}>Glad you made it!</Text>
    </SafeAreaView>
  )
}

export default StartScreen

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 33,
        alignItems: "center",
        justifyContent: "center"
    },
    circle:{
        height: 120,
        width: 120,
        borderRadius: 120,
        backgroundColor: '#F8F8F8',
        alignItems: "center",
        justifyContent: "center"
    },
    text:{
        marginTop: 89,
        fontFamily: "space-medium",
        fontSize: 18
    },
    image:{
        height: 60,
        width: 60
    }
})
