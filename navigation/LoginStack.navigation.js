import LoginScreen from "../src/screens/Login/LoginScreen";
import RegisterScreen from "../src/screens/Login/RegisterScreen";
import { createStackNavigator } from "react-navigation";

const LoginStackNavigation = createStackNavigator({
  Login: {
    screen: LoginScreen,
    navigationOptions: () => {
      return {
        header: null
      };
    }
  },
  Register: {
    screen: RegisterScreen,
    navigationOptions: () => {
      return {
        header: null
      };
    }
  }
});

export default LoginStackNavigation;
