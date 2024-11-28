import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

const DuaTombol = () => {
  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Button title="Button 1" color="blue" onPress={() => {}} />
        <Button title="Button 2" color="green" onPress={() => {}} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
  },
});

export default DuaTombol;
