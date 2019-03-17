import React from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
const { height, width } = Dimensions.get('screen');

export default class PlaneTicket extends React.Component{
    render() {
        return(
            <View style={styles.container}>
            <TouchableOpacity style={styles.container} onPress={()=> {this.props.navigation.push('PlaneTicketInfo', {date: this.props.date, depart: this.props.depart, arrive: this.props.arrive, time: this.props.time});}}>
                <View style={styles.planeIconContainer}>
                    <Icon name='ios-airplane' size={25} color={'#00cec9'} />
                </View>

                <View style={styles.ticketPaperContainer}>
                    <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 10}}>
                        <Icon name='ios-calendar' size={18} color={'#00cec9'} style={{paddingRight: 15}}/>
                        <Text style={{fontSize: 12, color: 'grey'}}>{this.props.date}</Text>
                    </View>
                    <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                        <Text style={{fontSize: 14, color: 'black', fontWeight: 'bold'}}>{this.props.depart}</Text>
                        <Icon name='ios-arrow-round-forward' size={20} color={'#00cec9'} style={{paddingHorizontal: 15}}/>
                        <Text style={{fontSize: 14, color: 'black', fontWeight: 'bold'}}>{this.props.arrive}</Text>
                    </View>
                    <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginBottom: 10}}>
                        <Icon name='ios-time' size={18} color={'#00cec9'} style={{paddingRight: 15}}/>
                        <Text style={{fontSize: 13, color: 'grey'}}>{this.props.time}</Text>
                    </View>
                </View>
            </TouchableOpacity>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    planeIconContainer: {
        width: width*0.2,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1,
        borderRadius: 5,
        backgroundColor: 'white',
        marginTop: 20,
        shadowColor: 'black',
        shadowOffset:{  width: 0,  height: 2,  },
        shadowOpacity: 0.1,
    },
    ticketPaperContainer: {
        width: width*0.64,
        height: 100,
        justifyContent: 'space-evenly',
        alignItems: 'flex-start',
        paddingLeft: 20,
        zIndex: 1,
        borderRadius: 5,
        backgroundColor: 'white',
        marginTop: 20,
        marginLeft: 3,
        shadowColor: 'black',
        shadowOffset:{  width: 0,  height: 2,  },
        shadowOpacity: 0.1,
    }
});