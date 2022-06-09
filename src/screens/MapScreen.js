import React from 'react'
import { SafeAreaView } from 'react-navigation'
import { Text, Stylesheet} from 'react-native'
import Map from '../components/Map'

const MapScreen = ({ navigation }) => {
    return(
        <SafeAreaView forceInset={{ top: 'always' }}>
            <Text style={{ fontSize: 50 }}>MapScreen</Text>
            <Map />
        </SafeAreaView>
    )
}

export default MapScreen