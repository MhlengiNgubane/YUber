import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import React from 'react';

const HomeScreen = () => {
  return (
    <View>
      <Text style={styles.text}>HomeScreen</Text>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    text: {
        color: "b"
    }
})