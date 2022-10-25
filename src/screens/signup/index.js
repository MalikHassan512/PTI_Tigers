import React, {useState} from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from 'react-native';
import {IconTitle, InputText, RadioButton, Button} from '../../components';
import {useNavigation} from '@react-navigation/native';
import {launchImageLibrary} from 'react-native-image-picker';

import Strings from '../../constants/Strings';
import styles from './styles';

const isValidObjectField = obj => {
  return Object.values(obj).every(value => value.trim());
};

const updateError = (error, stateUpdater) => {
  stateUpdater(error);

  setTimeout(() => {
    stateUpdater('');
  }, 2000);
};

const Signup = () => {
  const [imageSource, setImageSource] = useState(null);

  const navigation = useNavigation();
  const [selected, setSelected] = useState('pak');
  const [error, setError] = useState('');
  const [userInfo, setUserInfo] = useState({
    name: '',
    phone: '',
    cnic: '',
    password: '',
    confirmPassword: '',
  });

  const {name, phone, cnic, password, confirmPassword} = userInfo;

  const handleOnChangeText = (value, fieldName) => {
    setUserInfo({...userInfo, [fieldName]: value});

    console.log(userInfo);
  };

  const isValidCnic = cnic => {
    const reg = /^\d{5}-\d{7}-\d{1}$/;
    return reg.test(cnic);
  };

  const isValidForm = () => {
    //check if all fields are filled
    if (!isValidObjectField(userInfo)) {
      return updateError('Required all fields!', setError);
    }

    //name must b greater than 3
    if (!name.trim() || name.length < 3) {
      return updateError('Invalid Name!', setError);
    }

    //phone must be greater than 11
    if (!phone.trim() || phone.length < 10 || phone.length > 11) {
      return updateError('Invalid Phone Number!', setError);
    }

    //cnic must be greater than 13
    if (!isValidCnic(cnic) || cnic.length < 13) {
      return updateError('Invalid CNIC!', setError);
    }

    //password must be greater than 8
    if (!password.trim() || password.length < 8) {
      return updateError('Password is less than 8 characters!', setError);
    }

    //confirm password must be equal to password
    if (password !== confirmPassword) {
      return updateError('Password not matched!', setError);
    }

    return true;
  };

  const submitForm = () => {
    // if (isValidForm()) {
    //only then submit form
    console.log(userInfo);
    navigation.navigate('AppDrawer', {profilepic: imageSource});
    // }
  };

  function selectImage() {
    let options = {
      title: 'You can choose one image',
      noData: true,
      maxWidth: 256,
      maxHeight: 256,
      mediaType: 'photo',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    launchImageLibrary(options, response => {
      console.log('respaqwehiqwuhqui; ', response);

      if (response.didCancel) {
        console.log('User cancelled photo picker');
        Alert.alert('You did not select any image');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        let source = {uri: response.assets[0].uri};
        setImageSource(source.uri);
        console.log('Image source.uri ::::::: ', source.uri);
        // console.log({source});
      }
    });
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <ImageBackground
        source={require('../../assets/images/signup_background.png')}
        style={styles.container}>
        <IconTitle
          white
          title="SIGN UP"
          icon={require('../../assets/images/backicon.png')}
        />

        <View style={styles.profile_Placeholder}>
          <Image
            source={require('../../assets/images/profile_placeholder.png')}
            style={styles.placehodler_image}
          />
          <TouchableOpacity
            style={styles.upload_imageIconNText}
            onPress={selectImage}>
            {imageSource === null ? (
              <>
                <Image
                  source={require('../../assets/images/icon_camera.png')}
                  style={styles.upload_Image}
                />
                <Text style={styles.uploadText}>
                  {Strings.UPLOAD}
                  {'\n'} {Strings.PHOTO}
                </Text>
              </>
            ) : (
              <Image
                source={{uri: imageSource}}
                style={styles.upload_imageIconNText}
                resizeMode="contain"
              />
            )}
          </TouchableOpacity>
        </View>

        {error ? <Text style={styles.errorText}>{error}</Text> : null}

        <KeyboardAvoidingView behavior="height" style={styles.flexOne}>
          <ScrollView keyboardShouldPersistTaps="always">
            <View>
              <InputText
                placeholder="Name"
                keyboardType={'default'}
                value={name}
                onChangeText={value => handleOnChangeText(value, 'name')}
              />
              <InputText
                placeholder="Phone"
                keyboardType="phone-pad"
                value={phone}
                onChangeText={value => handleOnChangeText(value, 'phone')}
              />
              <InputText
                placeholder="CNIC"
                keyboardType="phone-pad"
                value={cnic}
                onChangeText={value => handleOnChangeText(value, 'cnic')}
              />
              <InputText
                placeholder="Password"
                keyboardType={'default'}
                value={password}
                secureTextEntry={true}
                onChangeText={value => handleOnChangeText(value, 'password')}
              />
              <InputText
                placeholder="Confirm Password"
                keyboardType={'default'}
                value={confirmPassword}
                secureTextEntry={true}
                onChangeText={value =>
                  handleOnChangeText(value, 'confirmPassword')
                }
              />
            </View>

            <View style={styles.audienceCon}>
              <Text style={styles.audienceText}>Audience</Text>
              <View style={styles.radioButtonCon}>
                <View style={styles.pakistaniRadioButtonCon}>
                  <RadioButton
                    userType={'Pakistani'}
                    selected={selected === 'pak'}
                    onPress={() => setSelected('pak')}
                  />
                </View>

                <View style={styles.overseasesRadioButtonCon}>
                  <RadioButton
                    userType={'Overseases'}
                    selected={selected === 'over'}
                    onPress={() => setSelected('over')}
                  />
                </View>
              </View>
            </View>

            <View style={styles.buttonCon}>
              <Button title="Sign Up" onPress={submitForm} />
            </View>
            <View style={styles.emptyView} />
          </ScrollView>
        </KeyboardAvoidingView>
      </ImageBackground>
    </TouchableWithoutFeedback>
  );
};

export default Signup;
