import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import Colors from '../constants/Colors';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from '../constants/Diemensions';
import Strings from '../constants/Strings';
import IconTitle from './iconTitle';
import ToggleSwitch from './toggleSwitch';

const CustomDrawer = ({pic}) => {
  console.log('Custom Drawer pic:::::::', pic);
  return (
    <ImageBackground
      style={styles.container}
      source={require('../assets/images/side_nav_background.png')}>
      <View style={styles.flexRow}>
        <View style={styles.topProfilePlaceholderCon}>
          <Image
            source={require('../assets/images/sideMenu_profile_placeholder.png')}
            style={styles.profilePlaceholderPic}
          />
          <View style={styles.galleryPicContainer}>
            <Image source={{uri: pic}} style={styles.galleryPicContainer} />
          </View>
          <TouchableOpacity style={styles.editImageCon}>
            <Text style={styles.editText}>{Strings.Edit}</Text>
            <Image
              source={require('../assets/images/side_bar_edit_icon.png')}
              style={styles.editIcon}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.personDetailCon}>
          <Text style={styles.nameText}>{Strings.ABDULKARIM}</Text>

          <Text style={styles.membershipTxt}>{Strings.MyMembership0}</Text>

          <Text style={styles.whiteTxt}>{Strings.ReferralCode}</Text>

          <View style={styles.toggleCon}>
            <Text style={[styles.whiteTxt, styles.exglishCase]}>
              {Strings.English}
            </Text>
            <ToggleSwitch />

            <Text style={[styles.whiteTxt, styles.urduCase]}>
              {Strings.Urdu}
            </Text>
          </View>
        </View>
      </View>

      <View style={styles.iconTitlesCon}>
        <IconTitle title="Home" icon={require('../assets/images/home.png')} />

        <IconTitle
          title="Send Message"
          icon={require('../assets/images/home.png')}
        />

        <IconTitle
          title="Insafians Around Me"
          icon={require('../assets/images/home.png')}
        />

        <IconTitle
          title="Notifications"
          icon={require('../assets/images/home.png')}
        />

        <IconTitle
          title="Messages"
          icon={require('../assets/images/home.png')}
        />

        <IconTitle
          title="Membership"
          icon={require('../assets/images/home.png')}
        />

        <IconTitle
          title="Results"
          icon={require('../assets/images/home.png')}
        />

        <IconTitle
          title="Surveys"
          icon={require('../assets/images/home.png')}
        />

        <IconTitle
          title="Send Notification"
          icon={require('../assets/images/home.png')}
        />

        <IconTitle
          title="Heat Map"
          icon={require('../assets/images/home.png')}
        />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  flexRow: {flexDirection: 'row'},
  topProfilePlaceholderCon: {
    marginHorizontal: 10,
    marginTop: 20,
    alignSelf: 'flex-start',
  },
  profilePlaceholderPic: {
    // width: 130,
    width: wp(34),
    // height: 130,
    height: hp(17.3),
  },
  editImageCon: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 5,
  },
  editText: {color: Colors.white.default, marginRight: 5},
  editIcon: {width: 15, height: 15},
  personDetailCon: {marginTop: 35, marginHorizontal: 5},
  nameText: {color: Colors.white.default, fontSize: 16},
  membershipTxt: {color: Colors.white.default, marginTop: 15},
  whiteTxt: {color: Colors.white.default},
  toggleCon: {flexDirection: 'row', alignItems: 'center', marginTop: 15},
  exglishCase: {marginRight: 5},
  urduCase: {marginLeft: 5},
  iconTitlesCon: {
    flex: 1,
    justifyContent: 'space-between',
    marginBottom: 5,
    marginLeft: 20,
    marginTop: 50,
  },
  galleryPicContainer: {
    // backgroundColor: 'yellow',
    // width: 108,
    width: wp(28),
    // height: 108,
    height: hp(14),
    top: 6,
    borderRadius: 60,
    position: 'absolute',
    alignSelf: 'center',
    alignItems: 'center',
  },
});

export default CustomDrawer;
