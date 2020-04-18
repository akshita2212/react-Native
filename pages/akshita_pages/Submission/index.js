import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Submission = () => {
    return (
        <View style={styles.header}>
            <Text style={styles.text}>
                Thank You for your feedback.

        </Text>
        </View>
    );
};
const styles = StyleSheet.create({
    text: {
        textAlign: 'center',
        justifyContent: 'center',
        marginTop: 300,
        fontWeight: '600',
        fontSize: 23,
    }


});

export default Submission;
