const APP_ID = '975787449421497';

import * as Facebook from 'expo-facebook';
import {Alert} from 'react-native';

class SocialLoginsService {
  async facebookLogin() {

    Facebook.logInWithReadPermissionsAsync(APP_ID)
    .then(response => console.log(response))
    .catch((error) => console.log(error))
    // try {
    //   const {
    //     type,
    //     token,
    //     expires,
    //     permissions,
    //     declinedPermissions,
    //   } = await Facebook.logInWithReadPermissionsAsync(APP_ID, {
    //     permissions: ['public_profile'],
    //   });
    //   if (type === 'success') {
    //     // Get the user's name using Facebook's Graph API
    //     const response = await fetch(`https://graph.facebook.com/me?access_token=${token}`);
    //     console.log(await response.json())
    //   } else {
    //     // type === 'cancel'
    //   }
    // } catch ({ message }) {
    //   alert(`Facebook Login Error: ${message}`);
    // }
  }
}

const socialLoginsService = new SocialLoginsService();

export default socialLoginsService;