import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';

//const navigation = useNavigation();

const MyComponent = () => {
  const navigation = useNavigation();
  return (
    <View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('signin')}>
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#53B175',
    marginHorizontal: 30,
    borderRadius: 19,
    padding: 18,
    marginTop: 35,
  },
  buttonText: {
    color: 'white',
    fontFamily: 'Gilroy',
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 18,
    letterSpacing: 0,
    textAlign: 'center',
  },
});

export default MyComponent;
