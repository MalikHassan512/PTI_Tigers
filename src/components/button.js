import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

const Button = ({title, onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 60,
    borderColor: 'black',
    backgroundColor: '#0d560d',
    borderRadius: 30,
    marginHorizontal: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {color: 'white', fontSize: 18, fontWeight: 'bold'},
});

export default Button;
