import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class Associate extends React.Component {
    render() {
        return (
            <View style={styles.menuItem}>
                <Text>Associate</Text>
            </View>
        );

    }

};

const styles = StyleSheet.create({
    img: {
        width: 150,
        height: 150,
        borderRadius: 150 / 2,
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 10
    },
    menuItem: {
        justifyContent: 'space-evenly',
        flexDirection: 'row',
        alignItems: 'center',
    }
});

