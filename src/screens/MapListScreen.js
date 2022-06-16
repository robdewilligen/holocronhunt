import React from 'react'
import { Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-navigation'
import Icon from 'react-native-vector-icons/Ionicons'
import { ListItem } from 'react-native-elements'

const list = [
    {
        id: '1',
        title: 'title 1',
    },
    {
        id: '2',
        title: 'title 2',
    },
    {
        id: '3',
        title: 'title 3',
    },
    {
        id: '4',
        title: 'title 4',
    },
    {
        id: '5',
        title: 'title 5',
    },
]

const MapListScreen = ({ navigation }) => {
    return(
        <>
            <SafeAreaView style={ styles.container } forceInset={{ top: 'always' }}>
                <FlatList 
                data={ list }
                keyExtractor={ item => item.id }
                renderItem={({ item }) => {
                    return(
                        <TouchableOpacity 
                        onPress={() => 
                            navigation.navigate('MapDetail', {_id: item.id})
                        }>
                            <ListItem chevron title={ item.title } />
                        </TouchableOpacity>
                    )
                }}
                />
            </SafeAreaView>
        </>
    )
}

MapListScreen.navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
        <Icon name= "ios-list" color={ tintColor } size={ 30 } />
    )
}

const styles = StyleSheet.create({
    container: {
        margin: 4,
        padding: 30,
    }
})

export default MapListScreen