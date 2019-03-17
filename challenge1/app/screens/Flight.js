import React from 'react';
import { StyleSheet, Text, View, Dimensions, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { LinearGradient } from 'expo';

import PlaneTicket from '../components/PlaneTicket';
import CustomHeader from '../components/CustomHeader';

const { height, width } = Dimensions.get('screen');

export default class Flight extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <LinearGradient colors={['white', '#ecf0f1']} style={styles.containerBackground}></LinearGradient>
                <View style={styles.header}>
                    <CustomHeader navigation={this.props.navigation} drawerButton={true} profileButton={true}/>
                </View>
                <ScrollView horizontal={false} vertical={true} showsVerticalScrollIndicator={false} style={[styles.container, {paddingTop: 50}]}>
                    <View style={[styles.container, {paddingBottom: 140}]}>
                    <PlaneTicket date='Fri, January 18' depart='Perú - PER' arrive='France - FRA' time='16:00' navigation={this.props.navigation}/>
                        <PlaneTicket date='Mon, January 21' depart='France - FRA' arrive='Perú - PER' time='23:00' navigation={this.props.navigation}/>
                        <PlaneTicket date='Mon, February 05' depart='Kansai - KIX' arrive='France - FRA' time='23:00' navigation={this.props.navigation}/>
                        <PlaneTicket date='Fri, January 18' depart='Perú - PER' arrive='France - FRA' time='16:00' navigation={this.props.navigation}/>
                        <PlaneTicket date='Mon, January 21' depart='France - FRA' arrive='Perú - PER' time='23:00' navigation={this.props.navigation}/>
                        <PlaneTicket date='Mon, February 05' depart='Kansai - KIX' arrive='France - FRA' time='23:00' navigation={this.props.navigation}/>
                        <PlaneTicket date='Fri, January 18' depart='Perú - PER' arrive='France - FRA' time='16:00' navigation={this.props.navigation}/>
                        <PlaneTicket date='Mon, January 21' depart='France - FRA' arrive='Perú - PER' time='23:00' navigation={this.props.navigation}/>
                        <PlaneTicket date='Mon, February 05' depart='Kansai - KIX' arrive='France - FRA' time='23:00' navigation={this.props.navigation}/>
                        <PlaneTicket date='Fri, January 18' depart='Perú - PER' arrive='France - FRA' time='16:00' navigation={this.props.navigation}/>
                        <PlaneTicket date='Mon, January 21' depart='France - FRA' arrive='Perú - PER' time='23:00' navigation={this.props.navigation}/>
                        <PlaneTicket date='Mon, February 05' depart='Kansai - KIX' arrive='France - FRA' time='23:00' navigation={this.props.navigation}/>
                        <PlaneTicket date='Fri, January 18' depart='Perú - PER' arrive='France - FRA' time='16:00' navigation={this.props.navigation}/>
                        <PlaneTicket date='Mon, January 21' depart='France - FRA' arrive='Perú - PER' time='23:00' navigation={this.props.navigation}/>
                        <PlaneTicket date='Mon, February 05' depart='Kansai - KIX' arrive='France - FRA' time='23:00' navigation={this.props.navigation}/>
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
        alignItems: 'center',
        justifyContent: 'flex-start'
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
});