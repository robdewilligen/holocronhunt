import React from 'react';
import MapView from 'react-native-maps'
import { StyleSheet, Dimensions } from 'react-native'

const height = Dimensions.get('window').height
const Map = () => {
    return (
        <MapView
            style={ styles.map }
            loadingEnabled={true}
            region={{ 
                latitude: 51.9244,
                longitude: 4.4777,
                latitudeDelta: 0.5,
                longitudeDelta: 0.5
            }}
        >

        </MapView>
    )
}

const styles = StyleSheet.create({
    map: {
        height
    }
})

export default Map