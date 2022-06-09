import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import MapScreen from './src/screens/MapScreen'
import MapListScreen from './src/screens/MapListScreen'
import { setNavigator } from './src/navigationRef'

const switchNavigator = createSwitchNavigator({
  mainFlow: createMaterialBottomTabNavigator({
    MapView: MapScreen,
    MapList: MapListScreen
  })
})

const App = createAppContainer(switchNavigator)

export default () => {
  return (
    <App 
      ref={navigator=> {
        setNavigator(navigator)
      }}
    />
  );
}
