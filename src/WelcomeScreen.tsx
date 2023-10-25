import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const WelcomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Holiday Planner App</Text>
      <Button
        title="Take a quick quiz"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 20,
  },
});

export default WelcomeScreen;
