import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

interface SettingsRowProps {
  icon?: React.ReactNode;
  title: string;
  inputField?: {
    placeholder: string;
    value: string;
    onChangeText: (text: string) => void;
  };
  onPress?: () => void;
}

const SettingsRow = ({
  icon,
  title,
  inputField,
  onPress,
}: SettingsRowProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.container}
      disabled={onPress ? false : true}
    >
      {icon && <View style={styles.iconContainer}>{icon}</View>}
      <Text style={styles.title}>{title}</Text>
      {inputField && <TextInput style={styles.inputField} {...inputField} />}
      {onPress && (
        <Ionicons name="chevron-forward-outline" size={24} color="black" />
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  iconContainer: {
    marginRight: 10,
  },
  title: {
    flex: 1,
    fontSize: 16,
  },
  inputField: {
    flex: 1,
    fontSize: 16,
    paddingHorizontal: 8,
    textAlign: 'right',
  },
  rightIconContainer: {
    marginLeft: 10,
  },
});

export default SettingsRow;
