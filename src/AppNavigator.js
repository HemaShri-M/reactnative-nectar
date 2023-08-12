import {StyleSheet, Text, View, Image} from 'react-native';
import * as React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer, StackActions} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import onbording from './screen/Dashboard/onbording';
import Signin from './screen/Dashboard/Signin';
import Number from './screen/Dashboard/Number';
import Verification from './screen/Dashboard/Verification';
import Location from './screen/Dashboard/Location';
import Login from './screen/Dashboard/Login';
import Signup from './screen/Dashboard/Signup';
import HomeScreen from './screen/Dashboard/HomeScreen';
import Explore from './screen/Dashboard/Explore';
import MyCart from './screen/Dashboard/MyCart';
import Favourites from './screen/Dashboard/Favourites';
import Account from './screen/Dashboard/Account';
import CheckOut from './screen/Dashboard/CheckOut';
import OrderAccepted from './screen/Dashboard/OrderAccepted';
import ProductDetails from './screen/Dashboard/ProductDetails';
import Beverages from './screen/Dashboard/Beverages';
import Filters from './screen/Dashboard/Filters';
import Error from './screen/Dashboard/Error';

const Stack = createStackNavigator();
const Bottom = createBottomTabNavigator();

const initialNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="onbording">
        {/* <Stack.Screen
          name="Splash"
          component={Splash}
          options={{headerShown: false}}
        /> */}
        <Stack.Screen
          name="onbording"
          component={onbording}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Signin"
          component={Signin}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Number"
          component={Number}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Verification"
          component={Verification}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Location"
          component={Location}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Signup"
          component={Signup}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="TabHomeBottom"
          component={TabHomeBottom}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
const MainStackScreens = () => {
  return (
    // <NavigationContainer>
    <Stack.Navigator initialRouteName="HomeScreen">
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ProductDetails"
        component={ProductDetails}
        options={{
          headerShown: false,
          tabBarVisible: false,
          presentation: 'modal',
        }}
      />
    </Stack.Navigator>

    // </NavigationContainer>
  );
};
const ExploreStackScreens = () => {
  return (
    <Stack.Navigator initialRouteName="Explore">
      <Stack.Screen
        name="Explore"
        component={Explore}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="Beverages"
        component={Beverages}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Filters"
        component={Filters}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const CartStackScreens = () => {
  return (
    <Stack.Navigator initialRouteName="MyCart">
      <Stack.Screen
        name="MyCart"
        component={MyCart}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="CheckOut"
        component={CheckOut}
        options={{headerShown: false, presentation: 'modal'}}
      />
      <Stack.Screen
        name="OrderAccepted"
        component={OrderAccepted}
        options={{headerShown: false, presentation: 'modal'}}
      />
    </Stack.Navigator>
  );
};

const FavouriteStackScreens = () => {
  return (
    <Stack.Navigator initialRouteName="Favourites">
      <Stack.Screen
        name="Favourites"
        component={Favourites}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Error"
        component={Error}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const AccountStackScreens = () => {
  return (
    <Stack.Navigator initialRouteName="Account">
      <Stack.Screen
        name="Account"
        component={Account}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

// export default function AppNavigator() {
//   return (
//     <View>
//       <Text>AppNavigator</Text>
//     </View>
//   );
// }
function TabHomeBottom() {
  return (
    <>
      {/* <NavigationContainer> */}
      <Bottom.Navigator
        style={{borderWidth: 10}}
        initialRouteName={'MainPage'}
        screenOptions={{
          tabBarInactiveBackgroundColor: 'white',
          tabBarActiveBackgroundColor: 'white',
          tabBarShowLabel: false,
        }}>
        <Bottom.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            headerShown: false,
            tabBarIcon: tabInfo => {
              return (
                <>
                  <Image
                    source={require('../src/assets/images/shop.png')}
                    resizeMode="contain"
                    style={{
                      width: 22,
                      height: 20,
                      tintColor: tabInfo.focused ? '#53B175' : '#030303',
                      marginTop: 10,
                    }}
                  />
                  <Text
                    style={{
                      color: tabInfo.focused ? '#53B175' : '#030303',
                      marginTop: 5,
                      fontSize: 10,
                    }}>
                    Shop
                  </Text>
                </>
              );
            },
          }}
        />
        <Bottom.Screen
          name="ExploreNavigator"
          component={ExploreStackScreens}
          options={{
            headerShown: false,
            tabBarIcon: tabInfo => {
              return (
                <>
                  <Image
                    source={require('../src/assets/images/explore.png')}
                    resizeMode="contain"
                    style={{
                      width: 20,
                      height: 20,
                      tintColor: tabInfo.focused ? '#53B175' : '#030303',
                      marginTop: 10,
                    }}
                  />
                  <Text
                    style={{
                      color: tabInfo.focused ? '#53B175' : '#030303',
                      marginTop: 5,
                      fontSize: 10,
                    }}>
                    Explore
                  </Text>
                </>
              );
            },
          }}
        />
        <Bottom.Screen
          name="CartNavigator"
          component={CartStackScreens}
          options={{
            headerShown: false,
            tabBarIcon: tabInfo => {
              return (
                <>
                  <Image
                    source={require('../src/assets/images/cart.png')}
                    resizeMode="contain"
                    style={{
                      width: 20,
                      height: 20,
                      tintColor: tabInfo.focused ? '#53B175' : '#030303',
                      marginTop: 10,
                    }}
                  />
                  <Text
                    style={{
                      color: tabInfo.focused ? '#53B175' : '#030303',
                      marginTop: 5,
                      fontSize: 10,
                    }}>
                    Cart
                  </Text>
                </>
              );
            },
          }}
        />
        <Bottom.Screen
          name="Favourite"
          component={FavouriteStackScreens}
          options={{
            headerShown: false,
            tabBarIcon: tabInfo => {
              return (
                <>
                  <Image
                    source={require('../src/assets/images/favourite.png')}
                    resizeMode="contain"
                    style={{
                      width: 20,
                      height: 20,
                      tintColor: tabInfo.focused ? '#53B175' : '#030303',
                      marginTop: 10,
                    }}
                  />
                  <Text
                    style={{
                      color: tabInfo.focused ? '#53B175' : '#030303',
                      marginTop: 5,
                      fontSize: 10,
                    }}>
                    Favourite
                  </Text>
                </>
              );
            },
          }}
        />
        <Bottom.Screen
          name="AccountScreen"
          component={AccountStackScreens}
          options={{
            headerShown: false,
            tabBarIcon: tabInfo => {
              return (
                <>
                  <Image
                    source={require('../src/assets/images/account.png')}
                    resizeMode="contain"
                    style={{
                      width: 20,
                      height: 20,
                      tintColor: tabInfo.focused ? '#53B175' : '#030303',
                      marginTop: 10,
                    }}
                  />
                  <Text
                    style={{
                      color: tabInfo.focused ? '#53B175' : '#030303',
                      marginTop: 5,
                      fontSize: 10,
                    }}>
                    Account
                  </Text>
                </>
              );
            },
          }}
        />
      </Bottom.Navigator>
    </>
  );
}

export default initialNavigator;
