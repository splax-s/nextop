import { StyleSheet, Text, View, TouchableOpacity, Keyboard, TouchableWithoutFeedback, ScrollView, KeyboardAvoidingView } from 'react-native'
import React, { useRef, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Back from '../assets/svg/back'
import { Formik } from 'formik'
import * as Yup from 'yup'
import ErrorText from '../components/ErrorText'
import CustomButton from '../components/CustomButton'
import CustomTextInput from '../components/CustomTextInput'
import Colors from '../constants/Colors'

const OtpScreen = ({navigation, route} : any) => {
    const otpRef : any= useRef();
    const [error, setError] = React.useState("");
      const [error_, setError_] = useState(true);
      const [hasTouchedOtp, sethasTouchedOtp] = useState(false);
      const [loading, setLoading] = useState(false);

      const phone = route.params.number
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          marginTop: 25,
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Back />
        </TouchableOpacity>
      </View>
      <View style={styles.textView}>
        <Text style={styles.text}>Verify email address</Text>
        <Text style={styles.text1}>Enter the 4 digit code sent to +234{phone}</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View>
        <Formik
         initialValues={{
             otp: "",
        }}
        onSubmit={async (values: {otp: string }) => {
            Keyboard.dismiss();

            const requestData = {
             otp: values.otp.toLowerCase(),
            };
            setLoading(true);

            setTimeout(() => {
              setLoading(false);
              navigation.navigate('StartScreen')
            }, 3000);

            }}
        validationSchema={Yup.object({
            otp: Yup.string()
            .required()
            .matches(/^[0-9]+$/, "Must be only digits")
            .min(4, 'Must be exactly 4 digits')
            .max(4, 'Must be exactly 4 digits')
          })}
        >
            {({ errors, handleChange, handleBlur, handleSubmit, values } : any) => (
                <View style={{flex:1}}>
                    {error ? (
                    <ErrorText>{error}</ErrorText>
                  ) : (
                    <ErrorText> </ErrorText>
                    )}
                    <CustomTextInput
                    onFocus={() => {
                      sethasTouchedOtp(true);
                      setError("");
                      setError_(false);
                    }}
                    onBlur={handleBlur("otp")}
                    onChangeText={handleChange("otp")}
                    value={values.email}
                    label="Otp"
                    placeholder="Enter the OTP"
                    onSubmitEditing={() => {
                      Keyboard.dismiss()
                    }}
                    returnKeyType="next"
                    error={errors.email && hasTouchedOtp ? true : undefined}
                    password={false}
                    ref={otpRef}
                    person={true}
                    keypad="phone-pad"
                    stylesExtra={{marginTop: 5}}
                  />
                  {errors.email && hasTouchedOtp ? (
                    <ErrorText>{errors.otp}</ErrorText>
                  ) : (
                    <ErrorText> </ErrorText>
                  )}
                  <Text style={styles.forgot} onPress={() => {
                  navigation.goBack();
                }}>Change email</Text>
                <CustomButton
                title="Sign up"
                marginTop={282}
                loading={loading}
                disabled={error_ || errors.otp || loading}
                _onPress={()=>{
                    sethasTouchedOtp(true);
                    handleSubmit();
                }}
                containerStyle={{}}

                textStyle={{color: 'white'}}
                />

                <KeyboardAvoidingView style={{ marginTop: 24 }}>
                    <Text style={styles.info_login}>
                    By continuing you agree to our{" "}
                      <Text
                        onPress={() => {
                        //   navigation.replace("SigninScreen");
                        }}
                        style={styles.highlighted}
                      >
                        T&Cs
                      </Text>{" "}
                      and
                    </Text>
                    <Text
                        onPress={() => {
                        //   navigation.replace("SigninScreen");
                        }}
                        style={styles.highlighted1}
                      >
                        Privacy Policy
                      </Text>
                  </KeyboardAvoidingView>
                </View>
            )}

        </Formik>

      </View>
      </TouchableWithoutFeedback>
      </ScrollView>
    </SafeAreaView>
  )
}

export default OtpScreen

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 33
      },
      textView:{
        alignText: 'center',
        justifyContent: "center",
        marginTop: 24
    },
     text:{
        fontFamily: 'space-medium',
        fontSize: 20
     },
     text1:{
        fontSize: 12,
        fontFamily: 'space-regular',
        color: '#757575',
        marginTop: 8
     },
     info_login: {
      textAlign: "center",
      fontFamily: "space-regular",
      fontSize: 14,
      marginTop: "auto",
      justifyContent: "center",
      alignSelf: "center",
      color: 'rgba(4, 23, 42, 0.7)'
    },
    highlighted: {
      color: Colors.primary,
    },
    highlighted1: {
      color: Colors.primary,
      textAlign: "center",
      fontFamily: "space-regular",
      fontSize: 14,
      marginTop: "auto",
      justifyContent: "center",
      alignSelf: "center",

    },
    forgot:{
      marginTop: 10,
      color: Colors.primary,
      fontFamily: 'space-regular',
    }
})
