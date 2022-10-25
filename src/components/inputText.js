import React from 'react';
import {View, StyleSheet, TextInput} from 'react-native';
import Colors from '../constants/Colors';

const InputText = props => {
  const {placeholder, keyboardType, value, onChangeText, secureTextEntry} =
    props;

  return (
    <View style={styles.container}>
      <TextInput
        secureTextEntry={secureTextEntry}
        value={value}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
        placeholder={placeholder}
        placeholderTextColor={'black'}
        style={styles.innerStyle}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 40,
    borderBottomColor: Colors.grey.radioButtonColor,
    borderBottomWidth: 0.6,
    marginBottom: 10,
  },
  innerStyle: {fontSize: 16},
});

export default InputText;
