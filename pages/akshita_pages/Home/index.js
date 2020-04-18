import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  StatusBar,
  View
} from 'react-native';

import { Button } from 'react-native-elements';

  import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';


import {createStackNavigator} from '@react-navigation/stack';

const RootStack = createStackNavigator();
import ReportWellnessModal from './ReportWellnessModal';

const Main = ({ navigation }) => {
  return (
          <View style={{ flexDirection: 'row' , flex: 1 }}>
            <View style={{ flexDirection: 'column', flex: 1 }}>
              <View style={{ flexDirection: 'row', flex: 4 }}>
                <MapView
                  provider={PROVIDER_GOOGLE}
                  style={styles.map}
                  initialRegion={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                  }} />
              </View>
              <View style={{ flexDirection: 'column', flex: 2, width: 250, 
                justifyContent: 'space-evenly', alignSelf: 'center', padding: 20 }}>
                <View style={{ marginTop: 10 }}>
                  <Button 
                  title="Report Wellness"
                  onPress={()=>{
                    navigation.navigate('ReportWellnessModal')
                  }}
                  />
                </View>
                <View style={{ marginTop: 20 }}>
                  <Button title="Contact HR"/>
                </View>
                <View style={{ marginTop: 20 }}>
                  <Button title="COVID Updates"/>
                </View>
              </View>
              </View>
          </View>
  )
}

class Home extends React.Component {

  render() {
    return (
      <RootStack.Navigator mode="modal">
        <RootStack.Screen
          name="Tista"
          options={{ headerTitleAlign: "center" }}
          component={Main} />
        <RootStack.Screen 
          name="ReportWellnessModal"
          component={ReportWellnessModal}
          options={{ headerShown: false }} />
      </RootStack.Navigator>
    );
  }
};

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
    flex: 1
  },
});

export default Home;
