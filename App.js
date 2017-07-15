import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Header } from 'react-native-elements';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header
          leftComponent={{ icon: 'menu', color: '#ccc' }}
          centerComponent={{ text: 'Parakeet', style: { color: '#ccc' } }} 
          rightComponent={{ icon: 'home', color: '#ccc' }}
        />

        <Button
          raised
          icon={{name: 'home', size: 32}}
          buttonStyle={{backgroundColor: 'red', borderRadius: 10}}
          textStyle={{textAlign: 'center'}}
          title={`Push Me`}          
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
