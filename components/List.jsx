import { View, Text, StyleSheet, FlatList } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const List = ({ list, deleteItem }) => {
  return (
    <View style={style.view}>
      {list.map((item) => (
        <View key={item.id} style={style.item}>
          <Text style={style.text}>{item.text}</Text>
          <Icon
            name="close"
            style={style.close}
            onPress={() => deleteItem(item)}
          ></Icon>
        </View>
      ))}
    </View>
  );
};

const style = StyleSheet.create({
  view: {
    flex: 3,
    justifyContent: "center",
    alignItems: "center",
  },
  item: {
    width: "90%",
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 5,
    marginVertical: 5,
    backgroundColor: "#eee",
    elevation: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  text: {
    color: "indigo",
    paddingVertical: 10,
    fontFamily: "serif"
  },
  close: {
    fontSize: 25,
  },
});

export default List;
