import React, { useEffect, useState } from 'react';
import { Card, DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import auth from '@react-native-firebase/auth';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LogBox } from "react-native";
LogBox.ignoreLogs(["EventEmitter.removeListener"]);

import {
  StatusBar,
  StyleSheet,
  View
} from 'react-native';

import { Colors } from './Colors';
import Home from './screens/Home';
import NeedHelp from './screens/NeedHelp';
import AvailableHospitals from './screens/AvailableHospitals';
import Bookings from './screens/Bookings';
import AboutHospital from './components/AboutHospital';
import SignUp from './screens/Signup';
import StoreUser from './screens/StoreUser';
import Login from './screens/Login';
import Check from './screens/Check';
import Profile from './screens/Profile';
import AllChats from './screens/AllChats';
import Chat from './screens/Chat';
import HealthTips from './screens/HealthTips/HealthTips';
import Medicines from './screens/Medicines';
import Doctors from './screens/Doctors';
import Blog from './screens/HealthTips/Blog';

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: Colors.primary,
    background: Colors.background
  },
};

const Stack = createNativeStackNavigator();

function Navigation() {

  // const [user, setUser] = useState(true);

  // useEffect(() => {
  //   const unregister = auth().onAuthStateChanged(userExist => {
  //     if (userExist) {
  //       setUser(userExist)
  //     }
  //     else {
  //       setUser('')
  //     }
  //   })

  //   return () => {
  //     unregister()
  //   }

  // }, [])

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTintColor: Colors.statusbar
        }}
      // initialRouteName="signup"
      >
        <Stack.Screen name="home"
          options={{
            headerShown: false
          }}
          component={Home}
        />
        <Stack.Screen name='availablehospitals' component={AvailableHospitals} options={{ headerShown: false }} />
        <Stack.Screen name='card' component={Card} options={{ headerShown: false }} />
        <Stack.Screen name='needhelp' component={NeedHelp} options={{ headerShown: false }} />
        {/* <Stack.Screen name='share' component={ShareApp} options={{ headerShown: false }} /> */}
        <Stack.Screen name='bookings' component={Bookings} options={{ headerShown: false }} />
        <Stack.Screen name='abouthospital' component={AboutHospital} options={{ headerShown: false }} />
        <Stack.Screen name='signup' component={SignUp} options={{ headerShown: true }} />
        <Stack.Screen name='storeuser' component={StoreUser} options={{ headerShown: false }} />
        <Stack.Screen name='login' component={Login} options={{ headerShown: false }} />
        <Stack.Screen name='profile' component={Profile} options={{ headerShown: true }} />
        <Stack.Screen name='check' component={Check} options={{ headerShown: true }} />
        <Stack.Screen name='allchat' component={AllChats} options={{ headerShown: true }} />
        <Stack.Screen name='chat' component={Chat} options={{ headerShown: true, title: false }} />
        <Stack.Screen name='doctors' component={Doctors} options={{ headerShown: true, title: 'Doctors' }} />
        <Stack.Screen name='medicines' component={Medicines} options={{ headerShown: true, title: 'Medicines' }} />
        <Stack.Screen name='healthtips' component={HealthTips} options={{ headerShown: true, title: 'Stay Healty Stay Fit, Health Tips' }} />
        <Stack.Screen name='blog' component={Blog} options={{ headerShown: true }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const App = () => {
  return (
    <>
      <PaperProvider theme={theme}>
        <StatusBar barStyle='light-content' backgroundColor={Colors.statusbar} />
        <View style={styles.container}>
          <Navigation />
        </View>
      </PaperProvider>
    </>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary
  }
});

export default App;