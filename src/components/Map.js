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
            <MapView.Marker 
                coordinate={{ 
                    latitude: 51.9172,
                    longitude: 4.4840,
                }}
                title={"Hogeschool Rotterdam Wijnhaven"}
                description={"Dit is de HR locatie op wijnhaven, hier zitten onder andere Informatice, CMGT en technische informatica"}
            />

            <MapView.Marker 
                coordinate={{ 
                    latitude: 51.9153,
                    longitude: 4.5276,
                }}
                title={"Hogeschool Rotterdam Kralingse Zoom"}
                description={"Dit is de HR locatie op wijnhaven, hier zit de business school"}
            />
            </MapView>
    )
}

const styles = StyleSheet.create({
    map: {
        height
    }
})

export default Map