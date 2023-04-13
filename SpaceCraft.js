import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default class Space extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.titleText}>Spacecraft Screen</Text>
            </View>
        )
    }
}

const styles=StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
    },
    titleText:{
        color: 'ffffee',
        fontSize: 12,
    }
})