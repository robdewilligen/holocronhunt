import React from 'react';
import MapView from 'react-native-maps'
import { StyleSheet, Dimensions, Image } from 'react-native'

const height = Dimensions.get('window').height

const response =[
    {
        id: '1',
        coordinates: {
            latitude: 51.9172,
            longitude: 4.4840,
        },
        title: 'title 1',
        desciption: 'description 1',
        icon: require('../../assets/marker.jpeg')
    },
    {
        id: '2',
        coordinates: {
            latitude: 51.9153,
            longitude: 4.5276,
        },
        title: "Hogeschool Rotterdam Kralingse Zoom",
        description: "Dit is de HR locatie op Kralingse Zoom, hier zit de business school",
        icon: require('../../assets/marker2.png')
    }
]

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
            {response.map(marker => (
                <MapView.Marker 
                key={marker.id}
                coordinate={ marker.coordinates }
                title={ marker.title }
                description={marker.description}
                >
                    <Image source={marker.icon} style={{ height:32, width:32 }}/>
                    </MapView.Marker>
            ))}

            </MapView>
    )
}

const styles = StyleSheet.create({
    map: {
        height
    }
})

export default Map