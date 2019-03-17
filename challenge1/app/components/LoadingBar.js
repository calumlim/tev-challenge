import React from 'react';
import { StyleSheet, View, Text, Dimensions } from 'react-native';
import { LinearGradient } from 'expo';

const { height, width } = Dimensions.get('screen');

export default class LoadingBar extends React.Component{

    render(){
        return(
            <View style={styles.container}>
                {/* <LinearGradient colors={['white', '#ecf0f1']} style={styles.containerBackground}></LinearGradient> */}
                <View style={styles.loadingBarContainer}>
                    <View style={[styles.loadingBarColorContainer, {width: width}]}>
                    
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: width*0.8,
        height: 50
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
    loadingBarContainer: {
        width: width*0.75,
        height: 25,
        backgroundColor: '#ecf0f1',
        borderRadius: 10,
        flexDirection: 'row',
    },
    loadingBarColorContainer: {
        height: 25,
        backgroundColor: '#1abc9c',
        borderRadius: 10,
    },
});