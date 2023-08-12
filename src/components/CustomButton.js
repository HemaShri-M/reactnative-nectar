import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

const CustomButton = ({title, onPress, style, titleColor}) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, style]}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#53B175',
    marginHorizontal: 30,
    borderRadius: 19,
    padding: 18,
    //marginTop: 35,
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
export default CustomButton;
