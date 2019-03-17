import React from 'react';
import { StyleSheet, Text, View, Dimensions, Image, TouchableOpacity } from 'react-native';
import getImage from '../utils/getImage';

const { height, width } = Dimensions.get('screen');

export default class CityCard extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <TouchableOpacity style={[styles.cardImage, {marginLeft: 10, paddingHorizontal: 0, paddingVertical: 0}]} onPress={()=> {this.props.navigation.push('CityInfo', {cityImage: this.props.cityImage, cityName: this.props.city, date: this.props.date});}}>
                    <Image source={getImage(this.props.cityImage)} style={styles.cardImage} />
                    <View style={styles.textBox}>
                        <Text style={{fontSize: 14, color: 'white', fontWeight: 'bold', zIndex: 2}}>{this.props.city}</Text>
                        <Text style={{fontSize: 12, color: 'white', fontWeight: 'normal', zIndex: 2}}>{this.props.date}</Text>
                    </View>

                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    cardImage: {
        paddingHorizontal: 20,
        paddingVertical: 20,
        width: 140,
        height: 220,
        top: 1,
        borderRadius: 15,
        marginLeft: 0,
        zIndex: 1,
        shadowColor: 'black',
        shadowOffset:{  width: 0,  height: 1,  },
        shadowOpacity: 0.2,
    },
    textBox: {
        zIndex: 1,
        width: 140,
        height: 220,
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
        position: 'absolute',
        bottom: 10,
        paddingLeft: 12
    }
});