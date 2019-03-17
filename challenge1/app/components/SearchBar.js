import React from 'react';
import { StyleSheet, Text, View, Dimensions, TextInput } from 'react-native';

const { height, width } = Dimensions.get('screen');

export default class SearchBar extends React.Component{
    constructor(){
        super()
        this.state = { text: ''}
    }
    render(){
        return(
            <View style={styles.container}>
                <TextInput style={styles.textInput}
                    onChangeText={(text)=>this.setState({text})}
                    value={this.state.text}
                    placeholder={this.props.placeholder}
                />
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
    textInput: {
        width: width*0.9,
        height: 30,
        fontSize: 15,
        //backgroundColor: '#ecf0f1',
        borderBottomWidth: 2,
        borderBottomColor: 'grey',
        paddingLeft: 10,
        paddingBottom: 2,
        shadowColor: 'black',
        shadowOffset:{  width: 0,  height: 2,  },
        shadowOpacity: 0.1,
    }
});