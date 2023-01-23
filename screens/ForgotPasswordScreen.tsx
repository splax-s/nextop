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

const ForgotPasswordScreen = ({navigation}: any) => {
  const emailRef : any= useRef();
  const [error, setError] = React.useState("");
    const [error_, setError_] = useState(true);
    const [hasTouchedEmail, sethasTouchedEmail] = useState(false);
    const [loading, setLoading] = useState(false);

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
        <Text style={styles.text}>Forgot Password?</Text>
        <Text style={styles.text1}>We’ll send a reset link to your email</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View>
        <Formik
         initialValues={{
             email: "",
        }}
        onSubmit={async (values: {email: string }) => {
            Keyboard.dismiss();

            const requestData = {
             email: values.email.toLowerCase(),
            };
            setLoading(true);

            setTimeout(() => {
              setLoading(false);
              navigation.navigate('ResetPassword')
            }, 3000);

            }}
        validationSchema={Yup.object({
            email: Yup.string()
            .email("Invalid email address")
            .required("Email is required")
            .trim(),
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
                      sethasTouchedEmail(true);
                      setError("");
                      setError_(false);
                    }}
                    onBlur={handleBlur("email")}
                    onChangeText={handleChange("email")}
                    value={values.email}
                    label="Email"
                    placeholder="Email address"
                    onSubmitEditing={() => {
                      Keyboard.dismiss()
                    }}
                    returnKeyType="next"
                    error={errors.email && hasTouchedEmail ? true : undefined}
                    password={false}
                    ref={emailRef}
                    person={true}
                    stylesExtra={{marginTop: 5}}
                  />
                  {errors.email && hasTouchedEmail ? (
                    <ErrorText>{errors.email}</ErrorText>
                  ) : (
                    <ErrorText> </ErrorText>
                  )}
                <CustomButton
                title="Send Link"
                marginTop={36}
                loading={loading}
                disabled={error_ || errors.email || loading}
                _onPress={()=>{
                    sethasTouchedEmail(true);
                    handleSubmit();
                }}
                containerStyle={{}}

                textStyle={{color: 'white'}}
                />
                </View>
            )}

        </Formik>

      </View>
      </TouchableWithoutFeedback>
      </ScrollView>
    </SafeAreaView>
  )
}

export default ForgotPasswordScreen

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
      textDecorationLine: 'underline',
    },
    forgot:{
      alignSelf: 'flex-end',
      marginTop: 10,
      color: Colors.primary
    }
})
