import React from 'react';
import { StyleSheet, Text, View, Dimensions, Image, ImageBackground, TouchableOpacity } from 'react-native';
import { Font } from 'expo';
import LoadingBar from '../components/LoadingBar';
const { height, width } = Dimensions.get('screen');

export default class Dropzone extends React.Component {

    componentDidMount(){
        console.log("Elements have mounted!");
    }

    render(){
        return(
            <View style={styles.container}>
                <ImageBackground source={require('../assets/waterfall3.jpg')} style={styles.backgroundImage}>
                    {/* <LoadingBar /> */}
                        <View style={styles.topContainer}>
                            <View style={styles.textContainer}>
                                <View style={styles.textContainerTop}>
                                    <Text style={styles.whiteTitle}>The </Text>
                                    <Text style={styles.blueTitle}>best travel </Text>
                                </View>
                                <Text style={styles.whiteTitle}>in the world</Text>
                                <View style={styles.paragraphContainer}>
                                    <Text style={styles.paragraph}>lives without limits the world is made to explore and appreciate its beauty</Text>
                                </View>
                            </View>
                    </View>
                    <View style={styles.bottomContainer}>
                    <TouchableOpacity style={styles.button} onPress={()=>this.props.navigation.replace('Homepage')}>
                        <Text style={styles.buttonText}>Explore now</Text>
                    </TouchableOpacity>
                </View>
                </ImageBackground>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    topContainer: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        bottom: height*0.25,
    },
    bottomContainer: {
        position: 'absolute',
        bottom: 50
    },
    backgroundImage: {
        position: 'absolute',
        bottom: 0,
        height: height*1,
        width: width*1,
        zIndex: 0,
        marginTop: 0,
        alignItems: 'center'
    },
    textContainer: {
        flexDirection: 'column',
        width: width*0.9
    },
    textContainerTop: {
        flexDirection: 'row',
    },
    whiteTitle: {
        zIndex: 1,
        fontSize: 37,
        color: "white",
        fontWeight: 'bold'
    },
    blueTitle: {
        zIndex: 1,
        fontSize: 37,
        color: '#00cec9',
        fontWeight: 'bold'
    },
    paragraphContainer: {
        marginTop: 10,
        width: width*0.81,
    },
    paragraph: {
        color: 'white',
        fontSize: 14
    },
    button: {
        width: width*0.9,
        height: 60,
        backgroundColor: '#00cec9',
        borderRadius: 10,
        opacity: 0.95,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        fontWeight: 'bold',
        fontSize: 20,
        color: 'white'
    }
});