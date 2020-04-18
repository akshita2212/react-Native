import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

class Landing extends React.Component {

  componentDidMount() {
    setTimeout(()=> {
      this.props.navigation.reset({
        index: 0,
        routes: [{ name: 'Login' }],
      });
    }, 2000)
  }

  render() {
    return (
      <>
        <StatusBar barStyle="light-content" />
        <SafeAreaView>
          <ScrollView
            contentInsetAdjustmentBehavior="automatic">
            <View>
              <Text>Please Wait...</Text>
            </View>
          </ScrollView>
        </SafeAreaView>
      </>

    );
  }
};

const styles = StyleSheet.create({
  
});

export default Landing;
