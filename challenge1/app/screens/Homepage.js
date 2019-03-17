import React, {Component} from 'react';
import { StyleSheet, Text, View, Dimensions, Header, TouchableWithoutFeedback, TouchableOpacity, ScrollView, Image } from 'react-native';
import { createBottomTabNavigator, createAppContainer, createDrawerNavigator, NavigationActions, SafeAreaView, DrawerItems, createStackNavigator } from 'react-navigation';
import { Font, LinearGradient } from 'expo';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Flight from './Flight';
import Camera from './Camera';
import Search from './Search';
import Profile from './Profile';
import PlaneTicketInfo from './PlaneTicketInfo';
import CityInfo from './CityInfo';

import PlaneTicket from '../components/PlaneTicket';
import CityCard from '../components/CityCard';
import CustomHeader from '../components/CustomHeader';

const { height, width } = Dimensions.get('screen');

class Homepage extends React.Component {
    componentDidMount(){
        console.log("Elements have mounted!");
    }

    createTable = () => {
        let table = []
        let children = []
        children.push(<CityCard cityImage='city1' city='Karersee' date='Jan 18, 2018'/>)
        //Create the parent and add the children
        table.push(<View>{children}</View>)
        return table
      }

    render(){
        return(
            <View style={styles.container}>

                <View style={styles.header}>
                    <CustomHeader navigation={this.props.navigation} drawerButton={true} profileButton={true}/>
                </View>

                <LinearGradient colors={['white', '#ecf0f1']} style={styles.containerBackground}></LinearGradient>
                <ScrollView horizontal={false} vertical={true} showsVerticalScrollIndicator={false} style={{marginTop:-70}}>
                    <View style={styles.citiesBody}>
                        <Text style={{marginTop:130, marginLeft: width*0.07, fontWeight: 'bold', fontSize: 27}}>My travel</Text>
                        <View style={{flexDirection: 'row', width: width*0.9}}>
                            <Text style={{marginTop:8, marginLeft: width*0.07, fontSize: 13, color: 'grey'}}>Travels in the last month</Text>
                            <TouchableOpacity style={{right: -7, marginTop: 8, position: 'absolute'}}>
                                <Text style={{color: '#00cec9', fontWeight: 'bold', fontSize: 13}}>View all</Text>
                            </TouchableOpacity>
                        </View>
                        <ScrollView horizontal={true} vertical={false} showsHorizontalScrollIndicator={false}>
                            <View style={styles.citiesContainer}>
                                <View style={styles.citiesView}>
                                    <CityCard  cityImage='city1' city='Karersee' date='Jan 18, 2018'/>
                                    <CityCard  cityImage='city2' city='Rio de Janeiro' date='Dec 23, 2018'/>
                                    <CityCard  cityImage='city3' city='Boracay' date='May 22, 2018'/>
                                    <CityCard  cityImage='city1' city='Karersee' date='Jan 18, 2018'/>
                                    <CityCard  cityImage='city2' city='Rio de Janeiro' date='Dec 23, 2018'/>
                                    <CityCard  cityImage='city3' city='Boracay' date='May 22, 2018'/>
                                    <CityCard  cityImage='city1' city='Karersee' date='Jan 18, 2018'/>
                                    <CityCard  cityImage='city2' city='Rio de Janeiro' date='Dec 23, 2018'/>
                                    <CityCard  cityImage='city3' city='Boracay' date='May 22, 2018'/>
                                    <CityCard  cityImage='city1' city='Karersee' date='Jan 18, 2018'/>
                                    <CityCard  cityImage='city2' city='Rio de Janeiro' date='Dec 23, 2018'/>
                                    <CityCard  cityImage='city3' city='Boracay' date='May 22, 2018'/>
                                </View>
                            </View>
                        </ScrollView>
                    </View>
                    
                    <View style={styles.ticketContainer}>
                        <Text style={{marginTop: 8, marginLeft: width*0.07, fontWeight: 'bold', fontSize: 27}}>Destinations</Text>
                        <View style={{flexDirection: 'row', width:width*0.90}}>
                            <Text style={{marginTop:8, marginLeft: width*0.07, fontSize: 13, color: 'grey'}}>Destinations in the last month</Text>
                            <TouchableOpacity style={{right: -7, marginTop: 8, position: 'absolute', flexDirection: 'row'}}>
                                <Text style={{color: '#00cec9', fontWeight: 'bold', fontSize: 13}}>January 2019</Text>
                                <Icon name='keyboard-arrow-down' size={15} color={'#00cec9'} style={{marginTop: 1, marginLeft: 3}}/>
                            </TouchableOpacity>
                        </View>

                        <PlaneTicket date='Fri, January 18' depart='Perú - PER' arrive='France - FRA' time='16:00' />
                        <PlaneTicket date='Mon, January 21' depart='France - FRA' arrive='Perú - PER' time='23:00' />
                        <PlaneTicket date='Mon, February 05' depart='Kansai - KIX' arrive='France - FRA' time='23:00' />

                    </View>
                </ScrollView>
            </View>
        );
    }
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        zIndex: 0,
    },
    containerBackground: {
        position: 'absolute',
        zIndex: 0,
        height: height*1,
        width: width,
        top: 1,
        marginTop: 0,
        alignItems: 'flex-start',
    },
    cityBody: {
        alignItems: 'center',
        zIndex: 0,
        marginTop: 0,
    },
    citiesContainer: {
        marginTop: 5,
        marginLeft: width*0.05,
        marginRight: width*0.07,
        
    },
    citiesView: {
        height: 240,
        flexDirection: 'row',
        marginTop: 12
    },
    header: {
        zIndex: 2,
        flexDirection: 'row',
        alignItems: 'center',
        width: width,
        backgroundColor: 'white',
        height: 50,
        marginTop: 0,
    },
    cityCard: {
        paddingHorizontal: 20,
        paddingVertical: 20,
        width: 140,
        height: 235,
        top: 1,
        borderRadius: 10,
        marginLeft: 10
    },
    cardTextContainer: {
        zIndex: 2,
        flexDirection: 'row',
        bottom: 24
    },
    cardText: {
        width: 140,
        zIndex: 2,
        paddingHorizontal: 20,
        paddingVertical: 20,
        marginLeft: 10,
        color: 'white',
        fontSize: 14,
        fontWeight: 'bold'
    },
    cardTextSmall: {
        width: 140,
        zIndex: 2,
        paddingHorizontal: 20,
        marginLeft: 10,
        color: 'white',
        fontSize: 10,
        fontWeight: 'bold'
    },
    ticketContainer: {
        width: width,
        zIndex: 0,
        marginBottom: 0,
        borderWidth: 0,
        paddingBottom: 40,
        marginTop: 10
    },
    ticketPaperContainer: {
        width: width*0.85,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1,
        borderRadius: 5,
        marginLeft: width*0.07,
        backgroundColor: 'white',
        marginTop: 20,
        shadowColor: 'black',
        shadowOffset:{  width: 0,  height: 2,  },
        shadowOpacity: 0.1,
    },
    drawerText: {
        color: 'white',
        fontSize: 17,
        left: 1,
        marginLeft: 30,
        fontWeight: 'bold',
        paddingVertical: 8
    },
    drawerLogo: {
        left: 0,
        height: 80,
        width: width*0.5,
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: '#16a085'
    }
});

const HomeStack = createStackNavigator({
    Homepage: Homepage,
    PlaneTicketInfo: PlaneTicketInfo,
    CityInfo: CityInfo,
});

const FlightStack = createStackNavigator({
    Flight: Flight,
    PlaneTicketInfo: PlaneTicketInfo,
});

const CameraStack = createStackNavigator({
    Camera: Camera,
});

const SearchStack = createStackNavigator({
    Search: Search,
});

const bottomNavigator = createBottomTabNavigator({
    Home: {
        screen: HomeStack,
        navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
            <Icon name="home" color={tintColor} size={24} />
            )
        }
    },
    Flights: {
        screen: FlightStack,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => (
                <Icon name="flight" color={tintColor} size={24} />
                )
            }
    },
    Camera: {
        screen: CameraStack,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => (
                <Icon name="camera-alt" color={tintColor} size={24} />
                )
            }
    },
    Search: {
        screen: SearchStack,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => (
                    <Icon name="location-city" color={tintColor} size={24} />
                )
            }
    },
},{
    tabBarOptions:{
        showLabel: false,
        activeTintColor: '#00cec9', // active icon color
        inactiveTintColor: '#bdc3c7',  // inactive icon color
        style: {
            borderTopColor: 'transparent',
            height: 60
        },
    },
});
const MyDrawerNavigator = createDrawerNavigator({
    Home: {
      screen: bottomNavigator,
    },
    Profile: {
        screen: Profile,
    }
  },{
    contentComponent:(props) => (
        <View style={{flex:1}}>
            <SafeAreaView forceInset={{ top: 'always', horizontal: 'never' }}>
                <View style={styles.drawerLogo}>
                    <Icon name="flight" color={'white'} size={25} style={{marginLeft: 30}}/>
                    <Text style={{fontSize: 20, fontWeight: 'bold', paddingLeft: 5, color: 'white'}}>Flight</Text>
                </View>
                <DrawerItems {...props} />
                <TouchableOpacity onPress={()=>props.navigation.reset([NavigationActions.navigate({ routeName: 'Dropzone' })], 0)}>
                  <Text style={styles.drawerText}>Logout</Text>
                </TouchableOpacity>
            </SafeAreaView>
        </View>
    ),
    contentOptions: {
      labelStyle: {
        color: 'white',
        fontSize: 17,
        left: 1,
        marginLeft: 30,
      }
    },
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle',
    drawerWidth: Math.min(height, width) * 0.5,
    drawerBackgroundColor: '#16a085',
    drawerType: 'front',
  });

export default createAppContainer(MyDrawerNavigator);