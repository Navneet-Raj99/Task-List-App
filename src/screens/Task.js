import { Pressable, StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native'
import React, { useContext, useState, useEffect } from 'react'
import TodoContext from '../context/TodoContext'
import { useNavigation } from '@react-navigation/native'

const navigation = useNavigation();

const Task = () => {
    useEffect(() => {
      
    
    }, [])
    
    const { tempTodo, settempTodo, addTomainArray } = useContext(TodoContext);
    return (
        <View style={styles.body}>
            <TextInput style={styles.title} placeholder='Title' name="title" onChangeText={(v) => {
                settempTodo({...tempTodo,title:v})
            }} />
            <TextInput style={styles.desc} placeholder='Description' multiline  onChangeText={(v) => {
                 settempTodo({...tempTodo,desc:v})
            }} />
            <TouchableOpacity style={styles.plus} onPress={() => {

                addTomainArray(tempTodo);
                navigation.navigate('Create Task')
                // console.log(JSON.stringify(tempTodo))
            }}>
                <Text style={{ color: "white", textAlign: "center", fontSize: 25 }}>Save Task</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.discard} onPress={() => {

            }}>
                <Text style={{ color: "white", textAlign: "center", fontSize: 25 }}>Discard</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Task

const styles = StyleSheet.create({
    plus: {
        backgroundColor: "green",
        color: "white",
        margin: 30,
        height: 50,
        justifyContent: "center",
        borderRadius: 10

    },
    discard: {
        backgroundColor: "red",
        color: "white",
        margin: 30,
        marginTop: 0,
        height: 50,
        justifyContent: "center",
        borderRadius: 10

    },
    body: {
        flex: 0.5,
        margin: 20,
        // justifyContent:"space-around"
    },
    title: {
        borderWidth: 1,
        borderColor: "grey",
        borderRadius: 10,
        marginBottom: 30,
        backgroundColor: "white",
        padding: 10,
        fontSize: 30
    },
    desc: {
        backgroundColor: "white",
        borderWidth: 1,
        borderColor: "grey",
        borderRadius: 10,
        padding: 10,
        marginBottom: 20,
        fontSize: 22

    }
})