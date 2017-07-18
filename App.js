import Expo from 'expo';
import React from 'react';
import {Text,
        TouchableHighlight,
        Modal,
        StyleSheet,
        Button,
        CameraRoll,
        Image,
        Dimensions,
        ScrollView,
        RefreshControl
        } from 'react-native';
import firebase from 'firebase';
// import {Map} from './components/Map';

import Header from './src/components/ui/Header'



class App extends React.Component {
  componentDidMount() {
    const config = {
      apiKey: "AIzaSyAMnhNHY0kRxA5HmaX0RUumLfZMp3txXms",
      authDomain: "birdseed-c2ffa.firebaseapp.com",
      databaseURL: "https://birdseed-c2ffa.firebaseio.com",
      storageBucket: "birdseed-c2ffa.appspot.com"
    };
    firebase.initializeApp(config);
  }

  render() {
    return (
      <View style={styles.container}>
        <Header headerText={'Cerulean Parakeet'} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});

Expo.registerRootComponent(App);
