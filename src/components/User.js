import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Avatar, ListItem } from "react-native-elements";


export function User({ user }) {
    return (
        <View style={style.container}>
            <Avatar rounded source={{ uri: user.avatarUrl }} />
            <View style={style.userInfo}>
                <Text>{user.name}</Text>
                <Text>{user.email}</Text>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flexDirection: 'row',
        textAlign: 'center',
        padding: 10
    },
    userInfo: {
        marginLeft: 10
    }
})