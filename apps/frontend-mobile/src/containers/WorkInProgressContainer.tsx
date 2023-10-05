import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const WorkInProgressContainer = () => {
  return (
    <View style={styles.container}>
      <Ionicons
        name="code-slash-outline"
        style={styles.icon}
        size={80}
        color="grey"
      />
      <Text style={styles.message}>
        This page is currently under development.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    color: 'grey',
  },
  icon: {
    marginBottom: 20,
  },
  message: {
    fontSize: 12,
    textAlign: 'center',
  },
});

export default WorkInProgressContainer;
