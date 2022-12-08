import React, { useContext } from 'react'
import { View, FlatList, StyleSheet } from 'react-native'
import { User } from '../components/User'
import { UsersContext } from '../context/UsersContext'

export default props => {
    const { users } = useContext(UsersContext)

    function getUserItem({ item }) {
        return <User user={item} />
    }

    return (
        <View>
            <FlatList
                keyExtractor={user => `${user.id}`}
                data={users}
                renderItem={getUserItem}
            />
        </View>
    )
}