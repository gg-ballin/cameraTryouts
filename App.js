/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  Dimensions,
  ScrollView,
} from 'react-native';
import ImagePicker from './src/cameraTryouts/imagePicker';
import FingerPrint from './src/fingerPrint/fingerPrint';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;
export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.father}>
        <ScrollView>
          <View style={styles.child_1}>
            <ImagePicker />
          </View>
          <View style={{margin: 10}} />
          <View style={styles.child_2}>
            <FingerPrint />
          </View>
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  father: {
    flex: 1,
    height: HEIGHT,
    flexDirection: 'column',
    backgroundColor: '#252525',
    alignItems: 'center',
    justifyContent: 'center',
  },
  child_1: {
    width: WIDTH,
    borderWidth: 3,
    borderColor: 'red',
    backgroundColor: '#252525',
    alignItems: 'center',
    justifyContent: 'center',
  },
  child_2: {
    width: WIDTH,
    borderWidth: 3,
    borderColor: 'red',
    backgroundColor: '#252525',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
