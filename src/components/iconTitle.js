import React from 'react';
import {Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from '../constants/Diemensions';

const IconTitle = ({title, icon, white}) => {
  return (
    <TouchableOpacity style={[styles.container, white && styles.ifWhiteCon]}>
      <Image source={icon} style={[white && styles.image, styles.drawerIcon]} />
      <Text style={[styles.titleText, white && styles.ifWhite]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignSelf: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
    // backgroundColor: 'red',
    flex: 1,
    width: '100%',
  },
  ifWhiteCon: {
    marginLeft: wp(6),
    marginTop: hp(2),
    flex: 0,
    alignSelf: 'flex-start',
    width: 'auto',
    // alignSelf: 'flex-end',
  },
  drawerIcon: {width: 25, height: 25, padding: 5},
  image: {width: 18, height: 18, padding: 5, tintColor: '#fff'},
  titleText: {color: 'black', fontSize: 18, marginLeft: 30},
  ifWhite: {color: 'white', fontSize: 20, fontWeight: 'bold', marginLeft: 0},
});

export default IconTitle;
