/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  View,
  TouchableHighlight,
  Button,
  Text,
  Alert,
  StyleSheet,
  Dimensions,
} from 'react-native';

import TouchID from 'react-native-touch-id';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

class FingerPrint extends Component {
  constructor(props) {
    super(props);
    this.state = {
      biometryType: null,
    };
  }

  componentDidMount() {
    TouchID.isSupported().then(biometryType => {
      this.setState({biometryType: biometryType});
    });
  }

  clickHandler() {
    TouchID.isSupported()
      .then(authenticate)
      .catch(error => {
        Alert.alert('TouchID not supported');
      });
  }

  render() {
    return (
      <View style={styles.containerStyles}>
        <Text style={styles.tryName}>Finger Print Unlock</Text>
        {/* <View style={styles.itemStyles} /> */}
        <View style={styles.buttonStyles}>
          <Button title="Authentication" onPress={this.clickHandler} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerStyles: {
    flexDirection: 'column',
    width: WIDTH,
  },
  tryName: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  itemStyles: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyles: {
    color: 'white',
    marginRight: 5,
  },
  buttonStyles: {
    marginTop: 10,
    marginBottom: 35,
    width: WIDTH / 2,
    alignSelf: 'center',
  },
});

function authenticate() {
  return TouchID.authenticate()
    .then(success => {
      Alert.alert('Authenticated Successfully');
    })
    .catch(error => {
      console.log(error);
      Alert.alert(error.message);
    });
}

export default FingerPrint;
