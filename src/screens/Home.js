import React from 'react';
import {View, Button, StyleSheet, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default function Home() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => navigation.navigate('Animation')}>
        <Text style={styles.fontStyle}>WeekPicker</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  buttonContainer: {
    margin: 20,
    padding: 15,
    backgroundColor: '#e86319',
    alignItems: 'center',
    borderRadius: 16,
  },
  fontStyle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white',
  },
});
