import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet } from 'react-native';

import Home from './pages/Home';
import Landing from './pages/Landing';
import LoginForm from './pages/LoginForm';
import FeedBack from './pages/Feedback';
import Submission from './pages/Submission';
import Associate from './pages/Feedback/imageList'; 

const Stack = createStackNavigator();

class App extends React.Component {

  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen options={{ headerShown: false }} name="Landing" component={Landing} />
          <Stack.Screen options={{ headerShown: false }} name="Login" component={LoginForm} />
          <Stack.Screen
            options={{ headerTitleAlign: "center" }}
            style={styles.container}
            name="Tista"
            component={FeedBack} />
          <Stack.Screen options={{ headerShown: false }} name="Submission" component={Submission} />
          <Stack.Screen options={{ headerShown: false }} name="Associate" component={Associate} />

        </Stack.Navigator>
      </NavigationContainer>
    );
  }
};
const styles = StyleSheet.create({

});

export default App;
