import React from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity, TouchableWithoutFeedback, ScrollView } from 'react-native';
import { LinearGradient } from 'expo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import CustomHeader from '../components/CustomHeader';

const { height, width } = Dimensions.get('screen');

export default class Profile extends React.Component{
    
    render(){
        const { navigation } = this.props;
        const requireDrawerButton = navigation.getParam('drawerButton', true);
        const requireProfileButton = navigation.getParam('profileButton', false);
        const requireBackButton = navigation.getParam('backButton', false)
        return(

            <View style={StyleSheet.container}>
                <LinearGradient colors={['white', '#ecf0f1']} style={styles.containerBackground}></LinearGradient>
                <View style={styles.header}>
                    <CustomHeader navigation={this.props.navigation} drawerButton={requireDrawerButton} profileButton={requireProfileButton} backButton={requireBackButton}/>
                </View>
                
                <ScrollView style={{paddingTop: 50}}>
                    <View style={styles.bodyContainer}>
                        <MaterialIcons name='person-outline' size={100} color={'grey'} />
                        <Text style={styles.profileName}>Iqbal Hanif</Text>
                        <Text style={styles.profileDesc}>Apa lagi cina mau?</Text>
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
        alignItems: 'center',
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
    header: {
        zIndex: 2,
        flexDirection: 'row',
        alignItems: 'center',
        width: width,
        backgroundColor: 'white',
        height: 50,
        marginTop: 0,
    },
    bodyContainer: {
        zIndex:2,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    profileName: {
        fontSize: 20,
        color: 'grey',
        fontWeight: 'bold',
    },
    profileDesc: {
        fontSize: 17,
        color: 'grey'
    },
});