import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import tw from 'tailwind-react-native-classnames';

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <Text style={[tw`text-red-500 p-10`, 
        {color: ""}]}
        >
        HomeScreen
        </Text>
    </SafeAreaView>
  );
};

export default HomeScreen

const styles = StyleSheet.create({
    text: {
        color: "blue",
    },
});