import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet, Image} from 'react-native';

const LogoutButton = ({title, onPress, style}) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, style]}>
      <View style={{display: 'flex', flexDirection: 'row'}}>
        <Image
          source={require('../assets/images/logout.png')}
          style={{marginLeft: 10}}></Image>
        <Text style={styles.buttonText}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#F2F3F2',
    marginHorizontal: 30,
    borderRadius: 19,
    padding: 18,
    marginTop: 45,
  },
  buttonText: {
    color: '#53B175',
    fontFamily: 'Gilroy',
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 18,
    letterSpacing: 0,
    textAlign: 'center',
    marginLeft: 70,
  },
});
export default LogoutButton;
