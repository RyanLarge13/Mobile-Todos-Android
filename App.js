import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput } from "react-native";
import Header from "./components/Header.jsx";
import List from "./components/List.jsx";
import Add from "./components/Add.jsx";
import Signin from "./components/Signin.jsx";
import Signup from "./components/Signup.jsx";
import React, { useState } from "react";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

const App = () => {
  const [list, setList] = useState([]);
  const [user, setUser] = useState(false);
  const [signup, setSignup] = useState(false);

  const handleAdd = (text) => {
    if (text === "") return;
    const newItem = {
      id: Math.floor(Math.random() * 26973568076536793),
      text: text,
    };
    setList((prev) => [...prev, newItem]);
  };

  const handleDelete = (item) => {
    const newList = list.filter((todo) => {
    	todo.id === item.id
    });
    return setList(newList);
  };

  return (
    <>
      <Header />
      {user ? (
        <View style={styles.fullView}>
          {list.length > 0 ? (
            <List list={list} deleteItem={(item) => handleDelete(item)} />
          ) : (
            <View style={styles.addATodo}>
              <Text style={styles.introText}>Add a Todo!</Text>
            </View>
          )}
          <Add onAdd={(text) => handleAdd(text)} />
        </View>
      ) : (
        <View style={styles.fullView}>
          {signup ? (
            <Signup onSigninPress={(bool) => setSignup(bool)} />
          ) : (
            <Signin
              onSubmit={(bool) => setUser(bool)}
              onRegisterPress={(bool) => setSignup(bool)}
            />
          )}
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  addATodo: {
    flex: 3,
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "serif",
  },
  introText: {
    fontSize: 40,
    color: "indigo",
    fontFamily: "serif",
  },
  fullView: {
    flex: 3,
  },
});

export default App;
