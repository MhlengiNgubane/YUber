import React from 'react';
import { StyleSheet, Text, SafeAreaView , View, TouchableOpaci } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import { Icon } from '@rneui/base';
import { useNavigation } from '@react-navigation/native';


const RideOptionsCard = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={tw`bg-white flex-grow`}>
      <View>
        
        <Text style={tw`text-center py-5 text-xl`}>Select a Ride</Text>
      </View>
    </SafeAreaView>
    
  );
};

export default RideOptionsCard;

const styles = StyleSheet.create({});