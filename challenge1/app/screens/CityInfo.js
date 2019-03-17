import React from 'react';
import { StyleSheet, View, Text, Dimensions, ScrollView, TouchableOpacity, Image } from 'react-native';
import { LinearGradient } from 'expo';
import getImage from '../utils/getImage';

const { height, width } = Dimensions.get('screen');

export default class CityInfo extends React.Component {
    componentDidMount(){
        console.log("City info page loaded!");
    }
    render(){
        const { navigation } = this.props;
        const cityImage = navigation.getParam('cityImage', 'city1');
        const cityName = navigation.getParam('cityName', '-');
        const date = navigation.getParam('date', '-');
        return(
            <View style={styles.container}>
                <LinearGradient colors={['white', '#ecf0f1']} style={styles.containerBackground}></LinearGradient>
                <ScrollView>
                    <View style={styles.container}>
                        <Image source={getImage(cityImage)} style={styles.cityImage} />
                    </View>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    cityImage: {
        height: height*0.4,
        width: width,
    },

});