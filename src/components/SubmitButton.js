import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const SubmitButton = () => {
  const navigation = useNavigation();
  return (
    <View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Login')}>
        <Text style={styles.buttonText}>Submit</Text>
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
    marginTop: 30,
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

export default SubmitButton;
