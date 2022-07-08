import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import 

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <Text style={tw`text-red-500`}>HomeScreen</Text>
    </SafeAreaView>
  );
};

export default HomeScreen

const styles = StyleSheet.create({
    text: {
        color: "blue",
    },
});