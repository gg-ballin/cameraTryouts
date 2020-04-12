/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  Image,
  View,
  Button,
  Text,
  Alert,
  StyleSheet,
  Dimensions,
} from 'react-native';

import ImagePickerRN from 'react-native-image-picker';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

class ImagePicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filePath: {},
    };
  }

  chooseFile = () => {
    var options = {
      title: 'Select Image',
      customButtons: [
        {name: 'customOptionKey', title: 'Choose Photo from Custom Option'},
      ],
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePickerRN.showImagePicker(options, response => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
        Alert.alert(response.customButton);
      } else {
        let source = response;
        // You can also display the image using data:
        // let source = { uri: 'data:image/jpeg;base64,' + response.data };
        this.setState({
          filePath: source,
        });
      }
    });
  };
  render() {
    return (
      <View style={styles.containerStyles}>
        <Text style={styles.tryName}>Camera TryOuts</Text>
        <View style={styles.itemStyles}>
          <Text style={styles.textStyles}>Foto elegida</Text>
          <Image
            source={{
              uri: 'data:image/jpeg;base64,' + this.state.filePath.data,
            }}
            style={{height: 150, width: 150}}
          />
        </View>
        <View style={styles.buttonStyles}>
          <Button title="Choose File" onPress={this.chooseFile.bind(this)} />
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
    marginBottom: 10,
    width: WIDTH / 2,
    alignSelf: 'center',
  },
});

export default ImagePicker;
