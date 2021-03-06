import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import tw from 'tailwind-react-native-classnames';

const HomeScreen = () => {
  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <View >
        <Image 
          style={{
            width: 100, 
            height: 100,
            resizeMode: "contain",
          }}
          source={{
            ur: "https://links.papareact.com/gzs",
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen

const styles = StyleSheet.create({
    text: {
        color: "blue",
    },
});