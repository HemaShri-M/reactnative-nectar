import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  Pressable,
} from 'react-native';

import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import React, {useState, useEffect, useContext} from 'react';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

import CustomButton from '../../components/CustomButton';

export default function Signup() {
  const navigation = useNavigation();
  const [username, setusername] = useState('');
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const TabHomeBottom = () => {
    onPress = navigation.navigate('TabHomeBottom');
    console.log('Button pressed!');
  };

  return (
    <View style={{backgroundColor: 'white', height: '100%'}}>
      <ImageBackground
        source={require('../../../src/assets/images/bgimage.png')}
        style={{
          width: 'auto',
          height: 170,
          backgroundColor: '#FFFFFF',
        }}>
        <Image
          source={require('../../../src/assets/images/colorcarrot.png')}
          style={{marginLeft: 160, marginTop: 60}}></Image>
      </ImageBackground>
      <View style={{marginLeft: 25, marginRight: 25}}>
        <Text
          style={{
            fontFamily: 'Gilroy',
            fontSize: 24,
            fontWeight: 600,
            lineHeight: 25,
            letterSpacing: 0,
            textAlign: 'left',
            marginTop: 4,

            color: '#181725',
          }}>
          Sign Up
        </Text>
        <Text
          style={{
            color: '#7C7C7C',
            marginTop: 40,
            textAlign: 'left',
            //marginLeft: 30,
            //marginRight: 30,
            marginTop: 10,
          }}>
          Enter your credentials to continue
        </Text>
        <Text
          style={{
            color: '#7C7C7C',
            fontFamily: 'Gilroy',
            fontSize: 16,
            fontWeight: 600,
            lineHeight: 29,
            letterSpacing: 0,
            textAlign: 'left',
            marginTop: 20,
          }}>
          Username
        </Text>
        <View>
          <TouchableOpacity>
            <TextInput
              style={styles.numberbox}
              placeholder="Enter the user name"
              //onPress={() => navigation.navigate('')}
              name="username"
              onChangeText={text => setusername(text)}
              autoComplete="off"
              autoCorrect={false}
              autoCapitalize="none"
              maxLength={70}
              value={username}
            />
          </TouchableOpacity>
        </View>

        <Text
          style={{
            color: '#7C7C7C',
            fontFamily: 'Gilroy',
            fontSize: 16,
            fontWeight: 600,
            lineHeight: 29,
            letterSpacing: 0,
            textAlign: 'left',
            marginTop: 20,
          }}>
          Email
        </Text>
        <View>
          <TouchableOpacity>
            <TextInput
              style={styles.numberbox}
              placeholder="Enter your Email"
              //onPress={() => navigation.navigate('')}
              name="email"
              onChangeText={text => setemail(text)}
              autoComplete="off"
              autoCorrect={false}
              autoCapitalize="none"
              maxLength={70}
              value={email}
            />
          </TouchableOpacity>
        </View>
        <View>
          <Text
            style={{
              color: '#7C7C7C',
              fontFamily: 'Gilroy',
              fontSize: 16,
              fontWeight: 600,
              lineHeight: 29,
              letterSpacing: 0,
              textAlign: 'left',
              marginTop: 20,
            }}>
            Password
          </Text>
          <View>
            <Pressable
              style={{
                display: 'flex',
                flexDirection: 'row',
              }}>
              <TextInput
                style={styles.numberbox}
                placeholder="Enter your password"
                //onPress={() => navigation.navigate('')}
                name="password"
                onChangeText={text => setpassword(text)}
                autoComplete="off"
                autoCorrect={false}
                autoCapitalize="none"
                maxLength={70}
                value={password}
              />
              <TouchableOpacity
                style={styles.showPasswordButton}
                onPress={toggleShowPassword}>
                <Icon
                  name={showPassword ? 'eye-slash' : 'eye'}
                  size={20}
                  color="black"
                />
              </TouchableOpacity>
            </Pressable>
          </View>
        </View>
        <View
          style={{
            marginTop: 15,
            display: 'flex',
            flexDirection: 'row',
            //marginLeft: 85,
          }}>
          <Text
            style={{
              color: '#181725',
            }}>
            By continuing you agree to our
          </Text>

          <TouchableOpacity style={{}}>
            <Text
              style={{
                color: '#53B175',
                paddingLeft: 5,
              }}>
              Terms of Service
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            //marginTop: 15,
            display: 'flex',
            flexDirection: 'row',
            // marginLeft: 85,
          }}>
          <Text
            style={{
              color: '#181725',
            }}>
            and
          </Text>
          <TouchableOpacity style={{}}>
            <Text
              style={{
                color: '#53B175',
                paddingLeft: 5,
              }}>
              Privacy Policy.
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <CustomButton
        title="Sign Up"
        style={{marginTop: 25}}
        onPress={TabHomeBottom}
      />
      <View
        style={{
          marginTop: 15,
          display: 'flex',
          flexDirection: 'row',
          marginLeft: 85,
        }}>
        <Text
          style={{
            color: '#181725',
          }}>
          Already have an account?
        </Text>
        <TouchableOpacity style={{}}>
          <Text
            style={{
              color: '#53B175',
              paddingLeft: 5,
            }}>
            Signup
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  numberbox: {
    borderColor: '#E2E2E2',
    borderBottomWidth: 1,
    borderRadius: 3,
    marginTop: 5,
    padding: 8,
    paddingRight: 170,
  },
  showPasswordButton: {
    marginTop: 16,
  },
});
