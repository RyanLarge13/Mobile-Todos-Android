import { View, Text, TextInput, Pressable, StyleSheet } from "react-native";

const Signup = ({ onSigninPress }) => {
  return (
    <View style={styles.form}>
      <Text style={styles.heading}>Register</Text>
      <TextInput style={styles.input} placeholder="Username"></TextInput>
      <TextInput style={styles.input} placeholder="Email"></TextInput>
      <TextInput style={styles.input} placeholder="Password"></TextInput>
      <Pressable style={styles.button}>
        <Text>Finish</Text>
      </Pressable>
      <Text onPress={() => onSigninPress(false)} style={styles.signin}>
        Signin
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  heading: {
    fontSize: 60,
    fontFamily: "serif",
    textAlign: "center",
    marginVertical: 50,
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
  signin: {
    textAlign: "center",
    marginVertical: 100,
  },
});

export default Signup;
