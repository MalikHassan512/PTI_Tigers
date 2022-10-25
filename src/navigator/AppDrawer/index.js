import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeStack from '../AppStack/homeStack';
import {CustomDrawer} from '../../components';

const Drawer = createDrawerNavigator();
const {Navigator, Screen} = Drawer;

const AppDrawer = props => {
  console.log('AppDrawer props: ', props);
  const {route} = props;
  const {profilepic} = route.params;

  console.log('\n this is profile pic', profilepic);
  // alert(profilepic);
  return (
    <Navigator
      screenOptions={{
        drawerType: 'front',
        drawerStyle: {
          width: '90%',
          // height: '100%',
        },
      }}
      drawerContent={props => <CustomDrawer pic={profilepic} {...props} />}>
      <Screen name="Home" component={HomeStack} />
    </Navigator>
  );
};

export default AppDrawer;
