import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

interface ButtonComponentProps {
  text: string;
  onPress: () => void;
  variant: 'primary' | 'secondary' | 'success' | 'danger' | 'link';
  buttonStyle?: any;
  textStyle?: any;
}

const ButtonComponent = ({
  text,
  onPress,
  variant,
  buttonStyle,
  textStyle,
}: ButtonComponentProps) => {
  const variants = {
    primary: {
      backgroundColor: '#000000',
      color: 'white',
    },
    secondary: {
      backgroundColor: 'gray',
      color: 'white',
    },
    success: {
      backgroundColor: 'green',
      color: 'white',
    },
    danger: {
      backgroundColor: 'red',
      color: 'white',
    },
    link: {
      backgroundColor: 'transparent',
      color: '#000000',
      height: 'fit%',
      padding: 0,
      paddingVertical: 0,
      paddingHorizontal: 0,
      textDecorationLine: 'underline',
    },
  };

  const selectedVariant = variants[variant] || variants.primary;

  return (
    <TouchableOpacity
      style={[styles.button, selectedVariant, buttonStyle]}
      onPress={onPress}
    >
      <Text style={[styles.text, selectedVariant, textStyle]}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#007BFF', // Default background color
    paddingVertical: 10,
    paddingHorizontal: 20,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    borderRadius: 99,
  },
  text: {
    color: 'white', // Default text color
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default ButtonComponent;
