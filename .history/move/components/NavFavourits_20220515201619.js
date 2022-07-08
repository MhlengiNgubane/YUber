import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { Icon } from '@rneui/themed';
import tw from 'tailwind-react-native-classnames';


const data = [
  {
    id: "123",
    icon: "home",
    location: "Home",
    destination: "123 Street, Durban, SA",
  },
  {
    id: "456",
    icon: "briefcase",
    location: "Work",
    destination: "Umhlanga, Durban, SA",
  },
  {
    id: "789",
    icon: "br",
    location: "Work",
    destination: "Umhlanga, Durban, SA",
  },
];

const NavFavourits = () => {
  return (
    <FlatList 
      data={data}
      keyExtracter={(item) => item.id}
      ItemSeparatorComponent={() => (
        <View 
          style={[tw`bg-gray-200`, {height: 0.5}]} 
        />
      )}
      renderItem={({ item: { location, destination, icon } }) => (
        <TouchableOpacity style={tw`flex-row items-center p-5`}>
          <Icon 
            style={tw`mr-4 rounded-full bg-gray-100 p-3`}
            name={icon}
            type="ionicon"
            color="white"
            size={18}
          />
          <View>
            <Text style={tw`font-semibold text-lg`}>{location}</Text>
            <Text style={tw`text-gray-500`}>{destination}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
  
};

export default NavFavourits;

const styles = StyleSheet.create({})