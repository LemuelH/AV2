import AsyncStorage from '@react-native-async-storage/async-storage'
import React, { createContext, useEffect, useState } from 'react'
const UsersContext = createContext({})

export const UsersProvider = props => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        async function loadUsers() {
            // await AsyncStorage.removeItem("users")
            const response = await AsyncStorage.getItem("users")
            if (response) {
                setUsers(JSON.parse(response))
            } else {
                setUsers([])
            }
        }
        loadUsers()
    }, [])

    async function createUser(name, email, avatarUrl) {
        const usersList = [...users]

        const newUser = {
            id: Math.random(),
            name,
            email,
            avatarUrl
        }

        usersList.push(newUser)

        setUsers(usersList)

        try {
            await AsyncStorage.setItem("users", JSON.stringify(usersList))
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <UsersContext.Provider value={{ users, createUser }}>
            {props.children}
        </UsersContext.Provider>
    )
}

export { UsersContext }