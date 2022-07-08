import { StyleSheet, Text, View } from 'react-native';
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
        icon: "brief",
        location: "Home",
        destination: "123 Street, Durban, SA",
    },
]

const NavFavourits = () => {
  return (
    <View>
      <Text>NavFavourits</Text>
    </View>
  );
};

export default NavFavourits;

const styles = StyleSheet.create({})