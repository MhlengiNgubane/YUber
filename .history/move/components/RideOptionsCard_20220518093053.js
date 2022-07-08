import React from 'react';
import { StyleSheet, Text, SafeAreaView , View, TouchableOpacity  } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import { Icon } from '@rneui/base';


const RideOptionsCard = () => {
  return (
    <SafeAreaView style={tw`bg-white flex-grow`}>
      <View>
        <TouchableOpacity style={tw`ab`}>
          <Icon name="chevron-left" type="fontawesome"/>
        </TouchableOpacity>
        <Text style={tw`text-center py-5 text-xl`}>Select a Ride</Text>
      </View>
    </SafeAreaView>
    
  );
};

export default RideOptionsCard;

const styles = StyleSheet.create({});