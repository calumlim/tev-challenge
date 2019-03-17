import React from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo';
import Icon from 'react-native-vector-icons/MaterialIcons';
import CustomHeader from '../components/CustomHeader';

const { height, width } = Dimensions.get('screen');

export default class Camera extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <LinearGradient colors={['white', '#ecf0f1']} style={styles.containerBackground}></LinearGradient>
                <View style={styles.header}>
                    <CustomHeader navigation={this.props.navigation} drawerButton={true} profileButton={true}/>
                </View>
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