import React from 'react'
import { SafeAreaView } from 'react-navigation'
import Icon from 'react-native-vector-icons/Ionicons'

const MapListScreen = ({ navigation }) => {
    return(
        <SafeAreaView forceInset={{ tio: 'always' }}>
            <Text style={{ fontSize: 50 }}>MapListScreen</Text>
        </SafeAreaView>
    )
}

MapListScreen.navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
        <Icon name= "ios-list" color={ tintColor } size={ 30 } />
    )
}

export default MapListScreen