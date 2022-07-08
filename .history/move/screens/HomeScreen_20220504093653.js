import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';


const HomeScreen = () => {
  return (
    <SafeAreaView>
      <Text style={styles.text}>HomeScreen</Text>
    </SafeAreaView>
  );
};

export default HomeScreen

const styles = StyleSheet.create({
    text: {
        color: "blue",
    },
});