import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from '../../constants/Diemensions';

export default StyleSheet.create({
  container: {
    position: 'absolute',
    left: 0,
    top: 0,
    height: hp(100),
    width: wp(100),
  },
  flexOne: {flex: 1},
  profile_Placeholder: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  placehodler_image: {
    // width: 155,
    width: wp(43),
    height: hp(29),
    // height: 206,
    marginTop: -10,
  },
  upload_imageIconNText: {
    position: 'absolute',
    top: hp(0.3),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    // width: 133,
    width: wp(34),
    // height: 133,
    height: hp(18),
  },
  upload_Image: {width: 40, height: 40, marginLeft: -10},
  uploadText: {color: 'black', fontSize: 16},
  audienceCon: {marginHorizontal: 40, marginTop: 20},
  audienceText: {color: '#0d560d', fontSize: 16},
  radioButtonCon: {flexDirection: 'row'},
  buttonCon: {marginTop: 30},
  pakistaniRadioButtonCon: {marginLeft: -10, marginTop: 5},
  overseasesRadioButtonCon: {marginLeft: 30, marginTop: 5},
  emptyView: {height: 40},
  errorText: {color: 'red', fontSize: 16, textAlign: 'center'},
  gallery_Image: {},
});
