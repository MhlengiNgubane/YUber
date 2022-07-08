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
];

const NavFavourits = () => {
  return (
    <FlatList 
      data={data}
      keyExtracter={(item) => item.id}
      renderItem={({ item: {location, destination, icon} }) => (
        <TouchableOpacity style={tw`flex- rounded-full bg-gray-100 p-3`}>
          <Icon 
            style={tw`mr-4 rounded-full bg-gray-100 p-3`}
            name={icon}
            type="ionicon"
            color="white"
            size={18}
          />
        </TouchableOpacity>
      )}
    />
  );
  
};

export default NavFavourits;

const styles = StyleSheet.create({})