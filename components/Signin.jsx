import { View, Text, TextInput, Pressable, StyleSheet } from "react-native";

const Signin = ({ onSubmit, onRegisterPress }) => {
  return (
    <View style={styles.form}>
      <Text style={styles.heading}>Sign in</Text>
      <TextInput style={styles.input} placeholder="Email"></TextInput>
      <TextInput style={styles.input} placeholder="Password"></TextInput>
      <Pressable onPress={() => onSubmit(true)} style={styles.button}>
        <Text>Signin</Text>
      </Pressable>
      <Text onPress={() => onRegisterPress(true)} style={styles.register}>
        Register
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  heading: {
    fontSize: 60,
    fontFamily: "serif",
    textAlign: "center",
    marginVertical: 75,
  },
  form: {
    flex: 3,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#eee",
  },
  input: {
    marginVertical: 20,
    elevation: 5,
    width: 300,
    height: 50,
    borderRadius: 10,
    backgroundColor: "#fff",
    paddingHorizontal: 10,
  },
  button: {
    marginVertical: 25,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 10,
    elevation: 3,
    backgroundColor: "#eee",
  },
  register: {
    textAlign: "center",
    marginVertical: 100,
  },
});

export default Signin;
