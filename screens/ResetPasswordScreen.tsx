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

const ResetPasswordScreen = ({navigation}: any) => {
  const passwordRef : any = useRef();
  const confirmPasswordRef : any= useRef();
  const [error, setError] = React.useState("");
    const [error_, setError_] = useState(true);
    const [hasTouchedConfirmPassword, sethasTouchedConfirmPassword] = useState(false);
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
        <Text style={styles.text}>Reset Password</Text>
        <Text style={styles.text1}>Create a new password</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View>
        <Formik
         initialValues={{
             password: "",
             passwordConfirmation: ""
        }}
        onSubmit={async (values: { password: any, passwordConfirmation: any}) => {
            Keyboard.dismiss();

            const requestData = {
             password: values.password,
            };
            setLoading(true);

            setTimeout(() => {
              setLoading(false);
              navigation.replace('SigninScreen')
            }, 3000);

            }}
        validationSchema={Yup.object({
            password: Yup.string()
                .required("Password is required")
                .matches(
                  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/,
                  "Minimum 8 characters, at least an uppercase letter, a lowercase letter and a number"
                ),
                passwordConfirmation:Yup.string()
                .oneOf([Yup.ref('password'), null], 'Passwords must match')

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
                      sethasTouchedPassword(true);
                      setError_(false);
                    }}
                    onBlur={handleBlur("password")}
                    onChangeText={handleChange("password")}
                    value={values.password}
                    label="Password"
                    placeholder="Password"
                    onSubmitEditing={() => {
                      confirmPasswordRef.current.focus()
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
                    <CustomTextInput
                    onFocus={() => {
                      sethasTouchedConfirmPassword(true);
                      setError_(false);
                    }}
                    onBlur={handleBlur("passwordConfirmation")}
                    onChangeText={handleChange("passwordConfirmation")}
                    value={values.passwordConfirmation}
                    label="passwordConfirmation"
                    placeholder="Confirm password"
                    onSubmitEditing={() => {
                      Keyboard.dismiss()
                    }}
                    returnKeyType="next"
                    error={errors.passwordConfirmation && hasTouchedConfirmPassword ? true : undefined}
                    password={true}
                    ref={confirmPasswordRef}
                    pass={true}
                    stylesExtra={{marginTop: 5}}
                  />
                  {errors.passwordConfirmation && hasTouchedConfirmPassword ? (
                  <ErrorText>{errors.passwordConfirmation}</ErrorText>
                ) : (
                  <ErrorText> </ErrorText>
                )}
                <CustomButton
                title="Reset"
                marginTop={36}
                loading={loading}
                disabled={error_ || errors.password || errors.passwordConfirmation || loading}
                _onPress={()=>{
                    sethasTouchedConfirmPassword(true);
                    sethasTouchedPassword(true);
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

export default ResetPasswordScreen

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
