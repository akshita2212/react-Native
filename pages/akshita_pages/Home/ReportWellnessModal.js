import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-elements';

import options from './options'

class ReportWellnessModal extends React.Component {

  state = { 
    selectedOption: null
  }

  onSelectOption(option) {
    this.setState({ selectedOption: option });
  }

  onClose(){
    this.props.navigation.goBack();
  }

  render() {

    const { selectedOption } = this.state;

    return(
      <View style={{ flexDirection: 'row', flex: 1 }}>
        <View style={{ paddingTop: 30, flex: 1 }}>
          <TouchableOpacity 
            style={{ padding: 1, alignSelf: 'flex-end', margin: 10, borderRadius: 50, 
                      width: 25, height: 25, borderColor: '#000', borderWidth: 2}}
            onPress={()=>{ this.onClose(); }}>
            <Text style={{ color: '#000', fontWeight: 'bold', alignSelf: 'center'}}>X</Text>
          </TouchableOpacity>
          <View style={{ flexDirection: 'row', flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <View>
            <View style={{ flexDirection: 'column', justifyContent: 'space-evenly', flex: 2 }}>
            { Object.keys(options).map(key => {
              return(
                <View style={styles.rowStyle} key={'row_' + key}>
                  { options[key].options.map(option => {
                    return(
                      <TouchableOpacity key={'option_'+option.name}
                        style={styles.smileyContainer}
                        onPress={()=> { this.onSelectOption(option.name); }}>
                        <Image 
                          source={option.image} 
                          style={selectedOption === option.name ? styles.selectedImageStyle : styles.imageStyle} />
                        <Text style={{ alignSelf: 'center', marginTop: 5, 
                                      fontWeight: selectedOption === option.name ? 'bold' : '100' }}>
                          {option.name}
                        </Text>
                      </TouchableOpacity>
                    )
                  }) }
                </View>)
            })}
            </View>
            <View style={{ marginTop: 20, width: 150, alignSelf: 'center', flex: 1 }}>
              <Button 
                title="Report Wellness"
                onPress={()=>{}} />
            </View>
            </View>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  rowStyle: {
    flexDirection: 'row', 
    marginBottom: 20, 
    justifyContent: 'center'
  },
  smileyContainer: {
    width: 80, 
    height: 80, 
    margin: 10, 
    borderRadius: 100,
    alignSelf: 'center'
  },
  selectedImageStyle: {
    alignSelf: "center",
    width: 70, 
    height: 70, 
    borderRadius: 100,
    borderWidth: 5,
    borderColor: 'blue',
  },
  imageStyle: {
    alignSelf: "center",
    width: 70, 
    height: 70
  }
});

export default ReportWellnessModal;