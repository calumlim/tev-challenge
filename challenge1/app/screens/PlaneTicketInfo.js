import React from 'react';
import { StyleSheet, View, Text, Dimensions, ScrollView, TouchableWithoutFeedback, TouchableOpacity, Image } from 'react-native';
import { LinearGradient } from 'expo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const { height, width } = Dimensions.get('screen');

export default class PlaneTicketInfo extends React.Component{
    render() {
        const { navigation } = this.props;
        const date = navigation.getParam('date', '-');
        const depart = navigation.getParam('depart', '-');
        const arrive = navigation.getParam('arrive', '-');
        const time = navigation.getParam('time', '-');
        return(
            <View style={styles.container}>
                <LinearGradient colors={['white', '#ecf0f1']} style={styles.containerBackground}></LinearGradient>
                <View style={styles.logo}>
                    <TouchableOpacity onPress={()=>this.props.navigation.goBack()} style={{position: 'absolute', left: width*0.07}}>
                        <Ionicons name='ios-arrow-back' size= {28} />
                    </TouchableOpacity>

                    <Text style={{fontSize: 20, fontWeight: 'bold', paddingLeft: 20}}>Flight Information</Text>
                </View>

                <ScrollView horizontal={false} vertical={true} showsVerticalScrollIndicator={false} style={{flex: 1,paddingTop: 20}}>
                    <View style={styles.container}>

                        {/* Date */}
                        <View style={styles.infoContainer}>
                            <Ionicons name='ios-calendar' size={25} color={'black'} style={styles.containerIcon}/>
                            <Text style={styles.infoContainerTitle}>Date</Text>
                            <Text style={styles.infoContainerContent}>{date}</Text>
                        </View>

                        {/* Departure & Arrival */}
                        <View style={styles.infoContainer}>
                            <MaterialIcons name='flight-takeoff' size={25} color={'black'} style={styles.containerIcon}/>
                            <Text style={styles.infoContainerTitle}>Departure & Arrival</Text>
                            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                                <Text style={styles.infoContainerContent}>{depart}</Text>
                                <Ionicons name='ios-arrow-round-forward' size={25} color={'grey'} style={{marginLeft: 15, paddingTop: 12}} />
                                <Text style={styles.infoContainerContent}>{arrive}</Text>
                            </View>
                        </View>

                        {/* Time */}
                        <View style={styles.infoContainer}>
                            <Ionicons name='ios-time' size={25} color={'black'} style={styles.containerIcon}/>
                            <Text style={styles.infoContainerTitle}>Time</Text>
                            <Text style={styles.infoContainerContent}>{time}</Text>
                        </View>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
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
    logo: {
        flexDirection: 'row',
        marginTop: 60,
        justifyContent: 'center',
        alignItems: 'center',
        width: width
    },
    infoContainer: {
        width: width*0.9,
        height: 100,
        backgroundColor: 'white',
        borderRadius: 5,
        shadowColor: 'black',
        shadowOffset:{  width: 0,  height: 2,  },
        shadowOpacity: 0.1,
        marginTop: 20,
        alignItems: 'flex-start',
        justifyContent: 'center'
    },
    infoContainerTitle: {
        fontSize: 16,
        color: 'black',
        fontWeight: 'bold',
        paddingLeft: 20,
        paddingTop: 10
    },
    infoContainerContent: {
        fontSize: 14,
        color: 'grey',
        fontWeight: 'bold',
        paddingLeft: 20,
        paddingTop: 10
    },
    containerIcon: {
        position: 'absolute',
        right: width*0.07
    }

});