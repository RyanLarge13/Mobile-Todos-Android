import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { useFonts } from "expo-font";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Header from "./components/Header.jsx";
import List from "./components/List.jsx";
import Add from "./components/Add.jsx";
import AppLoading from "expo-app-loading";

const App = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    const getAllTodos = async () => {
      try {
        const allOfYourTodos = await AsyncStorage.getAllKeys();
        const savedTodos = await AsyncStorage.multiGet(allOfYourTodos);
        savedTodos.map((item) => {
          const storedItem = {
            id: item[0],
            text: item[1],
          };
          setList((prev) => [...prev, storedItem]);
        });
      } catch (err) {
        console.log(err);
      }
    };
    getAllTodos();
  }, []);

  const handleAdd = async (text) => {
    if (text === "") return;
    const newItem = {
      id: Math.floor(Math.random() * 2697356807607531156896422678855).toString(),
      text: text,
    };
    await setStorage(newItem);
    setList((prev) => [...prev, newItem]);
  };

  const handleDelete = async (id) => {
    try {
      await AsyncStorage.removeItem(id);
      const newList = list.filter((todo) => todo.id !== id);
      setList(newList);
    } catch (err) {
      console.log(err);
    }
  };

  const setStorage = async (todo) => {
    try {
      await AsyncStorage.setItem(todo.id, todo.text);
      const savedTodo = await AsyncStorage.getItem(todo.id);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Header />
      <View style={styles.fullView}>
        {list.length > 0 ? (
          <List list={list} deleteItem={(id) => handleDelete(id)} />
        ) : (
          <View style={styles.addATodo}>
            <Text style={styles.introText}>Add a Todo!</Text>
          </View>
        )}
        <Add onAdd={(text) => handleAdd(text)} />
      </View>
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
