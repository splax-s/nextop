import { StyleSheet, Text, View, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import list from '../data/onBoarding'
import CustomButton from '../components/CustomButton'


const GetReadyScreen = ({navigation}: any) => {
  return (
    <SafeAreaView style={styles.container}>
        <StatusBar animated={true} style='light'/>
      <Text style={styles.text}>The best delivery</Text>
      <Text style={styles.text1}>service in BU</Text>
      <View style={styles.view}>
        {list.data.map((list) =>
            <View key={list.id.toString()} style={{flexDirection: 'row', marginTop: 36, alignItems: 'center'}}>
                <View style={styles.circle}>
                    <Image source={list.image} style={styles.image}/>
                </View>
            <Text style={styles.desc}>{list.word}</Text>
            </View>
    )}
      </View>
      <CustomButton
                title="See for yourself"
                marginTop={150}
                loading={false}
                disabled={false}
                _onPress={()=>{
                    navigation.replace('Root')
                }}
                containerStyle={{}}

                textStyle={{color: 'white'}}
                />
    </SafeAreaView>
  )
}

export default GetReadyScreen

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#000',
        paddingHorizontal: 33
      },
      textView:{
        alignText: 'center',
        justifyContent: "center",
        marginTop: 24
    },
     text:{
        fontFamily: 'space-medium',
        fontSize: 24,
        color: 'white',
        align: "left",
        marginTop: 70
     },
     text1:{
        fontFamily: 'space-medium',
        fontSize: 24,
        color: 'white',
        align: "left",
        marginTop: 5
     },
     view:{
        marginTop: 60
     },
     circle:{
        height: 50,
        width: 50,
        borderRadius: 50,
        backgroundColor: 'rgba(35, 35, 35, 1)',
        alignItems: "center",
        justifyContent: "center"
    },
    image:{
        height: 25,
        width: 25
    },
    desc:{
        color: 'white',
        marginLeft: 12,
        fontFamily: 'space-regular',
        fontSize: 16
    }
})
