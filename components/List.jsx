import { ScrollView, View, Text, StyleSheet, FlatList } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const List = ({ list, deleteItem }) => {
  return (
    <ScrollView contentContainerStyle={style.just} style={style.view}>
      {list.map((item) => (
        <View key={item.id} style={style.item}>
          <Text style={style.text}>{item.text}</Text>
          <Icon
            name="close"
            style={style.close}
            onPress={() => deleteItem(item.id)}
          ></Icon>
        </View>
      ))}
    </ScrollView>
  );
};

const style = StyleSheet.create({
  view: {
    flex: 3,
    marginTop: 80, 
  },
  just: {
    alignItems: "center",
    justifyContent: "flex-start",
  },
  item: {
    width: "90%",
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 5,
    marginVertical: 15,
    backgroundColor: "#eee",
    elevation: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  text: {
    color: "indigo",
    paddingVertical: 15,
    fontFamily: "serif",
    fontWeight: "bold", 
    width: 250,
  },
  close: {
    fontSize: 25,
    paddingHorizontal: 5,
  },
});

export default List;
