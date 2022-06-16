import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { createStackNavigator } from 'react-navigation-stack'
import MapScreen from './src/screens/MapScreen'
import MapListScreen from './src/screens/MapListScreen'
import MapDetailScreen from './src/screens/MapDetailScreen';
import { setNavigator } from './src/navigationRef'
import { Icon } from 'react-native-vector-icons/Ionicons';

const mapListFlow = createStackNavigator({
  MapList: MapListScreen,
  MapDetail: MapDetailScreen
})

mapListFlow.navigationOptions = {
  tabBarIcon: ({ tintColor }) => (
    <Icon name="ios-list" color={ tintColor } size={ 30 } />
  )
}

const switchNavigator = createSwitchNavigator({
  mainFlow: createMaterialBottomTabNavigator({
    MapView: MapScreen,
    mapListFlow
  }, {
    tabBarOptions: {
      showLabel: false,
      activeTintColor: '#3D8839'
    }
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
