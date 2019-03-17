import React from 'react';
import { StyleSheet, View, Text, Dimensions, TouchableOpacity } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

const { height, width } = Dimensions.get('screen');

export default class CustomHeader extends React.Component{
    render(){
        const requireDrawerButton = this.props.drawerButton;
        const requireProfileButton = this.props.profileButton;
        const requireBackButton = this.props.backButton;
        return(
            <View style={styles.container}>
                { requireBackButton ? (
                <TouchableOpacity style={{position:'absolute', left: width*0.07, bottom: 10, marginTop: 40}} onPress={()=>this.props.navigation.goBack()}>
                    <Ionicons name='ios-arrow-back' size={30} color='black' />
                </TouchableOpacity>):null}
                { requireDrawerButton ? (
                <TouchableOpacity style={{position:'absolute', left: width*0.07, bottom: 10, marginTop: 40}} onPress={()=>this.props.navigation.openDrawer()}>
                    <MaterialIcons name='menu' size={30} color='black' />
                </TouchableOpacity>):null}
                { requireProfileButton ? (
                <TouchableOpacity style={{position:'absolute', right: width*0.07, bottom: 10, marginTop: 40}} onPress={()=> {this.props.navigation.push('Profile', {drawerButton: false, profileButton: false, backButton: true});}}>
                    <MaterialIcons name='perm-identity' size={30} color='black' />
                </TouchableOpacity>): null}
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: width,
        height: 130,
        backgroundColor: 'white'
    }
});