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

const SigninScreen = ({navigation}: any) => {
  const passwordRef : any = useRef();
  const emailRef : any= useRef();
  const [error, setError] = React.useState("");
    const [error_, setError_] = useState(true);
    const [hasTouchedEmail, sethasTouchedEmail] = useState(false);
    const [loading, setLoading] = useState(false);
    const [hasTouchedPassword, sethasTouchedPassword] = useState(false);
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
        <Text style={styles.text}>Welcome Back</Text>
        <Text style={styles.text1}>Log in to your account</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View>
        <Formik
         initialValues={{

             password: "",
             email: "",
        }}
        onSubmit={async (values: { password: any, email: string}) => {
            Keyboard.dismiss();

            const requestData = {

             password: values.password,
             email: values.email.toLowerCase(),

            };
            setLoading(true);

            setTimeout(() => {
              setLoading(false);
              navigation.navigate('Root')
            }, 3000);

            }}
        validationSchema={Yup.object({
            password: Yup.string()
                .required("Password is required")
                .matches(
                  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/,
                  "Minimum 8 characters, at least an uppercase letter, a lowercase letter and a number"
                ),
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
                    }}
                    onBlur={handleBlur("email")}
                    onChangeText={handleChange("email")}
                    value={values.email}
                    label="Email"
                    placeholder="Email address"
                    onSubmitEditing={() => {
                      passwordRef.current.focus();
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
                    <CustomTextInput
                    onFocus={() => {
                      sethasTouchedPassword(true);
                      setError_(false);
                    }}
                    onBlur={handleBlur("password")}
                    onChangeText={handleChange("password")}
                    value={values.password}
                    label="Password"
                    placeholder="Password"
                    onSubmitEditing={() => {
                      Keyboard.dismiss()
                    }}
                    returnKeyType="next"
                    error={errors.password && hasTouchedPassword ? true : undefined}
                    password={true}
                    ref={passwordRef}
                    pass={true}
                    stylesExtra={{marginTop: 5}}
                  />
                  {errors.password && hasTouchedPassword ? (
                  <ErrorText>{errors.password}</ErrorText>
                ) : (
                  <ErrorText> </ErrorText>
                )}
                <Text style={styles.forgot} onPress={() => {
                  navigation.navigate('ForgotPassword')
                }}>Forgot Password?</Text>
                <CustomButton
                title="Login"
                marginTop={36}
                loading={loading}
                disabled={error_ || errors.password|| errors.email || loading}
                _onPress={()=>{
                    sethasTouchedEmail(true);
                    sethasTouchedPassword(true);
                    handleSubmit();
                }}
                containerStyle={{}}

                textStyle={{color: 'white'}}
                />

                    <KeyboardAvoidingView style={{ marginTop: 64 }}>
                    <Text style={styles.info_login}>
                    Don’t have an account?{" "}
                      <Text
                        onPress={() => {
                          navigation.replace("SigninScreen");
                        }}
                        style={styles.highlighted}
                      >
                        Sign up
                      </Text>
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

export default SigninScreen

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
  color: Colors.primary,
  fontFamily: 'space-regular',
}
})
