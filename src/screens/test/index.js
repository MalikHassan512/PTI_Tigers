import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Test = () => {
  return (
    <View style={styles.container}>
      <Text>This is Test Screen</Text>
      {/* <LabTestResult /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Test;
