import React from 'react';
import {View, StyleSheet, Image, TouchableOpacity, Text} from 'react-native';
import Colors from '../constants/Colors';

const RadioButtonCom = ({userType, selected, onPress}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.container} onPress={onPress}>
        {!selected ? (
          <>
            <Image
              source={require('../assets/images/radio-button.png')}
              style={styles.radioButton}
            />
          </>
        ) : (
          <View style={styles.filledImageCon}>
            <Image
              source={require('../assets/images/radio-on-button.png')}
              style={styles.filledRadioButton}
            />
          </View>
        )}
      </TouchableOpacity>

      <Text>{userType}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  radioButton: {
    width: 40,
    height: 40,
    tintColor: Colors.grey.radioButtonColor,
  },
  filledRadioButton: {
    width: 24,
    height: 24,
    tintColor: Colors.grey.radioButtonColor,
  },
  filledImageCon: {padding: 8},
});

export default RadioButtonCom;

// const [checkedPaskistani, setCheckedPaskistani] = useState(false);
// const [checkOverseases, setCheckOverseases] = useState(false);

// const [isLiked, setIsLiked] = useState([
//   {id: 1, value: true, name: 'Yes', selected: false},
//   {id: 2, value: false, name: 'No', selected: false},
// ]);
// const onRadioBtnClick = item => {
//   let updatedState = isLiked.map(isLikedItem =>
//     isLikedItem.id === item.id
//       ? {...isLikedItem, selected: true}
//       : {...isLikedItem, selected: false},
//   );
//   setIsLiked(updatedState);
// };
