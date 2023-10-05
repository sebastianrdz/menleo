import { StyleSheet } from 'react-native';
import { View, Text, TextInput } from 'react-native';

interface TextInputComponentProps {
  label: string;
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  secureTextEntry?: boolean;
}

const TextInputComponent = ({
  label,
  placeholder,
  value,
  onChangeText,
  secureTextEntry,
}: TextInputComponentProps) => {
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.label}>{label.toUpperCase()}</Text>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

export default TextInputComponent;

const styles = StyleSheet.create({
  inputContainer: {
    padding: 20,
    gap: 10,
    borderBottomWidth: 2,
    borderColor: '#F0F0F0',
  },
  label: {
    fontWeight: 'bold',
    color: '#B4B4B4',
    fontSize: 12,
  },
  input: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
