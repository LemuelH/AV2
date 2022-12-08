import React, { useState, useContext } from 'react'
import { Text, View, TextInput, StyleSheet, Button } from 'react-native'
import { UsersContext } from '../context/UsersContext'

const uriExemplo = "https://cdn.pixabay.com/photo/2016/11/18/23/38/child-1837375_960_720.png"

export default ({ navigation }) => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [avatarUrl, setAvatarUrl] = useState(uriExemplo)
    const { createUser } = useContext(UsersContext)

    function saveUser() {
        createUser(name, email, avatarUrl)
        navigation.navigate("UserList")
    }

    return (
        <View style={style.form}>
            <Text>Nome</Text>
            <TextInput
                style={style.input}
                onChangeText={name => setName(name)}
                placeholder="Informe o Nome"
                value={name}
            />
            <Text>Email</Text>
            <TextInput
                style={style.input}
                onChangeText={email => setEmail(email)}
                placeholder="Informe o E-mail"
                value={email}
            />
            <Text>URL do Avatar</Text>
            <TextInput
                style={style.input}
                onChangeText={avatarUrl => setAvatarUrl(avatarUrl)}
                placeholder="Informe a URL do Avatar"
                value={avatarUrl}
            />
            <Button
                title="Salvar"
                onPress={saveUser}
            />
        </View>
    )
}

const style = StyleSheet.create({
    form: {
        padding: 12
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 15,
    }
})