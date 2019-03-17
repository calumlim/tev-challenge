import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Dropzone from './screens/Dropzone';
import Homepage from './screens/Homepage';
import PlaneTicket from './components/PlaneTicket';
import PlaneTicketInfo from './screens/PlaneTicketInfo';
import Profile from './screens/Profile';
import CityInfo from './screens/CityInfo';

const navigator = createStackNavigator({
  Dropzone: Dropzone,
  Homepage: Homepage,
  PlaneTicket: PlaneTicket,
  PlaneTicketInfo: PlaneTicketInfo,
  Profile: Profile,
  CityInfo: CityInfo,

},{
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: 'transparent',
      height: 0,
      borderBottomWidth: 0,
      marginTop: -50
    }
  }
})

export default createAppContainer(navigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
