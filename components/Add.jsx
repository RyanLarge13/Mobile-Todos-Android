import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Button,
  Pressable,
} from "react-native";
import { useState } from "react";

const Add = ({ onAdd }) => {
  const [input, setInput] = useState("");

  return (
    <View style={style.add}>
      <TextInput
        onChangeText={(text) => setInput(text)}
        style={style.input}
        defaultValue={input}
        placeHolder="Todoo"
      ></TextInput>
      <Pressable
        onPress={() => {
          onAdd(input);
          setInput("");
        }}
        style={style.button}
      >
        <Text style={style.btnText}>Add!</Text>
      </Pressable>
    </View>
  );
};

const style = StyleSheet.create({
  add: {
    flex: 1,
    backgroundColor: "#eee",
    alignItems: "center",
    justifyContent: "center",
    elevation: 10,
    borderRadius: 7.5,
  },
  input: {
    width: "90%",
    height: 50,
    backgroundColor: "#fff",
    color: "#000",
    paddingHorizontal: "5%",
    marginVertical: "5%",
    borderRadius: 10,
    elevation: 3,
    fontFamily: "serif",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 10,
    elevation: 3,
    backgroundColor: "#eee",
  },
  btnText: {
    color: "indigo",
    fontFamily: "serif"
  },
});

export default Add;
