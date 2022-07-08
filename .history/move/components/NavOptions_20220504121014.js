import React from 'react';
import { FlatList Text, View, SafeAreaView, Image } from 'react-native';

const data = [
    {
        id: "123",
        title: "Get a ride",
        image: "https://links.papareact.com/3pn",
        screen: "MapScreen",
    },
    {
        id: "123",
        title: "Get a ride",
        image: "https://links.papareact.com/28w",
        screen: "EatsScreen",
    },
];

const NavOptions = () => {
    return (
        <FlatList />
    );
};
    
export default NavOptions;