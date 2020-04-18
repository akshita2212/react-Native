import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

class Feedback extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isSelected: false,
            selectedImage: null
        }
    };

    onSelect(reaction) {
        this.setState({ isSelected: true, selectedImage: reaction })
    }
    submit() {
        this.props.navigation.navigate('Submission', { name: 'Submission' });
    }
    render() {
        return (
            <View>
                <View style={styles.listItemView}>
                    <TouchableOpacity style={{ ...styles.imgText, backgroundColor: this.state.selectedImage === 'smiley' ? 'red' : '' }}
                        onPress={() => { this.onSelect('smiley') }}>
                        <Image
                            source={{ uri: "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/144/apple/237/smiling-face-with-smiling-eyes_1f60a.png" }}
                            style={styles.img}
                        />
                        <Text style={styles.text}>Happy</Text>

                    </TouchableOpacity>
                    <TouchableOpacity style={{ ...styles.imgText, backgroundColor: this.state.selectedImage === 'sad' ? 'red' : '' }}
                        onPress={() => { this.onSelect('sad') }}>
                        <Image
                            source={{ uri: "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/144/apple/237/white-frowning-face_2639.png" }}
                            style={styles.img}
                        />
                        <Text style={styles.text}>Sad</Text>

                    </TouchableOpacity>
                </View>
                <View style={styles.listItemView}>
                    <TouchableOpacity style={{ ...styles.imgText, backgroundColor: this.state.selectedImage === 'angry' ? 'red' : '' }}
                        onPress={() => { this.onSelect('angry') }}>
                        <Image
                            source={{ uri: "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/144/apple/237/angry-face_1f620.png" }}
                            style={styles.img}
                        />
                        <Text style={styles.text}>Angry</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ ...styles.imgText, backgroundColor: this.state.selectedImage === 'anxious' ? 'red' : '' }}
                        onPress={() => { this.onSelect('anxious') }}>
                        <Image
                            source={{ uri: "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/144/apple/237/anguished-face_1f627.png" }}
                            style={styles.img}
                        />
                        <Text style={styles.text}>Anxious</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.listItemView}>
                    <TouchableOpacity style={{ ...styles.imgText, backgroundColor: this.state.selectedImage === 'sick' ? 'red' : '' }}
                        onPress={() => { this.onSelect('sick') }}>
                        <Image
                            source={{ uri: "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/144/apple/237/face-with-medical-mask_1f637.png" }}
                            style={styles.img}
                        />
                        <Text style={styles.text}>Sick</Text>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity style={this.state.isSelected ? styles.buttonContainer : styles.buttonContainerDisabled}
                    onPress={() => { this.submit() }}
                >
                    <Text style={styles.button}>SUBMIT</Text>
                </TouchableOpacity>
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
    listItemView: {
        justifyContent: 'space-evenly',
        flexDirection: 'row',
        alignItems: 'center',
    },
    buttonContainer: {
        backgroundColor: '#2980b9',
        padding: 8,
        marginLeft: 20,
        marginRight: 20,
        marginTop: 15
    },
    buttonContainerDisabled: {
        backgroundColor: '#cccccc',
        color: '#666666',
        padding: 8,
        marginLeft: 20,
        marginRight: 20,
        marginTop: 15
    },
    button: {
        textAlign: 'center',
        color: '#FFFFFF',
        fontWeight: '700',
    },
    imgText: {
        flexDirection: 'column',
        alignItems: 'center',

    },
    text: {
        fontSize: 16,
        marginTop: -15,
        alignItems: 'center'
    }

});

export default Feedback;
