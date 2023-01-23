import { Feather } from "@expo/vector-icons";
import React, { useRef, useState } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { AntDesign } from '@expo/vector-icons';
import Colors from "../constants/Colors";
import { TextInput } from "react-native-paper";

type Props = {
    style?: object,
    onLayout?: (event: any) => void,
    onChangeText: (text: string) => void,
    onBlur?: (event: any) => void,
    value: string,
    placeholder: string,
    label: string,
    error?: boolean,
    onSubmitEditing?: (event: any) => void,
    returnKeyType?: "done" | "go" | "next" | "search" | "send",
    password?: boolean,
    onPressIn?: (event: any) => void,
    onFocus?: (event: any) => void,
    keypad?: "default" | "numeric" | "email-address" | "phone-pad",
    defaultValue?: string,
    tapFunction?: () => void,
    editable?: boolean,
    dropdown?: boolean,
    contact?: boolean,
    person?: boolean,
    phone?: boolean,
    pass?: boolean,
    search?: boolean,
    stylesExtra?: object,
    verify?: boolean,
    splax?: object,
    email?: boolean,
    max?: number,
    ref: any
}

const CustomTextInput = React.forwardRef(
  (props: Props, ref : any) => {
    const [showPassword, setShowPassword] = useState(!props.password);

    return (
      <TouchableWithoutFeedback
        onPress={() => {
          ref.current.focus();
          props.tapFunction?.();
        }}
      >
        <View style={[props.stylesExtra]}>
        <View
        onLayout = {props.onLayout}
          style={[
            {
              backgroundColor: "white",
              flexDirection: "row",
              alignItems: "center",
            },
            props.style,
          ]}
        >

          <View style={{ justifyContent: "center", width: "100%", flexDirection: 'row' , }}>

            <TouchableOpacity
              onPress={props.tapFunction}
              style={{ marginLeft: 0}}
            >
               </TouchableOpacity>
            <TextInput
              onPressIn={props.onPressIn}
              onFocus={props.onFocus}
              blurOnSubmit={false}
              editable={props.editable}

              secureTextEntry={!showPassword}
              style={[
                styles.text,
                { color: props.editable ? "black" : 'black' },
                ]}
                placeholder={props.placeholder}
                placeholderTextColor={"rgba(117, 117, 117, 1)"}
                keyboardType={props.keypad}
                onChangeText={props.onChangeText}
                selectionColor={Colors.primary}
                onBlur={props.onBlur}
                maxLength = {props.max}
                value={props.value}
                returnKeyType={props.returnKeyType}
                onSubmitEditing={props.onSubmitEditing}
                ref={ref}
                underlineColor={props.error === undefined ? "rgba(241, 241, 241, 1)" : Colors.warning}
                activeUnderlineColor={props.error === undefined ? "rgba(241, 241, 241, 1)" : Colors.warning}
                defaultValue={props.defaultValue}
                outlineColor={"white"}
                activeOutlineColor={"white"}
                contentStyle={{
                  backgroundColor: "white"
                }}
                underlineStyle={{
                  height: 2
                }}
                outlineStyle={{
                  height: 3
                }}
                textColor="black"
                />
                </View>
                <TouchableOpacity
                onPress={props.tapFunction}
                style={{ marginLeft: "auto" }}
                >
                { props.contact ? ( <AntDesign name="contacts" size={24} color={Colors.outline}/>
                ) : (
                null
                )}
                {props.dropdown ? (
            <Feather name="chevron-down" size={24} color={Colors.outline} />
          ) : (
            null
          )}
           </TouchableOpacity>
      {props.password ? (
        <TouchableOpacity
          onPress={() => {
            setShowPassword(!showPassword);
          }}
          style={{ marginLeft: "auto" }}
        >
          {showPassword ? (
            <Feather name="eye" size={22} color={Colors.outline} />
          ) : (
            <Feather name="eye-off" size={22} color={Colors.outline} />
          )}


        </TouchableOpacity>
      ) : null}
    </View>
    </View>
    </TouchableWithoutFeedback>
);
}
);

const styles = StyleSheet.create({
  label: {
    color: 'black',
    fontSize: 14,
    fontFamily: "space-regular",
    padding: 0,
    margin: 0,
    marginBottom: 10,
    marginLeft: 5,
    justifyContent: "center"
  },

  placeholder: {},

  text: {
    width: "100%",
    borderWidth: 0,
    borderRadius: 50,
    fontSize: 15,
    fontFamily: "space-regular",
    marginLeft: -32,
    color: 'black'
  },
});

export default CustomTextInput;
