import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import RegisterScreen from "../screens/RegisterScreen";
import LoginScreen from "../screens/LoginScreen";
import WelcomeScreen from "../screens/WelcomeScreen";
import Nav from "./Nav";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const Navigation = () => {
  const [loggedIn, setLoggedIn] = React.useState(false);

  React.useEffect(() => {
    // This is just an example of setting the logged in state.
    // You would replace this with your own login logic.
    setLoggedIn(true);
  }, []);

  return (
    // <NavigationContainer>
    //   {loggedIn ? (
    //     <Nav/>
    //   ) : (
    //     <Stack.Navigator>
    //       <Stack.Screen
    //         name="WelcomeScreen"
    //         component={WelcomeScreen}
    //         options={{ headerShown: false }}
    //       />
    //       <Stack.Screen
    //         name="RegisterScreen"
    //         component={RegisterScreen}
    //         options={{ headerShown: false }}
    //       />
    //       <Stack.Screen
    //         name="LoginScreen"
    //         component={LoginScreen}
    //         options={{ headerShown: false }}
    //       />
    //     </Stack.Navigator>
    //   )}
    // </NavigationContainer>
    
    <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="WelcomeScreen"
            component={WelcomeScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="RegisterScreen"
            component={RegisterScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="LoginScreen"
            component={LoginScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="HomeScreen"
            component={HomeScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Nav"
            component={Nav}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
