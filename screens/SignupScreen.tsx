import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Keyboard, TouchableWithoutFeedback, KeyboardAvoidingView } from 'react-native'
import React, { useRef, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Back from '../assets/svg/back'
import * as Yup from 'yup'
import {Formik} from 'formik'
import ErrorText from '../components/ErrorText'
import CustomTextInput from '../components/CustomTextInput'
import CustomButton from '../components/CustomButton'
import Colors from '../constants/Colors'

const SignupScreen = ({navigation}: any) => {
  const passwordRef : any = useRef();
    const nameRef : any= useRef();
    const phoneRef : any= useRef();
    const emailRef : any= useRef();
    const refCodeRef: any= useRef();
    const [loading, setLoading] = useState(false);
    const [hasTouchedPassword, sethasTouchedPassword] = useState(false);
    const [hasTouchedName, sethasTouchedName] = useState(false);
    const [hasTouchedTel, sethasTouchedTel] = useState(false);
    const [hasTouchedEmail, sethasTouchedEmail] = useState(false);
    const [hasTouchedRef, sethasTouchedRef] = useState(false);
    const [error, setError] = React.useState("");
    const [error_, setError_] = useState(true);

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
        <Text style={styles.text}>Create an account</Text>
        <Text style={styles.text1}>Lorem ipsum because i don’t know what to add</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View>
        <Formik
         initialValues={{
            phonenumber: "",
             name: "",
             password: "",
             email: "",
             ref: ""
        }}
        onSubmit={async (values: { phonenumber: any; name: string; password: any, email: string; ref: string }) => {
            Keyboard.dismiss();

            const requestData = {
              phonenumber: values.phonenumber,
              name: values.name.toLowerCase(),
             password: values.password,
             email: values.email.toLowerCase(),
             ref: values.ref.toLowerCase()
            };
            setLoading(true);

            setTimeout(() => {
              setLoading(false);
              navigation.navigate('OtpScreen', { number: requestData.phonenumber })
            }, 3000);

            }}
        validationSchema={Yup.object({
            password: Yup.string()
                .required("Password is required")
                .matches(
                  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/,
                  "Minimum 8 characters, at least an uppercase letter, a lowercase letter and a number"
                ),
            phonenumber: Yup.number()
                  .required("Phone number is required")
                  .typeError("Invalid phone number")

                  .positive("A phone number can't start with a minus")
                  .integer("A phone number can't include a decimal point")
                  .moreThan(999999999, "Invalid phone number"),
            name: Yup.string()
              .trim()
              .required("Full name is required"),
            email: Yup.string()
            .email("Invalid email address")
            .required("Email is required")
            .trim(),
            ref:Yup.string()
            .trim()

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
                      sethasTouchedName(true);
                      setError("");
                    }}
                    onBlur={handleBlur("name")}
                    onChangeText={handleChange("name")}
                    value={values.name}
                    label="Name"
                    placeholder="First & Last name"
                    onSubmitEditing={() => {
                      emailRef.current.focus();
                    }}
                    returnKeyType="next"
                    error={errors.name && hasTouchedName ? true : undefined}
                    password={false}
                    ref={nameRef}
                    person={true}
                    stylesExtra={{marginTop: 5}}
                  />
                  {errors.name && hasTouchedName ? (
                    <ErrorText>{errors.name}</ErrorText>
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
                      phoneRef.current.focus();
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
                      sethasTouchedTel(true);
                      setError("");
                    }}
                    onBlur={handleBlur("phonenumber")}
                    onChangeText={handleChange("phonenumber")}
                    value={values.phonenumber}
                    label="Phone number"
                    placeholder="Phone number"
                    onSubmitEditing={() => {
                      passwordRef.current.focus();
                    }}
                    returnKeyType="next"
                    error={errors.phonenumber && hasTouchedTel ? true : undefined}
                    password={false}
                    ref={phoneRef}
                    keypad="phone-pad"
                    phone={false}
                    stylesExtra={{marginTop: 5}}
                  />
                  {errors.phonenumber && hasTouchedTel ? (
                    <ErrorText>{errors.phonenumber}</ErrorText>
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
                      refCodeRef.current.focus();
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
                      sethasTouchedRef(true);
                      setError("");
                    }}
                    onBlur={handleBlur("ref")}
                    onChangeText={handleChange("ref")}
                    value={values.ref}
                    label="Referral Code (optional)"
                    placeholder="Referral Code (optional)"
                    onSubmitEditing={() => {
                      Keyboard.dismiss()
                    }}
                    returnKeyType="next"
                    error={errors.ref && hasTouchedRef ? true : undefined}
                    password={false}
                    ref={refCodeRef}
                    keypad="phone-pad"
                    phone={true}
                    stylesExtra={{marginTop: 5}}
                  />
                  {errors.ref && hasTouchedRef ? (
                    <ErrorText>{errors.ref}</ErrorText>
                  ) : (
                    <ErrorText> </ErrorText>
                  )}
                <CustomButton
                title="Next"
                marginTop={56}
                loading={loading}
                disabled={error_ || errors.name || errors.password || errors.phonenumber || errors.email || errors.ref || loading}
                _onPress={()=>{
                    sethasTouchedName(true);
                    sethasTouchedPassword(true);
                    sethasTouchedEmail(true)
                    sethasTouchedTel(true)
                    handleSubmit();
                }}
                containerStyle={{}}

                textStyle={{color: 'white'}}
                />

                    <KeyboardAvoidingView style={{ marginTop: 115 }}>
                    <Text style={styles.info_login}>
                      Already registered ?{" "}
                      <Text
                        onPress={() => {
                          navigation.replace("SigninScreen");
                        }}
                        style={styles.highlighted}
                      >
                        Log In
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

export default SignupScreen

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
})
