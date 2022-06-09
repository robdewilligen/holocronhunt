import React from 'react'
import { SafeAreaView } from 'react-navigation'
import { Text, Stylesheet} from 'react-native'

const MapListScreen = ({ navigation }) => {
    return(
        <SafeAreaView forceInset={{ tio: 'always' }}>
            <Text style={{ fontSize: 50 }}>MapListScreen</Text>
        </SafeAreaView>
    )
}

export default MapListScreen