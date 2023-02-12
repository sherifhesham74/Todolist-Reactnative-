import React from "react";
import { View , StyleSheet , Text } from "react-native";

const Task = (props)=> { 
return (
<View style= {style.item}>
    <View style={style.itemLeft}>
        <View style={style.square}></View>
        <Text style={style.itemText}>{props.text}</Text>
    </View>
<View style={style.circular}></View>
</View>
)
}
const style =StyleSheet.create({
    item:{
        backgroundColor:"lightblue",
        padding:15,
        borderRadius: 10 ,
        flexDirection: "row",
        alignItems: "center",
        justifyContent:"space-between",
        marginBottom: 20,
    },
    itemLeft:{
        flexDirection: "row",
        alignItems: "center",
        flexWrap: "wrap",
        paddingRight: 10,
    },
    square:{
    width:24,
    height:24,
    backgroundColor:"#7fffd4",
    marginRight:15,
    opacity: 0.4,
    borderRadius: 10,
    },
    itemText:{
        maxWidth:"80%"
    },
    circular:{
        width:12,
        height:12,
        borderColor:"#008080",
        borderWidth:2,
        borderRadius:5, 
    },
})
export default Task;