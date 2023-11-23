import { StyleSheet, Text, TouchableOpacity, View, ScrollView } from 'react-native'
import React, { useContext } from 'react'
import { useNavigation } from '@react-navigation/native'

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import TodoContext from '../context/TodoContext'
import { FlatList } from 'react-native-gesture-handler'

const TodoPage = () => {
    const { availableTodo } = useContext(TodoContext)
    const navigation = useNavigation();
    return (
        <View style={styles.body}>
            {/* <View style={{ borderWidth: 1, margin: 10, padding: 5, borderColor: "green", borderRadius: 5 }}>
                <Text >"(e).title"</Text>
                <Text>"(e).desc"</Text>
            </View>
            <View style={{ borderWidth: 1, margin: 10, padding: 5, borderColor: "green", borderRadius: 5 }}>
                <Text >"(e).title"</Text>
                <Text>"(e).desc"</Text>
                <TouchableOpacity style={{ backgroundColor: "red", marginLeft: "40%", marginRight: "40%" }} onPress={() => {
                    console.log("hello")
                }}><Text style={{ textAlign: "center", color: "white" }}>Delete</Text></TouchableOpacity>
            </View> */}
            {/* {availableTodo.map((e) => {
                return (<View style={{ borderWidth: 2 }}>
                    <Text>{(e).title}</Text>
                    <Text>{(e).desc}</Text>
                    <TouchableOpacity style={{ backgroundColor: "red", marginLeft: "40%", marginRight: "40%" }} onPress={() => {
                        console.log("hello")
                    }}><Text style={{ textAlign: "center", color: "white" }}>Delete</Text></TouchableOpacity>
                </View>)
            })} */}
            <FlatList
                data={availableTodo}
                renderItem={({e}) => {
                    <View style={{borderWidth: 1, margin: 10, padding: 5, borderColor: "green", borderRadius: 5 }}>
                        <Text>{(e)?.title}</Text>
                        <Text>{(e)?.desc}</Text>
                        <TouchableOpacity style={{ backgroundColor: "red", marginLeft: "40%", marginRight: "40%" }} onPress={() => {
                            console.log("hello")
                        }}><Text style={{ textAlign: "center", color: "white" }}>Delete</Text></TouchableOpacity>
                    </View>
                }} />
            <TouchableOpacity style={styles.plus} onPress={() => {
                navigation.navigate('Create Task')
            }}>

                <FontAwesome5 name={"plus"} size={20} color={"white"} />
            </TouchableOpacity>
        </View>
    )
}

export default TodoPage

const styles = StyleSheet.create({
    body: {
        flex: 1
    },

    plus: {
        width: 70,
        height: 70,
        borderRadius: 50,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "lightgreen",
        position: "absolute",
        bottom: 30,
        right: 30

    }
})