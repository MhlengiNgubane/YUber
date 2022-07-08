import { FlatList, StyleSheet, Text, View } from 'react-native';
import React from 'react';


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
  return 
    <FlatList 
      data={data}
      keyExtractor
    />
};

export default NavFavourits;

const styles = StyleSheet.create({})