import { StyleSheet, Text, View, Image } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'

const Splash = () => {
    const navigation = useNavigation();
    useEffect(() => {
        setTimeout(() => {
            navigation.replace('My Task')
        }, 2000);
    }, [])

    return (
        <View style={styles.body}>
            <Image style={styles.image} source={require('../../assets/download.png')} />
            <Text style={styles.header}>Todo App</Text>
        </View>
    )
}

export default Splash

const styles = StyleSheet.create({
    body: {
        flex: 1,
        alignItems: "center",
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center"
    },
    image: {
        // width: "100%",
        // height: 200,
        // justifyContent:"center",
        marginLeft: 40,
        flex: 0.42
    },
    header: {
        fontSize: 30,

    }
})