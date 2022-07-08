import React from 'react';
import { StyleSheet, Text, SafeAreaView ,View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import tw from 'tailwind-react-native-classnames';


const RideOptionsCard = () => {
  return (
    <SafeAreaView>
    
      <Text style={tw`text-center py-5 text-xl`}>Select a Ride</Text>
     
    </SafeAreaView>
    
  );
};

export default RideOptionsCard;

const styles = StyleSheet.create({});